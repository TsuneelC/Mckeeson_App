
import React, { Component, Fragment } from 'react';
import Option from './Option';
import ModalComponent from './ModalComponent';

export default class ComboOptions extends React.Component {
    state ={
       modalIsOpen:false,
       optionVal:'',
       selectedOption:''
    }
   
     constructor(props){
         super(props)
         this.handleLabelClick = this.handleLabelClick.bind(this)
         this.handleCloseButton = this.handleCloseButton.bind(this)
         this.handleSelectedOption = this.handleSelectedOption.bind(this)
     }

     handleSelectedOption(value){
         this.setState({selectedOption:value})
     }
     
     handleLabelClick(value){
         window.value = value
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
                           this.props.selectedcustvalues.map((option,i) => (
   
                               
   
                               <Option
                                   key={i}
                                   text={option.attribute}
                                   option_type="customer"
                                   Deleteoption={this.props.Deleteoption}
                                   handleLabelClick={this.handleLabelClick}
                                   badge={(option.included_values.length + option.excluded_values.length)}
                                   handleSelectedOption= {this.handleSelectedOption}
                               >{option}
                               </Option>))
                       }
   
                       {
                           this.props.selecteditemvalues.map((option, i) => (
   
                               <Option
                                   key={i}
                                   text={option.attribute}
                                   option_type="item"
                                   Deleteoption={this.props.Deleteoption}
                                   handleLabelClick={this.props.handleLabelClick}
                                   handleSelectedOption= {this.handleSelectedOption}
                               >{option}
                               </Option>))
                       }
   
                   </div>
                   <div className="row">
                       <ModalComponent modalIsOpen={this.state.modalIsOpen} handleCloseButton={this.handleCloseButton} 
                       selectedcustvalues={this.props.selectedcustvalues}
                       selectedOption={this.state.selectedOption}
                       handleDelete={this.props.handleDelete}
                       />
   
                   </div>
   
               </div>
   
           );
       }
   };