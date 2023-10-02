import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BusinessPartnerPaymentCardApi } from './BusinessPartnerPaymentCardApi';
export declare class BusinessPartnerPaymentCard<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusinessPartnerPaymentCardType<T> {
    readonly _entityApi: BusinessPartnerPaymentCardApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    paymentCardId: DeserializedType<T, 'Edm.String'>;
    paymentCardType: DeserializedType<T, 'Edm.String'>;
    cardNumber: DeserializedType<T, 'Edm.String'>;
    isStandardCard?: DeserializedType<T, 'Edm.Boolean'> | null;
    cardDescription?: DeserializedType<T, 'Edm.String'> | null;
    validityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    validityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    cardHolder?: DeserializedType<T, 'Edm.String'> | null;
    cardIssuingBank?: DeserializedType<T, 'Edm.String'> | null;
    cardIssueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    paymentCardLock?: DeserializedType<T, 'Edm.String'> | null;
    maskedCardNumber?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BusinessPartnerPaymentCardApi<T>);
}
export interface BusinessPartnerPaymentCardType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    paymentCardId: DeserializedType<T, 'Edm.String'>;
    paymentCardType: DeserializedType<T, 'Edm.String'>;
    cardNumber: DeserializedType<T, 'Edm.String'>;
    isStandardCard?: DeserializedType<T, 'Edm.Boolean'> | null;
    cardDescription?: DeserializedType<T, 'Edm.String'> | null;
    validityDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    validityEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    cardHolder?: DeserializedType<T, 'Edm.String'> | null;
    cardIssuingBank?: DeserializedType<T, 'Edm.String'> | null;
    cardIssueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    paymentCardLock?: DeserializedType<T, 'Edm.String'> | null;
    maskedCardNumber?: DeserializedType<T, 'Edm.String'> | null;
}
