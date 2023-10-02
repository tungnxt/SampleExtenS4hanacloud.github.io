import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustSalesPartnerFuncApi } from './CustSalesPartnerFuncApi';
export declare class CustSalesPartnerFunc<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustSalesPartnerFuncType<T> {
    readonly _entityApi: CustSalesPartnerFuncApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    partnerCounter: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    bpCustomerNumber?: DeserializedType<T, 'Edm.String'> | null;
    customerPartnerDescription?: DeserializedType<T, 'Edm.String'> | null;
    defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
    supplier?: DeserializedType<T, 'Edm.String'> | null;
    personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
    contactPerson?: DeserializedType<T, 'Edm.String'> | null;
    addressId?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: CustSalesPartnerFuncApi<T>);
}
export interface CustSalesPartnerFuncType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    partnerCounter: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    bpCustomerNumber?: DeserializedType<T, 'Edm.String'> | null;
    customerPartnerDescription?: DeserializedType<T, 'Edm.String'> | null;
    defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
    supplier?: DeserializedType<T, 'Edm.String'> | null;
    personnelNumber?: DeserializedType<T, 'Edm.String'> | null;
    contactPerson?: DeserializedType<T, 'Edm.String'> | null;
    addressId?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
