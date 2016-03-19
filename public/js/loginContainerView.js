var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var $ = require('jquery');
var LoginModel = require('./loginModel');
var LoginView = require('./loginView');
var AddUserView = require('./addUserView');

module.exports = Backbone.View.extend({
  collection: null,
  el: '.login',
  template: _.template(tmpl.login),
  initialize: function(){
    this.$el.append(this.render().el);
    var LogView = new LoginView();
    var AddUsrView = new AddUserView();
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  }

});
