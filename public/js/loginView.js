var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var LoginModel = require('./loginModel');
var $ = require('jquery');
// fill in - require for model

module.exports = Backbone.View.extend({
  collection: null,
  el: '.loginForm',
  template: _.template(tmpl.loginForm),
  initialize: function(){
    this.$el.append(this.render().el);
    this.model = new LoginModel({});
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  },
  events:{
    'click button[name="login"]': 'login',
    'click button[name="addUser"]': 'addUser'
  },
  login: function(event){
    event.preventDefault();
    this.model.set({
      username: this.$el.find('input[name="username"]').val(),
      password: this.$el.find('input[name="password"]').val()
    });
    this.$el.find('input').val('');
    this.model.save();
  },
  addUser: function(event){
    event.preventDefault();

  },
});
