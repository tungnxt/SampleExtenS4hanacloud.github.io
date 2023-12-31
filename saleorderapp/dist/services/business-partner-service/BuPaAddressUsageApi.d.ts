import { BuPaAddressUsage } from './BuPaAddressUsage';
import { BuPaAddressUsageRequestBuilder } from './BuPaAddressUsageRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class BuPaAddressUsageApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<BuPaAddressUsage<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): BuPaAddressUsageApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof BuPaAddressUsage;
    requestBuilder(): BuPaAddressUsageRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<BuPaAddressUsage<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<BuPaAddressUsage<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof BuPaAddressUsage, DeSerializersT>;
    private _schema?;
    get schema(): {
        BUSINESS_PARTNER: OrderableEdmTypeField<BuPaAddressUsage<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        VALIDITY_END_DATE: OrderableEdmTypeField<BuPaAddressUsage<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTimeOffset", false, true>;
        ADDRESS_USAGE: OrderableEdmTypeField<BuPaAddressUsage<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ADDRESS_ID: OrderableEdmTypeField<BuPaAddressUsage<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        VALIDITY_START_DATE: OrderableEdmTypeField<BuPaAddressUsage<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTimeOffset", true, true>;
        STANDARD_USAGE: OrderableEdmTypeField<BuPaAddressUsage<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<BuPaAddressUsage<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<BuPaAddressUsage<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
