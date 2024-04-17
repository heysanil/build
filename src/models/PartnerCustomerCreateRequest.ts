/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.503.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { PartnerEndCustomerAddress } from './PartnerEndCustomerAddress';
import {
    PartnerEndCustomerAddressFromJSON,
    PartnerEndCustomerAddressFromJSONTyped,
    PartnerEndCustomerAddressToJSON,
} from './PartnerEndCustomerAddress';
import type { PartnerEndCustomerAssetsUnderManagement } from './PartnerEndCustomerAssetsUnderManagement';
import {
    PartnerEndCustomerAssetsUnderManagementFromJSON,
    PartnerEndCustomerAssetsUnderManagementFromJSONTyped,
    PartnerEndCustomerAssetsUnderManagementToJSON,
} from './PartnerEndCustomerAssetsUnderManagement';
import type { PartnerEndCustomerBillingContact } from './PartnerEndCustomerBillingContact';
import {
    PartnerEndCustomerBillingContactFromJSON,
    PartnerEndCustomerBillingContactFromJSONTyped,
    PartnerEndCustomerBillingContactToJSON,
} from './PartnerEndCustomerBillingContact';
import type { PartnerEndCustomerCustomerSupportInfo } from './PartnerEndCustomerCustomerSupportInfo';
import {
    PartnerEndCustomerCustomerSupportInfoFromJSON,
    PartnerEndCustomerCustomerSupportInfoFromJSONTyped,
    PartnerEndCustomerCustomerSupportInfoToJSON,
} from './PartnerEndCustomerCustomerSupportInfo';
import type { PartnerEndCustomerTechnicalContact } from './PartnerEndCustomerTechnicalContact';
import {
    PartnerEndCustomerTechnicalContactFromJSON,
    PartnerEndCustomerTechnicalContactFromJSONTyped,
    PartnerEndCustomerTechnicalContactToJSON,
} from './PartnerEndCustomerTechnicalContact';
import type { Products } from './Products';
import {
    ProductsFromJSON,
    ProductsFromJSONTyped,
    ProductsToJSON,
} from './Products';

/**
 * Request schema for `/partner/customer/create`.
 * @export
 * @interface PartnerCustomerCreateRequest
 */
export interface PartnerCustomerCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof PartnerCustomerCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof PartnerCustomerCreateRequest
     */
    secret?: string;
    /**
     * The company name of the end customer being created. This will be used to display the end customer in the Plaid Dashboard. It will not be shown to end users.
     * @type {string}
     * @memberof PartnerCustomerCreateRequest
     */
    company_name: string;
    /**
     * Denotes whether or not the partner has completed attestation of diligence for the end customer to be created.
     * @type {boolean}
     * @memberof PartnerCustomerCreateRequest
     */
    is_diligence_attested: boolean;
    /**
     * The products to be enabled for the end customer. If empty or `null`, this field will default to the products enabled for the reseller at the time this endpoint is called.
     * @type {Array<Products>}
     * @memberof PartnerCustomerCreateRequest
     */
    products?: Array<Products>;
    /**
     * If `true`, the end customer's default Link customization will be set to match the partner's. You can always change the end customer's Link customization in the Plaid Dashboard. See the [Link Customization docs](https://plaid.com/docs/link/customization/) for more information.
     * @type {boolean}
     * @memberof PartnerCustomerCreateRequest
     */
    create_link_customization?: boolean;
    /**
     * Base64-encoded representation of the end customer's logo. Must be a PNG of size 1024x1024 under 4MB. The logo will be shared with financial institutions and shown to the end user during Link flows. A logo is required if `create_link_customization` is `true`. If `create_link_customization` is `false` and the logo is omitted, the partner's logo will be used if one exists, otherwise a stock logo will be used.
     * @type {string}
     * @memberof PartnerCustomerCreateRequest
     */
    logo?: string;
    /**
     * The end customer's legal name. This will be shared with financial institutions as part of the OAuth registration process. It will not be shown to end users.
     * @type {string}
     * @memberof PartnerCustomerCreateRequest
     */
    legal_entity_name: string;
    /**
     * The end customer's website.
     * @type {string}
     * @memberof PartnerCustomerCreateRequest
     */
    website: string;
    /**
     * The name of the end customer's application. This will be shown to end users when they go through the Plaid Link flow.
     * @type {string}
     * @memberof PartnerCustomerCreateRequest
     */
    application_name: string;
    /**
     * 
     * @type {PartnerEndCustomerTechnicalContact}
     * @memberof PartnerCustomerCreateRequest
     */
    technical_contact?: PartnerEndCustomerTechnicalContact;
    /**
     * 
     * @type {PartnerEndCustomerBillingContact}
     * @memberof PartnerCustomerCreateRequest
     */
    billing_contact?: PartnerEndCustomerBillingContact;
    /**
     * 
     * @type {PartnerEndCustomerCustomerSupportInfo}
     * @memberof PartnerCustomerCreateRequest
     */
    customer_support_info?: PartnerEndCustomerCustomerSupportInfo;
    /**
     * 
     * @type {PartnerEndCustomerAddress}
     * @memberof PartnerCustomerCreateRequest
     */
    address: PartnerEndCustomerAddress;
    /**
     * Denotes whether the partner has forwarded the Plaid bank addendum to the end customer.
     * @type {boolean}
     * @memberof PartnerCustomerCreateRequest
     */
    is_bank_addendum_completed: boolean;
    /**
     * 
     * @type {PartnerEndCustomerAssetsUnderManagement}
     * @memberof PartnerCustomerCreateRequest
     */
    assets_under_management?: PartnerEndCustomerAssetsUnderManagement;
    /**
     * A list of URIs indicating the destination(s) where a user can be forwarded after completing the Link flow; used to support OAuth authentication flows when launching Link in the browser or via a webview. URIs should not contain any query parameters. When used in Production or Development, URIs must use https. To specify any subdomain, use `*` as a wildcard character, e.g. `https://*.example.com/oauth.html`. To modify redirect URIs for an end customer after creating them, go to the end customer's [API page](https://dashboard.plaid.com/team/api) in the Dashboard.
     * @type {Array<string>}
     * @memberof PartnerCustomerCreateRequest
     */
    redirect_uris?: Array<string>;
    /**
     * The unique identifier assigned to a financial institution by regulatory authorities, if applicable. For banks, this is the FDIC Certificate Number. For credit unions, this is the Credit Union Charter Number.
     * @type {string}
     * @memberof PartnerCustomerCreateRequest
     */
    registration_number?: string;
}

/**
 * Check if a given object implements the PartnerCustomerCreateRequest interface.
 */
export function instanceOfPartnerCustomerCreateRequest(value: object): boolean {
    if (!('company_name' in value)) return false;
    if (!('is_diligence_attested' in value)) return false;
    if (!('legal_entity_name' in value)) return false;
    if (!('website' in value)) return false;
    if (!('application_name' in value)) return false;
    if (!('address' in value)) return false;
    if (!('is_bank_addendum_completed' in value)) return false;
    return true;
}

export function PartnerCustomerCreateRequestFromJSON(json: any): PartnerCustomerCreateRequest {
    return PartnerCustomerCreateRequestFromJSONTyped(json, false);
}

export function PartnerCustomerCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerCustomerCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'company_name': json['company_name'],
        'is_diligence_attested': json['is_diligence_attested'],
        'products': json['products'] == null ? undefined : ((json['products'] as Array<any>).map(ProductsFromJSON)),
        'create_link_customization': json['create_link_customization'] == null ? undefined : json['create_link_customization'],
        'logo': json['logo'] == null ? undefined : json['logo'],
        'legal_entity_name': json['legal_entity_name'],
        'website': json['website'],
        'application_name': json['application_name'],
        'technical_contact': json['technical_contact'] == null ? undefined : PartnerEndCustomerTechnicalContactFromJSON(json['technical_contact']),
        'billing_contact': json['billing_contact'] == null ? undefined : PartnerEndCustomerBillingContactFromJSON(json['billing_contact']),
        'customer_support_info': json['customer_support_info'] == null ? undefined : PartnerEndCustomerCustomerSupportInfoFromJSON(json['customer_support_info']),
        'address': PartnerEndCustomerAddressFromJSON(json['address']),
        'is_bank_addendum_completed': json['is_bank_addendum_completed'],
        'assets_under_management': json['assets_under_management'] == null ? undefined : PartnerEndCustomerAssetsUnderManagementFromJSON(json['assets_under_management']),
        'redirect_uris': json['redirect_uris'] == null ? undefined : json['redirect_uris'],
        'registration_number': json['registration_number'] == null ? undefined : json['registration_number'],
    };
}

export function PartnerCustomerCreateRequestToJSON(value?: PartnerCustomerCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'company_name': value['company_name'],
        'is_diligence_attested': value['is_diligence_attested'],
        'products': value['products'] == null ? undefined : ((value['products'] as Array<any>).map(ProductsToJSON)),
        'create_link_customization': value['create_link_customization'],
        'logo': value['logo'],
        'legal_entity_name': value['legal_entity_name'],
        'website': value['website'],
        'application_name': value['application_name'],
        'technical_contact': PartnerEndCustomerTechnicalContactToJSON(value['technical_contact']),
        'billing_contact': PartnerEndCustomerBillingContactToJSON(value['billing_contact']),
        'customer_support_info': PartnerEndCustomerCustomerSupportInfoToJSON(value['customer_support_info']),
        'address': PartnerEndCustomerAddressToJSON(value['address']),
        'is_bank_addendum_completed': value['is_bank_addendum_completed'],
        'assets_under_management': PartnerEndCustomerAssetsUnderManagementToJSON(value['assets_under_management']),
        'redirect_uris': value['redirect_uris'],
        'registration_number': value['registration_number'],
    };
}

