import React, { Component, Fragment } from 'react';
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './css/App.css';
import { OperatorAttributeselector } from './CommonAttributes';


const CustomerFilter = (props) => {
    var selected = "";
    var keyfalg = "";
    return (

        <div className="row">
            <div className="col col-sm-3">
                <Typeahead
                    // TODO research when API is done on this onSearch={this.handleSearch}
                    options={["CVS Pharmacy", "Walgreens", "Walmart", "Rite Aid"]}
                    onChange={(s) => {
                        selected = s;
                    }}

                    placeholder="Select a Value..."
                />
            </div>
            <OperatorAttributeselector handleoperatorattribute={props.handleoperatorattribute} />

            <div className="col-sm-auto">
                <a href="#" className="btn btn-info btn-lg" onClick={() => { props.handlecustomerClick(selected); }}>
                    <span className="glyphicon glyphicon-plus"></span>
                </a>
            </div>
        </div>
    );
}

const ItemFilter = (props) => {
    var selected = "";
    return (

        <div className="row">
            <div className="col-sm-3">
                <Typeahead
                    // TODO research when API is done on this onSearch={this.handleSearch}
                    options={["CVS Pharmacy", "Walgreens", "Walmart", "Rite Aid"]}
                    onClick={(s) => {
                        selected = s;
                    }}
                    placeholder="Select a Value..."
                />

            </div>

            <div className="col-sm-1">
                <a href="#" className="btn btn-info btn-lg" onClick={() => { props.handleitemClick(selected); }}>
                    <span className="glyphicon glyphicon-plus"></span>
                </a>
            </div>
        </div>

    );
}

export { ItemFilter, CustomerFilter }
