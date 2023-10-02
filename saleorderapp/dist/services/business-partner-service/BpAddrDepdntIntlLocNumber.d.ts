import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BpAddrDepdntIntlLocNumberApi } from './BpAddrDepdntIntlLocNumberApi';
export declare class BpAddrDepdntIntlLocNumber<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BpAddrDepdntIntlLocNumberType<T> {
    readonly _entityApi: BpAddrDepdntIntlLocNumberApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    internationalLocationNumber1?: DeserializedType<T, 'Edm.String'> | null;
    internationalLocationNumber2?: DeserializedType<T, 'Edm.String'> | null;
    internationalLocationNumber3?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BpAddrDepdntIntlLocNumberApi<T>);
}
export interface BpAddrDepdntIntlLocNumberType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    internationalLocationNumber1?: DeserializedType<T, 'Edm.String'> | null;
    internationalLocationNumber2?: DeserializedType<T, 'Edm.String'> | null;
    internationalLocationNumber3?: DeserializedType<T, 'Edm.String'> | null;
}
