var http = require('http'),
    fs = require('fs'),
    url = require('url');

http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    var ground = 0;
    var water = 0;
    var html = '<html><head><style>table, td {border:  1px solid black;} td{width: 40px; height: 40px;}</style></head><body><table>';
    for (let i = 0; i < 16; i++) {
        html += '<tr>';
        for (let j = 0; j < 16; j++) {
            html += '<td ';
            var a = Math.floor(Math.random() * 3 - 1);
            console.log(a);
            if (a == 1 && (water + 1) * 3 != ground) {
                a = 0;
            }
            else if (a == 0 && (ground) / 3 == water + 1 && (ground + 1) / 3 != water) {
                a = 1;
            }
            if (a == 0) {
                html += 'style="background-color: brown;">';
                ground++;
            }
            else if (a == 1) {
                html += 'style="background-color: blue;"';
                water++;
            }
            else
                html += 'style="background-color: grey;"';
            html += '</td>';
        }
        html += '</tr>';
    }
    console.log();
    console.log("hogh " + ground);
    console.log("jur " + water);
    console.log();
    html += '</table></body></html>';
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(html);
}).listen(3000);
console.log("Server running at http://localhost:3000/");