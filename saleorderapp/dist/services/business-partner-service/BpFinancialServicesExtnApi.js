"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFinancialServicesExtnApi = void 0;
const BpFinancialServicesExtn_1 = require("./BpFinancialServicesExtn");
const BpFinancialServicesExtnRequestBuilder_1 = require("./BpFinancialServicesExtnRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpFinancialServicesExtnApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpFinancialServicesExtn_1.BpFinancialServicesExtn;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpFinancialServicesExtnApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpFinancialServicesExtnRequestBuilder_1.BpFinancialServicesExtnRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpFinancialServicesExtn_1.BpFinancialServicesExtn, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                BUSINESS_PARTNER_IS_VIP: fieldBuilder.buildEdmTypeField('BusinessPartnerIsVIP', 'Edm.Boolean', true),
                TRADING_PARTNER: fieldBuilder.buildEdmTypeField('TradingPartner', 'Edm.String', true),
                FACTORY_CALENDAR: fieldBuilder.buildEdmTypeField('FactoryCalendar', 'Edm.String', true),
                BUSINESS_PARTNER_OFFICE_COUNTRY: fieldBuilder.buildEdmTypeField('BusinessPartnerOfficeCountry', 'Edm.String', true),
                BUSINESS_PARTNER_OFFICE_REGION: fieldBuilder.buildEdmTypeField('BusinessPartnerOfficeRegion', 'Edm.String', true),
                BP_REGISTERED_OFFICE_NAME: fieldBuilder.buildEdmTypeField('BPRegisteredOfficeName', 'Edm.String', true),
                BP_BALANCE_SHEET_CURRENCY: fieldBuilder.buildEdmTypeField('BPBalanceSheetCurrency', 'Edm.String', true),
                BP_LAST_CPTL_INCR_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPLastCptlIncrAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_LAST_CAPITAL_INCREASE_YEAR: fieldBuilder.buildEdmTypeField('BPLastCapitalIncreaseYear', 'Edm.String', true),
                BP_BALANCE_SHEET_DISPLAY_TYPE: fieldBuilder.buildEdmTypeField('BPBalanceSheetDisplayType', 'Edm.String', true),
                BUSINESS_PARTNER_CITIZENSHIP: fieldBuilder.buildEdmTypeField('BusinessPartnerCitizenship', 'Edm.String', true),
                BP_MARITAL_PROPERTY_REGIME: fieldBuilder.buildEdmTypeField('BPMaritalPropertyRegime', 'Edm.String', true),
                BUSINESS_PARTNER_INCOME_CURRENCY: fieldBuilder.buildEdmTypeField('BusinessPartnerIncomeCurrency', 'Edm.String', true),
                BP_NUMBER_OF_CHILDREN: fieldBuilder.buildEdmTypeField('BPNumberOfChildren', 'Edm.Decimal', true),
                BP_NUMBER_OF_HOUSEHOLD_MEMBERS: fieldBuilder.buildEdmTypeField('BPNumberOfHouseholdMembers', 'Edm.Decimal', true),
                BP_ANNUAL_NET_INC_AMT_IN_INCOME_CRCY: fieldBuilder.buildEdmTypeField('BPAnnualNetIncAmtInIncomeCrcy', 'Edm.Decimal', true),
                BP_MONTHLY_NET_INC_AMT_IN_INCOME_CRCY: fieldBuilder.buildEdmTypeField('BPMonthlyNetIncAmtInIncomeCrcy', 'Edm.Decimal', true),
                BP_ANNUAL_NET_INCOME_YEAR: fieldBuilder.buildEdmTypeField('BPAnnualNetIncomeYear', 'Edm.String', true),
                BP_MONTHLY_NET_INCOME_MONTH: fieldBuilder.buildEdmTypeField('BPMonthlyNetIncomeMonth', 'Edm.String', true),
                BP_MONTHLY_NET_INCOME_YEAR: fieldBuilder.buildEdmTypeField('BPMonthlyNetIncomeYear', 'Edm.String', true),
                BP_PLACE_OF_DEATH_NAME: fieldBuilder.buildEdmTypeField('BPPlaceOfDeathName', 'Edm.String', true),
                CUSTOMER_IS_UNWANTED: fieldBuilder.buildEdmTypeField('CustomerIsUnwanted', 'Edm.Boolean', true),
                UNDESIRABILITY_REASON: fieldBuilder.buildEdmTypeField('UndesirabilityReason', 'Edm.String', true),
                UNDESIRABILITY_COMMENT: fieldBuilder.buildEdmTypeField('UndesirabilityComment', 'Edm.String', true),
                LAST_CUSTOMER_CONTACT_DATE: fieldBuilder.buildEdmTypeField('LastCustomerContactDate', 'Edm.DateTime', true),
                BP_GROUPING_CHARACTER: fieldBuilder.buildEdmTypeField('BPGroupingCharacter', 'Edm.String', true),
                BP_LETTER_SALUTATION: fieldBuilder.buildEdmTypeField('BPLetterSalutation', 'Edm.String', true),
                BUSINESS_PARTNER_TARGET_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerTargetGroup', 'Edm.String', true),
                BUSINESS_PARTNER_EMPLOYEE_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerEmployeeGroup', 'Edm.String', true),
                BUSINESS_PARTNER_IS_EMPLOYEE: fieldBuilder.buildEdmTypeField('BusinessPartnerIsEmployee', 'Edm.Boolean', true),
                BP_TERMN_BUS_RELATIONS_BANK_DATE: fieldBuilder.buildEdmTypeField('BPTermnBusRelationsBankDate', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpFinancialServicesExtn_1.BpFinancialServicesExtn)
            };
        }
        return this._schema;
    }
}
exports.BpFinancialServicesExtnApi = BpFinancialServicesExtnApi;
//# sourceMappingURL=BpFinancialServicesExtnApi.js.map