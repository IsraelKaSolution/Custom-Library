/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"student11comsaptrainingux402controls/ux402library/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});