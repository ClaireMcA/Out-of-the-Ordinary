'use strict';

/**
 * multi-session router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::multi-session.multi-session');
