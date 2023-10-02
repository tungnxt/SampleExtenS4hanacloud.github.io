import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderItemPartnerApi } from './SalesOrderItemPartnerApi';
import { SalesOrderItemPartnerAddress, SalesOrderItemPartnerAddressType } from './SalesOrderItemPartnerAddress';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';
export declare class SalesOrderItemPartner<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderItemPartnerType<T> {
    readonly _entityApi: SalesOrderItemPartnerApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    partnerFunctionInternalCode?: DeserializedType<T, 'Edm.String'> | null;
    customer?: DeserializedType<T, 'Edm.String'> | null;
    supplier?: DeserializedType<T, 'Edm.String'> | null;
    personnel?: DeserializedType<T, 'Edm.String'> | null;
    contactPerson?: DeserializedType<T, 'Edm.String'> | null;
    referenceBusinessPartner?: DeserializedType<T, 'Edm.String'> | null;
    addressId?: DeserializedType<T, 'Edm.String'> | null;
    vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
    toAddress: SalesOrderItemPartnerAddress<T>[];
    toSalesOrder?: SalesOrder<T> | null;
    toSalesOrderItem?: SalesOrderItem<T> | null;
    constructor(_entityApi: SalesOrderItemPartnerApi<T>);
}
export interface SalesOrderItemPartnerType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    partnerFunctionInternalCode?: DeserializedType<T, 'Edm.String'> | null;
    customer?: DeserializedType<T, 'Edm.String'> | null;
    supplier?: DeserializedType<T, 'Edm.String'> | null;
    personnel?: DeserializedType<T, 'Edm.String'> | null;
    contactPerson?: DeserializedType<T, 'Edm.String'> | null;
    referenceBusinessPartner?: DeserializedType<T, 'Edm.String'> | null;
    addressId?: DeserializedType<T, 'Edm.String'> | null;
    vatRegistration?: DeserializedType<T, 'Edm.String'> | null;
    toAddress: SalesOrderItemPartnerAddressType<T>[];
    toSalesOrder?: SalesOrderType<T> | null;
    toSalesOrderItem?: SalesOrderItemType<T> | null;
}
