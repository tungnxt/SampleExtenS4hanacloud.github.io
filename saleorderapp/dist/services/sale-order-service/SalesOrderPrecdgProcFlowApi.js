"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderPrecdgProcFlowApi = void 0;
const SalesOrderPrecdgProcFlow_1 = require("./SalesOrderPrecdgProcFlow");
const SalesOrderPrecdgProcFlowRequestBuilder_1 = require("./SalesOrderPrecdgProcFlowRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderPrecdgProcFlowApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderPrecdgProcFlow_1.SalesOrderPrecdgProcFlow;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderPrecdgProcFlowApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderPrecdgProcFlowRequestBuilder_1.SalesOrderPrecdgProcFlowRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderPrecdgProcFlow_1.SalesOrderPrecdgProcFlow, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                DOC_RELATIONSHIP_UUID: fieldBuilder.buildEdmTypeField('DocRelationshipUUID', 'Edm.Guid', false),
                PRECEDING_DOCUMENT: fieldBuilder.buildEdmTypeField('PrecedingDocument', 'Edm.String', true),
                PRECEDING_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('PrecedingDocumentCategory', 'Edm.String', true),
                PROCESS_FLOW_LEVEL: fieldBuilder.buildEdmTypeField('ProcessFlowLevel', 'Edm.String', true),
                OVERALL_SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField('OverallSDProcessStatus', 'Edm.String', true),
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderPrecdgProcFlow_1.SalesOrderPrecdgProcFlow)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderPrecdgProcFlowApi = SalesOrderPrecdgProcFlowApi;
//# sourceMappingURL=SalesOrderPrecdgProcFlowApi.js.map