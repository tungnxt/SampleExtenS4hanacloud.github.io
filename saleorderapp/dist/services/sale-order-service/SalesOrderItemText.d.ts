import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderItemTextApi } from './SalesOrderItemTextApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';
export declare class SalesOrderItemText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderItemTextType<T> {
    readonly _entityApi: SalesOrderItemTextApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
    toSalesOrder?: SalesOrder<T> | null;
    toSalesOrderItem?: SalesOrderItem<T> | null;
    constructor(_entityApi: SalesOrderItemTextApi<T>);
}
export interface SalesOrderItemTextType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
    toSalesOrder?: SalesOrderType<T> | null;
    toSalesOrderItem?: SalesOrderItemType<T> | null;
}
