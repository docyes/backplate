define(['underscore', 'backbone', 'mixins/modelcollection'], function(_, Backbone, modelcollectionMixin) {
    var Model = Backbone.Model.extend({
        //TBD.
    });
    _.extend(Model.prototype, modelcollectionMixin);
    return Model;
})
