import { SalesOrder } from './SalesOrder';
import { SalesOrderRequestBuilder } from './SalesOrderRequestBuilder';
import { SalesOrderBillingPlanApi } from './SalesOrderBillingPlanApi';
import { SalesOrderItemApi } from './SalesOrderItemApi';
import { SalesOrderHeaderPartnerApi } from './SalesOrderHeaderPartnerApi';
import { SlsOrdPaymentPlanItemDetailsApi } from './SlsOrdPaymentPlanItemDetailsApi';
import { SalesOrderPrecdgProcFlowApi } from './SalesOrderPrecdgProcFlowApi';
import { SalesOrderHeaderPrElementApi } from './SalesOrderHeaderPrElementApi';
import { SalesOrderRelatedObjectApi } from './SalesOrderRelatedObjectApi';
import { SalesOrderSubsqntProcFlowApi } from './SalesOrderSubsqntProcFlowApi';
import { SalesOrderTextApi } from './SalesOrderTextApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink, Link } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrder<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SalesOrderBillingPlanApi<DeSerializersT>,
        SalesOrderItemApi<DeSerializersT>,
        SalesOrderHeaderPartnerApi<DeSerializersT>,
        SlsOrdPaymentPlanItemDetailsApi<DeSerializersT>,
        SalesOrderPrecdgProcFlowApi<DeSerializersT>,
        SalesOrderHeaderPrElementApi<DeSerializersT>,
        SalesOrderRelatedObjectApi<DeSerializersT>,
        SalesOrderSubsqntProcFlowApi<DeSerializersT>,
        SalesOrderTextApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SalesOrder;
    requestBuilder(): SalesOrderRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrder<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrder<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrder, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORDER_TYPE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_ORGANIZATION: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DISTRIBUTION_CHANNEL: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ORGANIZATION_DIVISION: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_GROUP: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_OFFICE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_DISTRICT: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SOLD_TO_PARTY: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATION_DATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CREATED_BY_USER: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LAST_CHANGE_DATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        SENDER_BUSINESS_SYSTEM_NAME: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        EXTERNAL_DOCUMENT_ID: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LAST_CHANGE_DATE_TIME: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTimeOffset", true, true>;
        EXTERNAL_DOC_LAST_CHANGE_DATE_TIME: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTimeOffset", true, true>;
        PURCHASE_ORDER_BY_CUSTOMER: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PURCHASE_ORDER_BY_SHIP_TO_PARTY: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_PURCHASE_ORDER_TYPE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_PURCHASE_ORDER_DATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        SALES_ORDER_DATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        TOTAL_NET_AMOUNT: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        OVERALL_DELIVERY_STATUS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TOTAL_BLOCK_STATUS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        OVERALL_ORD_RELTD_BILLG_STATUS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        OVERALL_SD_DOC_REFERENCE_STATUS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TRANSACTION_CURRENCY: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SD_DOCUMENT_REASON: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PRICING_DATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        PRICE_DETN_EXCHANGE_RATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        BILLING_PLAN: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REQUESTED_DELIVERY_DATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        SHIPPING_CONDITION: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        COMPLETE_DELIVERY_IS_DEFINED: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        SHIPPING_TYPE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        HEADER_BILLING_BLOCK_REASON: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_BLOCK_REASON: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        DELIVERY_DATE_TYPE_RULE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_1: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_2: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_VERSION: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_PRICE_GROUP: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PRICE_LIST_TYPE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_PAYMENT_TERMS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PAYMENT_METHOD: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        FIXED_VALUE_DATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        ASSIGNMENT_REFERENCE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REFERENCE_SD_DOCUMENT: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REFERENCE_SD_DOCUMENT_CATEGORY: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_DOC_EXTERNAL_REFERENCE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_ACCOUNT_ASSIGNMENT_GROUP: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_EXCHANGE_RATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        CUSTOMER_GROUP: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_1: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_2: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_3: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_4: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_CUSTOMER_GROUP_5: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        CUSTOMER_TAX_CLASSIFICATION_1: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_TAX_CLASSIFICATION_2: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_TAX_CLASSIFICATION_3: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_TAX_CLASSIFICATION_4: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_TAX_CLASSIFICATION_5: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_TAX_CLASSIFICATION_6: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_TAX_CLASSIFICATION_7: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_TAX_CLASSIFICATION_8: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_TAX_CLASSIFICATION_9: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TAX_DEPARTURE_COUNTRY: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        VAT_REGISTRATION_COUNTRY: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_ORDER_APPROVAL_REASON: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_DOC_APPROVAL_STATUS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        OVERALL_SD_PROCESS_STATUS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TOTAL_CREDIT_CHECK_STATUS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        OVERALL_TOTAL_DELIVERY_STATUS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        OVERALL_SD_DOCUMENT_REJECTION_STS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_DOCUMENT_DATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CONTRACT_ACCOUNT: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADDITIONAL_VALUE_DAYS: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CUSTOMER_PURCHASE_ORDER_SUPLMNT: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SERVICES_RENDERED_DATE: OrderableEdmTypeField<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        TO_BILLING_PLAN: OneToOneLink<SalesOrder<DeSerializersT>, DeSerializersT, SalesOrderBillingPlanApi<DeSerializersT>>;
        TO_ITEM: Link<SalesOrder<DeSerializersT>, DeSerializersT, SalesOrderItemApi<DeSerializersT>>;
        TO_PARTNER: Link<SalesOrder<DeSerializersT>, DeSerializersT, SalesOrderHeaderPartnerApi<DeSerializersT>>;
        TO_PAYMENT_PLAN_ITEM_DETAILS: Link<SalesOrder<DeSerializersT>, DeSerializersT, SlsOrdPaymentPlanItemDetailsApi<DeSerializersT>>;
        TO_PRECEDING_PROC_FLOW_DOC: Link<SalesOrder<DeSerializersT>, DeSerializersT, SalesOrderPrecdgProcFlowApi<DeSerializersT>>;
        TO_PRICING_ELEMENT: Link<SalesOrder<DeSerializersT>, DeSerializersT, SalesOrderHeaderPrElementApi<DeSerializersT>>;
        TO_RELATED_OBJECT: Link<SalesOrder<DeSerializersT>, DeSerializersT, SalesOrderRelatedObjectApi<DeSerializersT>>;
        TO_SUBSEQUENT_PROC_FLOW_DOC: Link<SalesOrder<DeSerializersT>, DeSerializersT, SalesOrderSubsqntProcFlowApi<DeSerializersT>>;
        TO_TEXT: Link<SalesOrder<DeSerializersT>, DeSerializersT, SalesOrderTextApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrder<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
