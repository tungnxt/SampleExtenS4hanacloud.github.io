import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderItemRelatedObjectApi } from './SalesOrderItemRelatedObjectApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';
export declare class SalesOrderItemRelatedObject<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderItemRelatedObjectType<T> {
    readonly _entityApi: SalesOrderItemRelatedObjectApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    sdDocRelatedObjectSequenceNmbr: DeserializedType<T, 'Edm.String'>;
    sdDocumentRelatedObjectType?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectSystem?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectReference1?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectReference2?: DeserializedType<T, 'Edm.String'> | null;
    toSalesOrder?: SalesOrder<T> | null;
    toSalesOrderItem?: SalesOrderItem<T> | null;
    constructor(_entityApi: SalesOrderItemRelatedObjectApi<T>);
}
export interface SalesOrderItemRelatedObjectType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    sdDocRelatedObjectSequenceNmbr: DeserializedType<T, 'Edm.String'>;
    sdDocumentRelatedObjectType?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectSystem?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectReference1?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectReference2?: DeserializedType<T, 'Edm.String'> | null;
    toSalesOrder?: SalesOrderType<T> | null;
    toSalesOrderItem?: SalesOrderItemType<T> | null;
}
