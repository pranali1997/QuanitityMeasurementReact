import React from 'react';
import './App.css'
import quantityJSON from './quantityMeasurement.json'
import configuration from './configuration/configuration'
import Units from "./dropdownUnitValue"
import Text from './text'


var unitType;


class dropdownUnitValue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: props.unit,
            firstUnit: props.firstUnit,
            secondUnit: props.secondUnit,
            unitValue1: props.unitValue1,
            unitValue2: props.unitValue2,
            unitType2: ''
        }
    }

    getUnit = event => {
        console.log("type--> ", event.target.value);

        this.setState({ unit: event.target.value });
    }

    buttonClick = () => {
        var data = {
            firstUnit: this.state.firstUnit,
            secondUnit: this.state.secondUnit,
            unitValue1: this.state.unitValue
        }
        configuration(data)
            .then(response => {
                console.log("success  ", response.data);
            }).catch((err) => {
                console.log("Something went wrong")
            })
    }
    componentWillReceiveProps(props) {
        this.setState({ type: props.unit })
    }

    handleChange = (event) => {

        console.log("handke change--> ", event.target.value);
        this.setState({ unitType2: event.target.value })
        this.props.unitType2(this.state.unitType2)
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
                 <select className="dropdownMain"
                    onChange={(event) => this.handleChange(event)}>
                    <option value="N/A">TYPE</option>
                    <option value={unitType[0]}>{unitType[0]}</option>
                    <option value={unitType[1]}>{unitType[1]}</option>
                    <option value={unitType[2] || emptyInput}>{unitType[2] || emptyInput}</option>
                    <option value={unitType[3] || emptyInput}>{unitType[3] || emptyInput}</option>
                </select>
                <select>
                    <option value="N/A">TYPE</option>
                    <option value={unitType[0]}>{unitType[0]}</option>
                    <option value={unitType[1]}>{unitType[1]}</option>
                    <option value={unitType[2] || emptyInput}>{unitType[2] || emptyInput}</option>
                    <option value={unitType[3] || emptyInput}>{unitType[3] || emptyInput}</option>
                </select>
            </div>
        );
    }
}
export default dropdownUnitValue