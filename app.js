var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Bengaluru,IN&APPID=d8b29fdfac02231c433b52f80e377bdb&units=metric';
var server = http.createServer(function(request,response){
    var request = require('request');
    request(url,function(err,res,body){
        var data = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<H1>"+'City name - : ' + data['name'] + '<br>' + '</h1>');
        response.write("<H2>"+'Temperature - : ' + data.main['temp'] + '<br>' + '</h2>');
        response.write("<H2>"+'Sun set time - : ' + new Date(data.sys['sunset']+1000) + '</h2>');
        response.write("</div></body></html>");
        response.end();
    });
}).listen(8081);