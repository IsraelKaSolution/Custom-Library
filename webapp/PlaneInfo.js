sap.ui.define([
	"sap/ui/core/Control",
    "student11/com/sap/training/ux402/controls/ux402library/PlaneInfoRenderer"
], function(
	Control, PlaneInfoRenderer
) {
	"use strict";

	return Control.extend("student11.com.sap.training.ux402.controls.ux402library.PlaneInfo", {
        metadata: {
            properties: {
                "seatsMax": {
                    type: "string"
                },
                "seatsOcc": {
                    type: "string"
                },
                "planeType": {
                    type: "string"
                },
            }
        },

        redenrer: PlaneInfoRenderer
	});
});