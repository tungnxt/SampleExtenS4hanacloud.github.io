import { SalesOrderBillingPlanItem } from './SalesOrderBillingPlanItem';
import { SalesOrderBillingPlanItemRequestBuilder } from './SalesOrderBillingPlanItemRequestBuilder';
import { SalesOrderBillingPlanApi } from './SalesOrderBillingPlanApi';
import { SalesOrderApi } from './SalesOrderApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderBillingPlanItemApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderBillingPlanItem<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderBillingPlanItemApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SalesOrderBillingPlanApi<DeSerializersT>,
        SalesOrderApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SalesOrderBillingPlanItem;
    requestBuilder(): SalesOrderBillingPlanItemRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderBillingPlanItem<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderBillingPlanItem<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderBillingPlanItem, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN_ITEM: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN_DATE_CATEGORY: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_BILLING_DATE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_AMOUNT: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        TRANSACTION_CURRENCY: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_AMOUNT_PERCENT: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        CUSTOMER_PAYMENT_TERMS: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PROPOSED_BILLING_DOCUMENT_TYPE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_DATE_DESCRIPTION_CODE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_BLOCK_REASON: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_SERVICE_START_DATE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_SERVICE_END_DATE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_RELATED_BILLG_STATUS: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_TYPE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ADOPTING_BILLING_DATE_ID: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_BILLING_RULE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_MILESTONE_USAGE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLG_PLN_DTE_CORRECTION_RFND_TYPE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ACCOUNTING_EXCHANGE_RATE: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        POSTPONEMENT_REASON: OrderableEdmTypeField<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_BILLING_PLAN: OneToOneLink<SalesOrderBillingPlanItem<DeSerializersT>, DeSerializersT, SalesOrderBillingPlanApi<DeSerializersT>>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderBillingPlanItem<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderBillingPlanItem<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
