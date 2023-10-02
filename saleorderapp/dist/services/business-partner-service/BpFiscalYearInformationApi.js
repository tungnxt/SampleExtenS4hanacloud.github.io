"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFiscalYearInformationApi = void 0;
const BpFiscalYearInformation_1 = require("./BpFiscalYearInformation");
const BpFiscalYearInformationRequestBuilder_1 = require("./BpFiscalYearInformationRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpFiscalYearInformationApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpFiscalYearInformation_1.BpFiscalYearInformation;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpFiscalYearInformationApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpFiscalYearInformationRequestBuilder_1.BpFiscalYearInformationRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpFiscalYearInformation_1.BpFiscalYearInformation, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                BUSINESS_PARTNER_FISCAL_YEAR: fieldBuilder.buildEdmTypeField('BusinessPartnerFiscalYear', 'Edm.String', false),
                BP_BALANCE_SHEET_CURRENCY: fieldBuilder.buildEdmTypeField('BPBalanceSheetCurrency', 'Edm.String', true),
                BP_ANNUAL_STOCKHOLDER_MEETING_DATE: fieldBuilder.buildEdmTypeField('BPAnnualStockholderMeetingDate', 'Edm.DateTime', true),
                BP_FISCAL_YEAR_START_DATE: fieldBuilder.buildEdmTypeField('BPFiscalYearStartDate', 'Edm.DateTime', true),
                BP_FISCAL_YEAR_END_DATE: fieldBuilder.buildEdmTypeField('BPFiscalYearEndDate', 'Edm.DateTime', true),
                BP_FISCAL_YEAR_IS_CLOSED: fieldBuilder.buildEdmTypeField('BPFiscalYearIsClosed', 'Edm.Boolean', true),
                BP_FISCAL_YEAR_CLOSING_DATE: fieldBuilder.buildEdmTypeField('BPFiscalYearClosingDate', 'Edm.DateTime', true),
                BP_FSCL_YR_CNSLDTD_FIN_STATEMENT_DTE: fieldBuilder.buildEdmTypeField('BPFsclYrCnsldtdFinStatementDte', 'Edm.DateTime', true),
                BP_CAPITAL_STOCK_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPCapitalStockAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_ISSD_STOCK_CPTL_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPIssdStockCptlAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_PARTCIPN_CERT_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPPartcipnCertAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_EQUITY_CAPITAL_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPEquityCapitalAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_GROSS_PREMIUM_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPGrossPremiumAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_NET_PREMIUM_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPNetPremiumAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_ANNUAL_SALES_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPAnnualSalesAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_ANNUAL_NET_INC_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPAnnualNetIncAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_DIVIDEND_DISTR_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPDividendDistrAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_DEBT_RATIO_IN_YEARS: fieldBuilder.buildEdmTypeField('BPDebtRatioInYears', 'Edm.Decimal', true),
                BP_ANNUAL_PN_L_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPAnnualPnLAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_BAL_SHEET_TOTAL_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPBalSheetTotalAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_NUMBER_OF_EMPLOYEES: fieldBuilder.buildEdmTypeField('BPNumberOfEmployees', 'Edm.String', true),
                BP_CPTL_RESERVE_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPCptlReserveAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_LGL_REVN_RSRV_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPLglRevnRsrvAmtInBalShtCrcy', 'Edm.Decimal', true),
                REVN_RSRV_OWN_STK_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('RevnRsrvOwnStkAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_STATRY_RESERVE_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPStatryReserveAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_OTH_REVN_RSRV_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPOthRevnRsrvAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_PN_L_CARRYFWD_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPPnLCarryfwdAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_SUBORDD_LBLTY_AMT_IN_BAL_SHT_CRCY: fieldBuilder.buildEdmTypeField('BPSuborddLbltyAmtInBalShtCrcy', 'Edm.Decimal', true),
                BP_RET_ON_TOTAL_CPTL_EMPLD_IN_PERCENT: fieldBuilder.buildEdmTypeField('BPRetOnTotalCptlEmpldInPercent', 'Edm.Decimal', true),
                BP_DEBT_CLEARANCE_PERIOD_IN_YEARS: fieldBuilder.buildEdmTypeField('BPDebtClearancePeriodInYears', 'Edm.Decimal', true),
                BP_FINANCING_COEFF_IN_PERCENT: fieldBuilder.buildEdmTypeField('BPFinancingCoeffInPercent', 'Edm.Decimal', true),
                BP_EQUITY_RATIO_IN_PERCENT: fieldBuilder.buildEdmTypeField('BPEquityRatioInPercent', 'Edm.Decimal', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpFiscalYearInformation_1.BpFiscalYearInformation)
            };
        }
        return this._schema;
    }
}
exports.BpFiscalYearInformationApi = BpFiscalYearInformationApi;
//# sourceMappingURL=BpFiscalYearInformationApi.js.map