var Backbone = require('backbone');
var _ = require('underscore');
var tmpl= require('./templates');
// fill in - require for model

module.exports = Backbone.View.extend({
  collection:null,
  el: // fill in - class, id, or whater ,
  template: _.template(tmpl.newBitterForm),
  initialize: function(){
    if(!this.model){
      // fill in - this.model = new Model({});
    };
    this.listenTo(this.model, 'change', this.addAll);
    this.listenTo(this.model, 'update', this.addAll);
    this.render();
  },
  render: function(){
    var markup = this.template();
    this.$el.html(markup);
    return this;
  },
  events:{
    // fill in - 'listener, delegation' : 'function'
  }
});
