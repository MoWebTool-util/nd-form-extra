/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

var Select = require('nd-select');

module.exports = function() {
  var plugin = this,
    host = plugin.host;

  var _widgets = {};

  function addWidget(name, instance) {
    _widgets[name] = instance;
  }

  host.after('render', function() {
    host.$('select').each(function(i, field) {
      addWidget(field.name, new Select({
        trigger: field
      }).render());
    });
  });

  plugin.getWidget = function(name) {
    return _widgets[name];
  };

  // 通知就绪
  this.ready();
};
