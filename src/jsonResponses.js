const text = require('./textResponses.js');

const getHelloJSON = (request, response) => {
  const helloJson = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJson);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

const getTimeJSON = (request, response) => {
  const helloJson = {
    message: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(helloJson);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

module.exports = {
  getHelloJSON,
  getTimeJSON,
};
