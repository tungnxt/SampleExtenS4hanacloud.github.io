"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerApi = void 0;
const BusinessPartner_1 = require("./BusinessPartner");
const BusinessPartnerRequestBuilder_1 = require("./BusinessPartnerRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessPartner_1.BusinessPartner;
        this.deSerializers = deSerializers;
    }
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessPartnerApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_BP_CREDIT_WORTHINESS: new odata_v2_1.OneToOneLink('to_BPCreditWorthiness', this, linkedApis[0]),
            TO_BP_DATA_CONTROLLER: new odata_v2_1.Link('to_BPDataController', this, linkedApis[1]),
            TO_BP_FIN_SERVICES_REPORTING: new odata_v2_1.OneToOneLink('to_BPFinServicesReporting', this, linkedApis[2]),
            TO_BP_FISCAL_YEAR_INFORMATION: new odata_v2_1.Link('to_BPFiscalYearInformation', this, linkedApis[3]),
            TO_BP_RELATIONSHIP: new odata_v2_1.Link('to_BPRelationship', this, linkedApis[4]),
            TO_BU_PA_IDENTIFICATION: new odata_v2_1.Link('to_BuPaIdentification', this, linkedApis[5]),
            TO_BU_PA_INDUSTRY: new odata_v2_1.Link('to_BuPaIndustry', this, linkedApis[6]),
            TO_BUSINESS_PARTNER: new odata_v2_1.OneToOneLink('to_BusinessPartner', this, linkedApis[7]),
            TO_BUSINESS_PARTNER_ADDRESS: new odata_v2_1.Link('to_BusinessPartnerAddress', this, linkedApis[8]),
            TO_BUSINESS_PARTNER_BANK: new odata_v2_1.Link('to_BusinessPartnerBank', this, linkedApis[9]),
            TO_BUSINESS_PARTNER_CONTACT: new odata_v2_1.Link('to_BusinessPartnerContact', this, linkedApis[10]),
            TO_BUSINESS_PARTNER_RATING: new odata_v2_1.Link('to_BusinessPartnerRating', this, linkedApis[11]),
            TO_BUSINESS_PARTNER_ROLE: new odata_v2_1.Link('to_BusinessPartnerRole', this, linkedApis[12]),
            TO_BUSINESS_PARTNER_TAX: new odata_v2_1.Link('to_BusinessPartnerTax', this, linkedApis[13]),
            TO_BUS_PART_ADDR_DEPDNT_TAX_NMBR: new odata_v2_1.Link('to_BusPartAddrDepdntTaxNmbr', this, linkedApis[14]),
            TO_CUSTOMER: new odata_v2_1.OneToOneLink('to_Customer', this, linkedApis[15]),
            TO_PAYMENT_CARD: new odata_v2_1.Link('to_PaymentCard', this, linkedApis[16]),
            TO_SUPPLIER: new odata_v2_1.OneToOneLink('to_Supplier', this, linkedApis[17])
        };
        return this;
    }
    requestBuilder() {
        return new BusinessPartnerRequestBuilder_1.BusinessPartnerRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessPartner_1.BusinessPartner, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                BUSINESS_PARTNER: fieldBuilder.buildEdmTypeField('BusinessPartner', 'Edm.String', false),
                CUSTOMER: fieldBuilder.buildEdmTypeField('Customer', 'Edm.String', true),
                SUPPLIER: fieldBuilder.buildEdmTypeField('Supplier', 'Edm.String', true),
                ACADEMIC_TITLE: fieldBuilder.buildEdmTypeField('AcademicTitle', 'Edm.String', true),
                AUTHORIZATION_GROUP: fieldBuilder.buildEdmTypeField('AuthorizationGroup', 'Edm.String', true),
                BUSINESS_PARTNER_CATEGORY: fieldBuilder.buildEdmTypeField('BusinessPartnerCategory', 'Edm.String', true),
                BUSINESS_PARTNER_FULL_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerFullName', 'Edm.String', true),
                BUSINESS_PARTNER_GROUPING: fieldBuilder.buildEdmTypeField('BusinessPartnerGrouping', 'Edm.String', true),
                BUSINESS_PARTNER_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerName', 'Edm.String', true),
                BUSINESS_PARTNER_UUID: fieldBuilder.buildEdmTypeField('BusinessPartnerUUID', 'Edm.Guid', true),
                CORRESPONDENCE_LANGUAGE: fieldBuilder.buildEdmTypeField('CorrespondenceLanguage', 'Edm.String', true),
                CREATED_BY_USER: fieldBuilder.buildEdmTypeField('CreatedByUser', 'Edm.String', true),
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.DateTime', true),
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Time', true),
                FIRST_NAME: fieldBuilder.buildEdmTypeField('FirstName', 'Edm.String', true),
                FORM_OF_ADDRESS: fieldBuilder.buildEdmTypeField('FormOfAddress', 'Edm.String', true),
                INDUSTRY: fieldBuilder.buildEdmTypeField('Industry', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_1: fieldBuilder.buildEdmTypeField('InternationalLocationNumber1', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_2: fieldBuilder.buildEdmTypeField('InternationalLocationNumber2', 'Edm.String', true),
                IS_FEMALE: fieldBuilder.buildEdmTypeField('IsFemale', 'Edm.Boolean', true),
                IS_MALE: fieldBuilder.buildEdmTypeField('IsMale', 'Edm.Boolean', true),
                IS_NATURAL_PERSON: fieldBuilder.buildEdmTypeField('IsNaturalPerson', 'Edm.String', true),
                IS_SEX_UNKNOWN: fieldBuilder.buildEdmTypeField('IsSexUnknown', 'Edm.Boolean', true),
                GENDER_CODE_NAME: fieldBuilder.buildEdmTypeField('GenderCodeName', 'Edm.String', true),
                LANGUAGE: fieldBuilder.buildEdmTypeField('Language', 'Edm.String', true),
                LAST_CHANGE_DATE: fieldBuilder.buildEdmTypeField('LastChangeDate', 'Edm.DateTime', true),
                LAST_CHANGE_TIME: fieldBuilder.buildEdmTypeField('LastChangeTime', 'Edm.Time', true),
                LAST_CHANGED_BY_USER: fieldBuilder.buildEdmTypeField('LastChangedByUser', 'Edm.String', true),
                LAST_NAME: fieldBuilder.buildEdmTypeField('LastName', 'Edm.String', true),
                LEGAL_FORM: fieldBuilder.buildEdmTypeField('LegalForm', 'Edm.String', true),
                ORGANIZATION_BP_NAME_1: fieldBuilder.buildEdmTypeField('OrganizationBPName1', 'Edm.String', true),
                ORGANIZATION_BP_NAME_2: fieldBuilder.buildEdmTypeField('OrganizationBPName2', 'Edm.String', true),
                ORGANIZATION_BP_NAME_3: fieldBuilder.buildEdmTypeField('OrganizationBPName3', 'Edm.String', true),
                ORGANIZATION_BP_NAME_4: fieldBuilder.buildEdmTypeField('OrganizationBPName4', 'Edm.String', true),
                ORGANIZATION_FOUNDATION_DATE: fieldBuilder.buildEdmTypeField('OrganizationFoundationDate', 'Edm.DateTime', true),
                ORGANIZATION_LIQUIDATION_DATE: fieldBuilder.buildEdmTypeField('OrganizationLiquidationDate', 'Edm.DateTime', true),
                SEARCH_TERM_1: fieldBuilder.buildEdmTypeField('SearchTerm1', 'Edm.String', true),
                SEARCH_TERM_2: fieldBuilder.buildEdmTypeField('SearchTerm2', 'Edm.String', true),
                ADDITIONAL_LAST_NAME: fieldBuilder.buildEdmTypeField('AdditionalLastName', 'Edm.String', true),
                BIRTH_DATE: fieldBuilder.buildEdmTypeField('BirthDate', 'Edm.DateTime', true),
                BUSINESS_PARTNER_BIRTH_DATE_STATUS: fieldBuilder.buildEdmTypeField('BusinessPartnerBirthDateStatus', 'Edm.String', true),
                BUSINESS_PARTNER_BIRTHPLACE_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerBirthplaceName', 'Edm.String', true),
                BUSINESS_PARTNER_DEATH_DATE: fieldBuilder.buildEdmTypeField('BusinessPartnerDeathDate', 'Edm.DateTime', true),
                BUSINESS_PARTNER_IS_BLOCKED: fieldBuilder.buildEdmTypeField('BusinessPartnerIsBlocked', 'Edm.Boolean', true),
                BUSINESS_PARTNER_TYPE: fieldBuilder.buildEdmTypeField('BusinessPartnerType', 'Edm.String', true),
                E_TAG: fieldBuilder.buildEdmTypeField('ETag', 'Edm.String', true),
                GROUP_BUSINESS_PARTNER_NAME_1: fieldBuilder.buildEdmTypeField('GroupBusinessPartnerName1', 'Edm.String', true),
                GROUP_BUSINESS_PARTNER_NAME_2: fieldBuilder.buildEdmTypeField('GroupBusinessPartnerName2', 'Edm.String', true),
                INDEPENDENT_ADDRESS_ID: fieldBuilder.buildEdmTypeField('IndependentAddressID', 'Edm.String', true),
                INTERNATIONAL_LOCATION_NUMBER_3: fieldBuilder.buildEdmTypeField('InternationalLocationNumber3', 'Edm.String', true),
                MIDDLE_NAME: fieldBuilder.buildEdmTypeField('MiddleName', 'Edm.String', true),
                NAME_COUNTRY: fieldBuilder.buildEdmTypeField('NameCountry', 'Edm.String', true),
                NAME_FORMAT: fieldBuilder.buildEdmTypeField('NameFormat', 'Edm.String', true),
                PERSON_FULL_NAME: fieldBuilder.buildEdmTypeField('PersonFullName', 'Edm.String', true),
                PERSON_NUMBER: fieldBuilder.buildEdmTypeField('PersonNumber', 'Edm.String', true),
                IS_MARKED_FOR_ARCHIVING: fieldBuilder.buildEdmTypeField('IsMarkedForArchiving', 'Edm.Boolean', true),
                BUSINESS_PARTNER_ID_BY_EXT_SYSTEM: fieldBuilder.buildEdmTypeField('BusinessPartnerIDByExtSystem', 'Edm.String', true),
                BUSINESS_PARTNER_PRINT_FORMAT: fieldBuilder.buildEdmTypeField('BusinessPartnerPrintFormat', 'Edm.String', true),
                BUSINESS_PARTNER_OCCUPATION: fieldBuilder.buildEdmTypeField('BusinessPartnerOccupation', 'Edm.String', true),
                BUS_PART_MARITAL_STATUS: fieldBuilder.buildEdmTypeField('BusPartMaritalStatus', 'Edm.String', true),
                BUS_PART_NATIONALITY: fieldBuilder.buildEdmTypeField('BusPartNationality', 'Edm.String', true),
                BUSINESS_PARTNER_BIRTH_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerBirthName', 'Edm.String', true),
                BUSINESS_PARTNER_SUPPLEMENT_NAME: fieldBuilder.buildEdmTypeField('BusinessPartnerSupplementName', 'Edm.String', true),
                NATURAL_PERSON_EMPLOYER_NAME: fieldBuilder.buildEdmTypeField('NaturalPersonEmployerName', 'Edm.String', true),
                LAST_NAME_PREFIX: fieldBuilder.buildEdmTypeField('LastNamePrefix', 'Edm.String', true),
                LAST_NAME_SECOND_PREFIX: fieldBuilder.buildEdmTypeField('LastNameSecondPrefix', 'Edm.String', true),
                INITIALS: fieldBuilder.buildEdmTypeField('Initials', 'Edm.String', true),
                BP_DATA_CONTROLLER_IS_NOT_REQUIRED: fieldBuilder.buildEdmTypeField('BPDataControllerIsNotRequired', 'Edm.Boolean', true),
                TRADING_PARTNER: fieldBuilder.buildEdmTypeField('TradingPartner', 'Edm.String', true),
                ...this.navigationPropertyFields,
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessPartner_1.BusinessPartner)
            };
        }
        return this._schema;
    }
}
exports.BusinessPartnerApi = BusinessPartnerApi;
//# sourceMappingURL=BusinessPartnerApi.js.map