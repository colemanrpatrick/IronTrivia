var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
var GameModel = require('./gameModel');
var $ = require('jquery');

module.exports = Backbone.View.extend({
  collection: null,
  el: // fill in class, id or tagName
  template: // fill in _.template(),
  initialize: function(){
    this.$el.append(this.render().el);
    this.model = new GameModel({});
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  },
  events:{
    // fill in 'listener delegator': 'function',
  }
});
