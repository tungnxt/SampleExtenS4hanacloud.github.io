"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpIntlAddressVersionApi = void 0;
const BpIntlAddressVersion_1 = require("./BpIntlAddressVersion");
const BpIntlAddressVersionRequestBuilder_1 = require("./BpIntlAddressVersionRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpIntlAddressVersionApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BpIntlAddressVersion_1.BpIntlAddressVersion;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BpIntlAddressVersionApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BpIntlAddressVersionRequestBuilder_1.BpIntlAddressVersionRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BpIntlAddressVersion_1.BpIntlAddressVersion, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                ADDRESS_ID: fieldBuilder.buildEdmTypeField('AddressID', 'Edm.String', false),
                ADDRESS_REPRESENTATION_CODE: fieldBuilder.buildEdmTypeField('AddressRepresentationCode', 'Edm.String', false),
                ADDRESSEE_FULL_NAME: fieldBuilder.buildEdmTypeField('AddresseeFullName', 'Edm.String', true),
                ADDRESS_ID_BY_EXTERNAL_SYSTEM: fieldBuilder.buildEdmTypeField('AddressIDByExternalSystem', 'Edm.String', true),
                ADDRESS_PERSON_ID: fieldBuilder.buildEdmTypeField('AddressPersonID', 'Edm.String', true),
                ADDRESS_SEARCH_TERM_1: fieldBuilder.buildEdmTypeField('AddressSearchTerm1', 'Edm.String', true),
                ADDRESS_SEARCH_TERM_2: fieldBuilder.buildEdmTypeField('AddressSearchTerm2', 'Edm.String', true),
                ADDRESS_TIME_ZONE: fieldBuilder.buildEdmTypeField('AddressTimeZone', 'Edm.String', true),
                CARE_OF_NAME: fieldBuilder.buildEdmTypeField('CareOfName', 'Edm.String', true),
                CITY_NAME: fieldBuilder.buildEdmTypeField('CityName', 'Edm.String', true),
                CITY_NUMBER: fieldBuilder.buildEdmTypeField('CityNumber', 'Edm.String', true),
                COMPANY_POSTAL_CODE: fieldBuilder.buildEdmTypeField('CompanyPostalCode', 'Edm.String', true),
                COUNTRY: fieldBuilder.buildEdmTypeField('Country', 'Edm.String', true),
                DELIVERY_SERVICE_NUMBER: fieldBuilder.buildEdmTypeField('DeliveryServiceNumber', 'Edm.String', true),
                DELIVERY_SERVICE_TYPE_CODE: fieldBuilder.buildEdmTypeField('DeliveryServiceTypeCode', 'Edm.String', true),
                DISTRICT_NAME: fieldBuilder.buildEdmTypeField('DistrictName', 'Edm.String', true),
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true),
                HOUSE_NUMBER: fieldBuilder.buildEdmTypeField('HouseNumber', 'Edm.String', true),
                HOUSE_NUMBER_SUPPLEMENT_TEXT: fieldBuilder.buildEdmTypeField('HouseNumberSupplementText', 'Edm.String', true),
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true),
                ORGANIZATION_NAME_1: fieldBuilder.buildEdmTypeField('OrganizationName1', 'Edm.String', true),
                ORGANIZATION_NAME_2: fieldBuilder.buildEdmTypeField('OrganizationName2', 'Edm.String', true),
                ORGANIZATION_NAME_3: fieldBuilder.buildEdmTypeField('OrganizationName3', 'Edm.String', true),
                ORGANIZATION_NAME_4: fieldBuilder.buildEdmTypeField('OrganizationName4', 'Edm.String', true),
                PERSON_FAMILY_NAME: fieldBuilder.buildEdmTypeField('PersonFamilyName', 'Edm.String', true),
                PERSON_GIVEN_NAME: fieldBuilder.buildEdmTypeField('PersonGivenName', 'Edm.String', true),
                PO_BOX: fieldBuilder.buildEdmTypeField('POBox', 'Edm.String', true),
                PO_BOX_DEVIATING_CITY_NAME: fieldBuilder.buildEdmTypeField('POBoxDeviatingCityName', 'Edm.String', true),
                PO_BOX_DEVIATING_COUNTRY: fieldBuilder.buildEdmTypeField('POBoxDeviatingCountry', 'Edm.String', true),
                PO_BOX_DEVIATING_REGION: fieldBuilder.buildEdmTypeField('POBoxDeviatingRegion', 'Edm.String', true),
                PO_BOX_IS_WITHOUT_NUMBER: fieldBuilder.buildEdmTypeField('POBoxIsWithoutNumber', 'Edm.Boolean', true),
                PO_BOX_LOBBY_NAME: fieldBuilder.buildEdmTypeField('POBoxLobbyName', 'Edm.String', true),
                PO_BOX_POSTAL_CODE: fieldBuilder.buildEdmTypeField('POBoxPostalCode', 'Edm.String', true),
                POSTAL_CODE: fieldBuilder.buildEdmTypeField('PostalCode', 'Edm.String', true),
                PRFRD_COMM_MEDIUM_TYPE: fieldBuilder.buildEdmTypeField('PrfrdCommMediumType', 'Edm.String', true),
                REGION: fieldBuilder.buildEdmTypeField('Region', 'Edm.String', true),
                SECONDARY_REGION: fieldBuilder.buildEdmTypeField('SecondaryRegion', 'Edm.String', true),
                SECONDARY_REGION_NAME: fieldBuilder.buildEdmTypeField('SecondaryRegionName', 'Edm.String', true),
                STREET_NAME: fieldBuilder.buildEdmTypeField('StreetName', 'Edm.String', true),
                STREET_PREFIX_NAME_1: fieldBuilder.buildEdmTypeField('StreetPrefixName1', 'Edm.String', true),
                STREET_PREFIX_NAME_2: fieldBuilder.buildEdmTypeField('StreetPrefixName2', 'Edm.String', true),
                STREET_SUFFIX_NAME_1: fieldBuilder.buildEdmTypeField('StreetSuffixName1', 'Edm.String', true),
                STREET_SUFFIX_NAME_2: fieldBuilder.buildEdmTypeField('StreetSuffixName2', 'Edm.String', true),
                TAX_JURISDICTION: fieldBuilder.buildEdmTypeField('TaxJurisdiction', 'Edm.String', true),
                TERTIARY_REGION: fieldBuilder.buildEdmTypeField('TertiaryRegion', 'Edm.String', true),
                TERTIARY_REGION_NAME: fieldBuilder.buildEdmTypeField('TertiaryRegionName', 'Edm.String', true),
                TRANSPORT_ZONE: fieldBuilder.buildEdmTypeField('TransportZone', 'Edm.String', true),
                VILLAGE_NAME: fieldBuilder.buildEdmTypeField('VillageName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BpIntlAddressVersion_1.BpIntlAddressVersion)
            };
        }
        return this._schema;
    }
}
exports.BpIntlAddressVersionApi = BpIntlAddressVersionApi;
//# sourceMappingURL=BpIntlAddressVersionApi.js.map