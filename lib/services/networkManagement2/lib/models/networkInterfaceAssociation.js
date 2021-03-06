/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator 1.0.1.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the NetworkInterfaceAssociation class.
 * @constructor
 * Network interface and its custom security rules.
 *
 * @member {string} [id] Network interface ID.
 *
 * @member {array} [securityRules] Collection of custom security rules.
 *
 */
class NetworkInterfaceAssociation {
  constructor() {
  }

  /**
   * Defines the metadata of NetworkInterfaceAssociation
   *
   * @returns {object} metadata of NetworkInterfaceAssociation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NetworkInterfaceAssociation',
      type: {
        name: 'Composite',
        className: 'NetworkInterfaceAssociation',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          securityRules: {
            required: false,
            serializedName: 'securityRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SecurityRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'SecurityRule'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = NetworkInterfaceAssociation;
