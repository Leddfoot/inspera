import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setRemainingTime, decrementLocalTime } from "../actions/timeActions";
import timeService from "../services/timeService";
import Header from "./header/Header";

import "./App.scss";

const GET_REMAINING_TIME_TIMER = 10 * 1000; // every 10 seconds
const LOCAL_TIMER = 1000; // every second

let interval;


const App = () => {
  const dispatch = useDispatch();   
  const timeRemainingLocal = useSelector((state) => state.time.timeRemainingLocal);

  const updateTime = async () => {
    const timeRemaining = await timeService.requestUpdatedTime();
    dispatch(setRemainingTime(timeRemaining));
  };

  const updateLocalTime = () => {
    dispatch(decrementLocalTime(timeRemainingLocal));
  };


  useEffect( (timeRemainingLocal) => {
    const decrementInterval = setInterval(() => {
      updateLocalTime(timeRemainingLocal);
    }, LOCAL_TIMER);
    return () => {
      clearInterval(decrementInterval);
    };
  }, [timeRemainingLocal]);

  useEffect(async () => {
    await updateTime();
    interval = setInterval(() => {
      updateTime();
    }, GET_REMAINING_TIME_TIMER);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="app-wrapper default">
      <Header />
      <div className="body">
        <h1>Welcome to your Inspera exam</h1>
        <hr />
        <div className="text-interaction">
          <label>
            <p>What is your answer?</p>
            <input placeholder="Type your text here..." />
          </label>
        </div>
        <hr />
        <div className="mpc-interaction">
          <label>
            <input type="checkbox" value="Alternative 1" />
            <p>Alternative 1</p>
          </label>
          <label>
            <input type="checkbox" value="Alternative 2" />
            <p>Alternative 2</p>
          </label>
          <label>
            <input type="checkbox" value="Alternative 3" />
            <p>Alternative 3</p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
