"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierApi = void 0;
const Supplier_1 = require("./Supplier");
const SupplierRequestBuilder_1 = require("./SupplierRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Supplier_1.Supplier;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SUPPLIER_COMPANY: new odata_v2_1.Link('to_SupplierCompany', this, linkedApis[0]),
            TO_SUPPLIER_PURCHASING_ORG: new odata_v2_1.Link('to_SupplierPurchasingOrg', this, linkedApis[1]),
            TO_SUPPLIER_TEXT: new odata_v2_1.Link('to_SupplierText', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new SupplierRequestBuilder_1.SupplierRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Supplier_1.Supplier, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
                ALTERNATIVE_PAYEE_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField('AlternativePayeeAccountNumber', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true),
                PAYMENT_IS_BLOCKED_FOR_SUPPLIER: fieldBuilder.buildEdmTypeField('PaymentIsBlockedForSupplier', 'Edm.Boolean', true),
                POSTING_IS_BLOCKED: fieldBuilder.buildEdmTypeField('PostingIsBlocked', 'Edm.Boolean', true),
                PURCHASING_IS_BLOCKED: fieldBuilder.buildEdmTypeField('PurchasingIsBlocked', 'Edm.Boolean', true),
                SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true),
                SUPPLIER_FULL_NAME: fieldBuilder.buildEdmTypeField('SupplierFullName', 'Edm.String', true),
                SUPPLIER_NAME: fieldBuilder.buildEdmTypeField('SupplierName', 'Edm.String', true),
                VAT_REGISTRATION: fieldBuilder.buildEdmTypeField('VATRegistration', 'Edm.String', true),
                BIRTH_DATE: fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTime', true),
                CONCATENATED_INTERNATIONAL_LOC_NO: fieldBuilder.buildEdmTypeField('ConcatenatedInternationalLocNo', 'Edm.String', true),
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                FISCAL_ADDRESS: fieldBuilder.buildEdmTypeField('FiscalAddress', 'Edm.String', true),
                INDUSTRY: fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_1: fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_2: fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_3: fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true),
                IS_NATURAL_PERSON: fieldBuilder.buildEdmTypeField('IsNaturalPerson', 'Edm.String', true),
                PAYMENT_REASON: fieldBuilder.buildEdmTypeField('PaymentReason', 'Edm.String', true),
                RESPONSIBLE_TYPE: fieldBuilder.buildEdmTypeField('ResponsibleType', 'Edm.String', true),
                SUPLR_QLTY_IN_PROCMT_CERTFN_VALID_TO: fieldBuilder.buildEdmTypeField('SuplrQltyInProcmtCertfnValidTo', 'Edm.DateTime', true),
                SUPLR_QUALITY_MANAGEMENT_SYSTEM: fieldBuilder.buildEdmTypeField('SuplrQualityManagementSystem', 'Edm.String', true),
                SUPPLIER_CORPORATE_GROUP: fieldBuilder.buildEdmTypeField('SupplierCorporateGroup', 'Edm.String', true),
                SUPPLIER_PROCUREMENT_BLOCK: fieldBuilder.buildEdmTypeField('SupplierProcurementBlock', 'Edm.String', true),
                TAX_NUMBER_1: fieldBuilder.buildEdmTypeField('TaxNumber1', 'Edm.String', true),
                TAX_NUMBER_2: fieldBuilder.buildEdmTypeField('TaxNumber2', 'Edm.String', true),
                TAX_NUMBER_3: fieldBuilder.buildEdmTypeField('TaxNumber3', 'Edm.String', true),
                TAX_NUMBER_4: fieldBuilder.buildEdmTypeField('TaxNumber4', 'Edm.String', true),
                TAX_NUMBER_5: fieldBuilder.buildEdmTypeField('TaxNumber5', 'Edm.String', true),
                TAX_NUMBER_RESPONSIBLE: fieldBuilder.buildEdmTypeField('TaxNumberResponsible', 'Edm.String', true),
                TAX_NUMBER_TYPE: fieldBuilder.buildEdmTypeField('TaxNumberType', 'Edm.String', true),
                SUPLR_PROOF_OF_DELIV_RLVT_CODE: fieldBuilder.buildEdmTypeField('SuplrProofOfDelivRlvtCode', 'Edm.String', true),
                BR_TAX_IS_SPLIT: fieldBuilder.buildEdmTypeField('BR_TaxIsSplit', 'Edm.Boolean', true),
                DATA_EXCHANGE_INSTRUCTION_KEY: fieldBuilder.buildEdmTypeField('DataExchangeInstructionKey', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', Supplier_1.Supplier)
            };
        }
        return this._schema;
    }
}
exports.SupplierApi = SupplierApi;
//# sourceMappingURL=SupplierApi.js.map