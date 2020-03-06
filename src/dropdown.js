import React from 'react';
import './App.css'
import Units from "./dropdownUnitValue"

export default class dropdown extends React.Component {
    state = {
        unit: " "
    };
    getUnit = event => {
        this.setState({ unit: event.target.value });
    }
    render() {
        return (
            <div className="dropdownMain">
                <div className="dropdown">
                    <select onChange={this.getUnit}>
                        <option value="N/A">UNIT</option>
                        <option value="0">Length</option>
                        <option value="1">Volume</option>
                        <option value="2">Weight</option>
                        <option value="3">Temperature</option>
                    </select>
                </div>
                <div className="dropdownChild">
                    <Units unit={this.state.unit}/>
                    <label id="labels">&#x21c4;</label>
                    <Units unit={this.state.unit} />
                </div>
            </div>
        )

    }
}