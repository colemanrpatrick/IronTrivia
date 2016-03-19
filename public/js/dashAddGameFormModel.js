var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/game',
  id: null,
  initialize: function(){
    console.log("Add Game Form Initialized");
  }
});
