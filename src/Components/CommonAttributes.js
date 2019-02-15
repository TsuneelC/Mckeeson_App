import React, { Component, Fragment } from 'react';

export const CustomerAttributeselector = (props) => {
    return (
        <div className="col-sm-2" >
            <select id="customeroption" className="browser-default camp-select" onChange={props.handlecustomerattributelabel}>
                <option defaultValue>Choose An Attribute..</option>
                <option value="group">Group</option>
                <option value="billto">Billto</option>
                <option value="shipto">Shipto</option>
            </select>
        </div>
    );
};

export const ItemAttributeselector = (props) => {
    return (
        <div className="col-sm-2" >

            <select id="itemoption" className="browser-default camp-select" onChange={props.handleitemattributelabel}>
                <option defaultValue>Choose An Attribute..</option>
                <option value="group">Group</option>
                <option value="billto">Billto</option>
                <option value="shipto">Shipto</option>
            </select>
        </div>
    );
};

export const OperatorAttributeselector = (props) => {
    return (
        <div className="col-sm-2" >
            <select id="operatoroption" className="browser-default camp-select" onChange={props.handleoperatorattribute}>
                <option defaultValue>Choose An Operation..</option>
                <option value="included">Include</option>
                <option value="excluded">Exclude</option>
            </select>
        </div>
    );
};
