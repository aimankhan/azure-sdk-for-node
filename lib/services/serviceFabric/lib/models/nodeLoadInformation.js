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
 * Initializes a new instance of the NodeLoadInformation class.
 * @constructor
 * The information of the node load
 *
 * @member {string} [nodeName]
 *
 * @member {object} [nodeLoadMetricInformation]
 *
 * @member {string} [nodeLoadMetricInformation.name]
 *
 * @member {string} [nodeLoadMetricInformation.nodeCapacity]
 *
 * @member {string} [nodeLoadMetricInformation.nodeLoad]
 *
 * @member {string} [nodeLoadMetricInformation.nodeRemainingCapacity]
 *
 * @member {boolean} [nodeLoadMetricInformation.isCapacityViolation]
 *
 * @member {string} [nodeLoadMetricInformation.nodeBufferedCapacity]
 *
 * @member {string} [nodeLoadMetricInformation.nodeRemainingBufferedCapacity]
 *
 */
class NodeLoadInformation {
  constructor() {
  }

  /**
   * Defines the metadata of NodeLoadInformation
   *
   * @returns {object} metadata of NodeLoadInformation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeLoadInformation',
      type: {
        name: 'Composite',
        className: 'NodeLoadInformation',
        modelProperties: {
          nodeName: {
            required: false,
            serializedName: 'NodeName',
            type: {
              name: 'String'
            }
          },
          nodeLoadMetricInformation: {
            required: false,
            serializedName: 'NodeLoadMetricInformation',
            type: {
              name: 'Composite',
              className: 'NodeLoadMetricInformation'
            }
          }
        }
      }
    };
  }
}

module.exports = NodeLoadInformation;
