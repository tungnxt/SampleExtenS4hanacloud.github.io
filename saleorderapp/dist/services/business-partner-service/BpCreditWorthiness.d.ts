import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BpCreditWorthinessApi } from './BpCreditWorthinessApi';
export declare class BpCreditWorthiness<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BpCreditWorthinessType<T> {
    readonly _entityApi: BpCreditWorthinessApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    busPartCreditStanding?: DeserializedType<T, 'Edm.String'> | null;
    bpCreditStandingStatus?: DeserializedType<T, 'Edm.String'> | null;
    creditRatingAgency?: DeserializedType<T, 'Edm.String'> | null;
    bpCreditStandingComment?: DeserializedType<T, 'Edm.String'> | null;
    bpCreditStandingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bpCreditStandingRating?: DeserializedType<T, 'Edm.String'> | null;
    bpLegalProceedingStatus?: DeserializedType<T, 'Edm.String'> | null;
    bpLglProceedingInitiationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    businessPartnerIsUnderOath?: DeserializedType<T, 'Edm.Boolean'> | null;
    businessPartnerOathDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    businessPartnerIsBankrupt?: DeserializedType<T, 'Edm.Boolean'> | null;
    businessPartnerBankruptcyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bpForeclosureIsInitiated?: DeserializedType<T, 'Edm.Boolean'> | null;
    bpForeclosureDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bpCrdtWrthnssAccessChkIsActive?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BpCreditWorthinessApi<T>);
}
export interface BpCreditWorthinessType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    busPartCreditStanding?: DeserializedType<T, 'Edm.String'> | null;
    bpCreditStandingStatus?: DeserializedType<T, 'Edm.String'> | null;
    creditRatingAgency?: DeserializedType<T, 'Edm.String'> | null;
    bpCreditStandingComment?: DeserializedType<T, 'Edm.String'> | null;
    bpCreditStandingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bpCreditStandingRating?: DeserializedType<T, 'Edm.String'> | null;
    bpLegalProceedingStatus?: DeserializedType<T, 'Edm.String'> | null;
    bpLglProceedingInitiationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    businessPartnerIsUnderOath?: DeserializedType<T, 'Edm.Boolean'> | null;
    businessPartnerOathDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    businessPartnerIsBankrupt?: DeserializedType<T, 'Edm.Boolean'> | null;
    businessPartnerBankruptcyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bpForeclosureIsInitiated?: DeserializedType<T, 'Edm.Boolean'> | null;
    bpForeclosureDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bpCrdtWrthnssAccessChkIsActive?: DeserializedType<T, 'Edm.String'> | null;
}
