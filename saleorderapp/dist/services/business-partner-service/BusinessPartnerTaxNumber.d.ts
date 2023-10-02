import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BusinessPartnerTaxNumberApi } from './BusinessPartnerTaxNumberApi';
export declare class BusinessPartnerTaxNumber<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusinessPartnerTaxNumberType<T> {
    readonly _entityApi: BusinessPartnerTaxNumberApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    bpTaxType: DeserializedType<T, 'Edm.String'>;
    bpTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    bpTaxLongNumber?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BusinessPartnerTaxNumberApi<T>);
}
export interface BusinessPartnerTaxNumberType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    bpTaxType: DeserializedType<T, 'Edm.String'>;
    bpTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    bpTaxLongNumber?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
