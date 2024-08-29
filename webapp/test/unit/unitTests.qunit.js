/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"idoc_mon/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
