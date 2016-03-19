var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var $ = require('jquery');
var DashboardAddGameView = require('./dashAddGameView');
var DashboardAddGameFormModel = require('./dashAddGameFormModel');
var UserModel = require('./userModel');

module.exports = Backbone.View.extend({
  activeUser: null,
  collection: null,
  el: '.dashboard',
  template: _.template(tmpl.dashView),
  initialize: function(){
    this.$el.append(this.render().el);
    var DashAddFormView = new DashboardAddGameView();
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  }

});
