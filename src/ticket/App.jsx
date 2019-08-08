import './App.css';
import React, { useCallback, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import Detail from '../common/Detail'

function App(props) {
    const {
        departDate,
        arriveDate,
        departTimeStr,
        arriveTimeStr,
        departStation,
        arriveStation,
        trainNumber,
        durationStr,
        tickets,
        isScheduleVisible,
        searchParsed
    } = props;

    return (
			<div>
				<Detail />
			</div>
		);



}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return {dispatch}
    }
)(App)