import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BusinessPartnerRatingApi } from './BusinessPartnerRatingApi';
export declare class BusinessPartnerRating<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusinessPartnerRatingType<T> {
    readonly _entityApi: BusinessPartnerRatingApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    businessPartnerRatingProcedure: DeserializedType<T, 'Edm.String'>;
    bpRatingValidityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    businessPartnerRatingGrade?: DeserializedType<T, 'Edm.String'> | null;
    businessPartnerRatingTrend?: DeserializedType<T, 'Edm.String'> | null;
    bpRatingValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bpRatingCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    businessPartnerRatingComment?: DeserializedType<T, 'Edm.String'> | null;
    businessPartnerRatingIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
    bpRatingIsValidOnKeyDate?: DeserializedType<T, 'Edm.Boolean'> | null;
    businessPartnerRatingKeyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    businessPartnerRatingIsExpired?: DeserializedType<T, 'Edm.Boolean'> | null;
    constructor(_entityApi: BusinessPartnerRatingApi<T>);
}
export interface BusinessPartnerRatingType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    businessPartnerRatingProcedure: DeserializedType<T, 'Edm.String'>;
    bpRatingValidityEndDate: DeserializedType<T, 'Edm.DateTime'>;
    businessPartnerRatingGrade?: DeserializedType<T, 'Edm.String'> | null;
    businessPartnerRatingTrend?: DeserializedType<T, 'Edm.String'> | null;
    bpRatingValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bpRatingCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    businessPartnerRatingComment?: DeserializedType<T, 'Edm.String'> | null;
    businessPartnerRatingIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
    bpRatingIsValidOnKeyDate?: DeserializedType<T, 'Edm.Boolean'> | null;
    businessPartnerRatingKeyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    businessPartnerRatingIsExpired?: DeserializedType<T, 'Edm.Boolean'> | null;
}
