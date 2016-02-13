/**
 * @module FormExtra
 * @author crossjs <liwenfu@crossjs.com>
 */

'use strict';

var __ = require('nd-i18n');
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
      label: __('取消'),
      type: 'button',
      role: 'form-cancel'
    }, {
      label: __('提交'),
      type: 'submit',
      role: 'form-submit'
    }]
  }

});
