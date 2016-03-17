var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var templates = require('./templates');
var QuestionModel = require('./questionModel');

module.exports = Backbone.View.extend({
  model: null,
  tagName: 'div',
  className: 'row',
  template: _.template(templates.bitter),
  events: {
    'click .fa-pencil-square-o': 'showEdit',
    'click button[name="submitEdit"]': 'submitEdit',
    'click .fa-trash-o': 'delete',
    'dblclick .content': 'detailView'
  },
  showEdit: function(event){
    event.preventDefault();
    var formTmpl = _.template(templates.editForm);
    var output = formTmpl(this.model.toJSON());
    this.$el.find('.editForm').html(output);
  },
  submitEdit: function(event){
    event.preventDefault();
    this.model.set({
      content: this.$el.find('textarea[name="content"]').val(),
      img: this.$el.find('input[name="img"]').val(),
    });
    if(!this.model.hasChanged()){
      this.$el.find('.editForm').html('');
    };
    this.model.save();
  },
  delete: function(){
    this.model.destroy();
  },
  detail: function(){},
  initialize: function(){

  },
  render: function(){
    var markup = this.template(this.model.toJSON());
    console.log(markup);
    this.$el.append(markup);
    console.log(this.$el);
    return this;
  },

});
