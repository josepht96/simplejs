var request = require('request');
var url = process.argv.slice(2);

console.log('url: ', url);
request(url[0], function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
    }
})