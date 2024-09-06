sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/FilterOperator",
    'sap/ui/model/Filter',

],
    function (Controller,FilterOperator,Filter) {
        "use strict";

        return Controller.extend("idocmon.controller.idoc_monitor", {
            onInit: function () {

            },
            onBeforeTableBind: function (oEvent) {
                var mBindingParams = oEvent.getParameter("bindingParams");

                var selectedItemsStatus = this.byId('multiComboStatus').getSelectedItems();
                selectedItemsStatus.forEach(function (selectedItem) {
                    var Filter = new sap.ui.model.Filter({
                        path: 'STATUS',
                        operator: FilterOperator.Contains,
                        value1: selectedItem.getKey()
                    });
                    mBindingParams.filters.push(Filter);
                })

                var selectedItemsDirection = this.byId('multiComboDirection').getSelectedItems();
                selectedItemsDirection.forEach(function (selectedItem) {
                    var Filter = new sap.ui.model.Filter({
                        path: 'DIRECT',
                        operator: FilterOperator.Contains,
                        value1: selectedItem.getKey()
                    });
                    mBindingParams.filters.push(Filter);
                })

                var Date = this.getView().byId('DatePicker').getValue();
                var Filter = new sap.ui.model.Filter({
                    path: 'CREDAT',
                    operator: FilterOperator.Contains,
                    value1: Date
                });
                mBindingParams.filters.push(Filter);

                var MessageType = this.getView().byId('MessageTypeInput').getValue();
                var Filter = new sap.ui.model.Filter({
                    path: 'MESTYP',
                    operator: FilterOperator.Contains,
                    value1: MessageType
                });
                mBindingParams.filters.push(Filter);



            },
            onMessageTypeValueHelp: function (oEvent) {
                console.log("Show dialog");
                var sInputValue = oEvent.getSource().getValue()

                if(!this._ValueHelpDialog){
                    this._ValueHelpDialog = sap.ui.xmlfragment(this.getView().getId(),"idocmon.view.MessageTypeValueHelp", this);
                    this.getView().addDependent(this._ValueHelpDialog);
                }
    
                this._ValueHelpDialog.getBinding("items").filter([new Filter("MESTYP", FilterOperator.Contains, sInputValue)]);
                this._ValueHelpDialog.open();

            },
            onValueHelpSearch: function(oEvent){
                var sValue = oEvent.getParameter("value");
                var oFilter = new Filter("MESTYP", FilterOperator.Contains, sValue);
                oEvent.getSource().getBinding("items").filter([oFilter]);
            },
            onValueHelpClose: function(oEvent){
                var oSelectedItem = oEvent.getParameter("selectedItem");
                oEvent.getSource().getBinding("items").filter([]);
    
                if (!oSelectedItem) {
                    return;
                }
                console.log(oSelectedItem.getTitle());
                this.byId("MessageTypeInput").setValue(oSelectedItem.getTitle());


            }
        });
    });
