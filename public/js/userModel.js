var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: '/user',
  initialize: function(){
    
  },
  setURL: function(id){
    if(id){
      this.urlRoot = this.urlRoot + '/' + id;
    } else {
      this.urlRoot = '/user';
    }
  }

});
