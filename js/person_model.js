import Backbone from 'backbone';

let HeroModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/Heroes',

  idAttribute: 'objectId'

});


export default HeroModel;
