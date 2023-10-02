import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SupplierPartnerFuncApi } from './SupplierPartnerFuncApi';
export declare class SupplierPartnerFunc<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SupplierPartnerFuncType<T> {
    readonly _entityApi: SupplierPartnerFuncApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    supplier: DeserializedType<T, 'Edm.String'>;
    purchasingOrganization: DeserializedType<T, 'Edm.String'>;
    supplierSubrange: DeserializedType<T, 'Edm.String'>;
    plant: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    partnerCounter: DeserializedType<T, 'Edm.String'>;
    defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    createdByUser?: DeserializedType<T, 'Edm.String'> | null;
    referenceSupplier?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: SupplierPartnerFuncApi<T>);
}
export interface SupplierPartnerFuncType<T extends DeSerializers = DefaultDeSerializers> {
    supplier: DeserializedType<T, 'Edm.String'>;
    purchasingOrganization: DeserializedType<T, 'Edm.String'>;
    supplierSubrange: DeserializedType<T, 'Edm.String'>;
    plant: DeserializedType<T, 'Edm.String'>;
    partnerFunction: DeserializedType<T, 'Edm.String'>;
    partnerCounter: DeserializedType<T, 'Edm.String'>;
    defaultPartner?: DeserializedType<T, 'Edm.Boolean'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    createdByUser?: DeserializedType<T, 'Edm.String'> | null;
    referenceSupplier?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
