import React, { Component, Fragment } from 'react';
import { AsyncTypeahead, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './css/App.css';


const CustomerFilter = (props) => {
    var selected = "";
    return (

        <div className="col-sm-3 row">
            <Typeahead
                // TODO research when API is done on this onSearch={this.handleSearch}
                options={["CVS Pharmacy", "Walgreens", "Walmart", "Rite Aid"]}
                onChange={(s) => {
                    selected = s;
                }}
                placeholder="Select a Value..."
            />

            <div className="col-sm-1">
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

        <div className="col-sm-3 row">
            <Typeahead
                // TODO research when API is done on this onSearch={this.handleSearch}
                options={["CVS Pharmacy", "Walgreens", "Walmart", "Rite Aid"]}
                onChange={(s) => {
                    selected = s;
                }}
                placeholder="Select a Value..."
            />

            <div className="col-sm-1">
                <a href="#" className="btn btn-info btn-lg" onClick={() => { props.handleitemClick(selected); }}>
                    <span className="glyphicon glyphicon-plus"></span>
                </a>
            </div>
        </div>

    );
}

export { ItemFilter, CustomerFilter }
