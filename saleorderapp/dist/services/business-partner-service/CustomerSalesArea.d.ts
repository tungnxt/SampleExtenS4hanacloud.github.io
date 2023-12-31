import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { CustomerSalesAreaApi } from './CustomerSalesAreaApi';
import { CustSalesPartnerFunc, CustSalesPartnerFuncType } from './CustSalesPartnerFunc';
import { CustomerSalesAreaTax, CustomerSalesAreaTaxType } from './CustomerSalesAreaTax';
import { CustomerSalesAreaText, CustomerSalesAreaTextType } from './CustomerSalesAreaText';
import { CustSlsAreaAddrDepdntInfo, CustSlsAreaAddrDepdntInfoType } from './CustSlsAreaAddrDepdntInfo';
export declare class CustomerSalesArea<T extends DeSerializers = DefaultDeSerializers> extends Entity implements CustomerSalesAreaType<T> {
    readonly _entityApi: CustomerSalesAreaApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    accountByCustomer?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    billingIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
    completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
    creditControlArea?: DeserializedType<T, 'Edm.String'> | null;
    currency?: DeserializedType<T, 'Edm.String'> | null;
    custIsRlvtForSettlmtMgmt?: DeserializedType<T, 'Edm.Boolean'> | null;
    customerAbcClassification?: DeserializedType<T, 'Edm.String'> | null;
    customerAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
    customerGroup?: DeserializedType<T, 'Edm.String'> | null;
    customerIsRebateRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
    customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
    customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
    customerPricingProcedure?: DeserializedType<T, 'Edm.String'> | null;
    custProdProposalProcedure?: DeserializedType<T, 'Edm.String'> | null;
    deliveryIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
    deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
    incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
    incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
    incotermsSupChnLoc1AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    incotermsSupChnLoc2AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    incotermsSupChnDvtgLocAddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
    incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
    inspSbstHasNoTimeOrQuantity?: DeserializedType<T, 'Edm.Boolean'> | null;
    invoiceDate?: DeserializedType<T, 'Edm.String'> | null;
    itemOrderProbabilityInPercent?: DeserializedType<T, 'Edm.String'> | null;
    manualInvoiceMaintIsRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
    maxNmbrOfPartialDelivery?: DeserializedType<T, 'Edm.Decimal'> | null;
    orderCombinationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
    orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
    overdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
    partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
    priceListType?: DeserializedType<T, 'Edm.String'> | null;
    productUnitGroup?: DeserializedType<T, 'Edm.String'> | null;
    proofOfDeliveryTimeValue?: DeserializedType<T, 'Edm.Decimal'> | null;
    salesGroup?: DeserializedType<T, 'Edm.String'> | null;
    salesItemProposal?: DeserializedType<T, 'Edm.String'> | null;
    salesOffice?: DeserializedType<T, 'Edm.String'> | null;
    shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
    slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
    slsUnlmtdOvrdelivIsAllwd?: DeserializedType<T, 'Edm.Boolean'> | null;
    supplyingPlant?: DeserializedType<T, 'Edm.String'> | null;
    salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
    underdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
    invoiceListSchedule?: DeserializedType<T, 'Edm.String'> | null;
    exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
    paymentGuaranteeProcedure?: DeserializedType<T, 'Edm.String'> | null;
    customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
    toPartnerFunction: CustSalesPartnerFunc<T>[];
    toSalesAreaTax: CustomerSalesAreaTax<T>[];
    toSalesAreaText: CustomerSalesAreaText<T>[];
    toSlsAreaAddrDepdntInfo: CustSlsAreaAddrDepdntInfo<T>[];
    constructor(_entityApi: CustomerSalesAreaApi<T>);
}
export interface CustomerSalesAreaType<T extends DeSerializers = DefaultDeSerializers> {
    customer: DeserializedType<T, 'Edm.String'>;
    salesOrganization: DeserializedType<T, 'Edm.String'>;
    distributionChannel: DeserializedType<T, 'Edm.String'>;
    division: DeserializedType<T, 'Edm.String'>;
    accountByCustomer?: DeserializedType<T, 'Edm.String'> | null;
    authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
    billingIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
    completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
    creditControlArea?: DeserializedType<T, 'Edm.String'> | null;
    currency?: DeserializedType<T, 'Edm.String'> | null;
    custIsRlvtForSettlmtMgmt?: DeserializedType<T, 'Edm.Boolean'> | null;
    customerAbcClassification?: DeserializedType<T, 'Edm.String'> | null;
    customerAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
    customerGroup?: DeserializedType<T, 'Edm.String'> | null;
    customerIsRebateRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
    customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
    customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
    customerPricingProcedure?: DeserializedType<T, 'Edm.String'> | null;
    custProdProposalProcedure?: DeserializedType<T, 'Edm.String'> | null;
    deliveryIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
    deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
    incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
    incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
    incotermsSupChnLoc1AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    incotermsSupChnLoc2AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    incotermsSupChnDvtgLocAddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
    deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
    incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
    inspSbstHasNoTimeOrQuantity?: DeserializedType<T, 'Edm.Boolean'> | null;
    invoiceDate?: DeserializedType<T, 'Edm.String'> | null;
    itemOrderProbabilityInPercent?: DeserializedType<T, 'Edm.String'> | null;
    manualInvoiceMaintIsRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
    maxNmbrOfPartialDelivery?: DeserializedType<T, 'Edm.Decimal'> | null;
    orderCombinationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
    orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
    overdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
    partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
    priceListType?: DeserializedType<T, 'Edm.String'> | null;
    productUnitGroup?: DeserializedType<T, 'Edm.String'> | null;
    proofOfDeliveryTimeValue?: DeserializedType<T, 'Edm.Decimal'> | null;
    salesGroup?: DeserializedType<T, 'Edm.String'> | null;
    salesItemProposal?: DeserializedType<T, 'Edm.String'> | null;
    salesOffice?: DeserializedType<T, 'Edm.String'> | null;
    shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
    slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
    slsUnlmtdOvrdelivIsAllwd?: DeserializedType<T, 'Edm.Boolean'> | null;
    supplyingPlant?: DeserializedType<T, 'Edm.String'> | null;
    salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
    underdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
    invoiceListSchedule?: DeserializedType<T, 'Edm.String'> | null;
    exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
    paymentGuaranteeProcedure?: DeserializedType<T, 'Edm.String'> | null;
    customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
    toPartnerFunction: CustSalesPartnerFuncType<T>[];
    toSalesAreaTax: CustomerSalesAreaTaxType<T>[];
    toSalesAreaText: CustomerSalesAreaTextType<T>[];
    toSlsAreaAddrDepdntInfo: CustSlsAreaAddrDepdntInfoType<T>[];
}
