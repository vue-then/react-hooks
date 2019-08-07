import React, { useCallback } from 'react';
import { connect } from "react-redux";

import Header from '../common/Header.jsx';
import Nav from "../common/Nav.jsx";
import List from "./List.jsx";
import Bottom from "./Bottom.jsx";

import "./App.css";



function App(props) {
    const {
        from,
        to,
    } = props;
    const onBack = useCallback(() => {
        window.history.back();
    }, []);

    return (
        <div>
            <div className="header-wrapper">
                <Header title={`${from} ⇀ ${to}`} onBack={onBack} />
            </div>
            <Nav/>
            <List/>
            <Bottom/>
        </div>
    )

}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return {dispatch}
    }
)(App)