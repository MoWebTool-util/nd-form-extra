/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

var Form = require('nd-form');
var FD = require('nd-formdata');
var Queue = require('nd-queue');

module.exports = Form.extend({

  attrs: {
    plugins: require('./src/plugins'),

    // 表单数据
    formData: {},

    dataParser: function() {
      return new FD(this.getElements()).toJSON();
    },

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

    afterRender: function() {
      // 队列，用于异步处理
      this.queue = new Queue();
    }
  },

  getItem: function(name) {
    return this.$('[name="' + name + '"]').closest('[data-role="form-item"]');
  }

});
