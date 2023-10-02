import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SupplierTextApi } from './SupplierTextApi';
export declare class SupplierText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SupplierTextType<T> {
    readonly _entityApi: SupplierTextApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    supplier: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: SupplierTextApi<T>);
}
export interface SupplierTextType<T extends DeSerializers = DefaultDeSerializers> {
    supplier: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
