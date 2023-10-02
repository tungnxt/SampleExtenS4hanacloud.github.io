"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpContactToAddressApi = void 0;
const BpContactToAddress_1 = require("./BpContactToAddress");
const BpContactToAddressRequestBuilder_1 = require("./BpContactToAddressRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpContactToAddressApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpContactToAddress_1.BpContactToAddress;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpContactToAddressApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_EMAIL_ADDRESS: new odata_v2_1.Link('to_EmailAddress', this, linkedApis[0]),
            TO_FAX_NUMBER: new odata_v2_1.Link('to_FaxNumber', this, linkedApis[1]),
            TO_MOBILE_PHONE_NUMBER: new odata_v2_1.Link('to_MobilePhoneNumber', this, linkedApis[2]),
            TO_PHONE_NUMBER: new odata_v2_1.Link('to_PhoneNumber', this, linkedApis[3]),
            TO_URL_ADDRESS: new odata_v2_1.Link('to_URLAddress', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new BpContactToAddressRequestBuilder_1.BpContactToAddressRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpContactToAddress_1.BpContactToAddress, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                RELATIONSHIP_NUMBER: fieldBuilder.buildEdmTypeField('RelationshipNumber', 'Edm.String', false),
                BUSINESS_PARTNER_COMPANY: fieldBuilder.buildEdmTypeField('BusinessPartnerCompany', 'Edm.String', false),
                BUSINESS_PARTNER_PERSON: fieldBuilder.buildEdmTypeField('BusinessPartnerPerson', 'Edm.String', false),
                VALIDITY_END_DATE: fieldBuilder.buildEdmTypeField('ValidityEndDate', 'Edm.DateTime', false),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                ADDRESS_NUMBER: fieldBuilder.buildEdmTypeField('AddressNumber', 'Edm.String', true),
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
                ADDRESS_REPRESENTATION_CODE: fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', true),
                CONTACT_PERSON_BUILDING: fieldBuilder.buildEdmTypeField('ContactPersonBuilding', 'Edm.String', true),
                CONTACT_PERSON_PRFRD_COMM_MEDIUM: fieldBuilder.buildEdmTypeField('ContactPersonPrfrdCommMedium', 'Edm.String', true),
                CONTACT_RELATIONSHIP_DEPARTMENT: fieldBuilder.buildEdmTypeField('ContactRelationshipDepartment', 'Edm.String', true),
                CONTACT_RELATIONSHIP_FUNCTION: fieldBuilder.buildEdmTypeField('ContactRelationshipFunction', 'Edm.String', true),
                CORRESPONDENCE_SHORT_NAME: fieldBuilder.buildEdmTypeField('CorrespondenceShortName', 'Edm.String', true),
                FLOOR: fieldBuilder.buildEdmTypeField('Floor', 'Edm.String', true),
                INHOUSE_MAIL: fieldBuilder.buildEdmTypeField('InhouseMail', 'Edm.String', true),
                IS_DEFAULT_ADDRESS: fieldBuilder.buildEdmTypeField('IsDefaultAddress', 'Edm.Boolean', true),
                ROOM_NUMBER: fieldBuilder.buildEdmTypeField('RoomNumber', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpContactToAddress_1.BpContactToAddress)
            };
        }
        return this._schema;
    }
}
exports.BpContactToAddressApi = BpContactToAddressApi;
//# sourceMappingURL=BpContactToAddressApi.js.map