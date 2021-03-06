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

/**
 * @class
 * Initializes a new instance of the RouteTableListResult class.
 * @constructor
 * Response for the ListRouteTable API service call.
 *
 * @member {string} [nextLink] The URL to get the next set of results.
 *
 */
class RouteTableListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RouteTableListResult
   *
   * @returns {object} metadata of RouteTableListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RouteTableListResult',
      type: {
        name: 'Composite',
        className: 'RouteTableListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RouteTableElementType',
                  type: {
                    name: 'Composite',
                    className: 'RouteTable'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RouteTableListResult;
