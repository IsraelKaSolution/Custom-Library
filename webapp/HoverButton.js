sap.ui.define([
    "sap/m/Button"
], function ( Button) {
    "use strict";

    return Button.extend("student11.com.sap.training.ux402.controls.ux402library.HoverButton", {
        metadata: {
            properties: {
                "allowHover": {
                    type: "boolean",
                    defaultValue: false
                },
                "hoverText": {
                    type: "string"
                }
            },
            events: {
                "hover": {}
            }
        },

        onmouseover: function (oEvent) {
            if (this.getAllowHover()) {
                this.fireHover();
            }
        },
        renderer: {}

    });
});