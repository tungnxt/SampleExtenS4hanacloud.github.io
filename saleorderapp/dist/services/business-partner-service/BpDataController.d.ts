import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BpDataControllerApi } from './BpDataControllerApi';
export declare class BpDataController<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BpDataControllerType<T> {
    readonly _entityApi: BpDataControllerApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    dataController: DeserializedType<T, 'Edm.String'>;
    purposeForPersonalData: DeserializedType<T, 'Edm.String'>;
    dataControlAssignmentStatus?: DeserializedType<T, 'Edm.String'> | null;
    bpDataControllerIsDerived?: DeserializedType<T, 'Edm.String'> | null;
    purposeDerived?: DeserializedType<T, 'Edm.String'> | null;
    purposeType?: DeserializedType<T, 'Edm.String'> | null;
    businessPurposeFlag?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BpDataControllerApi<T>);
}
export interface BpDataControllerType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    dataController: DeserializedType<T, 'Edm.String'>;
    purposeForPersonalData: DeserializedType<T, 'Edm.String'>;
    dataControlAssignmentStatus?: DeserializedType<T, 'Edm.String'> | null;
    bpDataControllerIsDerived?: DeserializedType<T, 'Edm.String'> | null;
    purposeDerived?: DeserializedType<T, 'Edm.String'> | null;
    purposeType?: DeserializedType<T, 'Edm.String'> | null;
    businessPurposeFlag?: DeserializedType<T, 'Edm.String'> | null;
}
