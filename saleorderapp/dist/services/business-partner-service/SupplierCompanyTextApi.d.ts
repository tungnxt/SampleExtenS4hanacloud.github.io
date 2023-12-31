import { SupplierCompanyText } from './SupplierCompanyText';
import { SupplierCompanyTextRequestBuilder } from './SupplierCompanyTextRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class SupplierCompanyTextApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SupplierCompanyText<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SupplierCompanyTextApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof SupplierCompanyText;
    requestBuilder(): SupplierCompanyTextRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SupplierCompanyText<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SupplierCompanyText<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SupplierCompanyText, DeSerializersT>;
    private _schema?;
    get schema(): {
        SUPPLIER: OrderableEdmTypeField<SupplierCompanyText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        COMPANY_CODE: OrderableEdmTypeField<SupplierCompanyText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LANGUAGE: OrderableEdmTypeField<SupplierCompanyText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LONG_TEXT_ID: OrderableEdmTypeField<SupplierCompanyText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LONG_TEXT: OrderableEdmTypeField<SupplierCompanyText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<SupplierCompanyText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
