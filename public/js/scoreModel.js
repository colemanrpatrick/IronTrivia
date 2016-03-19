var Backbone = require('backbone');

module.exports =Backbone.Model.extend({
  urlRoot: '/score',
  id: null,
  init:function(){
    console.log('score model initialized');
  }
});
