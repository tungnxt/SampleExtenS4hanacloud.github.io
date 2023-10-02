import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustAddrDepdntExtIdentifierApi } from './CustAddrDepdntExtIdentifierApi';
export declare class CustAddrDepdntExtIdentifier<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustAddrDepdntExtIdentifierType<T> {
    readonly _entityApi: CustAddrDepdntExtIdentifierApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    customerExternalRefId?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: CustAddrDepdntExtIdentifierApi<T>);
}
export interface CustAddrDepdntExtIdentifierType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    customerExternalRefId?: DeserializedType<T, 'Edm.String'> | null;
}
