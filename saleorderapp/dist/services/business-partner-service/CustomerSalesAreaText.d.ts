import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustomerSalesAreaTextApi } from './CustomerSalesAreaTextApi';
export declare class CustomerSalesAreaText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerSalesAreaTextType<T> {
    readonly _entityApi: CustomerSalesAreaTextApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: CustomerSalesAreaTextApi<T>);
}
export interface CustomerSalesAreaTextType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
