"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFinancialServicesReportingApi = void 0;
const BpFinancialServicesReporting_1 = require("./BpFinancialServicesReporting");
const BpFinancialServicesReportingRequestBuilder_1 = require("./BpFinancialServicesReportingRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpFinancialServicesReportingApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpFinancialServicesReporting_1.BpFinancialServicesReporting;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpFinancialServicesReportingApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpFinancialServicesReportingRequestBuilder_1.BpFinancialServicesReportingRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpFinancialServicesReporting_1.BpFinancialServicesReporting, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                BP_IS_NON_RESIDENT: fieldBuilder.buildEdmTypeField('BPIsNonResident', 'Edm.Boolean', true),
                BP_NON_RESIDENCY_START_DATE: fieldBuilder.buildEdmTypeField('BPNonResidencyStartDate', 'Edm.DateTime', true),
                BP_IS_MULTIMILLION_LOAN_RECIPIENT: fieldBuilder.buildEdmTypeField('BPIsMultimillionLoanRecipient', 'Edm.Boolean', true),
                BP_LOAN_REPORTING_BORROWER_NUMBER: fieldBuilder.buildEdmTypeField('BPLoanReportingBorrowerNumber', 'Edm.String', true),
                BP_LOAN_RPTG_BORROWER_ENTITY_NUMBER: fieldBuilder.buildEdmTypeField('BPLoanRptgBorrowerEntityNumber', 'Edm.String', true),
                BP_CREDIT_STANDING_REVIEW: fieldBuilder.buildEdmTypeField('BPCreditStandingReview', 'Edm.String', true),
                BP_CREDIT_STANDING_REVIEW_DATE: fieldBuilder.buildEdmTypeField('BPCreditStandingReviewDate', 'Edm.DateTime', true),
                BUSINESS_PARTNER_LOAN_TO_MANAGER: fieldBuilder.buildEdmTypeField('BusinessPartnerLoanToManager', 'Edm.String', true),
                BP_COMPANY_RELATIONSHIP: fieldBuilder.buildEdmTypeField('BPCompanyRelationship', 'Edm.String', true),
                BP_LOAN_REPORTING_CREDITOR_NUMBER: fieldBuilder.buildEdmTypeField('BPLoanReportingCreditorNumber', 'Edm.String', true),
                BP_OE_NB_IDENT_NUMBER: fieldBuilder.buildEdmTypeField('BPOeNBIdentNumber', 'Edm.String', true),
                BP_OE_NB_TARGET_GROUP: fieldBuilder.buildEdmTypeField('BPOeNBTargetGroup', 'Edm.String', true),
                BP_OE_NB_IDENT_NUMBER_ASSIGNED: fieldBuilder.buildEdmTypeField('BPOeNBIdentNumberAssigned', 'Edm.String', true),
                BP_OE_NB_INSTITUTE_NUMBER: fieldBuilder.buildEdmTypeField('BPOeNBInstituteNumber', 'Edm.String', true),
                BUSINESS_PARTNER_IS_OE_NB_INSTITUTE: fieldBuilder.buildEdmTypeField('BusinessPartnerIsOeNBInstitute', 'Edm.Boolean', true),
                BUSINESS_PARTNER_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerGroup', 'Edm.String', true),
                BP_GROUP_ASSIGNMENT_CATEGORY: fieldBuilder.buildEdmTypeField('BPGroupAssignmentCategory', 'Edm.String', true),
                BUSINESS_PARTNER_GROUP_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerGroupName', 'Edm.String', true),
                BUSINESS_PARTNER_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField('BusinessPartnerLegalEntity', 'Edm.String', true),
                BP_GER_AST_RGLN_RESTRICTED_AST_QUOTA: fieldBuilder.buildEdmTypeField('BPGerAstRglnRestrictedAstQuota', 'Edm.String', true),
                BUSINESS_PARTNER_DEBTOR_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerDebtorGroup', 'Edm.String', true),
                BUSINESS_PARTNER_BUSINESS_PURPOSE: fieldBuilder.buildEdmTypeField('BusinessPartnerBusinessPurpose', 'Edm.String', true),
                BUSINESS_PARTNER_RISK_GROUP: fieldBuilder.buildEdmTypeField('BusinessPartnerRiskGroup', 'Edm.String', true),
                BP_RISK_GROUPING_DATE: fieldBuilder.buildEdmTypeField('BPRiskGroupingDate', 'Edm.DateTime', true),
                BP_HAS_GROUP_AFFILIATION: fieldBuilder.buildEdmTypeField('BPHasGroupAffiliation', 'Edm.Boolean', true),
                BP_IS_MONETARY_FIN_INSTITUTION: fieldBuilder.buildEdmTypeField('BPIsMonetaryFinInstitution', 'Edm.Boolean', true),
                BP_CRDT_STANDING_REVIEW_IS_REQUIRED: fieldBuilder.buildEdmTypeField('BPCrdtStandingReviewIsRequired', 'Edm.Boolean', true),
                BP_LOAN_MONITORING_IS_REQUIRED: fieldBuilder.buildEdmTypeField('BPLoanMonitoringIsRequired', 'Edm.Boolean', true),
                BP_HAS_CREDITING_RELIEF: fieldBuilder.buildEdmTypeField('BPHasCreditingRelief', 'Edm.Boolean', true),
                BP_INVEST_IN_RSTRCD_AST_IS_AUTHZD: fieldBuilder.buildEdmTypeField('BPInvestInRstrcdAstIsAuthzd', 'Edm.Boolean', true),
                BP_CENTRAL_BANK_COUNTRY_REGION: fieldBuilder.buildEdmTypeField('BPCentralBankCountryRegion', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpFinancialServicesReporting_1.BpFinancialServicesReporting)
            };
        }
        return this._schema;
    }
}
exports.BpFinancialServicesReportingApi = BpFinancialServicesReportingApi;
//# sourceMappingURL=BpFinancialServicesReportingApi.js.map