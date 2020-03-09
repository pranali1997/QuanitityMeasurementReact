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

        // console.log("handle change--> ", event.target.value);
        this.setState({ firstUnit: event.target.value })
        this.props.firstUnit(event.target.value )
    }

    handleSecondUnitChange = (event) => {
        console.log("handle change--> ", event.target.value);
        this.setState({ secondUnit: event.target.value })
        this.props.secondUnit(event.target.value )
    }

    render() {

        // var emptyInput = "select-value";
        // var unit = this.state.unit
        // var keys = Object.keys(quantityJSON);
        // console.log("unit Type===>",keys);
        
        console.log("asdbfghdrfyjgfr",this.state.units);
        
        
        const getBasicUnits= this.state.units.map((value,key)=>{
            return (
                <option key={key}>{value}</option>
            )
        })
    
    
        

        // for (var i = 0; i < keys.length; i++) {
        //     if (unit == i) {
        //         unitType = Object.keys(quantityJSON[keys[i]])
        //         // console.log(keys[i],'keys of json file');
                
        //         // console.log('keys keys of json',unitType);
                
        //     }
        // }
        return (

            <div className="dropdownChild">
                <select className="dropdownMain"
                    onChange={ this.handleFirstUnitChange}>
                    <option value="N/A">TYPE</option>
                    {/* <option value={unitType[0]}>{unitType[0]}</option>
                    <option value={unitType[1]}>{unitType[1]}</option>
                    <option value={unitType[2] }>{unitType[2] }</option>
                    <option value={unitType[3] }>{unitType[3] }</option> */}
                    {getBasicUnits}

                </select>
                <label id="labels">&#x21c4;</label>
                <select className="dropdownMain" onChange={(event) => this.handleSecondUnitChange(event)}>
                     <option value="N/A">TYPE</option>
                    {/* <option value={unitType[0]}>{unitType[0]}</option>
                    <option value={unitType[1]}>{unitType[1]}</option>
                    <option value={unitType[2] || emptyInput}>{unitType[2] || emptyInput}</option>
                    <option value={unitType[3] || emptyInput}>{unitType[3] || emptyInput}</option> */}
                    {getBasicUnits}
                </select>
                <Dropdown firstunit = {this.state.firstUnit} secoundunit = {this.state.secondUnit} />
            </div>
        );
    }
}
export default dropdownUnitValue
