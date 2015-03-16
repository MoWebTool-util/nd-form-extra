/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

module.exports = {
  selector: {
    // disabled: true,
    name: 'selector',
    plugin: require('./plugins/selector')
    // callbacks needed
  },
  calendar: {
    // disabled: true,
    name: 'calendar',
    plugin: require('./plugins/calendar')
    // callbacks needed
  },
  validator: {
    // disabled: true,
    name: 'validator',
    plugin: require('./plugins/validator')
    // callbacks needed
  },
  uploader: {
    // disabled: true,
    name: 'uploader',
    plugin: require('./plugins/uploader')
    // callbacks needed
  }
};
