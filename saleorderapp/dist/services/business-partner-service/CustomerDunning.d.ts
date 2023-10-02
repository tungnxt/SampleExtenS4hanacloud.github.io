import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustomerDunningApi } from './CustomerDunningApi';
export declare class CustomerDunning<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerDunningType<T> {
    readonly _entityApi: CustomerDunningApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
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
    customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: CustomerDunningApi<T>);
}
export interface CustomerDunningType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
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
    customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
}
