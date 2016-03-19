var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var DashboardModel = require('./dashboardModel');
var $ = require('jquery');

module.exports = Backbone.View.extend({
  collection: null,
  el: // fill in
  template: // fill in _.template(),
  initialize: function(){
    this.$el.append(this.render().el);
    this.model = new DashboardModel({});
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  },
  events:{
    // 'listender delegator': 'function',
  }

});
