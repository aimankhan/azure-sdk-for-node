// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile45\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '395',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a97d052a-32ad-4488-a8cf-f53a11953418',
  'x-ms-client-request-id': '3f9550db-588a-4853-b7ae-650c5415d5e4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b6152965-c4c3-4e96-9f6f-9aa7869b6e8b?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd5d1e8ae-6dbd-463b-a3cc-2e2a4985415a',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T220913Z:d5d1e8ae-6dbd-463b-a3cc-2e2a4985415a',
  date: 'Tue, 01 Mar 2016 22:09:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45?api-version=2015-06-01', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestProfile45\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '395',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'a97d052a-32ad-4488-a8cf-f53a11953418',
  'x-ms-client-request-id': '3f9550db-588a-4853-b7ae-650c5415d5e4',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b6152965-c4c3-4e96-9f6f-9aa7869b6e8b?api-version=2015-06-01',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd5d1e8ae-6dbd-463b-a3cc-2e2a4985415a',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T220913Z:d5d1e8ae-6dbd-463b-a3cc-2e2a4985415a',
  date: 'Tue, 01 Mar 2016 22:09:12 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b6152965-c4c3-4e96-9f6f-9aa7869b6e8b?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f52455a0-6452-477e-a1d4-2e636c78306e',
  'x-ms-client-request-id': '9bdaf3d8-55dc-4e2c-b341-e500f4700ed3',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '468da77c-c4d0-4435-a6bf-c03e25feb968',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T220950Z:468da77c-c4d0-4435-a6bf-c03e25feb968',
  date: 'Tue, 01 Mar 2016 22:09:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/b6152965-c4c3-4e96-9f6f-9aa7869b6e8b?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'f52455a0-6452-477e-a1d4-2e636c78306e',
  'x-ms-client-request-id': '9bdaf3d8-55dc-4e2c-b341-e500f4700ed3',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '468da77c-c4d0-4435-a6bf-c03e25feb968',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T220950Z:468da77c-c4d0-4435-a6bf-c03e25feb968',
  date: 'Tue, 01 Mar 2016 22:09:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile45\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '394',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'fd2c4b5f-9004-46e4-b224-0920a0e5b3be',
  'x-ms-client-request-id': 'feff1956-ad0f-47e9-a779-aa08c5d63f96',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '947ef021-0b18-4675-8727-7d7bf1881505',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T220958Z:947ef021-0b18-4675-8727-7d7bf1881505',
  date: 'Tue, 01 Mar 2016 22:09:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45?api-version=2015-06-01')
  .reply(200, "{\r\n  \"name\":\"cdnTestProfile45\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45\",\"type\":\"Microsoft.Cdn/profiles\",\"tags\":{\r\n    \"tag1\":\"val1\",\"tag2\":\"val2\"\r\n  },\"location\":\"WestUs\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"sku\":{\r\n      \"name\":\"Standard\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '394',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'fd2c4b5f-9004-46e4-b224-0920a0e5b3be',
  'x-ms-client-request-id': 'feff1956-ad0f-47e9-a779-aa08c5d63f96',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '947ef021-0b18-4675-8727-7d7bf1881505',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T220958Z:947ef021-0b18-4675-8727-7d7bf1881505',
  date: 'Tue, 01 Mar 2016 22:09:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '368acab2-0dbc-4eea-aef1-3fdf037449e0',
  'x-ms-client-request-id': 'da5bc01d-9f2d-46e7-bb2f-dcd9e5a9727f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a3b1287a-b5ae-4586-a5b5-7eb138671ea5',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221005Z:a3b1287a-b5ae-4586-a5b5-7eb138671ea5',
  date: 'Tue, 01 Mar 2016 22:10:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '368acab2-0dbc-4eea-aef1-3fdf037449e0',
  'x-ms-client-request-id': 'da5bc01d-9f2d-46e7-bb2f-dcd9e5a9727f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a3b1287a-b5ae-4586-a5b5-7eb138671ea5',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221005Z:a3b1287a-b5ae-4586-a5b5-7eb138671ea5',
  date: 'Tue, 01 Mar 2016 22:10:04 GMT',
  connection: 'close' });
 return result; }]];