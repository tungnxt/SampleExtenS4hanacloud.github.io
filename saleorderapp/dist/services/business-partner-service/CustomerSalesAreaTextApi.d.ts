import { CustomerSalesAreaText } from './CustomerSalesAreaText';
import { CustomerSalesAreaTextRequestBuilder } from './CustomerSalesAreaTextRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class CustomerSalesAreaTextApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustomerSalesAreaText<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): CustomerSalesAreaTextApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof CustomerSalesAreaText;
    requestBuilder(): CustomerSalesAreaTextRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustomerSalesAreaText<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustomerSalesAreaText<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustomerSalesAreaText, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<CustomerSalesAreaText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORGANIZATION: OrderableEdmTypeField<CustomerSalesAreaText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DISTRIBUTION_CHANNEL: OrderableEdmTypeField<CustomerSalesAreaText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DIVISION: OrderableEdmTypeField<CustomerSalesAreaText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LANGUAGE: OrderableEdmTypeField<CustomerSalesAreaText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LONG_TEXT_ID: OrderableEdmTypeField<CustomerSalesAreaText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LONG_TEXT: OrderableEdmTypeField<CustomerSalesAreaText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<CustomerSalesAreaText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
