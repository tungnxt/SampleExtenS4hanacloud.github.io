import { SupplierWithHoldingTax } from './SupplierWithHoldingTax';
import { SupplierWithHoldingTaxRequestBuilder } from './SupplierWithHoldingTaxRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class SupplierWithHoldingTaxApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SupplierWithHoldingTax<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SupplierWithHoldingTaxApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof SupplierWithHoldingTax;
    requestBuilder(): SupplierWithHoldingTaxRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SupplierWithHoldingTax<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SupplierWithHoldingTax<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SupplierWithHoldingTax, DeSerializersT>;
    private _schema?;
    get schema(): {
        SUPPLIER: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        COMPANY_CODE: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        WITHHOLDING_TAX_TYPE: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        EXEMPTION_DATE_BEGIN: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        EXEMPTION_DATE_END: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        EXEMPTION_REASON: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        IS_WITHHOLDING_TAX_SUBJECT: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        RECIPIENT_TYPE: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        WITHHOLDING_TAX_CERTIFICATE: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        WITHHOLDING_TAX_CODE: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        WITHHOLDING_TAX_EXMPT_PERCENT: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        WITHHOLDING_TAX_NUMBER: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<SupplierWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
