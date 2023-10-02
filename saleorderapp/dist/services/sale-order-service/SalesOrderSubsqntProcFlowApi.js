"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderSubsqntProcFlowApi = void 0;
const SalesOrderSubsqntProcFlow_1 = require("./SalesOrderSubsqntProcFlow");
const SalesOrderSubsqntProcFlowRequestBuilder_1 = require("./SalesOrderSubsqntProcFlowRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderSubsqntProcFlowApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderSubsqntProcFlow_1.SalesOrderSubsqntProcFlow;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderSubsqntProcFlowApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderSubsqntProcFlowRequestBuilder_1.SalesOrderSubsqntProcFlowRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderSubsqntProcFlow_1.SalesOrderSubsqntProcFlow, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                DOC_RELATIONSHIP_UUID: fieldBuilder.buildEdmTypeField('DocRelationshipUUID', 'Edm.Guid', false),
                SUBSEQUENT_DOCUMENT: fieldBuilder.buildEdmTypeField('SubsequentDocument', 'Edm.String', true),
                SUBSEQUENT_DOCUMENT_CATEGORY: fieldBuilder.buildEdmTypeField('SubsequentDocumentCategory', 'Edm.String', true),
                PROCESS_FLOW_LEVEL: fieldBuilder.buildEdmTypeField('ProcessFlowLevel', 'Edm.String', true),
                OVERALL_SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField('OverallSDProcessStatus', 'Edm.String', true),
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderSubsqntProcFlow_1.SalesOrderSubsqntProcFlow)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderSubsqntProcFlowApi = SalesOrderSubsqntProcFlowApi;
//# sourceMappingURL=SalesOrderSubsqntProcFlowApi.js.map