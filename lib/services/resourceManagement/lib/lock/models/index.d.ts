/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


/**
 * @class
 * Initializes a new instance of the DeploymentExtendedFilter class.
 * @constructor
 * Deployment filter.
 *
 * @member {string} [provisioningState] Gets or sets the provisioning state.
 * 
 */
export interface DeploymentExtendedFilter {
  provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the GenericResourceFilter class.
 * @constructor
 * Resource filter.
 *
 * @member {string} [resourceType] Gets or sets the resource type.
 * 
 * @member {string} [tagname] Gets or sets the tag name.
 * 
 * @member {string} [tagvalue] Gets or sets the tag value.
 * 
 */
export interface GenericResourceFilter {
  resourceType?: string;
  tagname?: string;
  tagvalue?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceGroupFilter class.
 * @constructor
 * Resource group filter.
 *
 * @member {string} [tagName] Gets or sets the tag name.
 * 
 * @member {string} [tagValue] Gets or sets the tag value.
 * 
 */
export interface ResourceGroupFilter {
  tagName?: string;
  tagValue?: string;
}

/**
 * @class
 * Initializes a new instance of the ManagementLockObject class.
 * @constructor
 * Management lock information.
 *
 * @member {string} [level] Gets or sets the lock level of the management
 * lock. Possible values include: 'NotSpecified', 'CanNotDelete', 'ReadOnly'
 * 
 * @member {string} [notes] Gets or sets the notes of the management lock.
 * 
 * @member {string} [id] Gets or sets the Id of the lock.
 * 
 * @member {string} [type] Gets or sets the type of the lock.
 * 
 * @member {string} [name] Gets or sets the name of the lock.
 * 
 */
export interface ManagementLockObject extends BaseResource {
  level?: string;
  notes?: string;
  id?: string;
  type?: string;
  name?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 * @member {string} [name] Resource name
 * 
 * @member {string} [type] Resource type
 * 
 * @member {string} location Resource location
 * 
 * @member {object} [tags] Resource tags
 * 
 */
export interface Resource extends BaseResource {
  id?: string;
  name?: string;
  type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the SubResource class.
 * @constructor
 * @member {string} [id] Resource Id
 * 
 */
export interface SubResource extends BaseResource {
  id?: string;
}


/**
 * @class
 * Initializes a new instance of the ManagementLockListResult class.
 * @constructor
 * List of management locks.
 *
 * @member {string} [nextLink] Gets or sets the URL to get the next set of
 * results.
 * 
 */
export interface ManagementLockListResult extends Array<ManagementLockObject> {
  nextLink?: string;
}
