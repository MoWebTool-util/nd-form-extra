/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

var $ = require('jquery');

var Form = require('nd-form');
var FD = require('nd-formdata');
var Queue = require('nd-queue');

module.exports = Form.extend({

  attrs: {
    // name: '',
    // action: '',
    // method: 'PUT',

    plugins: require('./src/plugins'),

    // 表单数据
    formData: {},

    dataParser: function() {
      return new FD(this.getElements()).toJSON();
    },

    // 数据相符校验，用于处理 formData 与 fields 匹配
    // matchers: {
      // test: function(value, match) {
      // return value === match[0].value;
      // }
    // },

    fields: [],

    buttons: [{
      label: '取消',
      type: 'button',
      role: 'form-cancel'
    }, {
      label: '提交',
      type: 'submit',
      role: 'form-submit'
    }],

    setup: function() {
      var that = this;

      // 队列，用于异步处理
      this.queue = new Queue();

      // 插件
      $.each(this.get('plugins'), function(i, item) {
        if (!item.disabled) {
          that.addPlugin(item.name, item.plugin, item.callbacks);
        }
      });
    }
  }

});
