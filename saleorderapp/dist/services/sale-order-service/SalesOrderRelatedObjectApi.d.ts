import { SalesOrderRelatedObject } from './SalesOrderRelatedObject';
import { SalesOrderRelatedObjectRequestBuilder } from './SalesOrderRelatedObjectRequestBuilder';
import { SalesOrderApi } from './SalesOrderApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderRelatedObjectApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderRelatedObject<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderRelatedObjectApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [SalesOrderApi<DeSerializersT>]): this;
    entityConstructor: typeof SalesOrderRelatedObject;
    requestBuilder(): SalesOrderRelatedObjectRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderRelatedObject<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderRelatedObject<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderRelatedObject, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SD_DOC_RELATED_OBJECT_SEQUENCE_NMBR: OrderableEdmTypeField<SalesOrderRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SD_DOCUMENT_RELATED_OBJECT_TYPE: OrderableEdmTypeField<SalesOrderRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SD_DOC_RELATED_OBJECT_SYSTEM: OrderableEdmTypeField<SalesOrderRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SD_DOC_RELATED_OBJECT_REFERENCE_1: OrderableEdmTypeField<SalesOrderRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SD_DOC_RELATED_OBJECT_REFERENCE_2: OrderableEdmTypeField<SalesOrderRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderRelatedObject<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
