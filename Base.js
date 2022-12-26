AFRAME.registerComponent("base",{
    schema: {
        radius: {type: "number", default: 50},
        height: {type: "number", default: 3},
    },

    init: function(){
        this.el.setAttribute("geometry",{
            primitive: "cylinder",
            radius: this.data.radius,
            height: this.data.height,
        }),

        this.el.setAttribute("material", {color: "#f2095f"});
    }
})