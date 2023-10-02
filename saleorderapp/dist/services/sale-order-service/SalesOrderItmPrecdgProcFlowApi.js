"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItmPrecdgProcFlowApi = void 0;
const SalesOrderItmPrecdgProcFlow_1 = require("./SalesOrderItmPrecdgProcFlow");
const SalesOrderItmPrecdgProcFlowRequestBuilder_1 = require("./SalesOrderItmPrecdgProcFlowRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItmPrecdgProcFlowApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderItmPrecdgProcFlow_1.SalesOrderItmPrecdgProcFlow;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderItmPrecdgProcFlowApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0]),
            TO_SALES_ORDER_ITEM: new odata_v2_1.OneToOneLink('to_SalesOrderItem', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderItmPrecdgProcFlowRequestBuilder_1.SalesOrderItmPrecdgProcFlowRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderItmPrecdgProcFlow_1.SalesOrderItmPrecdgProcFlow, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                DOC_RELATIONSHIP_UUID: fieldBuilder.buildEdmTypeField('DocRelationshipUUID', 'Edm.Guid', false),
                PRECEDING_DOCUMENT: fieldBuilder.buildEdmTypeField('PrecedingDocument', 'Edm.String', true),
                PRECEDING_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField('PrecedingDocumentItem', 'Edm.String', true),
                PRECEDING_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('PrecedingDocumentCategory', 'Edm.String', true),
                PROCESS_FLOW_LEVEL: fieldBuilder.buildEdmTypeField('ProcessFlowLevel', 'Edm.String', true),
                RELATED_PROC_FLOW_DOC_STS_FIELD_NAME: fieldBuilder.buildEdmTypeField('RelatedProcFlowDocStsFieldName', 'Edm.String', true),
                SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField('SDProcessStatus', 'Edm.String', true),
                ACCOUNTING_TRANSFER_STATUS: fieldBuilder.buildEdmTypeField('AccountingTransferStatus', 'Edm.String', true),
                PRELIM_BILLING_DOCUMENT_STATUS: fieldBuilder.buildEdmTypeField('PrelimBillingDocumentStatus', 'Edm.String', true),
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderItmPrecdgProcFlow_1.SalesOrderItmPrecdgProcFlow)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderItmPrecdgProcFlowApi = SalesOrderItmPrecdgProcFlowApi;
//# sourceMappingURL=SalesOrderItmPrecdgProcFlowApi.js.map