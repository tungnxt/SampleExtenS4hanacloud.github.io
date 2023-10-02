import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SupplierDunningApi } from './SupplierDunningApi';
export declare class SupplierDunning<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SupplierDunningType<T> {
    readonly _entityApi: SupplierDunningApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    supplier: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    dunningArea: DeserializedType<T, 'Edm.String'>;
    dunningBlock?: DeserializedType<T, 'Edm.String'> | null;
    dunningLevel?: DeserializedType<T, 'Edm.String'> | null;
    dunningProcedure?: DeserializedType<T, 'Edm.String'> | null;
    dunningRecipient?: DeserializedType<T, 'Edm.String'> | null;
    lastDunnedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
    legDunningProcedureOn?: DeserializedType<T, 'Edm.DateTime'> | null;
    dunningClerk?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: SupplierDunningApi<T>);
}
export interface SupplierDunningType<T extends DeSerializers = DefaultDeSerializers> {
    supplier: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    dunningArea: DeserializedType<T, 'Edm.String'>;
    dunningBlock?: DeserializedType<T, 'Edm.String'> | null;
    dunningLevel?: DeserializedType<T, 'Edm.String'> | null;
    dunningProcedure?: DeserializedType<T, 'Edm.String'> | null;
    dunningRecipient?: DeserializedType<T, 'Edm.String'> | null;
    lastDunnedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
    legDunningProcedureOn?: DeserializedType<T, 'Edm.DateTime'> | null;
    dunningClerk?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
}
