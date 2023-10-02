"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrdPaymentPlanItemDetailsApi = void 0;
const SlsOrdPaymentPlanItemDetails_1 = require("./SlsOrdPaymentPlanItemDetails");
const SlsOrdPaymentPlanItemDetailsRequestBuilder_1 = require("./SlsOrdPaymentPlanItemDetailsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SlsOrdPaymentPlanItemDetailsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SlsOrdPaymentPlanItemDetails_1.SlsOrdPaymentPlanItemDetails;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SlsOrdPaymentPlanItemDetailsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new SlsOrdPaymentPlanItemDetailsRequestBuilder_1.SlsOrdPaymentPlanItemDetailsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SlsOrdPaymentPlanItemDetails_1.SlsOrdPaymentPlanItemDetails, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                PAYMENT_PLAN_ITEM: fieldBuilder.buildEdmTypeField('PaymentPlanItem', 'Edm.String', false),
                PAYMENT_PLAN: fieldBuilder.buildEdmTypeField('PaymentPlan', 'Edm.String', true),
                ELECTRONIC_PAYMENT_TYPE: fieldBuilder.buildEdmTypeField('ElectronicPaymentType', 'Edm.String', true),
                ELECTRONIC_PAYMENT: fieldBuilder.buildEdmTypeField('ElectronicPayment', 'Edm.String', true),
                E_PAYT_VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('EPaytValidityStartDate', 'Edm.DateTime', true),
                E_PAYT_VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('EPaytValidityEndDate', 'Edm.DateTime', true),
                ELECTRONIC_PAYMENT_HOLDER_NAME: fieldBuilder.buildEdmTypeField('ElectronicPaymentHolderName', 'Edm.String', true),
                AUTHORIZED_AMOUNT_IN_AUTHZN_CRCY: fieldBuilder.buildEdmTypeField('AuthorizedAmountInAuthznCrcy', 'Edm.Decimal', true),
                AUTHORIZATION_CURRENCY: fieldBuilder.buildEdmTypeField('AuthorizationCurrency', 'Edm.String', true),
                AUTHORIZATION_BY_DIGITAL_PAYT_SRVC: fieldBuilder.buildEdmTypeField('AuthorizationByDigitalPaytSrvc', 'Edm.String', true),
                AUTHORIZATION_BY_ACQUIRER: fieldBuilder.buildEdmTypeField('AuthorizationByAcquirer', 'Edm.String', true),
                AUTHORIZATION_DATE: fieldBuilder.buildEdmTypeField('AuthorizationDate', 'Edm.DateTime', true),
                AUTHORIZATION_TIME: fieldBuilder.buildEdmTypeField('AuthorizationTime', 'Edm.Time', true),
                AUTHORIZATION_STATUS_NAME: fieldBuilder.buildEdmTypeField('AuthorizationStatusName', 'Edm.String', true),
                E_PAYT_BY_DIGITAL_PAYMENT_SRVC: fieldBuilder.buildEdmTypeField('EPaytByDigitalPaymentSrvc', 'Edm.String', true),
                ELECTRONIC_PAYMENT_CALL_STATUS: fieldBuilder.buildEdmTypeField('ElectronicPaymentCallStatus', 'Edm.String', true),
                E_PAYT_AUTHORIZATION_RESULT: fieldBuilder.buildEdmTypeField('EPaytAuthorizationResult', 'Edm.String', true),
                E_PAYT_TO_BE_AUTHORIZED_AMOUNT: fieldBuilder.buildEdmTypeField('EPaytToBeAuthorizedAmount', 'Edm.Decimal', true),
                E_PAYT_AUTHORIZATION_IS_EXPIRED: fieldBuilder.buildEdmTypeField('EPaytAuthorizationIsExpired', 'Edm.Boolean', true),
                E_PAYT_AMOUNT_IS_CHANGED: fieldBuilder.buildEdmTypeField('EPaytAmountIsChanged', 'Edm.Boolean', true),
                PREAUTHORIZATION_IS_REQUESTED: fieldBuilder.buildEdmTypeField('PreauthorizationIsRequested', 'Edm.Boolean', true),
                PAYMENT_SERVICE_PROVIDER: fieldBuilder.buildEdmTypeField('PaymentServiceProvider', 'Edm.String', true),
                PAYMENT_BY_PAYMENT_SERVICE_PRVDR: fieldBuilder.buildEdmTypeField('PaymentByPaymentServicePrvdr', 'Edm.String', true),
                TRANSACTION_BY_PAYT_SRVC_PRVDR: fieldBuilder.buildEdmTypeField('TransactionByPaytSrvcPrvdr', 'Edm.String', true),
                MERCHANT_BY_CLEARING_HOUSE: fieldBuilder.buildEdmTypeField('MerchantByClearingHouse', 'Edm.String', true),
                PAYMENT_CARD_AUTHZN_RELATION_ID: fieldBuilder.buildEdmTypeField('PaymentCardAuthznRelationID', 'Edm.String', true),
                MAXIMUM_TO_BE_AUTHORIZED_AMOUNT: fieldBuilder.buildEdmTypeField('MaximumToBeAuthorizedAmount', 'Edm.Decimal', true),
                PAYT_PLN_FOR_AUTHORIZATION_ITEM: fieldBuilder.buildEdmTypeField('PaytPlnForAuthorizationItem', 'Edm.String', true),
                PAYT_PLN_ITM_FOR_AUTHORIZATION_ITEM: fieldBuilder.buildEdmTypeField('PaytPlnItmForAuthorizationItem', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SlsOrdPaymentPlanItemDetails_1.SlsOrdPaymentPlanItemDetails)
            };
        }
        return this._schema;
    }
}
exports.SlsOrdPaymentPlanItemDetailsApi = SlsOrdPaymentPlanItemDetailsApi;
//# sourceMappingURL=SlsOrdPaymentPlanItemDetailsApi.js.map