import React from "react";
// import logo from "/home/admin1/Desktop/my-app/src/image/units_of_measure.gif";
import "./App.css";
import Title from './title'
import DropdownUnitValue from './dropdownUnitValue'
 import Text from './text'
import Dropdown from './dropdown'

function App() {
  

  return (
    <div className="App">
      <Title></Title>
      <div className="border">
        <div className="dropdownMain">
          <Dropdown></Dropdown>
        </div>
        <div className="textValue">
          <Text></Text>
          <label id="labels">=</label>
          <Text></Text>
          </div>
          <div>
          <button type="submit">submit</button>
        </div>
      </div>

    </div>
  )


        }
        
export default App;