import React from 'react';
import { connect } from "react-redux";
import './App.css';

import Header from '../common/Header.jsx'
import DepartDate from './DepartDate.jsx'
import HighSpeed from './HighSpeed.jsx'
import Journey from './Journey.jsx'
import Submit from './Submit.jsx'


function App(props) {
    return(
        <div>
            <Header/>
            <DepartDate/>
            <HighSpeed/>
            <Journey/>
            <Submit/>
        </div>
    )
}

export default connect(
    function mapStateToProps(state) {
        return {};
    },
    function mapDispatchToProps(dispatch) {
        return {};
    }
)(App)