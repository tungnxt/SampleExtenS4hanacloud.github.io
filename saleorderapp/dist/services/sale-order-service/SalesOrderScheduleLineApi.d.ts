import { SalesOrderScheduleLine } from './SalesOrderScheduleLine';
import { SalesOrderScheduleLineRequestBuilder } from './SalesOrderScheduleLineRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderScheduleLineApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderScheduleLine<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderScheduleLineApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof SalesOrderScheduleLine;
    requestBuilder(): SalesOrderScheduleLineRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderScheduleLine<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderScheduleLine<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderScheduleLine, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORDER_ITEM: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SCHEDULE_LINE: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        REQUESTED_DELIVERY_DATE: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CONFIRMED_DELIVERY_DATE: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        ORDER_QUANTITY_UNIT: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORDER_QUANTITY_SAP_UNIT: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORDER_QUANTITY_ISO_UNIT: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SCHEDULE_LINE_ORDER_QUANTITY: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        CONFD_ORDER_QTY_BY_MATL_AVAIL_CHECK: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        DELIVERED_QTY_IN_ORDER_QTY_UNIT: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        OPEN_CONFD_DELIV_QTY_IN_ORD_QTY_UNIT: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        CORRECTED_QTY_IN_ORDER_QTY_UNIT: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        DELIV_BLOCK_REASON_FOR_SCHED_LINE: OrderableEdmTypeField<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<SalesOrderScheduleLine<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
