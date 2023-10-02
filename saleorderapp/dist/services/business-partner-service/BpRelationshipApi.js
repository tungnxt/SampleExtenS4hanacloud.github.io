"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpRelationshipApi = void 0;
const BpRelationship_1 = require("./BpRelationship");
const BpRelationshipRequestBuilder_1 = require("./BpRelationshipRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpRelationshipApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpRelationship_1.BpRelationship;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpRelationshipApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpRelationshipRequestBuilder_1.BpRelationshipRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpRelationship_1.BpRelationship, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                RELATIONSHIP_NUMBER: fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false),
                BUSINESS_PARTNER_1: fieldBuilder.buildEdmTypeField('BusinessPartner1', 'Edm.String', false),
                BUSINESS_PARTNER_2: fieldBuilder.buildEdmTypeField('BusinessPartner2', 'Edm.String', false),
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false),
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTime', true),
                IS_STANDARD_RELATIONSHIP: fieldBuilder.buildEdmTypeField('IsStandardRelationship', 'Edm.Boolean', true),
                RELATIONSHIP_CATEGORY: fieldBuilder.buildEdmTypeField('RelationshipCategory', 'Edm.String', true),
                BP_RELATIONSHIP_TYPE: fieldBuilder.buildEdmTypeField('BPRelationshipType', 'Edm.String', true),
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true),
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                LAST_CHANGE_TIME: fieldBuilder.buildEdmTypeField('LastChangeTime', 'Edm.Time', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpRelationship_1.BpRelationship)
            };
        }
        return this._schema;
    }
}
exports.BpRelationshipApi = BpRelationshipApi;
//# sourceMappingURL=BpRelationshipApi.js.map