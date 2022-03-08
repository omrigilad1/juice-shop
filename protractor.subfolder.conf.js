/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */
const a = 1
const protractorConfig = require('./protractor.conf.js').config

protractorConfig.baseUrl = 'http://localhost:3001/subfolder'
exports.config = protractorConfig
