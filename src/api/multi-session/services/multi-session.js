'use strict';

/**
 * multi-session service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::multi-session.multi-session');
