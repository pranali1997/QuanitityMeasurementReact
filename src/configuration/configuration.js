import axios from 'axios';

function configuration(data) {
    console.log("in axios func--->",data);

      return axios({
            method: 'POST',
            url: 'http://localhost:4000/enterValue',
            data: data
        })
}

export default configuration;