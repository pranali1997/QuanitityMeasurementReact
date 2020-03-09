import React, { Component } from 'react';
import './App.css'
import Units from "./dropdownUnitValue"
import {configuration,getUnitBasicUnitType,getUnitValues} from '../src/configuration/configuration'


export default class dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: "",
            firstUnit: "",
            secondUnit: "",
            unitValue1: 0,
            result: 0,
            type:[],
            typeUnits:[]
        };
    }


    componentWillReceiveProps(props) {
            this.setState({firstUnit: props.firstUnit})
            this.setState({secondUnit:props.secondUnit})
    }
    
    getUnit = async event => {
        await this.setState({ unit: event.target.value });

        console.log("in getUnit--->",this.state.unit);
        var typeObj = {
            typeUnits : this.state.unit
        }
        console.log("typeOnbyyyyyyyyyyyyyy",typeObj);
        
        getUnitBasicUnitType(typeObj)
        .then(response=>{
            console.log("response data for second api",response.data.data);
            this.setState({
                typeUnits : response.data.data
            })
            this.setState({typeUnits:response.data.data})
        }).catch((err)=>{
            console.log("something went wrong in main dropdown to get units");
            
        })
        
    }

    getValue = (event) => {
        this.setState({ unitValue1: event.target.value });

    }

    buttonClick = () => {

        var data = {
            unit:this.state.unit,
            firstUnit: this.state.firstUnit,
            secondUnit: this.state.secondUnit,
            unitValue1: this.state.unitValue1
        }
        console.log("button click---------->",data);
        

        configuration(data)
            .then(response => {
                console.log("success  ", response.data);
                this.setState({ result: response.data.data})
            }).catch((err) => {
                console.log("Something went wrong")
            })
    }

    handleFirstUnit = (val) => {
        this.setState({ firstUnit: val })
    }

    handleSecondUnit = (val) => {
        this.setState({ secondUnit: val })
    }


  async  componentWillMount(){
       await getUnitValues().then(response=>{
            console.log("success ",response.data);
            this.setState({type:response.data})
        
        }).catch(err=>{
            console.log("something went wrong in main dropdown");
            
        })
    }
    render() {
        console.log("rendeweeeeeeeeeeee",this.state.typeUnits);
        
        const gettingUnitTypes=this.state.type.map((value,key)=>{
                return(                    
                <option key={key}>{value}</option>
                )
        })
        
        return (
            <div className="dropdownMain">
                <div className="dropdown">
                    <select onChange={this.getUnit}>
                     <option value="N/A">UNIT</option>
                        {/* <option value="LENGTH">LENGTH</option>
                        <option value="VOLUME">VOLUME</option>
                        <option value="MASS">MASS</option>
                        <option value="TEMPERATURE">TEMPERATURE</option> */} 
                        {gettingUnitTypes}
                    </select>
                    <Units unitVal={this.state.typeUnits}/>
                </div>
                {/* <div className="dropdownChild">
                    <Units unit={this.state.unit} firstUnit={this.handleFirstUnit} secondUnit={this.handleSecondUnit} />
                </div> */}
                <div className="textValue">

                    <input type="text" id="tName" name="name" placeholder="value" onChange={this.getValue} />
                    <label id="labels">=</label>
                    <input type="text" id="tName" name="name" placeholder="value" value={this.state.result} />
                </div>
                <div>
                    <button type="submit" onClick={this.buttonClick}>submit</button>
                </div>
            </div>
        )

    }
}