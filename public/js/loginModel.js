var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: null,
  id: null,
  initialize: function(){

  },
  buildURL: function(){
    url = '/user/' + this.toJSON().userName;
    this.urlRoot = url;
  }
});
