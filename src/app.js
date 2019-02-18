import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { CustomerFilter, ItemFilter } from './Components/CommonSearchFilters';
import { CustomerAttributeselector, ItemAttributeselector, OperatorAttributeselector } from './Components/CommonAttributes';
import './Components/css/App.css';
import MckessonApp from './Components/MckessonApp';







ReactDOM.render(<MckessonApp />, document.getElementById('app'));