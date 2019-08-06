import React, { useCallback, useMemo } from "react";
import { connect } from "react-redux";
import './App.css';

import Header from '../common/Header.jsx'
import DepartDate from './DepartDate.jsx'
import HighSpeed from './HighSpeed.jsx'
import Journey from './Journey.jsx'
import Submit from './Submit.jsx'

import CitySelector from '../common/CitySelector.jsx'
import DateSelector from "../common/DateSelector.jsx";

import { h0 } from "../common/fp";

import {
	exchangeFromTo,
	showCitySelector,
	hideCitySelector,
	fetchCityData,
	setSelectedCity,
	showDateSelector,
	hideDateSelector,
    setDepartDate,
    toggleHighSpeed,
} from "./actions";
import { bindActionCreators } from "redux";

function App(props) {
    const {
        from,
        to,
        isCitySelectorVisible,
        cityData,
        isLoadingCityData,
        dispatch,
        departDate,
        isDateSelectorVisible,
        highSpeed,
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

    // dispatch ==> action->reducer => set state
    const citySelectorCbs = useMemo(()=>{
        return bindActionCreators({
            onBack: hideCitySelector,
            fetchCityData,
            onSelect: setSelectedCity
        }, dispatch)
    }, []);

    const departDateCbs = useMemo(() => {
        return bindActionCreators({
            onClick: showDateSelector,
        }, dispatch);
    }, []);

    const dateSelectorCbs = useMemo(() => {
        return bindActionCreators({
            onBack: hideDateSelector,
        }, dispatch);
    }, []);

    const onSelectDate = useCallback((day) => {
        if (!day) {
            return;
        }

        if (day < h0()) {
            return;
        }

        dispatch(setDepartDate(day));
        dispatch(hideDateSelector())
    }, []);
    const highSpeedCbs = useMemo(() => {
        return bindActionCreators({
            toggle: toggleHighSpeed,
        }, dispatch);
    }, []);

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
                    <DepartDate 
                        time={departDate}
                        {...departDateCbs}
                    />
                    <HighSpeed
                        highSpeed={highSpeed}
                        {...highSpeedCbs}
                    />
                    <Submit />
                </form>
				<CitySelector
					show={isCitySelectorVisible}
					cityData={cityData}
					isLoading={isLoadingCityData}
					{...citySelectorCbs}
				/>
                <DateSelector
                    show={isDateSelectorVisible}
                    {...dateSelectorCbs}
                    onSelect={onSelectDate}
                />
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