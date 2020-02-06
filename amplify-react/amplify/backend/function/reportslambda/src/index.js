const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

const server = awsServerlessExpress.createServer(app);

// var environment = process.env.ENV
// var region = process.env.REGION
// var storageOaktreereportsName = process.env.STORAGE_OAKTREEREPORTS_NAME
// var storageOaktreereportsArn = process.env.STORAGE_OAKTREEREPORTS_ARN

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  awsServerlessExpress.proxy(server, event, context);
};
