import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { CustomerAttributeselector, ItemAttributeselector } from './commonattributelist';
import { CustomerFilter, ItemFilter } from './commonSearchFilters';
import './Components/css/App.css';

export default class MckessonApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedcustvalues: [],
            selecteditemvalues: []
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handlecustomerClick = this.handlecustomerClick.bind(this);
        this.handleitemClick = this.handleitemClick.bind(this);
        this.handlecustomerattributelabel = this.handlecustomerattributelabel.bind(this);
        this.handleitemattributelabel = this.handleitemattributelabel.bind(this);
        this.Deleteoption = this.Deleteoption.bind(this);
        var customerlabel = "";
        var itemlabel = "";
    }

    handlecustomerClick(selected) {
        console.log("attributelabel array size is:" + this.state.selectedcustvalues.length);

        if (this.selected) {

            var obj = [this.customerlabel] + ":" + selected;

            this.setState((prevState) => ({

                selectedcustvalues: prevState.selectedcustvalues.concat(obj)
            }));

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


                    <CustomerFilter handlecustomerClick={this.handlecustomerClick} />


                    <ItemAttributeselector handleitemattributelabel={this.handleitemattributelabel} />
                    <ItemFilter handleitemClick={this.handleitemClick} />

                </div>
                <br />
                <br />
                <div className='col-sm-8'>
                <div className="row">
                    <ComboOptions selectedcustvalues={this.state.selectedcustvalues} selecteditemvalues={this.state.selecteditemvalues } Deleteoption={this.Deleteoption} />
                   
                </div>
                </div>

            </Fragment>
        );
    }
}

const ComboOptions = (props) => {
    return (


        <div className="container-fluid">
        <div className="row">
            {
                props.selectedcustvalues.map((option) => (

                    <Option
                        key={option}
                        text={option}
                        option_type="customer"
                        Deleteoption={props.Deleteoption}
                    >{option}
                    </Option>))
            }

{
                props.selecteditemvalues.map((option) => (

                    <Option
                        key={option}
                        text={option}
                        option_type="item"
                        Deleteoption={props.Deleteoption}

                    >{option}
                    </Option>))
            }

        </div>
        </div>

    );
};

const Option = (props) => {

    if (props.option_type==="customer"){
    return (



        <span class="tag label label-info1">
            <span>{props.text}</span>
            <a href="#"><i class="remove glyphicon glyphicon-remove-sign glyphicon-white" > </i></a>
        </span>


    );
    }
    else{

        return (



            <span class="tag label label-info">
                <span>{props.text}</span>
                <a href="#"><i class="remove glyphicon glyphicon-remove-sign glyphicon-white" > </i></a>
            </span>
    
    
        );
    }
}
ReactDOM.render(<MckessonApp />, document.getElementById('app'));
