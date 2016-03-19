var Backbone = require('backbone');

module.exports =Backbone.scoreModel.extend({
  urlRoot: '/score',
  id: null,
  model: scoreModel,

  init:function(){
    console.log('score model initialized');
  }
  // "isCorrct"  "pointValue"//
});
