import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderHeaderPartnerApi } from './SalesOrderHeaderPartnerApi';
import { SalesOrderPartnerAddress, SalesOrderPartnerAddressType } from './SalesOrderPartnerAddress';
import { SalesOrder, SalesOrderType } from './SalesOrder';
export declare class SalesOrderHeaderPartner<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderHeaderPartnerType<T> {
    readonly _entityApi: SalesOrderHeaderPartnerApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    partnerFunctionInternalCode?: DeserializedType<T, 'Edm.String'> | null;
    customer?: DeserializedType<T, 'Edm.String'> | null;
    supplier?: DeserializedType<T, 'Edm.String'> | null;
    personnel?: DeserializedType<T, 'Edm.String'> | null;
    contactPerson?: DeserializedType<T, 'Edm.String'> | null;
    referenceBusinessPartner?: DeserializedType<T, 'Edm.String'> | null;
    addressId?: DeserializedType<T, 'Edm.String'> | null;
    vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
    toAddress: SalesOrderPartnerAddress<T>[];
    toSalesOrder?: SalesOrder<T> | null;
    constructor(_entityApi: SalesOrderHeaderPartnerApi<T>);
}
export interface SalesOrderHeaderPartnerType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    partnerFunctionInternalCode?: DeserializedType<T, 'Edm.String'> | null;
    customer?: DeserializedType<T, 'Edm.String'> | null;
    supplier?: DeserializedType<T, 'Edm.String'> | null;
    personnel?: DeserializedType<T, 'Edm.String'> | null;
    contactPerson?: DeserializedType<T, 'Edm.String'> | null;
    referenceBusinessPartner?: DeserializedType<T, 'Edm.String'> | null;
    addressId?: DeserializedType<T, 'Edm.String'> | null;
    vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
    toAddress: SalesOrderPartnerAddressType<T>[];
    toSalesOrder?: SalesOrderType<T> | null;
}
