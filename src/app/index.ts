import axios from 'axios';

import { BasicResponse } from "../interfaces/interfaces";

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000
})

client.get<BasicResponse>('/todos/1')
    .then(function (response) {
        // handle success
        console.log(response.data);
        console.log(response.data.userId)
    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    })
    .then(function () {
        // always executed
    });
