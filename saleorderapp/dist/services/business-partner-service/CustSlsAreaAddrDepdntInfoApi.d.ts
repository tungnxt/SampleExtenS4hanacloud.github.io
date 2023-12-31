import { CustSlsAreaAddrDepdntInfo } from './CustSlsAreaAddrDepdntInfo';
import { CustSlsAreaAddrDepdntInfoRequestBuilder } from './CustSlsAreaAddrDepdntInfoRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class CustSlsAreaAddrDepdntInfoApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustSlsAreaAddrDepdntInfo<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): CustSlsAreaAddrDepdntInfoApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof CustSlsAreaAddrDepdntInfo;
    requestBuilder(): CustSlsAreaAddrDepdntInfoRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustSlsAreaAddrDepdntInfo<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustSlsAreaAddrDepdntInfo<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustSlsAreaAddrDepdntInfo, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORGANIZATION: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DISTRIBUTION_CHANNEL: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DIVISION: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ADDRESS_ID: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        INCOTERMS_CLASSIFICATION: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_1: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_LOCATION_2: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_SUP_CHN_LOC_1_ADDL_UUID: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", true, true>;
        INCOTERMS_SUP_CHN_LOC_2_ADDL_UUID: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", true, true>;
        INCOTERMS_SUP_CHN_DVTG_LOC_ADDL_UUID: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", true, true>;
        DELIVERY_IS_BLOCKED: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_OFFICE: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SALES_GROUP: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SHIPPING_CONDITION: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUPPLYING_PLANT: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        INCOTERMS_VERSION: OrderableEdmTypeField<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<CustSlsAreaAddrDepdntInfo<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
