import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderBillingPlan, SalesOrderBillingPlanType } from './SalesOrderBillingPlan';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';
import { SalesOrderHeaderPartner, SalesOrderHeaderPartnerType } from './SalesOrderHeaderPartner';
import { SlsOrdPaymentPlanItemDetails, SlsOrdPaymentPlanItemDetailsType } from './SlsOrdPaymentPlanItemDetails';
import { SalesOrderPrecdgProcFlow, SalesOrderPrecdgProcFlowType } from './SalesOrderPrecdgProcFlow';
import { SalesOrderHeaderPrElement, SalesOrderHeaderPrElementType } from './SalesOrderHeaderPrElement';
import { SalesOrderRelatedObject, SalesOrderRelatedObjectType } from './SalesOrderRelatedObject';
import { SalesOrderSubsqntProcFlow, SalesOrderSubsqntProcFlowType } from './SalesOrderSubsqntProcFlow';
import { SalesOrderText, SalesOrderTextType } from './SalesOrderText';
export declare class SalesOrder<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderType<T> {
    readonly _entityApi: SalesOrderApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderType?: DeserializedType<T, 'Edm.String'> | null;
    salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
    distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
    organizationDivision?: DeserializedType<T, 'Edm.String'> | null;
    salesGroup?: DeserializedType<T, 'Edm.String'> | null;
    salesOffice?: DeserializedType<T, 'Edm.String'> | null;
    salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
    soldToParty?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    createdByUser?: DeserializedType<T, 'Edm.String'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    senderBusinessSystemName?: DeserializedType<T, 'Edm.String'> | null;
    externalDocumentId?: DeserializedType<T, 'Edm.String'> | null;
    lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    externalDocLastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    purchaseOrderByCustomer?: DeserializedType<T, 'Edm.String'> | null;
    purchaseOrderByShipToParty?: DeserializedType<T, 'Edm.String'> | null;
    customerPurchaseOrderType?: DeserializedType<T, 'Edm.String'> | null;
    customerPurchaseOrderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    salesOrderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    totalNetAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
    overallDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
    totalBlockStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallOrdReltdBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallSdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
    transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
    sdDocumentReason?: DeserializedType<T, 'Edm.String'> | null;
    pricingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    priceDetnExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
    billingPlan?: DeserializedType<T, 'Edm.String'> | null;
    requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
    completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
    shippingType?: DeserializedType<T, 'Edm.String'> | null;
    headerBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
    deliveryBlockReason?: DeserializedType<T, 'Edm.String'> | null;
    deliveryDateTypeRule?: DeserializedType<T, 'Edm.String'> | null;
    incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
    incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
    incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
    customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
    priceListType?: DeserializedType<T, 'Edm.String'> | null;
    customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
    paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
    fixedValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    assignmentReference?: DeserializedType<T, 'Edm.String'> | null;
    referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
    referenceSdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
    accountingDocExternalReference?: DeserializedType<T, 'Edm.String'> | null;
    customerAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
    accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
    customerGroup?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
    slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
    customerTaxClassification1?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification2?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification3?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification4?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification5?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification6?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification7?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification8?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification9?: DeserializedType<T, 'Edm.String'> | null;
    taxDepartureCountry?: DeserializedType<T, 'Edm.String'> | null;
    vatRegistrationCountry?: DeserializedType<T, 'Edm.String'> | null;
    salesOrderApprovalReason?: DeserializedType<T, 'Edm.String'> | null;
    salesDocApprovalStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
    totalCreditCheckStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallTotalDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallSdDocumentRejectionSts?: DeserializedType<T, 'Edm.String'> | null;
    billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    contractAccount?: DeserializedType<T, 'Edm.String'> | null;
    additionalValueDays?: DeserializedType<T, 'Edm.String'> | null;
    customerPurchaseOrderSuplmnt?: DeserializedType<T, 'Edm.String'> | null;
    servicesRenderedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    toBillingPlan?: SalesOrderBillingPlan<T> | null;
    toItem: SalesOrderItem<T>[];
    toPartner: SalesOrderHeaderPartner<T>[];
    toPaymentPlanItemDetails: SlsOrdPaymentPlanItemDetails<T>[];
    toPrecedingProcFlowDoc: SalesOrderPrecdgProcFlow<T>[];
    toPricingElement: SalesOrderHeaderPrElement<T>[];
    toRelatedObject: SalesOrderRelatedObject<T>[];
    toSubsequentProcFlowDoc: SalesOrderSubsqntProcFlow<T>[];
    toText: SalesOrderText<T>[];
    constructor(_entityApi: SalesOrderApi<T>);
}
export interface SalesOrderType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderType?: DeserializedType<T, 'Edm.String'> | null;
    salesOrganization?: DeserializedType<T, 'Edm.String'> | null;
    distributionChannel?: DeserializedType<T, 'Edm.String'> | null;
    organizationDivision?: DeserializedType<T, 'Edm.String'> | null;
    salesGroup?: DeserializedType<T, 'Edm.String'> | null;
    salesOffice?: DeserializedType<T, 'Edm.String'> | null;
    salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
    soldToParty?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    createdByUser?: DeserializedType<T, 'Edm.String'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    senderBusinessSystemName?: DeserializedType<T, 'Edm.String'> | null;
    externalDocumentId?: DeserializedType<T, 'Edm.String'> | null;
    lastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    externalDocLastChangeDateTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
    purchaseOrderByCustomer?: DeserializedType<T, 'Edm.String'> | null;
    purchaseOrderByShipToParty?: DeserializedType<T, 'Edm.String'> | null;
    customerPurchaseOrderType?: DeserializedType<T, 'Edm.String'> | null;
    customerPurchaseOrderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    salesOrderDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    totalNetAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
    overallDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
    totalBlockStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallOrdReltdBillgStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallSdDocReferenceStatus?: DeserializedType<T, 'Edm.String'> | null;
    transactionCurrency?: DeserializedType<T, 'Edm.String'> | null;
    sdDocumentReason?: DeserializedType<T, 'Edm.String'> | null;
    pricingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    priceDetnExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
    billingPlan?: DeserializedType<T, 'Edm.String'> | null;
    requestedDeliveryDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
    completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
    shippingType?: DeserializedType<T, 'Edm.String'> | null;
    headerBillingBlockReason?: DeserializedType<T, 'Edm.String'> | null;
    deliveryBlockReason?: DeserializedType<T, 'Edm.String'> | null;
    deliveryDateTypeRule?: DeserializedType<T, 'Edm.String'> | null;
    incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
    incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
    incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
    incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
    customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
    priceListType?: DeserializedType<T, 'Edm.String'> | null;
    customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
    paymentMethod?: DeserializedType<T, 'Edm.String'> | null;
    fixedValueDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    assignmentReference?: DeserializedType<T, 'Edm.String'> | null;
    referenceSdDocument?: DeserializedType<T, 'Edm.String'> | null;
    referenceSdDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
    accountingDocExternalReference?: DeserializedType<T, 'Edm.String'> | null;
    customerAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
    accountingExchangeRate?: DeserializedType<T, 'Edm.Decimal'> | null;
    customerGroup?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
    additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
    slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
    customerTaxClassification1?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification2?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification3?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification4?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification5?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification6?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification7?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification8?: DeserializedType<T, 'Edm.String'> | null;
    customerTaxClassification9?: DeserializedType<T, 'Edm.String'> | null;
    taxDepartureCountry?: DeserializedType<T, 'Edm.String'> | null;
    vatRegistrationCountry?: DeserializedType<T, 'Edm.String'> | null;
    salesOrderApprovalReason?: DeserializedType<T, 'Edm.String'> | null;
    salesDocApprovalStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
    totalCreditCheckStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallTotalDeliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
    overallSdDocumentRejectionSts?: DeserializedType<T, 'Edm.String'> | null;
    billingDocumentDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    contractAccount?: DeserializedType<T, 'Edm.String'> | null;
    additionalValueDays?: DeserializedType<T, 'Edm.String'> | null;
    customerPurchaseOrderSuplmnt?: DeserializedType<T, 'Edm.String'> | null;
    servicesRenderedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    toBillingPlan?: SalesOrderBillingPlanType<T> | null;
    toItem: SalesOrderItemType<T>[];
    toPartner: SalesOrderHeaderPartnerType<T>[];
    toPaymentPlanItemDetails: SlsOrdPaymentPlanItemDetailsType<T>[];
    toPrecedingProcFlowDoc: SalesOrderPrecdgProcFlowType<T>[];
    toPricingElement: SalesOrderHeaderPrElementType<T>[];
    toRelatedObject: SalesOrderRelatedObjectType<T>[];
    toSubsequentProcFlowDoc: SalesOrderSubsqntProcFlowType<T>[];
    toText: SalesOrderTextType<T>[];
}
