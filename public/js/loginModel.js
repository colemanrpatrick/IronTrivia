var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/user',
  id: null,
  initialize: function(){
    console.log("from login model")
  }
});
