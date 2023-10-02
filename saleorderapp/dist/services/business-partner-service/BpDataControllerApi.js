"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpDataControllerApi = void 0;
const BpDataController_1 = require("./BpDataController");
const BpDataControllerRequestBuilder_1 = require("./BpDataControllerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpDataControllerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpDataController_1.BpDataController;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpDataControllerApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpDataControllerRequestBuilder_1.BpDataControllerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpDataController_1.BpDataController, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                DATA_CONTROLLER: fieldBuilder.buildEdmTypeField('DataController', 'Edm.String', false),
                PURPOSE_FOR_PERSONAL_DATA: fieldBuilder.buildEdmTypeField('PurposeForPersonalData', 'Edm.String', false),
                DATA_CONTROL_ASSIGNMENT_STATUS: fieldBuilder.buildEdmTypeField('DataControlAssignmentStatus', 'Edm.String', true),
                BP_DATA_CONTROLLER_IS_DERIVED: fieldBuilder.buildEdmTypeField('BPDataControllerIsDerived', 'Edm.String', true),
                PURPOSE_DERIVED: fieldBuilder.buildEdmTypeField('PurposeDerived', 'Edm.String', true),
                PURPOSE_TYPE: fieldBuilder.buildEdmTypeField('PurposeType', 'Edm.String', true),
                BUSINESS_PURPOSE_FLAG: fieldBuilder.buildEdmTypeField('BusinessPurposeFlag', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpDataController_1.BpDataController)
            };
        }
        return this._schema;
    }
}
exports.BpDataControllerApi = BpDataControllerApi;
//# sourceMappingURL=BpDataControllerApi.js.map