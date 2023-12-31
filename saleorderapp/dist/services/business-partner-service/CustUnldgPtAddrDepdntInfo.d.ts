import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustUnldgPtAddrDepdntInfoApi } from './CustUnldgPtAddrDepdntInfoApi';
export declare class CustUnldgPtAddrDepdntInfo<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustUnldgPtAddrDepdntInfoType<T> {
    readonly _entityApi: CustUnldgPtAddrDepdntInfoApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    unloadingPointName: DeserializedType<T, 'Edm.String'>;
    customerFactoryCalenderCode?: DeserializedType<T, 'Edm.String'> | null;
    bpGoodsReceivingHoursCode?: DeserializedType<T, 'Edm.String'> | null;
    isDfltBpUnloadingPoint?: DeserializedType<T, 'Edm.Boolean'> | null;
    mondayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    mondayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    mondayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    mondayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    tuesdayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    tuesdayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    tuesdayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    tuesdayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    wednesdayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    wednesdayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    wednesdayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    wednesdayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    thursdayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    thursdayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    thursdayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    thursdayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    fridayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    fridayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    fridayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    fridayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    saturdayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    saturdayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    saturdayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    saturdayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    sundayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    sundayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    sundayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    sundayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    constructor(_entityApi: CustUnldgPtAddrDepdntInfoApi<T>);
}
export interface CustUnldgPtAddrDepdntInfoType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    addressId: DeserializedType<T, 'Edm.String'>;
    unloadingPointName: DeserializedType<T, 'Edm.String'>;
    customerFactoryCalenderCode?: DeserializedType<T, 'Edm.String'> | null;
    bpGoodsReceivingHoursCode?: DeserializedType<T, 'Edm.String'> | null;
    isDfltBpUnloadingPoint?: DeserializedType<T, 'Edm.Boolean'> | null;
    mondayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    mondayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    mondayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    mondayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    tuesdayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    tuesdayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    tuesdayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    tuesdayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    wednesdayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    wednesdayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    wednesdayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    wednesdayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    thursdayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    thursdayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    thursdayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    thursdayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    fridayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    fridayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    fridayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    fridayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    saturdayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    saturdayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    saturdayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    saturdayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    sundayMorningOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    sundayMorningClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
    sundayAfternoonOpeningTime?: DeserializedType<T, 'Edm.Time'> | null;
    sundayAfternoonClosingTime?: DeserializedType<T, 'Edm.Time'> | null;
}
