/*global QUnit*/

sap.ui.define([
	"idoc_mon/controller/idoc_monitor.controller"
], function (Controller) {
	"use strict";

	QUnit.module("idoc_monitor Controller");

	QUnit.test("I should test the idoc_monitor controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
