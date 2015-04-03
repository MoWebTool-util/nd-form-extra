/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

var Form = require('nd-form');
var Calendar = require('nd-calendar');
var Select = require('nd-select');
var Upload = require('nd-upload');
var Validator = require('nd-validator');

module.exports = Form.extend({

  Plugins: [Calendar, Select, Validator, Upload],

  attrs: {
    pluginCfg: {
      Calendar: {
        listeners: {
          start: function() {
            this.host.after('addField', this.execute);
          }
        }
      },
      Select: {
        listeners: {
          start: function() {
            this.host.after('addField', this.execute);
          }
        }
      },
      Validator: {
        listeners: {
          start: function() {
            var plugin = this;

            plugin.on('export', function(instance) {
              // 异步，添加到队列
              plugin.host.queue.use(function(next) {
                instance.execute(function(err) {
                  if (!err) {
                    next();
                  }
                });
              });
            });
          }
        }
      },
      Upload: {
        listeners: {
          start: function() {
            var plugin = this;

            plugin.on('export', function(instance) {
              // 异步，添加到队列
              plugin.host.queue.use(function(next) {
                instance.execute(function(err) {
                  if (!err) {
                    next();
                  }
                });
              });
            });

            this.host.after('addField', this.execute);
          }
        }
      }
    },

    buttons: [{
      label: '取消',
      type: 'button',
      role: 'form-cancel'
    }, {
      label: '提交',
      type: 'submit',
      role: 'form-submit'
    }]
  }

});
