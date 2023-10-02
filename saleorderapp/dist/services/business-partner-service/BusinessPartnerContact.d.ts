import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BusinessPartnerContactApi } from './BusinessPartnerContactApi';
import { BpContactToAddress, BpContactToAddressType } from './BpContactToAddress';
import { BpContactToFuncAndDept, BpContactToFuncAndDeptType } from './BpContactToFuncAndDept';
export declare class BusinessPartnerContact<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusinessPartnerContactType<T> {
    readonly _entityApi: BusinessPartnerContactApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    isStandardRelationship?: DeserializedType<T, 'Edm.Boolean'> | null;
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
    toContactAddress: BpContactToAddress<T>[];
    toContactRelationship?: BpContactToFuncAndDept<T> | null;
    constructor(_entityApi: BusinessPartnerContactApi<T>);
}
export interface BusinessPartnerContactType<T extends DeSerializers = DefaultDeSerializers> {
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartnerCompany: DeserializedType<T, 'Edm.String'>;
    businessPartnerPerson: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    isStandardRelationship?: DeserializedType<T, 'Edm.Boolean'> | null;
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
    toContactAddress: BpContactToAddressType<T>[];
    toContactRelationship?: BpContactToFuncAndDeptType<T> | null;
}
