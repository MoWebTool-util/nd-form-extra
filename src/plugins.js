/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

module.exports = {
  selector: {
    plugin: require('./plugins/selector')
  },
  calendar: {
    plugin: require('./plugins/calendar')
  },
  validator: {
    plugin: require('./plugins/validator')
  },
  uploader: {
    plugin: require('./plugins/uploader')
  }
};
