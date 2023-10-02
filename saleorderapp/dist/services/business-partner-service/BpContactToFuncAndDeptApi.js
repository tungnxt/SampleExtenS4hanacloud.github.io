"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpContactToFuncAndDeptApi = void 0;
const BpContactToFuncAndDept_1 = require("./BpContactToFuncAndDept");
const BpContactToFuncAndDeptRequestBuilder_1 = require("./BpContactToFuncAndDeptRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpContactToFuncAndDeptApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpContactToFuncAndDept_1.BpContactToFuncAndDept;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpContactToFuncAndDeptApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpContactToFuncAndDeptRequestBuilder_1.BpContactToFuncAndDeptRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpContactToFuncAndDept_1.BpContactToFuncAndDept, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                RELATIONSHIP_NUMBER: fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false),
                BUSINESS_PARTNER_COMPANY: fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false),
                BUSINESS_PARTNER_PERSON: fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false),
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false),
                CONTACT_PERSON_AUTHORITY_TYPE: fieldBuilder.buildEdmTypeField('ContactPersonAuthorityType', 'Edm.String', true),
                CONTACT_PERSON_DEPARTMENT: fieldBuilder.buildEdmTypeField('ContactPersonDepartment', 'Edm.String', true),
                CONTACT_PERSON_DEPARTMENT_NAME: fieldBuilder.buildEdmTypeField('ContactPersonDepartmentName', 'Edm.String', true),
                CONTACT_PERSON_FUNCTION: fieldBuilder.buildEdmTypeField('ContactPersonFunction', 'Edm.String', true),
                CONTACT_PERSON_FUNCTION_NAME: fieldBuilder.buildEdmTypeField('ContactPersonFunctionName', 'Edm.String', true),
                CONTACT_PERSON_REMARK_TEXT: fieldBuilder.buildEdmTypeField('ContactPersonRemarkText', 'Edm.String', true),
                CONTACT_PERSON_VIP_TYPE: fieldBuilder.buildEdmTypeField('ContactPersonVIPType', 'Edm.String', true),
                EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true),
                FAX_NUMBER: fieldBuilder.buildEdmTypeField('FaxNumber', 'Edm.String', true),
                FAX_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField('FaxNumberExtension', 'Edm.String', true),
                PHONE_NUMBER: fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true),
                PHONE_NUMBER_EXTENSION: fieldBuilder.buildEdmTypeField('PhoneNumberExtension', 'Edm.String', true),
                RELATIONSHIP_CATEGORY: fieldBuilder.buildEdmTypeField('RelationshipCategory', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpContactToFuncAndDept_1.BpContactToFuncAndDept)
            };
        }
        return this._schema;
    }
}
exports.BpContactToFuncAndDeptApi = BpContactToFuncAndDeptApi;
//# sourceMappingURL=BpContactToFuncAndDeptApi.js.map