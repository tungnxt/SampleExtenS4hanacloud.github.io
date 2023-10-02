import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderTextApi } from './SalesOrderTextApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
export declare class SalesOrderText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderTextType<T> {
    readonly _entityApi: SalesOrderTextApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
    toSalesOrder?: SalesOrder<T> | null;
    constructor(_entityApi: SalesOrderTextApi<T>);
}
export interface SalesOrderTextType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
    toSalesOrder?: SalesOrderType<T> | null;
}
