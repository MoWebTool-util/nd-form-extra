/**
 * @module: nd-form-extra
 * @author: crossjs <liwenfu@crossjs.com> - 2015-03-16 13:28:48
 */

'use strict';

var Form = require('nd-form');
var Select = require('nd-select');
var Calendar = require('nd-calendar');
var Editor = require('nd-editor');
var Upload = require('nd-upload');
var Validator = require('nd-validator');

module.exports = Form.extend({

  Plugins: [Select, Calendar, Editor, Upload, Validator],

  attrs: {
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
