import { AddressPhoneNumber } from './AddressPhoneNumber';
import { AddressPhoneNumberRequestBuilder } from './AddressPhoneNumberRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class AddressPhoneNumberApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<AddressPhoneNumber<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): AddressPhoneNumberApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof AddressPhoneNumber;
    requestBuilder(): AddressPhoneNumberRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<AddressPhoneNumber<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<AddressPhoneNumber<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof AddressPhoneNumber, DeSerializersT>;
    private _schema?;
    get schema(): {
        ADDRESS_ID: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PERSON: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ORDINAL_NUMBER: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DESTINATION_LOCATION_COUNTRY: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_DEFAULT_PHONE_NUMBER: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        PHONE_NUMBER: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHONE_NUMBER_EXTENSION: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INTERNATIONAL_PHONE_NUMBER: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PHONE_NUMBER_TYPE: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDRESS_COMMUNICATION_REMARK_TEXT: OrderableEdmTypeField<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<AddressPhoneNumber<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
