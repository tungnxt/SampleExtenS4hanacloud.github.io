"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerAddressApi = void 0;
const BusinessPartnerAddress_1 = require("./BusinessPartnerAddress");
const BusinessPartnerAddressRequestBuilder_1 = require("./BusinessPartnerAddressRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerAddressApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartnerAddress_1.BusinessPartnerAddress;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerAddressApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_ADDRESS_USAGE: new odata_v2_1.Link('to_AddressUsage', this, linkedApis[0]),
            TO_BP_ADDR_DEPDNT_INTL_LOC_NUMBER: new odata_v2_1.OneToOneLink('to_BPAddrDepdntIntlLocNumber', this, linkedApis[1]),
            TO_BP_INTL_ADDRESS_VERSION: new odata_v2_1.Link('to_BPIntlAddressVersion', this, linkedApis[2]),
            TO_EMAIL_ADDRESS: new odata_v2_1.Link('to_EmailAddress', this, linkedApis[3]),
            TO_FAX_NUMBER: new odata_v2_1.Link('to_FaxNumber', this, linkedApis[4]),
            TO_MOBILE_PHONE_NUMBER: new odata_v2_1.Link('to_MobilePhoneNumber', this, linkedApis[5]),
            TO_PHONE_NUMBER: new odata_v2_1.Link('to_PhoneNumber', this, linkedApis[6]),
            TO_URL_ADDRESS: new odata_v2_1.Link('to_URLAddress', this, linkedApis[7])
        };
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerAddressRequestBuilder_1.BusinessPartnerAddressRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartnerAddress_1.BusinessPartnerAddress, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                VALIDITY_START_DATE: fieldBuilder.buildEdmTypeField('ValidityStartDate', 'Edm.DateTimeOffset', true),
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTimeOffset', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                ADDRESS_UUID: fieldBuilder.buildEdmTypeField('AddressUUID', 'Edm.Guid', true),
                ADDITIONAL_STREET_PREFIX_NAME: fieldBuilder.buildEdmTypeField('AdditionalStreetPrefixName', 'Edm.String', true),
                ADDITIONAL_STREET_SUFFIX_NAME: fieldBuilder.buildEdmTypeField('AdditionalStreetSuffixName', 'Edm.String', true),
                ADDRESS_TIME_ZONE: fieldBuilder.buildEdmTypeField('AddressTimeZone', 'Edm.String', true),
                CARE_OF_NAME: fieldBuilder.buildEdmTypeField('CareOfName', 'Edm.String', true),
                CITY_CODE: fieldBuilder.buildEdmTypeField('CityCode', 'Edm.String', true),
                CITY_NAME: fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true),
                COMPANY_POSTAL_CODE: fieldBuilder.buildEdmTypeField('CompanyPostalCode', 'Edm.String', true),
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                COUNTY: fieldBuilder.buildEdmTypeField('County', 'Edm.String', true),
                DELIVERY_SERVICE_NUMBER: fieldBuilder.buildEdmTypeField('DeliveryServiceNumber', 'Edm.String', true),
                DELIVERY_SERVICE_TYPE_CODE: fieldBuilder.buildEdmTypeField('DeliveryServiceTypeCode', 'Edm.String', true),
                DISTRICT: fieldBuilder.buildEdmTypeField('District', 'Edm.String', true),
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true),
                FULL_NAME: fieldBuilder.buildEdmTypeField('FullName', 'Edm.String', true),
                HOME_CITY_NAME: fieldBuilder.buildEdmTypeField('HomeCityName', 'Edm.String', true),
                HOUSE_NUMBER: fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true),
                HOUSE_NUMBER_SUPPLEMENT_TEXT: fieldBuilder.buildEdmTypeField('HouseNumberSupplementText', 'Edm.String', true),
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true),
                PO_BOX: fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true),
                PO_BOX_DEVIATING_CITY_NAME: fieldBuilder.buildEdmTypeField('POBoxDeviatingCityName', 'Edm.String', true),
                PO_BOX_DEVIATING_COUNTRY: fieldBuilder.buildEdmTypeField('POBoxDeviatingCountry', 'Edm.String', true),
                PO_BOX_DEVIATING_REGION: fieldBuilder.buildEdmTypeField('POBoxDeviatingRegion', 'Edm.String', true),
                PO_BOX_IS_WITHOUT_NUMBER: fieldBuilder.buildEdmTypeField('POBoxIsWithoutNumber', 'Edm.Boolean', true),
                PO_BOX_LOBBY_NAME: fieldBuilder.buildEdmTypeField('POBoxLobbyName', 'Edm.String', true),
                PO_BOX_POSTAL_CODE: fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true),
                PERSON: fieldBuilder.buildEdmTypeField('Person', 'Edm.String', true),
                POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true),
                PRFRD_COMM_MEDIUM_TYPE: fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', true),
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                STREET_NAME: fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true),
                STREET_PREFIX_NAME: fieldBuilder.buildEdmTypeField('StreetPrefixName', 'Edm.String', true),
                STREET_SUFFIX_NAME: fieldBuilder.buildEdmTypeField('StreetSuffixName', 'Edm.String', true),
                TAX_JURISDICTION: fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true),
                TRANSPORT_ZONE: fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true),
                ADDRESS_ID_BY_EXTERNAL_SYSTEM: fieldBuilder.buildEdmTypeField('AddressIDByExternalSystem', 'Edm.String', true),
                COUNTY_CODE: fieldBuilder.buildEdmTypeField('CountyCode', 'Edm.String', true),
                TOWNSHIP_CODE: fieldBuilder.buildEdmTypeField('TownshipCode', 'Edm.String', true),
                TOWNSHIP_NAME: fieldBuilder.buildEdmTypeField('TownshipName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartnerAddress_1.BusinessPartnerAddress)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerAddressApi = BusinessPartnerAddressApi;
//# sourceMappingURL=BusinessPartnerAddressApi.js.map