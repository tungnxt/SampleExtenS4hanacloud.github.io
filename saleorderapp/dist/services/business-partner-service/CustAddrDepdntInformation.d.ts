import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustAddrDepdntInformationApi } from './CustAddrDepdntInformationApi';
export declare class CustAddrDepdntInformation<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustAddrDepdntInformationType<T> {
    readonly _entityApi: CustAddrDepdntInformationApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    expressTrainStationName?: DeserializedType<T, 'Edm.String'> | null;
    trainStationName?: DeserializedType<T, 'Edm.String'> | null;
    cityCode?: DeserializedType<T, 'Edm.String'> | null;
    county?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: CustAddrDepdntInformationApi<T>);
}
export interface CustAddrDepdntInformationType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    expressTrainStationName?: DeserializedType<T, 'Edm.String'> | null;
    trainStationName?: DeserializedType<T, 'Edm.String'> | null;
    cityCode?: DeserializedType<T, 'Edm.String'> | null;
    county?: DeserializedType<T, 'Edm.String'> | null;
}
