"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerApi = void 0;
const Customer_1 = require("./Customer");
const CustomerRequestBuilder_1 = require("./CustomerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Customer_1.Customer;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomerApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_CUST_ADDR_DEPDNT_EXT_IDENTIFIER: new odata_v2_1.Link('to_CustAddrDepdntExtIdentifier', this, linkedApis[0]),
            TO_CUST_ADDR_DEPDNT_INFORMATION: new odata_v2_1.Link('to_CustAddrDepdntInformation', this, linkedApis[1]),
            TO_CUSTOMER_COMPANY: new odata_v2_1.Link('to_CustomerCompany', this, linkedApis[2]),
            TO_CUSTOMER_SALES_AREA: new odata_v2_1.Link('to_CustomerSalesArea', this, linkedApis[3]),
            TO_CUSTOMER_TAX_GROUPING: new odata_v2_1.Link('to_CustomerTaxGrouping', this, linkedApis[4]),
            TO_CUSTOMER_TEXT: new odata_v2_1.Link('to_CustomerText', this, linkedApis[5]),
            TO_CUSTOMER_UNLOADING_POINT: new odata_v2_1.Link('to_CustomerUnloadingPoint', this, linkedApis[6]),
            TO_CUST_UNLDG_PT_ADDR_DEPDNT_INFO: new odata_v2_1.Link('to_CustUnldgPtAddrDepdntInfo', this, linkedApis[7])
        };
        return this;
    }
    requestBuilder() {
        return new CustomerRequestBuilder_1.CustomerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Customer_1.Customer, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', false),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                BILLING_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('BillingIsBlockedForCustomer', 'Edm.String', true),
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                CUSTOMER_ACCOUNT_GROUP: fieldBuilder.buildEdmTypeField('CustomerAccountGroup', 'Edm.String', true),
                CUSTOMER_CLASSIFICATION: fieldBuilder.buildEdmTypeField('CustomerClassification', 'Edm.String', true),
                CUSTOMER_FULL_NAME: fieldBuilder.buildEdmTypeField('CustomerFullName', 'Edm.String', true),
                BP_CUSTOMER_FULL_NAME: fieldBuilder.buildEdmTypeField('BPCustomerFullName', 'Edm.String', true),
                CUSTOMER_NAME: fieldBuilder.buildEdmTypeField('CustomerName', 'Edm.String', true),
                BP_CUSTOMER_NAME: fieldBuilder.buildEdmTypeField('BPCustomerName', 'Edm.String', true),
                DELIVERY_IS_BLOCKED: fieldBuilder.buildEdmTypeField('DeliveryIsBlocked', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_01: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute01', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_02: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute02', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_03: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute03', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_04: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute04', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_05: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute05', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_06: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute06', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_07: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute07', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_08: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute08', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_09: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute09', 'Edm.String', true),
                FREE_DEFINED_ATTRIBUTE_10: fieldBuilder.buildEdmTypeField('FreeDefinedAttribute10', 'Edm.String', true),
                NF_PARTNER_IS_NATURAL_PERSON: fieldBuilder.buildEdmTypeField('NFPartnerIsNaturalPerson', 'Edm.String', true),
                ORDER_IS_BLOCKED_FOR_CUSTOMER: fieldBuilder.buildEdmTypeField('OrderIsBlockedForCustomer', 'Edm.String', true),
                POSTING_IS_BLOCKED: fieldBuilder.buildEdmTypeField('PostingIsBlocked', 'Edm.Boolean', true),
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true),
                CUSTOMER_CORPORATE_GROUP: fieldBuilder.buildEdmTypeField('CustomerCorporateGroup', 'Edm.String', true),
                FISCAL_ADDRESS: fieldBuilder.buildEdmTypeField('FiscalAddress', 'Edm.String', true),
                INDUSTRY: fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true),
                INDUSTRY_CODE_1: fieldBuilder.buildEdmTypeField('IndustryCode1', 'Edm.String', true),
                INDUSTRY_CODE_2: fieldBuilder.buildEdmTypeField('IndustryCode2', 'Edm.String', true),
                INDUSTRY_CODE_3: fieldBuilder.buildEdmTypeField('IndustryCode3', 'Edm.String', true),
                INDUSTRY_CODE_4: fieldBuilder.buildEdmTypeField('IndustryCode4', 'Edm.String', true),
                INDUSTRY_CODE_5: fieldBuilder.buildEdmTypeField('IndustryCode5', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_1: fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_2: fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_3: fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true),
                NIELSEN_REGION: fieldBuilder.buildEdmTypeField('NielsenRegion', 'Edm.String', true),
                PAYMENT_REASON: fieldBuilder.buildEdmTypeField('PaymentReason', 'Edm.String', true),
                RESPONSIBLE_TYPE: fieldBuilder.buildEdmTypeField('ResponsibleType', 'Edm.String', true),
                TAX_NUMBER_1: fieldBuilder.buildEdmTypeField('TaxNumber1', 'Edm.String', true),
                TAX_NUMBER_2: fieldBuilder.buildEdmTypeField('TaxNumber2', 'Edm.String', true),
                TAX_NUMBER_3: fieldBuilder.buildEdmTypeField('TaxNumber3', 'Edm.String', true),
                TAX_NUMBER_4: fieldBuilder.buildEdmTypeField('TaxNumber4', 'Edm.String', true),
                TAX_NUMBER_5: fieldBuilder.buildEdmTypeField('TaxNumber5', 'Edm.String', true),
                TAX_NUMBER_TYPE: fieldBuilder.buildEdmTypeField('TaxNumberType', 'Edm.String', true),
                VAT_REGISTRATION: fieldBuilder.buildEdmTypeField('VATRegistration', 'Edm.String', true),
                DELETION_INDICATOR: fieldBuilder.buildEdmTypeField('DeletionIndicator', 'Edm.Boolean', true),
                EXPRESS_TRAIN_STATION_NAME: fieldBuilder.buildEdmTypeField('ExpressTrainStationName', 'Edm.String', true),
                TRAIN_STATION_NAME: fieldBuilder.buildEdmTypeField('TrainStationName', 'Edm.String', true),
                CITY_CODE: fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true),
                COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', Customer_1.Customer)
            };
        }
        return this._schema;
    }
}
exports.CustomerApi = CustomerApi;
//# sourceMappingURL=CustomerApi.js.map