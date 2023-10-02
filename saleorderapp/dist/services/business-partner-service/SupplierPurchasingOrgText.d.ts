import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SupplierPurchasingOrgTextApi } from './SupplierPurchasingOrgTextApi';
export declare class SupplierPurchasingOrgText<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SupplierPurchasingOrgTextType<T> {
    readonly _entityApi: SupplierPurchasingOrgTextApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    supplier: DeserializedType<T, 'Edm.String'>;
    purchasingOrganization: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: SupplierPurchasingOrgTextApi<T>);
}
export interface SupplierPurchasingOrgTextType<T extends DeSerializers = DefaultDeSerializers> {
    supplier: DeserializedType<T, 'Edm.String'>;
    purchasingOrganization: DeserializedType<T, 'Edm.String'>;
    language: DeserializedType<T, 'Edm.String'>;
    longTextId: DeserializedType<T, 'Edm.String'>;
    longText?: DeserializedType<T, 'Edm.String'> | null;
}
