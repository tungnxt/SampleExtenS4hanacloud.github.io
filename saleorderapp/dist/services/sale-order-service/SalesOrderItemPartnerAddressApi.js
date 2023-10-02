"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartnerAddressApi = void 0;
const SalesOrderItemPartnerAddress_1 = require("./SalesOrderItemPartnerAddress");
const SalesOrderItemPartnerAddressRequestBuilder_1 = require("./SalesOrderItemPartnerAddressRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemPartnerAddressApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = SalesOrderItemPartnerAddress_1.SalesOrderItemPartnerAddress;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new SalesOrderItemPartnerAddressApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_PARTNER: new odata_v2_1.OneToOneLink('to_Partner', this, linkedApis[0]),
            TO_SALES_ORDER: new odata_v2_1.OneToOneLink('to_SalesOrder', this, linkedApis[1]),
            TO_SALES_ORDER_ITEM: new odata_v2_1.OneToOneLink('to_SalesOrderItem', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new SalesOrderItemPartnerAddressRequestBuilder_1.SalesOrderItemPartnerAddressRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(SalesOrderItemPartnerAddress_1.SalesOrderItemPartnerAddress, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                SALES_ORDER: fieldBuilder.buildEdmTypeField('SalesOrder', 'Edm.String', false),
                SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField('SalesOrderItem', 'Edm.String', false),
                PARTNER_FUNCTION: fieldBuilder.buildEdmTypeField('PartnerFunction', 'Edm.String', false),
                ADDRESS_REPRESENTATION_CODE: fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', false),
                CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField('CorrespondenceLanguage', 'Edm.String', true),
                ADDRESSEE_FULL_NAME: fieldBuilder.buildEdmTypeField('AddresseeFullName', 'Edm.String', true),
                ORGANIZATION_NAME_1: fieldBuilder.buildEdmTypeField('OrganizationName1', 'Edm.String', true),
                ORGANIZATION_NAME_2: fieldBuilder.buildEdmTypeField('OrganizationName2', 'Edm.String', true),
                ORGANIZATION_NAME_3: fieldBuilder.buildEdmTypeField('OrganizationName3', 'Edm.String', true),
                ORGANIZATION_NAME_4: fieldBuilder.buildEdmTypeField('OrganizationName4', 'Edm.String', true),
                CITY_NAME: fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true),
                DISTRICT_NAME: fieldBuilder.buildEdmTypeField('DistrictName', 'Edm.String', true),
                POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true),
                STREET_NAME: fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true),
                STREET_PREFIX_NAME_1: fieldBuilder.buildEdmTypeField('StreetPrefixName1', 'Edm.String', true),
                STREET_PREFIX_NAME_2: fieldBuilder.buildEdmTypeField('StreetPrefixName2', 'Edm.String', true),
                STREET_SUFFIX_NAME_1: fieldBuilder.buildEdmTypeField('StreetSuffixName1', 'Edm.String', true),
                STREET_SUFFIX_NAME_2: fieldBuilder.buildEdmTypeField('StreetSuffixName2', 'Edm.String', true),
                HOUSE_NUMBER: fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true),
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true),
                TAX_JURISDICTION: fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true),
                TRANSPORT_ZONE: fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true),
                PO_BOX: fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true),
                PO_BOX_POSTAL_CODE: fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true),
                EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField('EmailAddress', 'Edm.String', true),
                MOBILE_PHONE_COUNTRY: fieldBuilder.buildEdmTypeField('MobilePhoneCountry', 'Edm.String', true),
                MOBILE_NUMBER: fieldBuilder.buildEdmTypeField('MobileNumber', 'Edm.String', true),
                PHONE_NUMBER_COUNTRY: fieldBuilder.buildEdmTypeField('PhoneNumberCountry', 'Edm.String', true),
                PHONE_NUMBER: fieldBuilder.buildEdmTypeField('PhoneNumber', 'Edm.String', true),
                PHONE_EXTENSION_NUMBER: fieldBuilder.buildEdmTypeField('PhoneExtensionNumber', 'Edm.String', true),
                FAX_NUMBER_COUNTRY: fieldBuilder.buildEdmTypeField('FaxNumberCountry', 'Edm.String', true),
                FAX_AREA_CODE_SUBSCRIBER_NUMBER: fieldBuilder.buildEdmTypeField('FaxAreaCodeSubscriberNumber', 'Edm.String', true),
                FAX_EXTENSION_NUMBER: fieldBuilder.buildEdmTypeField('FaxExtensionNumber', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', SalesOrderItemPartnerAddress_1.SalesOrderItemPartnerAddress)
            };
        }
        return this._schema;
    }
}
exports.SalesOrderItemPartnerAddressApi = SalesOrderItemPartnerAddressApi;
//# sourceMappingURL=SalesOrderItemPartnerAddressApi.js.map