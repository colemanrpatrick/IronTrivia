var Backbone = require('backbone');
var _ = require('underscore');
var templates = require('./templates');
var GameModel = require('./gameModel');
var $ = require('jquery');

module.exports = Backbone.View.extend({
  collection: null,
  tagName: 'article',
  className: 'game-select',
  template: _.template(templates.joinGame),
  initialize: function(){
    this.$el.append(this.render().el);
  },
  events: {
    'click button[name="join-game"]': 'joinGame'
  },
  joinGame: function(event){
    event.preventDefault();
    Backbone.history.navigate("game", {trigger: true, replace: true});
  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  },

});
