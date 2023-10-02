import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustomerSalesAreaTaxApi } from './CustomerSalesAreaTaxApi';
import { CustSlsAreaAddrDepdntTaxInfo, CustSlsAreaAddrDepdntTaxInfoType } from './CustSlsAreaAddrDepdntTaxInfo';
export declare class CustomerSalesAreaTax<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerSalesAreaTaxType<T> {
    readonly _entityApi: CustomerSalesAreaTaxApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    departureCountry: DeserializedType<T, 'Edm.String'>;
    customerTaxCategory: DeserializedType<T, 'Edm.String'>;
    customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;
    toSlsAreaAddrDepdntTax: CustSlsAreaAddrDepdntTaxInfo<T>[];
    constructor(_entityApi: CustomerSalesAreaTaxApi<T>);
}
export interface CustomerSalesAreaTaxType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    departureCountry: DeserializedType<T, 'Edm.String'>;
    customerTaxCategory: DeserializedType<T, 'Edm.String'>;
    customerTaxClassification?: DeserializedType<T, 'Edm.String'> | null;
    toSlsAreaAddrDepdntTax: CustSlsAreaAddrDepdntTaxInfoType<T>[];
}
