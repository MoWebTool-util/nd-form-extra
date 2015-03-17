/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

var Upload = require('nd-upload');

module.exports = function() {
  var plugin = this,
    host = plugin.host;

  var _widgets = {};

  function addWidget(name, instance) {
    _widgets[name] = instance;

    // 异步，添加到队列
    host.queue.use(function(next) {
      instance.execute(function(err) {
        if (!err) {
          next();
        }
      });
    });
  }

  function renderWidget() {
    host.$('[type="file"]').each(function(i, field) {
      field.type = 'hidden';
      addWidget(field.name, new Upload({
        trigger: field
      }).render());
    });
  }

  host.after('render', renderWidget);
  host.after('addField', renderWidget);

  plugin.getWidget = function(name) {
    return _widgets[name];
  };

  // 通知就绪
  this.ready();
};
