import { SlsOrderItemBillingPlanItem } from './SlsOrderItemBillingPlanItem';
import { SlsOrderItemBillingPlanItemRequestBuilder } from './SlsOrderItemBillingPlanItemRequestBuilder';
import { SalesOrderItemBillingPlanApi } from './SalesOrderItemBillingPlanApi';
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderItemApi } from './SalesOrderItemApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SlsOrderItemBillingPlanItemApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SlsOrderItemBillingPlanItem<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SlsOrderItemBillingPlanItemApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SalesOrderItemBillingPlanApi<DeSerializersT>,
        SalesOrderApi<DeSerializersT>,
        SalesOrderItemApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SlsOrderItemBillingPlanItem;
    requestBuilder(): SlsOrderItemBillingPlanItemRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SlsOrderItemBillingPlanItem<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SlsOrderItemBillingPlanItem<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SlsOrderItemBillingPlanItem, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORDER_ITEM: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN_ITEM: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN_DATE_CATEGORY: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_BILLING_DATE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_AMOUNT: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        TRANSACTION_CURRENCY: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_AMOUNT_PERCENT: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        CUSTOMER_PAYMENT_TERMS: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PROPOSED_BILLING_DOCUMENT_TYPE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_DATE_DESCRIPTION_CODE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_BLOCK_REASON: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_SERVICE_START_DATE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_SERVICE_END_DATE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_RELATED_BILLG_STATUS: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_TYPE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADOPTING_BILLING_DATE_ID: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_BILLING_RULE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_MILESTONE_USAGE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLG_PLN_DTE_CORRECTION_RFND_TYPE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_EXCHANGE_RATE: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        POSTPONEMENT_REASON: OrderableEdmTypeField<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_BILLING_PLAN: OneToOneLink<SlsOrderItemBillingPlanItem<DeSerializersT>, DeSerializersT, SalesOrderItemBillingPlanApi<DeSerializersT>>;
        TO_SALES_ORDER: OneToOneLink<SlsOrderItemBillingPlanItem<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        TO_SALES_ORDER_ITEM: OneToOneLink<SlsOrderItemBillingPlanItem<DeSerializersT>, DeSerializersT, SalesOrderItemApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SlsOrderItemBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
