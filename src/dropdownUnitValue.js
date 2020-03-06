import React from 'react';
import './App.css'
import quantityJSON from './quantityMeasurement.json'

var unitType;


class dropdownUnitValue extends React.Component {

    constructor(props) {
        super(props);
        this.state = { type: props.unit }
    }

    componentWillReceiveProps(props) {
        this.setState({ type: props.unit })
    }
    render() {
        var emptyInput = "select-value";
        var type = this.state.type
        var keys = Object.keys(quantityJSON);

        for (var i = 0; i < keys.length; i++) {
            if (type == i) {
                unitType = Object.keys(quantityJSON[keys[i]])
            }
        }
        return (
            <div>
                <select className="dropdownMain">
                    <option value="N/A">TYPE</option>
                    <option value="1">{unitType[0]}</option>
                    <option value="2">{unitType[1]}</option>
                    <option value="3">{unitType[2] || emptyInput}</option>
                    <option value="4">{unitType[3] || emptyInput}</option>
                </select>
            </div>
        );
    }
}
export default dropdownUnitValue