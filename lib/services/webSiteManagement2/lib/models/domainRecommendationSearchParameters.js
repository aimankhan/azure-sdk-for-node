/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the DomainRecommendationSearchParameters class.
 * @constructor
 * Domain recommendation search parameters
 * @member {string} [keywords] Keywords to be used for generating domain
 * recommendations
 * 
 * @member {number} [maxDomainRecommendations] Maximum number of
 * recommendations
 * 
 */
function DomainRecommendationSearchParameters() {
}

/**
 * Defines the metadata of DomainRecommendationSearchParameters
 *
 * @returns {object} metadata of DomainRecommendationSearchParameters
 *
 */
DomainRecommendationSearchParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DomainRecommendationSearchParameters',
    type: {
      name: 'Composite',
      className: 'DomainRecommendationSearchParameters',
      modelProperties: {
        keywords: {
          required: false,
          serializedName: 'keywords',
          type: {
            name: 'String'
          }
        },
        maxDomainRecommendations: {
          required: false,
          serializedName: 'maxDomainRecommendations',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = DomainRecommendationSearchParameters;