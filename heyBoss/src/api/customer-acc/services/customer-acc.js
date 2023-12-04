'use strict';

/**
 * customer-acc service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-acc.customer-acc');
