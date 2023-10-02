import { SalesOrderPrecdgProcFlow } from './SalesOrderPrecdgProcFlow';
import { SalesOrderPrecdgProcFlowRequestBuilder } from './SalesOrderPrecdgProcFlowRequestBuilder';
import { SalesOrderApi } from './SalesOrderApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderPrecdgProcFlowApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderPrecdgProcFlow<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderPrecdgProcFlowApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [SalesOrderApi<DeSerializersT>]): this;
    entityConstructor: typeof SalesOrderPrecdgProcFlow;
    requestBuilder(): SalesOrderPrecdgProcFlowRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderPrecdgProcFlow<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderPrecdgProcFlow<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderPrecdgProcFlow, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        DOC_RELATIONSHIP_UUID: OrderableEdmTypeField<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Guid", false, true>;
        PRECEDING_DOCUMENT: OrderableEdmTypeField<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PRECEDING_DOCUMENT_CATEGORY: OrderableEdmTypeField<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        PROCESS_FLOW_LEVEL: OrderableEdmTypeField<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        OVERALL_SD_PROCESS_STATUS: OrderableEdmTypeField<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATION_DATE: OrderableEdmTypeField<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CREATION_TIME: OrderableEdmTypeField<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        LAST_CHANGE_DATE: OrderableEdmTypeField<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderPrecdgProcFlow<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderPrecdgProcFlow<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
