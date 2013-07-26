// initialize the namespace
var RM = {};

// initalize ext namespace
RM.ext = {};

// define Class extends
RM.ext.Class = Class.extend({
    parent: null,
    init: function(data, parent) {
        this.data = data;
        this.setId(this.data.id);
        if (parent != undefined) {
            this.setParent(parent);
        }
    },
    setId: function(id) {
        this.id = id;
        return this;
    },
    getId: function() {
        return this.id;
    },
    getData: function() {
        return this.data;
    },
    setParent: function(parent) {
        this.parent = parent;
        return this;
    },
    getParent: function() {
        return this.parent;
    },
    getRenderer: function() {
        return this.getParent().getRenderer();
    },
});

