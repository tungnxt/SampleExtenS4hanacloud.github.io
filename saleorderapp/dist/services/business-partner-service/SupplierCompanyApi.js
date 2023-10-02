"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCompanyApi = void 0;
const SupplierCompany_1 = require("./SupplierCompany");
const SupplierCompanyRequestBuilder_1 = require("./SupplierCompanyRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierCompanyApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SupplierCompany_1.SupplierCompany;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SupplierCompanyApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_COMPANY_TEXT: new odata_v2_1.Link('to_CompanyText', this, linkedApis[0]),
            TO_SUPPLIER: new odata_v2_1.OneToOneLink('to_Supplier', this, linkedApis[1]),
            TO_SUPPLIER_DUNNING: new odata_v2_1.Link('to_SupplierDunning', this, linkedApis[2]),
            TO_SUPPLIER_WITH_HOLDING_TAX: new odata_v2_1.Link('to_SupplierWithHoldingTax', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new SupplierCompanyRequestBuilder_1.SupplierCompanyRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SupplierCompany_1.SupplierCompany, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', false),
                COMPANY_CODE: fieldBuilder.buildEdmTypeField('CompanyCode', 'Edm.String', false),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                COMPANY_CODE_NAME: fieldBuilder.buildEdmTypeField('CompanyCodeName', 'Edm.String', true),
                PAYMENT_BLOCKING_REASON: fieldBuilder.buildEdmTypeField('PaymentBlockingReason', 'Edm.String', true),
                SUPPLIER_IS_BLOCKED_FOR_POSTING: fieldBuilder.buildEdmTypeField('SupplierIsBlockedForPosting', 'Edm.Boolean', true),
                ACCOUNTING_CLERK: fieldBuilder.buildEdmTypeField('AccountingClerk', 'Edm.String', true),
                ACCOUNTING_CLERK_FAX_NUMBER: fieldBuilder.buildEdmTypeField('AccountingClerkFaxNumber', 'Edm.String', true),
                ACCOUNTING_CLERK_PHONE_NUMBER: fieldBuilder.buildEdmTypeField('AccountingClerkPhoneNumber', 'Edm.String', true),
                SUPPLIER_CLERK: fieldBuilder.buildEdmTypeField('SupplierClerk', 'Edm.String', true),
                SUPPLIER_CLERK_URL: fieldBuilder.buildEdmTypeField('SupplierClerkURL', 'Edm.String', true),
                PAYMENT_METHODS_LIST: fieldBuilder.buildEdmTypeField('PaymentMethodsList', 'Edm.String', true),
                PAYMENT_REASON: fieldBuilder.buildEdmTypeField('PaymentReason', 'Edm.String', true),
                PAYMENT_TERMS: fieldBuilder.buildEdmTypeField('PaymentTerms', 'Edm.String', true),
                CLEAR_CUSTOMER_SUPPLIER: fieldBuilder.buildEdmTypeField('ClearCustomerSupplier', 'Edm.Boolean', true),
                IS_TO_BE_LOCALLY_PROCESSED: fieldBuilder.buildEdmTypeField('IsToBeLocallyProcessed', 'Edm.Boolean', true),
                ITEM_IS_TO_BE_PAID_SEPARATELY: fieldBuilder.buildEdmTypeField('ItemIsToBePaidSeparately', 'Edm.Boolean', true),
                PAYMENT_IS_TO_BE_SENT_BY_EDI: fieldBuilder.buildEdmTypeField('PaymentIsToBeSentByEDI', 'Edm.Boolean', true),
                HOUSE_BANK: fieldBuilder.buildEdmTypeField('HouseBank', 'Edm.String', true),
                CHECK_PAID_DURATION_IN_DAYS: fieldBuilder.buildEdmTypeField('CheckPaidDurationInDays', 'Edm.Decimal', true),
                CURRENCY: fieldBuilder.buildEdmTypeField('Currency', 'Edm.String', true),
                BILL_OF_EXCH_LMT_AMT_IN_CO_CODE_CRCY: fieldBuilder.buildEdmTypeField('BillOfExchLmtAmtInCoCodeCrcy', 'Edm.Decimal', true),
                SUPPLIER_CLERK_ID_BY_SUPPLIER: fieldBuilder.buildEdmTypeField('SupplierClerkIDBySupplier', 'Edm.String', true),
                RECONCILIATION_ACCOUNT: fieldBuilder.buildEdmTypeField('ReconciliationAccount', 'Edm.String', true),
                INTEREST_CALCULATION_CODE: fieldBuilder.buildEdmTypeField('InterestCalculationCode', 'Edm.String', true),
                INTEREST_CALCULATION_DATE: fieldBuilder.buildEdmTypeField('InterestCalculationDate', 'Edm.DateTime', true),
                INTRST_CALC_FREQUENCY_IN_MONTHS: fieldBuilder.buildEdmTypeField('IntrstCalcFrequencyInMonths', 'Edm.String', true),
                SUPPLIER_HEAD_OFFICE: fieldBuilder.buildEdmTypeField('SupplierHeadOffice', 'Edm.String', true),
                ALTERNATIVE_PAYEE: fieldBuilder.buildEdmTypeField('AlternativePayee', 'Edm.String', true),
                LAYOUT_SORTING_RULE: fieldBuilder.buildEdmTypeField('LayoutSortingRule', 'Edm.String', true),
                APAR_TOLERANCE_GROUP: fieldBuilder.buildEdmTypeField('APARToleranceGroup', 'Edm.String', true),
                SUPPLIER_CERTIFICATION_DATE: fieldBuilder.buildEdmTypeField('SupplierCertificationDate', 'Edm.DateTime', true),
                SUPPLIER_ACCOUNT_NOTE: fieldBuilder.buildEdmTypeField('SupplierAccountNote', 'Edm.String', true),
                WITHHOLDING_TAX_COUNTRY: fieldBuilder.buildEdmTypeField('WithholdingTaxCountry', 'Edm.String', true),
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                CASH_PLANNING_GROUP: fieldBuilder.buildEdmTypeField('CashPlanningGroup', 'Edm.String', true),
                IS_TO_BE_CHECKED_FOR_DUPLICATES: fieldBuilder.buildEdmTypeField('IsToBeCheckedForDuplicates', 'Edm.Boolean', true),
                MINORITY_GROUP: fieldBuilder.buildEdmTypeField('MinorityGroup', 'Edm.String', true),
                SUPPLIER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('SupplierAccountGroup', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SupplierCompany_1.SupplierCompany)
            };
        }
        return this._schema;
    }
}
exports.SupplierCompanyApi = SupplierCompanyApi;
//# sourceMappingURL=SupplierCompanyApi.js.map