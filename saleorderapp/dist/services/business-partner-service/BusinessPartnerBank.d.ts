import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BusinessPartnerBankApi } from './BusinessPartnerBankApi';
export declare class BusinessPartnerBank<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BusinessPartnerBankType<T> {
    readonly _entityApi: BusinessPartnerBankApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    businessPartner: DeserializedType<T, 'Edm.String'>;
    bankIdentification: DeserializedType<T, 'Edm.String'>;
    bankCountryKey?: DeserializedType<T, 'Edm.String'> | null;
    bankName?: DeserializedType<T, 'Edm.String'> | null;
    bankNumber?: DeserializedType<T, 'Edm.String'> | null;
    swiftCode?: DeserializedType<T, 'Edm.String'> | null;
    bankControlKey?: DeserializedType<T, 'Edm.String'> | null;
    bankAccountHolderName?: DeserializedType<T, 'Edm.String'> | null;
    bankAccountName?: DeserializedType<T, 'Edm.String'> | null;
    validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    iban?: DeserializedType<T, 'Edm.String'> | null;
    ibanValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bankAccount?: DeserializedType<T, 'Edm.String'> | null;
    bankAccountReferenceText?: DeserializedType<T, 'Edm.String'> | null;
    collectionAuthInd?: DeserializedType<T, 'Edm.Boolean'> | null;
    cityName?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BusinessPartnerBankApi<T>);
}
export interface BusinessPartnerBankType<T extends DeSerializers = DefaultDeSerializers> {
    businessPartner: DeserializedType<T, 'Edm.String'>;
    bankIdentification: DeserializedType<T, 'Edm.String'>;
    bankCountryKey?: DeserializedType<T, 'Edm.String'> | null;
    bankName?: DeserializedType<T, 'Edm.String'> | null;
    bankNumber?: DeserializedType<T, 'Edm.String'> | null;
    swiftCode?: DeserializedType<T, 'Edm.String'> | null;
    bankControlKey?: DeserializedType<T, 'Edm.String'> | null;
    bankAccountHolderName?: DeserializedType<T, 'Edm.String'> | null;
    bankAccountName?: DeserializedType<T, 'Edm.String'> | null;
    validityStartDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    validityEndDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    iban?: DeserializedType<T, 'Edm.String'> | null;
    ibanValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    bankAccount?: DeserializedType<T, 'Edm.String'> | null;
    bankAccountReferenceText?: DeserializedType<T, 'Edm.String'> | null;
    collectionAuthInd?: DeserializedType<T, 'Edm.Boolean'> | null;
    cityName?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
