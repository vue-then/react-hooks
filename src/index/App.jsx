import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import './App.css';

import Header from '../common/Header.jsx'
import DepartDate from './DepartDate.jsx'
import HighSpeed from './HighSpeed.jsx'
import Journey from './Journey.jsx'
import Submit from './Submit.jsx'


function App(props) {

    // App的重新渲染 onBack不会都是同一个方法
    const onBack = useCallback(() => {
			window.history.back();
        }, []);
        
    return(
        <div>
            <div className="header-wrapper">
                <Header title="火车票" onBack={onBack} />
            </div>
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