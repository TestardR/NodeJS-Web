const https = require('https');

// req: http.ClientRequest
const req = https.request(
  { hostname: 'www.google.com', method: 'GET' },
  res => {
    // res: http.IncomingMessage
    console.log(res.statusCode);
    console.log(res.headers);

    res.on('data', data => {
      console.log(data.toString());
    });
  }
);

req.on('error', e => console.log(e));
// http.Agent
console.log(req.agent);

req.end();
