sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterOperator"

],
function (Controller,FilterOperator) {
    "use strict";

    return Controller.extend("idocmon.controller.idoc_monitor", {
        onInit: function () {

        },
        onBeforeTableBind: function(oEvent){
            var mBindingParams = oEvent.getParameter("bindingParams");
            
            var selectedItemsStatus = this.byId('multiComboStatus').getSelectedItems();
            selectedItemsStatus.forEach(function(selectedItem){
                var Filter = new sap.ui.model.Filter({
                    path: 'STATUS',
                    operator: FilterOperator.Contains,
                    value1: selectedItem.getKey()});
                mBindingParams.filters.push(Filter);
            })

            var selectedItemsDirection = this.byId('multiComboDirection').getSelectedItems();
            selectedItemsDirection.forEach(function(selectedItem){
                var Filter = new sap.ui.model.Filter({
                    path: 'DIRECT',
                    operator: FilterOperator.Contains,
                    value1: selectedItem.getKey()});
                mBindingParams.filters.push(Filter);
            })
            console.log("Date change triggered!")
            console.log(this.getView().byId('DatePicker').getValue());

            var Date = this.getView().byId('DatePicker').getValue();
            var Filter = new sap.ui.model.Filter({
                path: 'CREDAT',
                operator: FilterOperator.Contains,
                value1: Date });
            mBindingParams.filters.push(Filter);


        }
    });
});
