import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BusinessPartnerRoleApi } from './BusinessPartnerRoleApi';
export declare class BusinessPartnerRole<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusinessPartnerRoleType<T> {
    readonly _entityApi: BusinessPartnerRoleApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    businessPartnerRole: DeserializedType<T, 'Edm.String'>;
    validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BusinessPartnerRoleApi<T>);
}
export interface BusinessPartnerRoleType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    businessPartnerRole: DeserializedType<T, 'Edm.String'>;
    validFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    validTo?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
