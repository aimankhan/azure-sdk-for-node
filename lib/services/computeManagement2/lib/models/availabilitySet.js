/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the AvailabilitySet class.
 * @constructor
 * Create or update availability set parameters.
 *
 * @member {number} [platformUpdateDomainCount] Update Domain count.
 *
 * @member {number} [platformFaultDomainCount] Fault Domain count.
 *
 * @member {array} [virtualMachines] A list of references to all virtual
 * machines in the availability set.
 *
 * @member {array} [statuses] The resource status information.
 *
 * @member {object} [sku] Sku of the availability set
 *
 * @member {string} [sku.name] The sku name.
 *
 * @member {string} [sku.tier] The sku tier.
 *
 * @member {number} [sku.capacity] The sku capacity.
 *
 */
class AvailabilitySet extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AvailabilitySet
   *
   * @returns {object} metadata of AvailabilitySet
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailabilitySet',
      type: {
        name: 'Composite',
        className: 'AvailabilitySet',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          platformUpdateDomainCount: {
            required: false,
            serializedName: 'properties.platformUpdateDomainCount',
            type: {
              name: 'Number'
            }
          },
          platformFaultDomainCount: {
            required: false,
            serializedName: 'properties.platformFaultDomainCount',
            type: {
              name: 'Number'
            }
          },
          virtualMachines: {
            required: false,
            serializedName: 'properties.virtualMachines',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SubResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'SubResource'
                  }
              }
            }
          },
          statuses: {
            required: false,
            readOnly: true,
            serializedName: 'properties.statuses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InstanceViewStatusElementType',
                  type: {
                    name: 'Composite',
                    className: 'InstanceViewStatus'
                  }
              }
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailabilitySet;
