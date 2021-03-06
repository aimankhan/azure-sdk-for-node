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
 * Initializes a new instance of the BgpPeerStatus class.
 * @constructor
 * BGP peer status details
 *
 * @member {string} [localAddress] The virtual network gateway's local address
 *
 * @member {string} [neighbor] The remote BGP peer
 *
 * @member {number} [asn] The autonomous system number of the remote BGP peer
 *
 * @member {string} [state] The BGP peer state. Possible values include:
 * 'Unknown', 'Stopped', 'Idle', 'Connecting', 'Connected'
 *
 * @member {string} [connectedDuration] For how long the peering has been up
 *
 * @member {number} [routesReceived] The number of routes learned from this
 * peer
 *
 * @member {number} [messagesSent] The number of BGP messages sent
 *
 * @member {number} [messagesReceived] The number of BGP messages received
 *
 */
class BgpPeerStatus {
  constructor() {
  }

  /**
   * Defines the metadata of BgpPeerStatus
   *
   * @returns {object} metadata of BgpPeerStatus
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BgpPeerStatus',
      type: {
        name: 'Composite',
        className: 'BgpPeerStatus',
        modelProperties: {
          localAddress: {
            required: false,
            readOnly: true,
            serializedName: 'localAddress',
            type: {
              name: 'String'
            }
          },
          neighbor: {
            required: false,
            readOnly: true,
            serializedName: 'neighbor',
            type: {
              name: 'String'
            }
          },
          asn: {
            required: false,
            readOnly: true,
            serializedName: 'asn',
            type: {
              name: 'Number'
            }
          },
          state: {
            required: false,
            readOnly: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          connectedDuration: {
            required: false,
            readOnly: true,
            serializedName: 'connectedDuration',
            type: {
              name: 'String'
            }
          },
          routesReceived: {
            required: false,
            readOnly: true,
            serializedName: 'routesReceived',
            type: {
              name: 'Number'
            }
          },
          messagesSent: {
            required: false,
            readOnly: true,
            serializedName: 'messagesSent',
            type: {
              name: 'Number'
            }
          },
          messagesReceived: {
            required: false,
            readOnly: true,
            serializedName: 'messagesReceived',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = BgpPeerStatus;
