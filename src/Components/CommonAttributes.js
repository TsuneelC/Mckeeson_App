import React, { Component, Fragment } from 'react';

const CustomerAttributeselector = (props) => {
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

const ItemAttributeselector = (props) => {
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

export default {CustomerAttributeselector, ItemAttributeselector};