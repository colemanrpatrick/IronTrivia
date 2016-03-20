var Backbone = require('backbone');
var GameModel = require('./gameModel');

module.exports = Backbone.Collection.extend({
  model: GameModel,
  url: '/game',
  initialize: function(){}
})
