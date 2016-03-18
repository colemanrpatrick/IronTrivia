var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/login',
  initialize: function(){
    console.log("from login model")
  }
});
