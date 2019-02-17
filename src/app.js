import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { CustomerFilter, ItemFilter } from './Components/CommonSearchFilters';
import { CustomerAttributeselector, ItemAttributeselector, OperatorAttributeselector } from './Components/CommonAttributes';
import './Components/css/App.css';
import ModalComponents from './Components/ModalComponent'


export default class MckessonApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedcustvalues: [],
            selecteditemvalues: [],
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handlecustomerClick = this.handlecustomerClick.bind(this);
        this.handleitemClick = this.handleitemClick.bind(this);
        this.handlecustomerattributelabel = this.handlecustomerattributelabel.bind(this);
        this.handleitemattributelabel = this.handleitemattributelabel.bind(this);
        this.handleoperatorattribute = this.handleoperatorattribute.bind(this);
        this.Deleteoption = this.Deleteoption.bind(this);
        var customerlabel = "";
        var itemlabel = "";
        var operatorlabel = "";
    }

    handlecustomerClick(selected) {
        if (selected) {

            let newparentarray = [];
            let labelname = this.customerlabel;
            console.log("Label is:" + this.customerlabel);
            let included_currentarray = [];
            let excluded_currentarray = [];
            if (this.state.selectedcustvalues.length > 0) {
                let isalready = false;
                this.state.selectedcustvalues.forEach((obj) => {
                    if (obj.attribute === labelname) {

                        if (this.operatorlabel === 'included') {

                            var includedvalue = selected;
                            var excludedvalue = null;

                        }
                        else if (this.operatorlabel === 'excluded') {

                            includedvalue = null;
                            excludedvalue = selected;
                        }

                        included_currentarray = obj.included_values.concat(includedvalue);


                        excluded_currentarray = obj.excluded_values.concat(excludedvalue);

                        isalready = true;
                        console.log("in if condition::" + included_currentarray);
                    }

                    else if (!isalready) {
                        newparentarray.push(obj);
                        console.log("Length of newarray::" + newparentarray.length);
                    }

                }
                )

            }

            if (included_currentarray.length === 0 && excluded_currentarray.length === 0) {

                let included_childarray = [];
                let excluded_childarray = [];
                let newcustObject = { attribute: "", included_values: [], excluded_values: [] };
                newcustObject.attribute = labelname;

                if (this.operatorlabel === 'included') {
                    newcustObject.included_values = included_childarray.concat(selected);
                }
                else if (this.operatorlabel === 'excluded') {
                    newcustObject.excluded_values = excluded_childarray.concat(selected);
                }
                newparentarray.push(newcustObject);
                console.log("after concat:::" + JSON.stringify(newcustObject.included_values));
                console.log("after concat::" + JSON.stringify(newcustObject.attribute));
                newparentarray.forEach(obj => { console.log(JSON.stringify(obj)) });

                this.setState((prevState) => ({
                    selectedcustvalues: newparentarray
                }));

            }

            else {
                newparentarray = this.state.selectedcustvalues.filter(obj => obj.attribute !== labelname);
                let newcustObject = { attribute: "", included_values: [], excluded_values: [] };
                newcustObject.attribute = labelname;

                newcustObject.included_values = included_currentarray.map(obj => { return obj }).filter(obj => obj !== null);

                newcustObject.excluded_values = excluded_currentarray.map(obj => { return obj }).filter(obj => obj !== null);


                newparentarray.push(newcustObject);

                console.log("after currentarray:::" + JSON.stringify(newcustObject));

                console.log("after filter:::" + newparentarray.length);

                this.setState((prevState) => ({
                    selectedcustvalues: newparentarray
                }));
            }


        }
    }

    handleitemClick(selected) {
        console.log("attributelabel array size is:" + this.state.selecteditemvalues.length);

        if (selected) {

            var obj = [this.itemlabel] + ":" + selected;
            this.setState((prevState) => ({
                selecteditemvalues: prevState.selecteditemvalues.concat(obj)
            }));
        }
    }



    handleSearch(event) {
        console.log('event', event);
    }

    handlecustomerattributelabel(e) {
        e.preventDefault();
        const attributelabel = document.getElementById("customeroption");

        var option = attributelabel.options[attributelabel.selectedIndex].value;
        if (option) {

            this.customerlabel = option;
        }
    }

    handleitemattributelabel(e) {
        e.preventDefault();
        const attributelabel = document.getElementById("itemoption");

        var option = attributelabel.options[attributelabel.selectedIndex].value;
        if (option) {

            this.itemlabel = option;
        }
    }

    handleoperatorattribute(e) {
        e.preventDefault();
        const operator = document.getElementById("operatoroption");

        var option = operator.options[operator.selectedIndex].value;
        if (option) {

            this.operatorlabel = option;
            console.log("operator::" + this.operatorlabel);
        }
    }

    Deleteoption(option) {
        this.setState((prestate) => ({
            selectedvalues: prestate.selectedvalues.filter((arrayvalue) => option !== arrayvalue)
        }));
    }

    render() {
        return (
            <Fragment>

                <div className="row">

                    <CustomerAttributeselector handlecustomerattributelabel={this.handlecustomerattributelabel} />
                    <CustomerFilter handlecustomerClick={this.handlecustomerClick} handleoperatorattribute={this.handleoperatorattribute} />


                    <ItemAttributeselector handleitemattributelabel={this.handleitemattributelabel} />
                    <ItemFilter handleitemClick={this.handleitemClick} />

                </div>
                <br />
                <br />
                <div className='col-sm-8'>
                    <div className="row">
                        <ComboOptions selectedcustvalues={this.state.selectedcustvalues} selecteditemvalues={this.state.selecteditemvalues} Deleteoption={this.Deleteoption} />

                    </div>
                </div>

                <div className='col-sm-8'>
                    <div className="row">
                        <ModalComponents />

                    </div>
                </div>

            </Fragment>
        );
    }
}

class ComboOptions extends React.Component {
 state ={
    modalIsOpen:false,
    optionVal:''
 }

  constructor(props){
      super(props)
      this.handleLabelClick = this.handleLabelClick.bind(this)
      this.handleCloseButton = this.handleCloseButton.bind(this)
  }

  handleLabelClick(value){
      console.log('Hi user',value)
       this.setState({modalIsOpen:true})
  }

  handleCloseButton(){
    this.setState({modalIsOpen:false})
  }
    render() {

        return (

            <div className="container-fluid">
                <div className="row">
                    {
                        this.props.selectedcustvalues.map((option) => (

                            

                            <Option
                                key={option}
                                text={option.attribute}
                                option_type="customer"
                                Deleteoption={this.props.Deleteoption}
                                handleLabelClick={this.handleLabelClick}
                                badge={(option.included_values.length + option.excluded_values.length)}
                            >{option}
                            </Option>))
                    }

                    {
                        this.props.selecteditemvalues.map((option) => (

                            <Option
                                key={option}
                                text={option.attribute}
                                option_type="item"
                                Deleteoption={this.props.Deleteoption}
                                handleLabelClick={this.props.handleLabelClick}
                            >{option}
                            </Option>))
                    }

                </div>
                <div className="row">
                    <ModalComponents modalIsOpen={this.state.modalIsOpen} handleCloseButton={this.handleCloseButton} 
                    selectedcustvalues={this.props.selectedcustvalues}/>

                </div>

            </div>

        );
    }
};


const Option = (props) => {

    if (props.option_type === "customer") {
        return (


            <span>
                <span class="tag label label-info1">
                    <span onClick={props.handleLabelClick}>{props.text}</span>
                    <a href="#" onClick={props.handleLabelClick}><i class="remove glyphicon glyphicon-remove-sign glyphicon-white" > </i></a>

                </span>
                <span class="badge1 badge-notify">{props.badge}</span>
            </span>
        );
    }
    else {

        return (
            <span class="tag label label-info">
                <span onClick={props.handleLabelClick}>{props.text}</span>
                <a href="#" onClick={props.handleLabelClick}><i class="remove glyphicon glyphicon-remove-sign glyphicon-white" > </i></a>
            </span>
        );
    }
}


ReactDOM.render(<MckessonApp />, document.getElementById('app'));