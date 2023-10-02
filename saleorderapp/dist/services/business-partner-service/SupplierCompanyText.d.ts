import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SupplierCompanyTextApi } from './SupplierCompanyTextApi';
export declare class SupplierCompanyText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SupplierCompanyTextType<T> {
    readonly _entityApi: SupplierCompanyTextApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    supplier: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: SupplierCompanyTextApi<T>);
}
export interface SupplierCompanyTextType<T extends DeSerializers = DefaultDeSerializers> {
    supplier: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
