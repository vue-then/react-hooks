import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import './App.css';

import Header from '../common/Header.jsx'
import DepartDate from './DepartDate.jsx'
import HighSpeed from './HighSpeed.jsx'
import Journey from './Journey.jsx'
import Submit from './Submit.jsx'

import {
    exchangeFromTo,
    showCitySelector,
    hideCitySelector,
} from './actions';
import { bindActionCreators } from "redux";

function App(props) {
    const {
        from,
        to,
        dispatch,
    } = props;

    // App的重新渲染 onBack不会都是同一个方法
    const onBack = useCallback(() => {
			window.history.back();
        }, []);
    // const doExchangeFromTo = useCallback(() => {
    //     dispatch(exchangeFromTo())
    // },[]);
    // const doShowCitySelector = useCallback(m => {
    //     dispatch(showCitySelector(m))
    // },[]); 
    const cbs = useMemo(()=>{
        return bindActionCreators({
            exchangeFromTo,
            showCitySelector,
        },dispatch)
    },[])

    return (
			<div>
				<div className="header-wrapper">
					<Header title="火车票" onBack={onBack} />
				</div>
                <form action="./query.html" className="form">
                    <Journey
                        from={from}
                        to={to}
                        // exchangeFromTo={doExchangeFromTo}
                        // showCitySelector={doShowCitySelector}
                        {...cbs}
                    />
                </form>
				<DepartDate />
				<HighSpeed />
				<Submit />
			</div>
		);
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return {dispatch};
    }
)(App)