import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BusPartAddrDepdntTaxNmbr } from './BusPartAddrDepdntTaxNmbr';
export declare class BusPartAddrDepdntTaxNmbrRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>, bpTaxType: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
    getAll(): GetAllRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
    create(entity: BusPartAddrDepdntTaxNmbr<T>): CreateRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
    update(entity: BusPartAddrDepdntTaxNmbr<T>): UpdateRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
    delete(businessPartner: string, addressId: string, bpTaxType: string): DeleteRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
    delete(entity: BusPartAddrDepdntTaxNmbr<T>): DeleteRequestBuilder<BusPartAddrDepdntTaxNmbr<T>, T>;
}
