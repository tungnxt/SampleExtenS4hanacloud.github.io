import { SupplierPurchasingOrgText } from './SupplierPurchasingOrgText';
import { SupplierPurchasingOrgTextRequestBuilder } from './SupplierPurchasingOrgTextRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class SupplierPurchasingOrgTextApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SupplierPurchasingOrgText<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SupplierPurchasingOrgTextApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof SupplierPurchasingOrgText;
    requestBuilder(): SupplierPurchasingOrgTextRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SupplierPurchasingOrgText<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SupplierPurchasingOrgText<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SupplierPurchasingOrgText, DeSerializersT>;
    private _schema?;
    get schema(): {
        SUPPLIER: OrderableEdmTypeField<SupplierPurchasingOrgText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        PURCHASING_ORGANIZATION: OrderableEdmTypeField<SupplierPurchasingOrgText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LANGUAGE: OrderableEdmTypeField<SupplierPurchasingOrgText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LONG_TEXT_ID: OrderableEdmTypeField<SupplierPurchasingOrgText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        LONG_TEXT: OrderableEdmTypeField<SupplierPurchasingOrgText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<SupplierPurchasingOrgText<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
