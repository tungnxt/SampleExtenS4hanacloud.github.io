import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BuPaIdentificationApi } from './BuPaIdentificationApi';
export declare class BuPaIdentification<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BuPaIdentificationType<T> {
    readonly _entityApi: BuPaIdentificationApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    bpIdentificationType: DeserializedType<T, 'Edm.String'>;
    bpIdentificationNumber: DeserializedType<T, 'Edm.String'>;
    bpIdnNmbrIssuingInstitute?: DeserializedType<T, 'Edm.String'> | null;
    bpIdentificationEntryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    country?: DeserializedType<T, 'Edm.String'> | null;
    region?: DeserializedType<T, 'Edm.String'> | null;
    validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    validityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BuPaIdentificationApi<T>);
}
export interface BuPaIdentificationType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    bpIdentificationType: DeserializedType<T, 'Edm.String'>;
    bpIdentificationNumber: DeserializedType<T, 'Edm.String'>;
    bpIdnNmbrIssuingInstitute?: DeserializedType<T, 'Edm.String'> | null;
    bpIdentificationEntryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    country?: DeserializedType<T, 'Edm.String'> | null;
    region?: DeserializedType<T, 'Edm.String'> | null;
    validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    validityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
