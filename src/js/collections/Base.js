define(['underscore', 'backbone', 'mixins/modelcollection'], function(_, Backbone, modelcollectionMixin) {
    var Collection = Backbone.Collection.extend({
        //TBD.
    });
    _.extend(Collection.prototype, modelcollectionMixin);
    return Collection;
})
