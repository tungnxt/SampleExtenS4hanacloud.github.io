/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderItem } from './SalesOrderItem';
import { SalesOrderItemRequestBuilder } from './SalesOrderItemRequestBuilder';
import { SalesOrderItemBillingPlanApi } from './SalesOrderItemBillingPlanApi';
import { SalesOrderItemPartnerApi } from './SalesOrderItemPartnerApi';
import { SalesOrderItmPrecdgProcFlowApi } from './SalesOrderItmPrecdgProcFlowApi';
import { SalesOrderItemPrElementApi } from './SalesOrderItemPrElementApi';
import { SalesOrderItemRelatedObjectApi } from './SalesOrderItemRelatedObjectApi';
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderScheduleLineApi } from './SalesOrderScheduleLineApi';
import { SalesOrderItmSubsqntProcFlowApi } from './SalesOrderItmSubsqntProcFlowApi';
import { SalesOrderItemTextApi } from './SalesOrderItemTextApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderItemApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderItem<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): SalesOrderItemApi<DeSerializersT> {
    return new SalesOrderItemApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toBillingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILLING_PLAN: OneToOneLink<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemBillingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARTNER: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemPartnerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPrecedingProcFlowDocItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRECEDING_PROC_FLOW_DOC_ITEM: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItmPrecdgProcFlowApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPricingElement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRICING_ELEMENT: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemPrElementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toRelatedObject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_RELATED_OBJECT: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemRelatedObjectApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toScheduleLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SCHEDULE_LINE: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderScheduleLineApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSubsequentProcFlowDocItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUBSEQUENT_PROC_FLOW_DOC_ITEM: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItmSubsqntProcFlowApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_TEXT: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemTextApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderItemBillingPlanApi<DeSerializersT>,
      SalesOrderItemPartnerApi<DeSerializersT>,
      SalesOrderItmPrecdgProcFlowApi<DeSerializersT>,
      SalesOrderItemPrElementApi<DeSerializersT>,
      SalesOrderItemRelatedObjectApi<DeSerializersT>,
      SalesOrderApi<DeSerializersT>,
      SalesOrderScheduleLineApi<DeSerializersT>,
      SalesOrderItmSubsqntProcFlowApi<DeSerializersT>,
      SalesOrderItemTextApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BILLING_PLAN: new OneToOneLink('to_BillingPlan', this, linkedApis[0]),
      TO_PARTNER: new Link('to_Partner', this, linkedApis[1]),
      TO_PRECEDING_PROC_FLOW_DOC_ITEM: new Link(
        'to_PrecedingProcFlowDocItem',
        this,
        linkedApis[2]
      ),
      TO_PRICING_ELEMENT: new Link('to_PricingElement', this, linkedApis[3]),
      TO_RELATED_OBJECT: new Link('to_RelatedObject', this, linkedApis[4]),
      TO_SALES_ORDER: new OneToOneLink('to_SalesOrder', this, linkedApis[5]),
      TO_SCHEDULE_LINE: new Link('to_ScheduleLine', this, linkedApis[6]),
      TO_SUBSEQUENT_PROC_FLOW_DOC_ITEM: new Link(
        'to_SubsequentProcFlowDocItem',
        this,
        linkedApis[7]
      ),
      TO_TEXT: new Link('to_Text', this, linkedApis[8])
    };
    return this;
  }

  entityConstructor = SalesOrderItem;

  requestBuilder(): SalesOrderItemRequestBuilder<DeSerializersT> {
    return new SalesOrderItemRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderItem<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesOrderItem<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesOrderItem<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesOrderItem, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesOrderItem, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    HIGHER_LEVEL_ITEM: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIGHER_LEVEL_ITEM_USAGE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ITEM_CATEGORY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_ORDER_ITEM_TEXT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_BY_CUSTOMER: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PURCHASE_ORDER_BY_SHIP_TO_PARTY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDERLYING_PURCHASE_ORDER_ITEM: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_ITEM_ID: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_BY_CUSTOMER: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICING_DATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PRICING_REFERENCE_MATERIAL: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_PLAN: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_QUANTITY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    REQUESTED_QUANTITY_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_QUANTITY_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUESTED_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_QUANTITY_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_QUANTITY_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_QUANTITY_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONFD_DELIV_QTY_IN_ORDER_QTY_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_GROSS_WEIGHT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_NET_WEIGHT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_WEIGHT_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_WEIGHT_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_WEIGHT_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_VOLUME: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_VOLUME_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_VOLUME_SAP_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_VOLUME_ISO_UNIT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CURRENCY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TOTAL_SD_DOC_REFERENCE_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_DOC_REFERENCE_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_SUBSTITUTION_REASON: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_PRICING_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_1: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_2: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_3: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_4: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_MATERIAL_GROUP_5: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_DOCUMENT_DATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CONTRACT_ACCOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ADDITIONAL_VALUE_DAYS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICES_RENDERED_DATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BATCH: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCTION_PLANT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGINAL_PLANT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALTV_BSD_CONF_SUBSTITUTION_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORAGE_LOCATION: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_POINT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_TYPE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_PRIORITY: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_DATE_QUANTITY_IS_FIXED: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DELIVERY_DATE_TYPE_RULE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_TRANSFER_LOCATION: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_LOCATION_1: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCOTERMS_LOCATION_2: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_1: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_2: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_3: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_4: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_5: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_6: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_7: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_8: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRODUCT_TAX_CLASSIFICATION_9: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATL_ACCOUNT_ASSIGNMENT_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COST_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CUSTOMER_PAYMENT_TERMS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIXED_VALUE_DATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CUSTOMER_GROUP: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SALES_DOCUMENT_RJCN_REASON: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_BILLING_BLOCK_REASON: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    WBS_ELEMENT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROFIT_CENTER: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNTING_EXCHANGE_RATE: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    REFERENCE_SD_DOCUMENT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_SD_DOCUMENT_ITEM: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SD_PROCESS_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORDER_RELATED_BILLING_STATUS: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBTOTAL_1_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_2_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_3_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_4_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_5_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBTOTAL_6_AMOUNT: OrderableEdmTypeField<
      SalesOrderItem<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBillingPlan} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BILLING_PLAN: OneToOneLink<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemBillingPlanApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PARTNER: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemPartnerApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPrecedingProcFlowDocItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRECEDING_PROC_FLOW_DOC_ITEM: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItmPrecdgProcFlowApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toPricingElement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRICING_ELEMENT: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemPrElementApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toRelatedObject} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_RELATED_OBJECT: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemRelatedObjectApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSalesOrder} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER: OneToOneLink<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toScheduleLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SCHEDULE_LINE: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderScheduleLineApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSubsequentProcFlowDocItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUBSEQUENT_PROC_FLOW_DOC_ITEM: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItmSubsqntProcFlowApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toText} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_TEXT: Link<
      SalesOrderItem<DeSerializersT>,
      DeSerializersT,
      SalesOrderItemTextApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderItem<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link salesOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER: fieldBuilder.buildEdmTypeField(
          'SalesOrder',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesOrderItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ITEM: fieldBuilder.buildEdmTypeField(
          'SalesOrderItem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link higherLevelItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIGHER_LEVEL_ITEM: fieldBuilder.buildEdmTypeField(
          'HigherLevelItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link higherLevelItemUsage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIGHER_LEVEL_ITEM_USAGE: fieldBuilder.buildEdmTypeField(
          'HigherLevelItemUsage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderItemCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ITEM_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SalesOrderItemCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesOrderItemText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ITEM_TEXT: fieldBuilder.buildEdmTypeField(
          'SalesOrderItemText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderByCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_BY_CUSTOMER: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderByCustomer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link purchaseOrderByShipToParty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_ORDER_BY_SHIP_TO_PARTY: fieldBuilder.buildEdmTypeField(
          'PurchaseOrderByShipToParty',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link underlyingPurchaseOrderItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDERLYING_PURCHASE_ORDER_ITEM: fieldBuilder.buildEdmTypeField(
          'UnderlyingPurchaseOrderItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'ExternalItemID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link material} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL: fieldBuilder.buildEdmTypeField(
          'Material',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialByCustomer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_BY_CUSTOMER: fieldBuilder.buildEdmTypeField(
          'MaterialByCustomer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pricingDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_DATE: fieldBuilder.buildEdmTypeField(
          'PricingDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link pricingReferenceMaterial} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICING_REFERENCE_MATERIAL: fieldBuilder.buildEdmTypeField(
          'PricingReferenceMaterial',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingPlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_PLAN: fieldBuilder.buildEdmTypeField(
          'BillingPlan',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'RequestedQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link requestedQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'RequestedQuantityUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedQuantitySapUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_QUANTITY_SAP_UNIT: fieldBuilder.buildEdmTypeField(
          'RequestedQuantitySAPUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link requestedQuantityIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'RequestedQuantityISOUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderQuantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'OrderQuantityUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderQuantitySapUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_QUANTITY_SAP_UNIT: fieldBuilder.buildEdmTypeField(
          'OrderQuantitySAPUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderQuantityIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_QUANTITY_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'OrderQuantityISOUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link confdDelivQtyInOrderQtyUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFD_DELIV_QTY_IN_ORDER_QTY_UNIT: fieldBuilder.buildEdmTypeField(
          'ConfdDelivQtyInOrderQtyUnit',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link itemGrossWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_GROSS_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ItemGrossWeight',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link itemNetWeight} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NET_WEIGHT: fieldBuilder.buildEdmTypeField(
          'ItemNetWeight',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link itemWeightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'ItemWeightUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemWeightSapUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WEIGHT_SAP_UNIT: fieldBuilder.buildEdmTypeField(
          'ItemWeightSAPUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemWeightIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_WEIGHT_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'ItemWeightISOUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemVolume} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_VOLUME: fieldBuilder.buildEdmTypeField(
          'ItemVolume',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link itemVolumeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_VOLUME_UNIT: fieldBuilder.buildEdmTypeField(
          'ItemVolumeUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemVolumeSapUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_VOLUME_SAP_UNIT: fieldBuilder.buildEdmTypeField(
          'ItemVolumeSAPUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemVolumeIsoUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_VOLUME_ISO_UNIT: fieldBuilder.buildEdmTypeField(
          'ItemVolumeISOUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCurrency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CURRENCY: fieldBuilder.buildEdmTypeField(
          'TransactionCurrency',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link totalSdDocReferenceStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_SD_DOC_REFERENCE_STATUS: fieldBuilder.buildEdmTypeField(
          'TotalSDDocReferenceStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sdDocReferenceStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_DOC_REFERENCE_STATUS: fieldBuilder.buildEdmTypeField(
          'SDDocReferenceStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialSubstitutionReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_SUBSTITUTION_REASON: fieldBuilder.buildEdmTypeField(
          'MaterialSubstitutionReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_GROUP: fieldBuilder.buildEdmTypeField(
          'MaterialGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialPricingGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_PRICING_GROUP: fieldBuilder.buildEdmTypeField(
          'MaterialPricingGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalMaterialGroup1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_MATERIAL_GROUP_1: fieldBuilder.buildEdmTypeField(
          'AdditionalMaterialGroup1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalMaterialGroup2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_MATERIAL_GROUP_2: fieldBuilder.buildEdmTypeField(
          'AdditionalMaterialGroup2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalMaterialGroup3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_MATERIAL_GROUP_3: fieldBuilder.buildEdmTypeField(
          'AdditionalMaterialGroup3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalMaterialGroup4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_MATERIAL_GROUP_4: fieldBuilder.buildEdmTypeField(
          'AdditionalMaterialGroup4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalMaterialGroup5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_MATERIAL_GROUP_5: fieldBuilder.buildEdmTypeField(
          'AdditionalMaterialGroup5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingDocumentDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_DOCUMENT_DATE: fieldBuilder.buildEdmTypeField(
          'BillingDocumentDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link contractAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'ContractAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link additionalValueDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDITIONAL_VALUE_DAYS: fieldBuilder.buildEdmTypeField(
          'AdditionalValueDays',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link servicesRenderedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICES_RENDERED_DATE: fieldBuilder.buildEdmTypeField(
          'ServicesRenderedDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link batch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BATCH: fieldBuilder.buildEdmTypeField('Batch', 'Edm.String', true),
        /**
         * Static representation of the {@link productionPlant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCTION_PLANT: fieldBuilder.buildEdmTypeField(
          'ProductionPlant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originalPlant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGINAL_PLANT: fieldBuilder.buildEdmTypeField(
          'OriginalPlant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link altvBsdConfSubstitutionStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALTV_BSD_CONF_SUBSTITUTION_STATUS: fieldBuilder.buildEdmTypeField(
          'AltvBsdConfSubstitutionStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storageLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORAGE_LOCATION: fieldBuilder.buildEdmTypeField(
          'StorageLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_GROUP: fieldBuilder.buildEdmTypeField(
          'DeliveryGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingPoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_POINT: fieldBuilder.buildEdmTypeField(
          'ShippingPoint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_TYPE: fieldBuilder.buildEdmTypeField(
          'ShippingType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryPriority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_PRIORITY: fieldBuilder.buildEdmTypeField(
          'DeliveryPriority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryDateQuantityIsFixed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE_QUANTITY_IS_FIXED: fieldBuilder.buildEdmTypeField(
          'DeliveryDateQuantityIsFixed',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link deliveryDateTypeRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE_TYPE_RULE: fieldBuilder.buildEdmTypeField(
          'DeliveryDateTypeRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'IncotermsClassification',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsTransferLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_TRANSFER_LOCATION: fieldBuilder.buildEdmTypeField(
          'IncotermsTransferLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsLocation1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_LOCATION_1: fieldBuilder.buildEdmTypeField(
          'IncotermsLocation1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link incotermsLocation2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOTERMS_LOCATION_2: fieldBuilder.buildEdmTypeField(
          'IncotermsLocation2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link productTaxClassification1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION_1: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTaxClassification2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION_2: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTaxClassification3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION_3: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTaxClassification4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION_4: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTaxClassification5} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION_5: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification5',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTaxClassification6} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION_6: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification6',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTaxClassification7} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION_7: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification7',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTaxClassification8} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION_8: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification8',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link productTaxClassification9} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_TAX_CLASSIFICATION_9: fieldBuilder.buildEdmTypeField(
          'ProductTaxClassification9',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matlAccountAssignmentGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATL_ACCOUNT_ASSIGNMENT_GROUP: fieldBuilder.buildEdmTypeField(
          'MatlAccountAssignmentGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link costAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CostAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link customerPaymentTerms} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_PAYMENT_TERMS: fieldBuilder.buildEdmTypeField(
          'CustomerPaymentTerms',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fixedValueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIXED_VALUE_DATE: fieldBuilder.buildEdmTypeField(
          'FixedValueDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link customerGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP: fieldBuilder.buildEdmTypeField(
          'CustomerGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link salesDocumentRjcnReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_DOCUMENT_RJCN_REASON: fieldBuilder.buildEdmTypeField(
          'SalesDocumentRjcnReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemBillingBlockReason} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_BILLING_BLOCK_REASON: fieldBuilder.buildEdmTypeField(
          'ItemBillingBlockReason',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link slsDocIsRlvtForProofOfDeliv} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SLS_DOC_IS_RLVT_FOR_PROOF_OF_DELIV: fieldBuilder.buildEdmTypeField(
          'SlsDocIsRlvtForProofOfDeliv',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link wbsElement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ELEMENT: fieldBuilder.buildEdmTypeField(
          'WBSElement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link profitCenter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROFIT_CENTER: fieldBuilder.buildEdmTypeField(
          'ProfitCenter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountingExchangeRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNTING_EXCHANGE_RATE: fieldBuilder.buildEdmTypeField(
          'AccountingExchangeRate',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link referenceSdDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_SD_DOCUMENT: fieldBuilder.buildEdmTypeField(
          'ReferenceSDDocument',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link referenceSdDocumentItem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_SD_DOCUMENT_ITEM: fieldBuilder.buildEdmTypeField(
          'ReferenceSDDocumentItem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sdProcessStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SD_PROCESS_STATUS: fieldBuilder.buildEdmTypeField(
          'SDProcessStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STATUS: fieldBuilder.buildEdmTypeField(
          'DeliveryStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orderRelatedBillingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORDER_RELATED_BILLING_STATUS: fieldBuilder.buildEdmTypeField(
          'OrderRelatedBillingStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subtotal1Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_1_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal1Amount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link subtotal2Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_2_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal2Amount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link subtotal3Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_3_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal3Amount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link subtotal4Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_4_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal4Amount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link subtotal5Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_5_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal5Amount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link subtotal6Amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBTOTAL_6_AMOUNT: fieldBuilder.buildEdmTypeField(
          'Subtotal6Amount',
          'Edm.Decimal',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderItem)
      };
    }

    return this._schema;
  }
}
