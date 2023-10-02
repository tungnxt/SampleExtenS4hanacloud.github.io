"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpCreditWorthinessApi = void 0;
const BpCreditWorthiness_1 = require("./BpCreditWorthiness");
const BpCreditWorthinessRequestBuilder_1 = require("./BpCreditWorthinessRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpCreditWorthinessApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpCreditWorthiness_1.BpCreditWorthiness;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpCreditWorthinessApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpCreditWorthinessRequestBuilder_1.BpCreditWorthinessRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpCreditWorthiness_1.BpCreditWorthiness, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                BUS_PART_CREDIT_STANDING: fieldBuilder.buildEdmTypeField('BusPartCreditStanding', 'Edm.String', true),
                BP_CREDIT_STANDING_STATUS: fieldBuilder.buildEdmTypeField('BPCreditStandingStatus', 'Edm.String', true),
                CREDIT_RATING_AGENCY: fieldBuilder.buildEdmTypeField('CreditRatingAgency', 'Edm.String', true),
                BP_CREDIT_STANDING_COMMENT: fieldBuilder.buildEdmTypeField('BPCreditStandingComment', 'Edm.String', true),
                BP_CREDIT_STANDING_DATE: fieldBuilder.buildEdmTypeField('BPCreditStandingDate', 'Edm.DateTime', true),
                BP_CREDIT_STANDING_RATING: fieldBuilder.buildEdmTypeField('BPCreditStandingRating', 'Edm.String', true),
                BP_LEGAL_PROCEEDING_STATUS: fieldBuilder.buildEdmTypeField('BPLegalProceedingStatus', 'Edm.String', true),
                BP_LGL_PROCEEDING_INITIATION_DATE: fieldBuilder.buildEdmTypeField('BPLglProceedingInitiationDate', 'Edm.DateTime', true),
                BUSINESS_PARTNER_IS_UNDER_OATH: fieldBuilder.buildEdmTypeField('BusinessPartnerIsUnderOath', 'Edm.Boolean', true),
                BUSINESS_PARTNER_OATH_DATE: fieldBuilder.buildEdmTypeField('BusinessPartnerOathDate', 'Edm.DateTime', true),
                BUSINESS_PARTNER_IS_BANKRUPT: fieldBuilder.buildEdmTypeField('BusinessPartnerIsBankrupt', 'Edm.Boolean', true),
                BUSINESS_PARTNER_BANKRUPTCY_DATE: fieldBuilder.buildEdmTypeField('BusinessPartnerBankruptcyDate', 'Edm.DateTime', true),
                BP_FORECLOSURE_IS_INITIATED: fieldBuilder.buildEdmTypeField('BPForeclosureIsInitiated', 'Edm.Boolean', true),
                BP_FORECLOSURE_DATE: fieldBuilder.buildEdmTypeField('BPForeclosureDate', 'Edm.DateTime', true),
                BP_CRDT_WRTHNSS_ACCESS_CHK_IS_ACTIVE: fieldBuilder.buildEdmTypeField('BPCrdtWrthnssAccessChkIsActive', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpCreditWorthiness_1.BpCreditWorthiness)
            };
        }
        return this._schema;
    }
}
exports.BpCreditWorthinessApi = BpCreditWorthinessApi;
//# sourceMappingURL=BpCreditWorthinessApi.js.map