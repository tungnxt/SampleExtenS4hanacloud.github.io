import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BusPartAddrDepdntTaxNmbrApi } from './BusPartAddrDepdntTaxNmbrApi';
export declare class BusPartAddrDepdntTaxNmbr<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusPartAddrDepdntTaxNmbrType<T> {
    readonly _entityApi: BusPartAddrDepdntTaxNmbrApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    bpTaxType: DeserializedType<T, 'Edm.String'>;
    bpTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    bpTaxLongNumber?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BusPartAddrDepdntTaxNmbrApi<T>);
}
export interface BusPartAddrDepdntTaxNmbrType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    bpTaxType: DeserializedType<T, 'Edm.String'>;
    bpTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    bpTaxLongNumber?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
