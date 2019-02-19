import React, { Component, Fragment } from 'react';

export default class Option extends Component{
 constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
 }

 handleClick(){
     this.props.handleSelectedOption(this.props.text)
     this.props.handleLabelClick();
 }


    render(){

        if (this.props.option_type === "customer") {
            return (   
                <span>
                    <span className="tag label label-info1">
                        <span onClick={this.handleClick}>{this.props.text}</span>
                        <a href="#" onClick={this.handleClick}><i className="remove glyphicon glyphicon-remove-sign glyphicon-white" > </i></a>
    
                    </span>
                    <span className="badge1 badge-notify">{this.props.badge}</span>
                </span>
            );
        }
        else {  
            return (
                <span className="tag label label-info">
                    <span onClick={this.handleClick}>{this.props.text}</span>
                    <a href="#" onClick={this.handleClick}><i className="remove glyphicon glyphicon-remove-sign glyphicon-white" > </i></a>
                </span>
            );
        }
         
    }

  
}

