var Backbone = require('backbone');

module.exports =Backbone.Collection.extend({
  urlRoot: '/score',
  id: null,
  model: scoreModel,

  init:function(){
    console.log('score model initialized');
  }
});
