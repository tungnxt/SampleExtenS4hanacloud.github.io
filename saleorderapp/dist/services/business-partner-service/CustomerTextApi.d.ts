import { CustomerText } from './CustomerText';
import { CustomerTextRequestBuilder } from './CustomerTextRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class CustomerTextApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustomerText<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): CustomerTextApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof CustomerText;
    requestBuilder(): CustomerTextRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustomerText<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustomerText<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustomerText, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<CustomerText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LANGUAGE: OrderableEdmTypeField<CustomerText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LONG_TEXT_ID: OrderableEdmTypeField<CustomerText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LONG_TEXT: OrderableEdmTypeField<CustomerText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<CustomerText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
