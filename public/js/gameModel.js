var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/game',
  initialize: function(){
  },
  updateURL: function(id){
    this.urlRoot = this.urlRoot + '/' + id;
  }
});
