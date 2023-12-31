import { AddressEmailAddress } from './AddressEmailAddress';
import { AddressEmailAddressRequestBuilder } from './AddressEmailAddressRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class AddressEmailAddressApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<AddressEmailAddress<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): AddressEmailAddressApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof AddressEmailAddress;
    requestBuilder(): AddressEmailAddressRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<AddressEmailAddress<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<AddressEmailAddress<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof AddressEmailAddress, DeSerializersT>;
    private _schema?;
    get schema(): {
        ADDRESS_ID: OrderableEdmTypeField<AddressEmailAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PERSON: OrderableEdmTypeField<AddressEmailAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ORDINAL_NUMBER: OrderableEdmTypeField<AddressEmailAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        IS_DEFAULT_EMAIL_ADDRESS: OrderableEdmTypeField<AddressEmailAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        EMAIL_ADDRESS: OrderableEdmTypeField<AddressEmailAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SEARCH_EMAIL_ADDRESS: OrderableEdmTypeField<AddressEmailAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_COMMUNICATION_REMARK_TEXT: OrderableEdmTypeField<AddressEmailAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<AddressEmailAddress<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
