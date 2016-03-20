var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var tmpl = require('./templates');
var GameModel = require('./gameModel');
var GameView = require('./gameView');

module.exports = Backbone.View.extend({
  url: '/game',
  el: '.join-game-container',
  initialize: function () {
    this.addAll();
    this.listenTo(this.collection, 'update', this.addAll);
    this.listenTo(this.collection, 'change', this.addAll);
  },
  addOne: function (el) {
    var gameView = new GameView({model: el});
    this.$el.append(gameView.render().el);
  },
  addAll: function () {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  },

});
