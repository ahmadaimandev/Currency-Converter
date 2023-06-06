 const Dotenv = require('dotenv-webpack');

 module.exports = {
    //other configuration options//
    Plugins: [
        new Dotenv()
    ]
 };
 const apiKey = process.env.apiKey;
 
 const dropList = document.querySelectorAll(".drop-list select");

 for (let i = 0; i< dropList.length; index++) {
    for(currency_code in country_list ) {
        console.log(currency_code);
    }
    
 }