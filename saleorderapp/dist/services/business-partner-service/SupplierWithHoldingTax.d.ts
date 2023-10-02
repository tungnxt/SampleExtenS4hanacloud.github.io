import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SupplierWithHoldingTaxApi } from './SupplierWithHoldingTaxApi';
export declare class SupplierWithHoldingTax<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SupplierWithHoldingTaxType<T> {
    readonly _entityApi: SupplierWithHoldingTaxApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    supplier: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    withholdingTaxType: DeserializedType<T, 'Edm.String'>;
    exemptionDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
    exemptionDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
    exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
    isWithholdingTaxSubject?: DeserializedType<T, 'Edm.Boolean'> | null;
    recipientType?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
    withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    constructor(_entityApi: SupplierWithHoldingTaxApi<T>);
}
export interface SupplierWithHoldingTaxType<T extends DeSerializers = DefaultDeSerializers> {
    supplier: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    withholdingTaxType: DeserializedType<T, 'Edm.String'>;
    exemptionDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
    exemptionDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
    exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
    isWithholdingTaxSubject?: DeserializedType<T, 'Edm.Boolean'> | null;
    recipientType?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
    withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
