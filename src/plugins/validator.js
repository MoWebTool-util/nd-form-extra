/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

var Validator = require('nd-validator');

module.exports = function() {
  var plugin = this,
    host = plugin.host;

  host.after('render', function() {
    var validator = new Validator({
      element: host.element
    });

    // 异步，添加到队列
    host.queue.use(function(next) {
      validator.execute(function(err) {
        if (!err) {
          next();
        }
      });
    });
  });

  // 通知就绪
  this.ready();
};
