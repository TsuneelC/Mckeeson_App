import React, { Component, Fragment } from 'react';

const Option = (props) => {

    if (props.option_type === "customer") {
        return (


            <span>
                <span className="tag label label-info1">
                    <span onClick={props.handleLabelClick}>{props.text}</span>
                    <a href="#" onClick={props.handleLabelClick}><i className="remove glyphicon glyphicon-remove-sign glyphicon-white" > </i></a>

                </span>
                <span className="badge1 badge-notify">{props.badge}</span>
            </span>
        );
    }
    else {

        return (
            <span className="tag label label-info">
                <span onClick={props.handleLabelClick}>{props.text}</span>
                <a href="#" onClick={props.handleLabelClick}><i className="remove glyphicon glyphicon-remove-sign glyphicon-white" > </i></a>
            </span>
        );
    }
}

export default Option;