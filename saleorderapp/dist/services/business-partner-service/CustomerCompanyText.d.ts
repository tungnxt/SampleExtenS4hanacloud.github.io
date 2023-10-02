import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustomerCompanyTextApi } from './CustomerCompanyTextApi';
export declare class CustomerCompanyText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerCompanyTextType<T> {
    readonly _entityApi: CustomerCompanyTextApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: CustomerCompanyTextApi<T>);
}
export interface CustomerCompanyTextType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
