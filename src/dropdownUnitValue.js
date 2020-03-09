import React from 'react';
import './App.css'
import quantityJSON from './quantityMeasurement.json'
import Dropdown from './dropdown'
import { getUnitBasicUnitType, getUnitValues } from './configuration/configuration';


var unitType;



class dropdownUnitValue extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            unit: '',
            firstUnit: '',
            secondUnit: '',
            unitValue1: props.unitValue1,
            unitValue2: props.unitValue2,
            units :[]
        }
    }

    getUnit = event => {
        console.log("type--> ", event.target.value);

        this.setState({ unit: event.target.value });
    }

    componentWillReceiveProps(props) {
        this.setState({ unit: props.unit })
        this.setState({units:this.props.unitVal})
    }

    handleFirstUnitChange = (event) => {

        this.setState({ firstUnit: event.target.value })
        this.props.firstUnit(event.target.value )
    }

    handleSecondUnitChange = (event) => {
        this.setState({ secondUnit: event.target.value })
        this.props.secondUnit(event.target.value )
    }

    render() {

       
        const getBasicUnits= this.state.units.map((value,key)=>{
            return (
                <option key={key}>{value}</option>
            )
        })
    
    
      
        return (

            <div className="dropdownChild">
                <select className="dropdownMain"
                    onChange={ this.handleFirstUnitChange}>
                    <option value="N/A">TYPE</option>
                   
                    {getBasicUnits}

                </select>
                <label id="labels">&#x21c4;</label>
                <select className="dropdownMain" onChange={(event) => this.handleSecondUnitChange(event)}>
                     <option value="N/A">TYPE</option>
                   
                    {getBasicUnits}
                </select>
                <Dropdown firstunit = {this.state.firstUnit} secoundunit = {this.state.secondUnit} />
            </div>
        );
    }
}
export default dropdownUnitValue
