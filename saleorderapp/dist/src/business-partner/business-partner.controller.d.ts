import { BusinessPartner } from '../../services/business-partner-service';
import { BusinessPartnerService } from './business-partner.service';
export declare class BusinessPartnerController {
    private businessPartnerService;
    constructor(businessPartnerService: BusinessPartnerService);
    getBusinessPartners(): Promise<BusinessPartner[]>;
}
