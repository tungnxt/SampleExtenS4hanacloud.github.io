"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerRoleApi = void 0;
const BusinessPartnerRole_1 = require("./BusinessPartnerRole");
const BusinessPartnerRoleRequestBuilder_1 = require("./BusinessPartnerRoleRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerRoleApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartnerRole_1.BusinessPartnerRole;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerRoleApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerRoleRequestBuilder_1.BusinessPartnerRoleRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerRole_1.BusinessPartnerRole, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                BUSINESS_PARTNER_ROLE: fieldBuilder.buildEdmTypeField('BusinessPartnerRole', 'Edm.String', false),
                VALID_FROM: fieldBuilder.buildEdmTypeField('ValidFrom', 'Edm.DateTimeOffset', true),
                VALID_TO: fieldBuilder.buildEdmTypeField('ValidTo', 'Edm.DateTimeOffset', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerRole_1.BusinessPartnerRole)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerRoleApi = BusinessPartnerRoleApi;
//# sourceMappingURL=BusinessPartnerRoleApi.js.map