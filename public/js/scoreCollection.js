var Backbone = require('backbone');
var LikeModel = require('./likesModel');
module.exports = Backbone.scoreCollection.extend({
  model: scoreModel,
  initialize: function () {
    console.log('score Collection');
  }
