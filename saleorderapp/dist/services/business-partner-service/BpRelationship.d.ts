import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BpRelationshipApi } from './BpRelationshipApi';
export declare class BpRelationship<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BpRelationshipType<T> {
    readonly _entityApi: BpRelationshipApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartner1: DeserializedType<T, 'Edm.String'>;
    businessPartner2: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    isStandardRelationship?: DeserializedType<T, 'Edm.Boolean'> | null;
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
    bpRelationshipType?: DeserializedType<T, 'Edm.String'> | null;
    createdByUser?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    creationTime?: DeserializedType<T, 'Edm.Time'> | null;
    lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    lastChangeTime?: DeserializedType<T, 'Edm.Time'> | null;
    constructor(_entityApi: BpRelationshipApi<T>);
}
export interface BpRelationshipType<T extends DeSerializers = DefaultDeSerializers> {
    relationshipNumber: DeserializedType<T, 'Edm.String'>;
    businessPartner1: DeserializedType<T, 'Edm.String'>;
    businessPartner2: DeserializedType<T, 'Edm.String'>;
    validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    isStandardRelationship?: DeserializedType<T, 'Edm.Boolean'> | null;
    relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
    bpRelationshipType?: DeserializedType<T, 'Edm.String'> | null;
    createdByUser?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    creationTime?: DeserializedType<T, 'Edm.Time'> | null;
    lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    lastChangeTime?: DeserializedType<T, 'Edm.Time'> | null;
}
