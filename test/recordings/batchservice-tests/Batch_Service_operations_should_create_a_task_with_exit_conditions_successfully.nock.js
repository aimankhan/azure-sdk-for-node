// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2016-07-01.3.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Jul 2016 16:47:36 GMT',
  etag: '0x8D3B7D00B88628D',
  location: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f571ff50-6f73-44a1-9672-2d17d7a3e024',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/job-1',
  date: 'Fri, 29 Jul 2016 16:47:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2016-07-01.3.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Jul 2016 16:47:36 GMT',
  etag: '0x8D3B7D00B88628D',
  location: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'f571ff50-6f73-44a1-9672-2d17d7a3e024',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/job-1',
  date: 'Fri, 29 Jul 2016 16:47:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/JobWithAutoComplete/tasks?api-version=2016-07-01.3.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Jul 2016 16:47:35 GMT',
  etag: '0x8D3B7D00B17270C',
  location: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '18d473c1-3bcf-443b-b79c-d65abca1e9c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete',
  date: 'Fri, 29 Jul 2016 16:47:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs/JobWithAutoComplete/tasks?api-version=2016-07-01.3.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Jul 2016 16:47:35 GMT',
  etag: '0x8D3B7D00B17270C',
  location: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '18d473c1-3bcf-443b-b79c-d65abca1e9c9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  dataserviceid: 'https://matthchreastus2.eastus2.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete',
  date: 'Fri, 29 Jul 2016 16:47:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"TaskWithAutoComplete\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete\",\"eTag\":\"0x8D3B7D00B17270C\",\"creationTime\":\"2016-07-29T16:47:35.651918Z\",\"lastModified\":\"2016-07-29T16:47:35.651918Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-07-29T16:47:35.651918Z\",\"commandLine\":\"echo Hello World\",\"runElevated\":false,\"exitConditions\":{\r\n    \"exitCodes\":[\r\n      {\r\n        \"code\":1,\"exitOptions\":{\r\n          \"jobAction\":\"none\"\r\n        }\r\n      }\r\n    ],\"default\":{\r\n      \"jobAction\":\"terminate\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 29 Jul 2016 16:47:35 GMT',
  etag: '0x8D3B7D00B17270C',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4f68e9a2-8f93-49fc-b3df-ed6541f74e28',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:47:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .get('/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete?api-version=2016-07-01.3.1')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://matthchreastus2.eastus2.batch.azure.com/$metadata#tasks/@Element\",\"id\":\"TaskWithAutoComplete\",\"url\":\"https://matthchreastus2.eastus2.batch.azure.com/jobs/JobWithAutoComplete/tasks/TaskWithAutoComplete\",\"eTag\":\"0x8D3B7D00B17270C\",\"creationTime\":\"2016-07-29T16:47:35.651918Z\",\"lastModified\":\"2016-07-29T16:47:35.651918Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-07-29T16:47:35.651918Z\",\"commandLine\":\"echo Hello World\",\"runElevated\":false,\"exitConditions\":{\r\n    \"exitCodes\":[\r\n      {\r\n        \"code\":1,\"exitOptions\":{\r\n          \"jobAction\":\"none\"\r\n        }\r\n      }\r\n    ],\"default\":{\r\n      \"jobAction\":\"terminate\"\r\n    }\r\n  },\"constraints\":{\r\n    \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"retentionTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n  },\"executionInfo\":{\r\n    \"retryCount\":0,\"requeueCount\":0\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 29 Jul 2016 16:47:35 GMT',
  etag: '0x8D3B7D00B17270C',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '4f68e9a2-8f93-49fc-b3df-ed6541f74e28',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:47:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/jobs/JobWithAutoComplete?api-version=2016-07-01.3.1')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ee2ac74d-a08e-4a75-a47e-c62df884a236',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:47:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://matthchreastus2.eastus2.batch.azure.com:443')
  .delete('/jobs/JobWithAutoComplete?api-version=2016-07-01.3.1')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'ee2ac74d-a08e-4a75-a47e-c62df884a236',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Jul 2016 16:47:37 GMT',
  connection: 'close' });
 return result; }]];