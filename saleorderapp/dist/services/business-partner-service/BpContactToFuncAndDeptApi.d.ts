import { BpContactToFuncAndDept } from './BpContactToFuncAndDept';
import { BpContactToFuncAndDeptRequestBuilder } from './BpContactToFuncAndDeptRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class BpContactToFuncAndDeptApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<BpContactToFuncAndDept<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): BpContactToFuncAndDeptApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof BpContactToFuncAndDept;
    requestBuilder(): BpContactToFuncAndDeptRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<BpContactToFuncAndDept<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<BpContactToFuncAndDept<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof BpContactToFuncAndDept, DeSerializersT>;
    private _schema?;
    get schema(): {
        RELATIONSHIP_NUMBER: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BUSINESS_PARTNER_COMPANY: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BUSINESS_PARTNER_PERSON: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        VALIDITY_END_DATE: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", false, true>;
        CONTACT_PERSON_AUTHORITY_TYPE: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON_DEPARTMENT: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON_DEPARTMENT_NAME: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON_FUNCTION: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON_FUNCTION_NAME: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON_REMARK_TEXT: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CONTACT_PERSON_VIP_TYPE: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        EMAIL_ADDRESS: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FAX_NUMBER: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FAX_NUMBER_EXTENSION: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHONE_NUMBER: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        RELATIONSHIP_CATEGORY: OrderableEdmTypeField<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<BpContactToFuncAndDept<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
