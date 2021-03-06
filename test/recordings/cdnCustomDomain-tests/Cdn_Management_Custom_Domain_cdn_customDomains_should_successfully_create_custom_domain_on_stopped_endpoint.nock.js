// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/stop?api-version=2016-10-02')
  .reply(202, "{\r\n  \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain9669\",\"properties\":{\r\n        \"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"validationData\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '757',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/cf9c7808-aaba-44bd-8eaf-fc596c6d474b/profileresults/cdnTestProfile7643/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': 'ee95a975-648c-47ea-add7-e845d5b4970a',
  'x-ms-client-request-id': '5a67c32c-f649-4061-866c-d8caface9a20',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/cf9c7808-aaba-44bd-8eaf-fc596c6d474b?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '16496cc0-895d-4c8e-8935-2fc71d91cdfe',
  'x-ms-routing-request-id': 'WESTUS2:20170222T015025Z:16496cc0-895d-4c8e-8935-2fc71d91cdfe',
  date: 'Wed, 22 Feb 2017 01:50:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/stop?api-version=2016-10-02')
  .reply(202, "{\r\n  \"hostName\":\"testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Stopping\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n    {\r\n      \"name\":\"newname\",\"properties\":{\r\n        \"hostName\":\"newname.azureedge.net\",\"httpPort\":null,\"httpsPort\":null\r\n      }\r\n    }\r\n  ],\"customDomains\":[\r\n    {\r\n      \"name\":\"cdnTestCustomDomain9669\",\"properties\":{\r\n        \"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"validationData\":null\r\n      }\r\n    }\r\n  ],\"contentTypesToCompress\":[\r\n    \r\n  ],\"isCompressionEnabled\":false,\"optimizationType\":null,\"geoFilters\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '757',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/cf9c7808-aaba-44bd-8eaf-fc596c6d474b/profileresults/cdnTestProfile7643/endpointresults/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8?api-version=2016-10-02',
  'retry-after': '10',
  'x-ms-request-id': 'ee95a975-648c-47ea-add7-e845d5b4970a',
  'x-ms-client-request-id': '5a67c32c-f649-4061-866c-d8caface9a20',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/cf9c7808-aaba-44bd-8eaf-fc596c6d474b?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '16496cc0-895d-4c8e-8935-2fc71d91cdfe',
  'x-ms-routing-request-id': 'WESTUS2:20170222T015025Z:16496cc0-895d-4c8e-8935-2fc71d91cdfe',
  date: 'Wed, 22 Feb 2017 01:50:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/cf9c7808-aaba-44bd-8eaf-fc596c6d474b?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '09449c9e-c6f1-4f1a-92ff-bba477ce061f',
  'x-ms-client-request-id': '8f73a24a-f47f-4251-8087-b7980c64b56c',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '4f46bf46-d717-4fc4-a462-910aa38ed219',
  'x-ms-routing-request-id': 'CENTRALUS:20170222T015055Z:4f46bf46-d717-4fc4-a462-910aa38ed219',
  date: 'Wed, 22 Feb 2017 01:50:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/cf9c7808-aaba-44bd-8eaf-fc596c6d474b?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '09449c9e-c6f1-4f1a-92ff-bba477ce061f',
  'x-ms-client-request-id': '8f73a24a-f47f-4251-8087-b7980c64b56c',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '4f46bf46-d717-4fc4-a462-910aa38ed219',
  'x-ms-routing-request-id': 'CENTRALUS:20170222T015055Z:4f46bf46-d717-4fc4-a462-910aa38ed219',
  date: 'Wed, 22 Feb 2017 01:50:55 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain2086?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestCustomDomain2086\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomains/cdnTestCustomDomain2086\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-2-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Disabled\",\"validationData\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '558',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'b93c8d4c-4266-4b25-9bf0-a10ce26ef170',
  'x-ms-client-request-id': '8dce8a50-c412-47f1-adc1-d781334ffb0f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '92a5a858-9f0f-4ea1-8788-9015b1160836',
  'x-ms-routing-request-id': 'CENTRALUS:20170222T015056Z:92a5a858-9f0f-4ea1-8788-9015b1160836',
  date: 'Wed, 22 Feb 2017 01:50:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain2086?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestCustomDomain2086\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomains/cdnTestCustomDomain2086\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-2-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Disabled\",\"validationData\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '558',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'x-ms-request-id': 'b93c8d4c-4266-4b25-9bf0-a10ce26ef170',
  'x-ms-client-request-id': '8dce8a50-c412-47f1-adc1-d781334ffb0f',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '92a5a858-9f0f-4ea1-8788-9015b1160836',
  'x-ms-routing-request-id': 'CENTRALUS:20170222T015056Z:92a5a858-9f0f-4ea1-8788-9015b1160836',
  date: 'Wed, 22 Feb 2017 01:50:56 GMT',
  connection: 'close' });
 return result; }]];