import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SupplierCompanyApi } from './SupplierCompanyApi';
import { SupplierCompanyText, SupplierCompanyTextType } from './SupplierCompanyText';
import { Supplier, SupplierType } from './Supplier';
import { SupplierDunning, SupplierDunningType } from './SupplierDunning';
import { SupplierWithHoldingTax, SupplierWithHoldingTaxType } from './SupplierWithHoldingTax';
export declare class SupplierCompany<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SupplierCompanyType<T> {
    readonly _entityApi: SupplierCompanyApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    supplier: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
    paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
    supplierIsBlockedForPosting?: DeserializedType<T, 'Edm.Boolean'> | null;
    accountingClerk?: DeserializedType<T, 'Edm.String'> | null;
    accountingClerkFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    accountingClerkPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    supplierClerk?: DeserializedType<T, 'Edm.String'> | null;
    supplierClerkUrl?: DeserializedType<T, 'Edm.String'> | null;
    paymentMethodsList?: DeserializedType<T, 'Edm.String'> | null;
    paymentReason?: DeserializedType<T, 'Edm.String'> | null;
    paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
    clearCustomerSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
    isToBeLocallyProcessed?: DeserializedType<T, 'Edm.Boolean'> | null;
    itemIsToBePaidSeparately?: DeserializedType<T, 'Edm.Boolean'> | null;
    paymentIsToBeSentByEdi?: DeserializedType<T, 'Edm.Boolean'> | null;
    houseBank?: DeserializedType<T, 'Edm.String'> | null;
    checkPaidDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
    currency?: DeserializedType<T, 'Edm.String'> | null;
    billOfExchLmtAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
    supplierClerkIdBySupplier?: DeserializedType<T, 'Edm.String'> | null;
    reconciliationAccount?: DeserializedType<T, 'Edm.String'> | null;
    interestCalculationCode?: DeserializedType<T, 'Edm.String'> | null;
    interestCalculationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    intrstCalcFrequencyInMonths?: DeserializedType<T, 'Edm.String'> | null;
    supplierHeadOffice?: DeserializedType<T, 'Edm.String'> | null;
    alternativePayee?: DeserializedType<T, 'Edm.String'> | null;
    layoutSortingRule?: DeserializedType<T, 'Edm.String'> | null;
    aparToleranceGroup?: DeserializedType<T, 'Edm.String'> | null;
    supplierCertificationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    supplierAccountNote?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxCountry?: DeserializedType<T, 'Edm.String'> | null;
    deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
    cashPlanningGroup?: DeserializedType<T, 'Edm.String'> | null;
    isToBeCheckedForDuplicates?: DeserializedType<T, 'Edm.Boolean'> | null;
    minorityGroup?: DeserializedType<T, 'Edm.String'> | null;
    supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
    toCompanyText: SupplierCompanyText<T>[];
    toSupplier?: Supplier<T> | null;
    toSupplierDunning: SupplierDunning<T>[];
    toSupplierWithHoldingTax: SupplierWithHoldingTax<T>[];
    constructor(_entityApi: SupplierCompanyApi<T>);
}
export interface SupplierCompanyType<T extends DeSerializers = DefaultDeSerializers> {
    supplier: DeserializedType<T, 'Edm.String'>;
    companyCode: DeserializedType<T, 'Edm.String'>;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    companyCodeName?: DeserializedType<T, 'Edm.String'> | null;
    paymentBlockingReason?: DeserializedType<T, 'Edm.String'> | null;
    supplierIsBlockedForPosting?: DeserializedType<T, 'Edm.Boolean'> | null;
    accountingClerk?: DeserializedType<T, 'Edm.String'> | null;
    accountingClerkFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
    accountingClerkPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
    supplierClerk?: DeserializedType<T, 'Edm.String'> | null;
    supplierClerkUrl?: DeserializedType<T, 'Edm.String'> | null;
    paymentMethodsList?: DeserializedType<T, 'Edm.String'> | null;
    paymentReason?: DeserializedType<T, 'Edm.String'> | null;
    paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
    clearCustomerSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
    isToBeLocallyProcessed?: DeserializedType<T, 'Edm.Boolean'> | null;
    itemIsToBePaidSeparately?: DeserializedType<T, 'Edm.Boolean'> | null;
    paymentIsToBeSentByEdi?: DeserializedType<T, 'Edm.Boolean'> | null;
    houseBank?: DeserializedType<T, 'Edm.String'> | null;
    checkPaidDurationInDays?: DeserializedType<T, 'Edm.Decimal'> | null;
    currency?: DeserializedType<T, 'Edm.String'> | null;
    billOfExchLmtAmtInCoCodeCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
    supplierClerkIdBySupplier?: DeserializedType<T, 'Edm.String'> | null;
    reconciliationAccount?: DeserializedType<T, 'Edm.String'> | null;
    interestCalculationCode?: DeserializedType<T, 'Edm.String'> | null;
    interestCalculationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    intrstCalcFrequencyInMonths?: DeserializedType<T, 'Edm.String'> | null;
    supplierHeadOffice?: DeserializedType<T, 'Edm.String'> | null;
    alternativePayee?: DeserializedType<T, 'Edm.String'> | null;
    layoutSortingRule?: DeserializedType<T, 'Edm.String'> | null;
    aparToleranceGroup?: DeserializedType<T, 'Edm.String'> | null;
    supplierCertificationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    supplierAccountNote?: DeserializedType<T, 'Edm.String'> | null;
    withholdingTaxCountry?: DeserializedType<T, 'Edm.String'> | null;
    deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
    cashPlanningGroup?: DeserializedType<T, 'Edm.String'> | null;
    isToBeCheckedForDuplicates?: DeserializedType<T, 'Edm.Boolean'> | null;
    minorityGroup?: DeserializedType<T, 'Edm.String'> | null;
    supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
    toCompanyText: SupplierCompanyTextType<T>[];
    toSupplier?: SupplierType<T> | null;
    toSupplierDunning: SupplierDunningType<T>[];
    toSupplierWithHoldingTax: SupplierWithHoldingTaxType<T>[];
}
