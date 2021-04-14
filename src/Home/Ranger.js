import React from "react";
import { DateRangePicker } from "react-dates";
import { Link } from "react-router-dom";
import "./Ranger.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

class Ranger extends React.Component {
    state = {
        startDate: "",
        endDate: ""
    };

    render() {
        return(
            <div className="ranger">
                <DateRangePicker
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => 
                        this.setState({ startDate, endDate })
                    }
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => this.setState({ focusedInput })}
                />
                <label>
                    <input
                        type="number"
                        min="0"
                        max="10"
                        placeholder="Add Guest"
                        className="ranger__input"
                    />
                </label>
                <Link to="/result">
                    <img scr="./search.svg" width="14px" alt="range-svg"></img>
                </Link>
            </div>
        );
    }
}

export default Ranger;