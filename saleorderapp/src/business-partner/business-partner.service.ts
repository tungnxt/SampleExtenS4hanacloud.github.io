import { Injectable } from '@nestjs/common';
import {
  businessPartnerService,
  BusinessPartner,
} from '../../services/business-partner-service';
import {
  or, //and
} from '@sap-cloud-sdk/odata-common';

const { businessPartnerApi } = businessPartnerService();

@Injectable()
export class BusinessPartnerService {
  async getAllBusinessPartners(): Promise<BusinessPartner[]> {
    return await businessPartnerApi
      .requestBuilder()
      .getAll()
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.LAST_NAME,
      )
      .filter(
        or(
          businessPartnerApi.schema.FIRST_NAME.notEquals(''),
          businessPartnerApi.schema.LAST_NAME.notEquals(''),
        ),
      )
      .execute({
        destinationName: 's4-test',
      });
  }
}
