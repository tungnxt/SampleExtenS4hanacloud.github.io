import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustomerWithHoldingTaxApi } from './CustomerWithHoldingTaxApi';
export declare class CustomerWithHoldingTax<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerWithHoldingTaxType<T> {
    readonly _entityApi: CustomerWithHoldingTaxApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    withholdingTaxType: DeserializedType<T, 'Edm.String'>;
    withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxAgent?: DeserializedType<T, 'Edm.Boolean'> | null;
    obligationDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
    obligationDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
    withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
    exemptionDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
    exemptionDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
    exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: CustomerWithHoldingTaxApi<T>);
}
export interface CustomerWithHoldingTaxType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    withholdingTaxType: DeserializedType<T, 'Edm.String'>;
    withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxAgent?: DeserializedType<T, 'Edm.Boolean'> | null;
    obligationDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
    obligationDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
    withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
    exemptionDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
    exemptionDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
    exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
