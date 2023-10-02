import { SalesOrderSubsqntProcFlow } from './SalesOrderSubsqntProcFlow';
import { SalesOrderSubsqntProcFlowRequestBuilder } from './SalesOrderSubsqntProcFlowRequestBuilder';
import { SalesOrderApi } from './SalesOrderApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderSubsqntProcFlowApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderSubsqntProcFlow<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderSubsqntProcFlowApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [SalesOrderApi<DeSerializersT>]): this;
    entityConstructor: typeof SalesOrderSubsqntProcFlow;
    requestBuilder(): SalesOrderSubsqntProcFlowRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderSubsqntProcFlow<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderSubsqntProcFlow<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderSubsqntProcFlow, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DOC_RELATIONSHIP_UUID: OrderableEdmTypeField<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", false, true>;
        SUBSEQUENT_DOCUMENT: OrderableEdmTypeField<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        SUBSEQUENT_DOCUMENT_CATEGORY: OrderableEdmTypeField<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PROCESS_FLOW_LEVEL: OrderableEdmTypeField<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        OVERALL_SD_PROCESS_STATUS: OrderableEdmTypeField<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATION_DATE: OrderableEdmTypeField<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CREATION_TIME: OrderableEdmTypeField<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        LAST_CHANGE_DATE: OrderableEdmTypeField<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderSubsqntProcFlow<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderSubsqntProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
