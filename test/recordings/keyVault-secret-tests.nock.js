// This file has been autogenerated.

exports.scopes = [[],
[function (nock) { 
var result = 
nock('http://nodesdktest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/secrets/nodeSecret?api-version=2015-06-01', '*')
  .reply(401, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'www-authenticate': 'Bearer authorization="https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47", resource="https://vault.azure.net"',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:45 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://nodesdktest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/secrets/nodeSecret?api-version=2015-06-01', '*')
  .reply(401, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'www-authenticate': 'Bearer authorization="https://login.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47", resource="https://vault.azure.net"',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:45 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://nodesdktest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/secrets/nodeSecret?api-version=2015-06-01', '*')
  .reply(200, {"value":"Pa$$w0rd","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"created":1434666405,"updated":1434666405}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:45 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('https://nodesdktest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/secrets/nodeSecret?api-version=2015-06-01', '*')
  .reply(200, {"value":"Pa$$w0rd","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"created":1434666405,"updated":1434666405}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:45 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('http://nodesdktest.vault.azure.net:443')
  .get('/secrets/nodeSecret?api-version=2015-06-01')
  .reply(200, {"value":"Pa$$w0rd","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"created":1434666405,"updated":1434666405}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:45 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('https://nodesdktest.vault.azure.net:443')
  .get('/secrets/nodeSecret?api-version=2015-06-01')
  .reply(200, {"value":"Pa$$w0rd","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"created":1434666405,"updated":1434666405}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:45 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('http://nodesdktest.vault.azure.net:443')
  .get('/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53?api-version=2015-06-01')
  .reply(200, {"value":"Pa$$w0rd","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"created":1434666405,"updated":1434666405}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:46 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('https://nodesdktest.vault.azure.net:443')
  .get('/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53?api-version=2015-06-01')
  .reply(200, {"value":"Pa$$w0rd","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"created":1434666405,"updated":1434666405}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:46 GMT',
  connection: 'close',
  'content-length': '185' });
 return result; },
function (nock) { 
var result = 
nock('http://nodesdktest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/secrets/nodeSecret?api-version=2015-06-01', '*')
  .reply(200, {"contentType":"text/plain","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"exp":2527401600,"created":1434666405,"updated":1434666406},"tags":{"foo":"ede2c2613ab96101ef90e0f93ed400417324724f8d0793cc46156eb21c83a50b2aa6d24fbbdce46d3a06ef47b671ba579248"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:46 GMT',
  connection: 'close',
  'content-length': '328' });
 return result; },
function (nock) { 
var result = 
nock('https://nodesdktest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/secrets/nodeSecret?api-version=2015-06-01', '*')
  .reply(200, {"contentType":"text/plain","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"exp":2527401600,"created":1434666405,"updated":1434666406},"tags":{"foo":"ede2c2613ab96101ef90e0f93ed400417324724f8d0793cc46156eb21c83a50b2aa6d24fbbdce46d3a06ef47b671ba579248"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:46 GMT',
  connection: 'close',
  'content-length': '328' });
 return result; },
function (nock) { 
var result = 
nock('http://nodesdktest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53?api-version=2015-06-01', '*')
  .reply(200, {"contentType":"text/plain","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"exp":2527401600,"created":1434666405,"updated":1434666407},"tags":{"foo":"1c2113c5908b1633b597923b338e697e6396c6b61dea3431fd058d6efb89d103d134e7d6c14ec3c37686dccf447009884afa"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:46 GMT',
  connection: 'close',
  'content-length': '328' });
 return result; },
function (nock) { 
var result = 
nock('https://nodesdktest.vault.azure.net:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53?api-version=2015-06-01', '*')
  .reply(200, {"contentType":"text/plain","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"exp":2527401600,"created":1434666405,"updated":1434666407},"tags":{"foo":"1c2113c5908b1633b597923b338e697e6396c6b61dea3431fd058d6efb89d103d134e7d6c14ec3c37686dccf447009884afa"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:46 GMT',
  connection: 'close',
  'content-length': '328' });
 return result; },
function (nock) { 
var result = 
nock('http://nodesdktest.vault.azure.net:443')
  .delete('/secrets/nodeSecret?api-version=2015-06-01')
  .reply(200, {"contentType":"text/plain","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"exp":2527401600,"created":1434666405,"updated":1434666407},"tags":{"foo":"1c2113c5908b1633b597923b338e697e6396c6b61dea3431fd058d6efb89d103d134e7d6c14ec3c37686dccf447009884afa"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:48 GMT',
  connection: 'close',
  'content-length': '328' });
 return result; },
function (nock) { 
var result = 
nock('https://nodesdktest.vault.azure.net:443')
  .delete('/secrets/nodeSecret?api-version=2015-06-01')
  .reply(200, {"contentType":"text/plain","id":"https://nodesdktest.vault.azure.net/secrets/nodeSecret/bd7375f88ac54de8aedfabfe1c5baf53","attributes":{"enabled":true,"exp":2527401600,"created":1434666405,"updated":1434666407},"tags":{"foo":"1c2113c5908b1633b597923b338e697e6396c6b61dea3431fd058d6efb89d103d134e7d6c14ec3c37686dccf447009884afa"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:48 GMT',
  connection: 'close',
  'content-length': '328' });
 return result; },
function (nock) { 
var result = 
nock('http://nodesdktest.vault.azure.net:443')
  .get('/secrets/nodeSecret?api-version=2015-06-01')
  .reply(404, {"error":{"code":"SecretNotFound","message":"Secret not found: nodeSecret"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '76',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://nodesdktest.vault.azure.net:443')
  .get('/secrets/nodeSecret?api-version=2015-06-01')
  .reply(404, {"error":{"code":"SecretNotFound","message":"Secret not found: nodeSecret"}}, { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '76',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-IIS/8.5',
  'x-ms-keyvault-service-version': '1.0.0.96',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'strict-transport-security': 'max-age=31536000;includeSubDomains',
  date: 'Thu, 18 Jun 2015 22:26:47 GMT',
  connection: 'close' });
 return result; }]];