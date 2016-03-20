var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var UserModel = require('./userModel');
var $ = require('jquery');

module.exports = Backbone.View.extend({
  el: '.addUserForm',
  template: _.template(tmpl.addForm),
  initialize: function(){
    this.$el.append(this.render().el);
    this.model = new UserModel({});
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  },
  events:{
    'click button[name="newUser"]': 'showAdd',
    'click button[name="addUser"]': 'addUser'
  },
  showAdd: function(event){
    event.preventDefault();
    this.$el.find('.addUser').fadeIn(100).toggleClass('hide');
  },
  addUser: function(event){
    event.preventDefault();
    var password1 = this.$el.find('input[name="password"]').val();
    var password2 = this.$el.find('input[name="passwordConfirm"]').val();
    if(password1 === password2){
      this.model.set({
        id: null,
        userName: this.$el.find('input[name="username"]').val(),
        passwordHash: password1,
        isReady: null,
        hasAnswered: null,
      });
      this.$el.find('input').val('');
      this.model.save();
      this.$el.find('.addUser').fadeOut().toggleClass('hide');
    }
  },

});
