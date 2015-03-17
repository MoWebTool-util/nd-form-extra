/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

var Calendar = require('nd-calendar');

module.exports = function() {
  var plugin = this,
    host = plugin.host;

  var _widgets = {};

  function addWidget(name, instance) {
    _widgets[name] = instance;
  }

  function renderWidget() {
    host.$('[type="date"],[type="time"],[type="datetime"],[type="datetime-local"]')
    .each(function(i, field) {
      field.type = 'text';
      addWidget(field.name, new Calendar({
        trigger: field,
        align:  {
          baseElement: field,
          baseXY: [0, '100%']
        }
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
