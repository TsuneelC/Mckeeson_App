
import React, { Component, Fragment } from 'react';
import Option from './Option';
import ModalComponent from './ModalComponent';

export default class ComboOptions extends React.Component {
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
                           this.props.selectedcustvalues.map((option,i) => (
   
                               
   
                               <Option
                                   key={i}
                                   text={option.attribute}
                                   option_type="customer"
                                   Deleteoption={this.props.Deleteoption}
                                   handleLabelClick={this.handleLabelClick}
                                   badge={(option.included_values.length + option.excluded_values.length)}
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
                               >{option}
                               </Option>))
                       }
   
                   </div>
                   <div className="row">
                       <ModalComponent modalIsOpen={this.state.modalIsOpen} handleCloseButton={this.handleCloseButton} 
                       selectedcustvalues={this.props.selectedcustvalues}/>
   
                   </div>
   
               </div>
   
           );
       }
   };