'use strict';

/**
 * odd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::odd.odd');
