import { SalesOrderItemRelatedObject } from './SalesOrderItemRelatedObject';
import { SalesOrderItemRelatedObjectRequestBuilder } from './SalesOrderItemRelatedObjectRequestBuilder';
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderItemApi } from './SalesOrderItemApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderItemRelatedObjectApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderItemRelatedObject<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderItemRelatedObjectApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SalesOrderApi<DeSerializersT>,
        SalesOrderItemApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SalesOrderItemRelatedObject;
    requestBuilder(): SalesOrderItemRelatedObjectRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderItemRelatedObject<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderItemRelatedObject<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderItemRelatedObject, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderItemRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORDER_ITEM: OrderableEdmTypeField<SalesOrderItemRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SD_DOC_RELATED_OBJECT_SEQUENCE_NMBR: OrderableEdmTypeField<SalesOrderItemRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SD_DOCUMENT_RELATED_OBJECT_TYPE: OrderableEdmTypeField<SalesOrderItemRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SD_DOC_RELATED_OBJECT_SYSTEM: OrderableEdmTypeField<SalesOrderItemRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SD_DOC_RELATED_OBJECT_REFERENCE_1: OrderableEdmTypeField<SalesOrderItemRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SD_DOC_RELATED_OBJECT_REFERENCE_2: OrderableEdmTypeField<SalesOrderItemRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderItemRelatedObject<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        TO_SALES_ORDER_ITEM: OneToOneLink<SalesOrderItemRelatedObject<DeSerializersT>, DeSerializersT, SalesOrderItemApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderItemRelatedObject<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
