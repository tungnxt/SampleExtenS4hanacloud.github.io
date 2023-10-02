import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustomerTaxGroupingApi } from './CustomerTaxGroupingApi';
export declare class CustomerTaxGrouping<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerTaxGroupingType<T> {
    readonly _entityApi: CustomerTaxGroupingApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    customerTaxGroupingCode: DeserializedType<T, 'Edm.String'>;
    custTaxGrpExemptionCertificate?: DeserializedType<T, 'Edm.String'> | null;
    custTaxGroupExemptionRate?: DeserializedType<T, 'Edm.Decimal'> | null;
    custTaxGroupExemptionStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    custTaxGroupExemptionEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    custTaxGroupSubjectedStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    custTaxGroupSubjectedEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    constructor(_entityApi: CustomerTaxGroupingApi<T>);
}
export interface CustomerTaxGroupingType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    customerTaxGroupingCode: DeserializedType<T, 'Edm.String'>;
    custTaxGrpExemptionCertificate?: DeserializedType<T, 'Edm.String'> | null;
    custTaxGroupExemptionRate?: DeserializedType<T, 'Edm.Decimal'> | null;
    custTaxGroupExemptionStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    custTaxGroupExemptionEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    custTaxGroupSubjectedStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    custTaxGroupSubjectedEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
}
