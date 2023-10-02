import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderScheduleLineApi } from './SalesOrderScheduleLineApi';
export declare class SalesOrderScheduleLine<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderScheduleLineType<T> {
    readonly _entityApi: SalesOrderScheduleLineApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    scheduleLine: DeserializedType<T, 'Edm.String'>;
    requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    confirmedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    orderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
    orderQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
    orderQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
    scheduleLineOrderQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
    confdOrderQtyByMatlAvailCheck?: DeserializedType<T, 'Edm.Decimal'> | null;
    deliveredQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
    openConfdDelivQtyInOrdQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
    correctedQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
    delivBlockReasonForSchedLine?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: SalesOrderScheduleLineApi<T>);
}
export interface SalesOrderScheduleLineType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    scheduleLine: DeserializedType<T, 'Edm.String'>;
    requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    confirmedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    orderQuantityUnit?: DeserializedType<T, 'Edm.String'> | null;
    orderQuantitySapUnit?: DeserializedType<T, 'Edm.String'> | null;
    orderQuantityIsoUnit?: DeserializedType<T, 'Edm.String'> | null;
    scheduleLineOrderQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
    confdOrderQtyByMatlAvailCheck?: DeserializedType<T, 'Edm.Decimal'> | null;
    deliveredQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
    openConfdDelivQtyInOrdQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
    correctedQtyInOrderQtyUnit?: DeserializedType<T, 'Edm.Decimal'> | null;
    delivBlockReasonForSchedLine?: DeserializedType<T, 'Edm.String'> | null;
}
