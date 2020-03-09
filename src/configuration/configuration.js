import axios from 'axios';

export function configuration(data) {
    console.log("in axios func--->",data);

      return axios({
            method: 'POST',
            url: 'http://localhost:4000/enterValue',
            data: data
        })
}

export function getUnitBasicUnitType(unitVal) {
    console.log("in axios", unitVal);
    var unit=unitVal.typeUnits;
    console.log("confiii",unit);
    
    var url= 'http://localhost:4000/findKeys/'+unit
    //var findUrl=(url.concat(unit))
    return axios({
        method:"GET",
        url : url
    })
}


export function getUnitValues(){
    
    return axios({
        method:'GET',
        url:'http://localhost:4000/main',
    })
    
}