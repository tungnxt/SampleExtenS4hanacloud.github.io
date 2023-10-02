import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderRelatedObjectApi } from './SalesOrderRelatedObjectApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
export declare class SalesOrderRelatedObject<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderRelatedObjectType<T> {
    readonly _entityApi: SalesOrderRelatedObjectApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    sdDocRelatedObjectSequenceNmbr: DeserializedType<T, 'Edm.String'>;
    sdDocumentRelatedObjectType?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectSystem?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectReference1?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectReference2?: DeserializedType<T, 'Edm.String'> | null;
    toSalesOrder?: SalesOrder<T> | null;
    constructor(_entityApi: SalesOrderRelatedObjectApi<T>);
}
export interface SalesOrderRelatedObjectType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    sdDocRelatedObjectSequenceNmbr: DeserializedType<T, 'Edm.String'>;
    sdDocumentRelatedObjectType?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectSystem?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectReference1?: DeserializedType<T, 'Edm.String'> | null;
    sdDocRelatedObjectReference2?: DeserializedType<T, 'Edm.String'> | null;
    toSalesOrder?: SalesOrderType<T> | null;
}
