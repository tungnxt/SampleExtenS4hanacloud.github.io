import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { BuPaIndustryApi } from './BuPaIndustryApi';
export declare class BuPaIndustry<T extends DeSerializers = DefaultDeSerializers> extends Entity implements BuPaIndustryType<T> {
    readonly _entityApi: BuPaIndustryApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    industrySector: DeserializedType<T, 'Edm.String'>;
    industrySystemType: DeserializedType<T, 'Edm.String'>;
    businessPartner: DeserializedType<T, 'Edm.String'>;
    isStandardIndustry?: DeserializedType<T, 'Edm.String'> | null;
    industryKeyDescription?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: BuPaIndustryApi<T>);
}
export interface BuPaIndustryType<T extends DeSerializers = DefaultDeSerializers> {
    industrySector: DeserializedType<T, 'Edm.String'>;
    industrySystemType: DeserializedType<T, 'Edm.String'>;
    businessPartner: DeserializedType<T, 'Edm.String'>;
    isStandardIndustry?: DeserializedType<T, 'Edm.String'> | null;
    industryKeyDescription?: DeserializedType<T, 'Edm.String'> | null;
}
