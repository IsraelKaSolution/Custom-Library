sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/library"], (jquery, library) => {
    "use strict";

    sap.ui.getCore().initLibrary({
        name:"student11.com.sap.training.ux402.controls.ux402library",
        version:"1.0.0",
        dependencies: ["sap.ui.core"],
        types:[],
        interfaces: [],
        controls: [
            "student11.com.sap.training.ux402.controls.ux402library.PlaneInfo",
            "student11.com.sap.training.ux402.controls.ux402library.HoverButton",
            "student11.com.sap.training.ux402.controls.ux402library.PlaneInfoRenderer"
        ],
        elements: [

        ],
        noLibraryCSS: true   
    })

    return student11.com.sap.training.ux402.controls.ux402library;

}, false);