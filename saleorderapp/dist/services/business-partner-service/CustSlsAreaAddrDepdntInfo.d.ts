import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustSlsAreaAddrDepdntInfoApi } from './CustSlsAreaAddrDepdntInfoApi';
export declare class CustSlsAreaAddrDepdntInfo<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustSlsAreaAddrDepdntInfoType<T> {
    readonly _entityApi: CustSlsAreaAddrDepdntInfoApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
    incotermsSupChnLoc1AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    incotermsSupChnLoc2AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    incotermsSupChnDvtgLocAddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    deliveryIsBlocked?: DeserializedType<T, 'Edm.String'> | null;
    salesOffice?: DeserializedType<T, 'Edm.String'> | null;
    salesGroup?: DeserializedType<T, 'Edm.String'> | null;
    shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
    supplyingPlant?: DeserializedType<T, 'Edm.String'> | null;
    incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: CustSlsAreaAddrDepdntInfoApi<T>);
}
export interface CustSlsAreaAddrDepdntInfoType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
    incotermsSupChnLoc1AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    incotermsSupChnLoc2AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    incotermsSupChnDvtgLocAddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    deliveryIsBlocked?: DeserializedType<T, 'Edm.String'> | null;
    salesOffice?: DeserializedType<T, 'Edm.String'> | null;
    salesGroup?: DeserializedType<T, 'Edm.String'> | null;
    shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
    supplyingPlant?: DeserializedType<T, 'Edm.String'> | null;
    incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
}
