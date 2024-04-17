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
import type { AuthMetadata } from './AuthMetadata';
import {
    AuthMetadataFromJSON,
    AuthMetadataFromJSONTyped,
    AuthMetadataToJSON,
} from './AuthMetadata';
import type { CountryCode } from './CountryCode';
import {
    CountryCodeFromJSON,
    CountryCodeFromJSONTyped,
    CountryCodeToJSON,
} from './CountryCode';
import type { InstitutionStatus } from './InstitutionStatus';
import {
    InstitutionStatusFromJSON,
    InstitutionStatusFromJSONTyped,
    InstitutionStatusToJSON,
} from './InstitutionStatus';
import type { PaymentInitiationMetadata } from './PaymentInitiationMetadata';
import {
    PaymentInitiationMetadataFromJSON,
    PaymentInitiationMetadataFromJSONTyped,
    PaymentInitiationMetadataToJSON,
} from './PaymentInitiationMetadata';
import type { Products } from './Products';
import {
    ProductsFromJSON,
    ProductsFromJSONTyped,
    ProductsToJSON,
} from './Products';

/**
 * Details relating to a specific financial institution
 * @export
 * @interface Institution
 */
export interface Institution {
    [key: string]: any | any;
    /**
     * Unique identifier for the institution. Note that the same institution may have multiple records, each with different institution IDs; for example, if the institution has migrated to OAuth, there may be separate `institution_id`s for the OAuth and non-OAuth versions of the institution. Institutions that operate in different countries or with multiple login portals may also have separate `institution_id`s for each country or portal.
     * @type {string}
     * @memberof Institution
     */
    institution_id: string;
    /**
     * The official name of the institution.
     * @type {string}
     * @memberof Institution
     */
    name: string;
    /**
     * A list of the Plaid products supported by the institution. Note that only institutions that support Instant Auth will return `auth` in the product array; institutions that do not list `auth` may still support other Auth methods such as Instant Match or Automated Micro-deposit Verification. To identify institutions that support those methods, use the `auth_metadata` object. For more details, see [Full Auth coverage](https://plaid.com/docs/auth/coverage/). The `income_verification` product here indicates support for Bank Income.
     * @type {Array<Products>}
     * @memberof Institution
     */
    products: Array<Products>;
    /**
     * A list of the country codes supported by the institution.
     * @type {Array<CountryCode>}
     * @memberof Institution
     */
    country_codes: Array<CountryCode>;
    /**
     * The URL for the institution's website
     * @type {string}
     * @memberof Institution
     */
    url?: string;
    /**
     * Hexadecimal representation of the primary color used by the institution
     * @type {string}
     * @memberof Institution
     */
    primary_color?: string;
    /**
     * Base64 encoded representation of the institution's logo, returned as a base64 encoded 152x152 PNG. Not all institutions' logos are available.
     * @type {string}
     * @memberof Institution
     */
    logo?: string;
    /**
     * A partial list of routing numbers associated with the institution. This list is provided for the purpose of looking up institutions by routing number. It is not comprehensive and should never be used as a complete list of routing numbers for an institution.
     * @type {Array<string>}
     * @memberof Institution
     */
    routing_numbers: Array<string>;
    /**
     * A partial list of DTC numbers associated with the institution.
     * @type {Array<string>}
     * @memberof Institution
     */
    dtc_numbers?: Array<string>;
    /**
     * Indicates that the institution has an OAuth login flow. This will be `true` if OAuth is supported for any Items associated with the institution, even if the institution also supports non-OAuth connections.
     * @type {boolean}
     * @memberof Institution
     */
    oauth: boolean;
    /**
     * 
     * @type {InstitutionStatus}
     * @memberof Institution
     */
    status?: InstitutionStatus;
    /**
     * 
     * @type {PaymentInitiationMetadata}
     * @memberof Institution
     */
    payment_initiation_metadata?: PaymentInitiationMetadata;
    /**
     * 
     * @type {AuthMetadata}
     * @memberof Institution
     */
    auth_metadata?: AuthMetadata;
}

/**
 * Check if a given object implements the Institution interface.
 */
export function instanceOfInstitution(value: object): boolean {
    if (!('institution_id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('products' in value)) return false;
    if (!('country_codes' in value)) return false;
    if (!('routing_numbers' in value)) return false;
    if (!('oauth' in value)) return false;
    return true;
}

export function InstitutionFromJSON(json: any): Institution {
    return InstitutionFromJSONTyped(json, false);
}

export function InstitutionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Institution {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'institution_id': json['institution_id'],
        'name': json['name'],
        'products': ((json['products'] as Array<any>).map(ProductsFromJSON)),
        'country_codes': ((json['country_codes'] as Array<any>).map(CountryCodeFromJSON)),
        'url': json['url'] == null ? undefined : json['url'],
        'primary_color': json['primary_color'] == null ? undefined : json['primary_color'],
        'logo': json['logo'] == null ? undefined : json['logo'],
        'routing_numbers': json['routing_numbers'],
        'dtc_numbers': json['dtc_numbers'] == null ? undefined : json['dtc_numbers'],
        'oauth': json['oauth'],
        'status': json['status'] == null ? undefined : InstitutionStatusFromJSON(json['status']),
        'payment_initiation_metadata': json['payment_initiation_metadata'] == null ? undefined : PaymentInitiationMetadataFromJSON(json['payment_initiation_metadata']),
        'auth_metadata': json['auth_metadata'] == null ? undefined : AuthMetadataFromJSON(json['auth_metadata']),
    };
}

export function InstitutionToJSON(value?: Institution | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'institution_id': value['institution_id'],
        'name': value['name'],
        'products': ((value['products'] as Array<any>).map(ProductsToJSON)),
        'country_codes': ((value['country_codes'] as Array<any>).map(CountryCodeToJSON)),
        'url': value['url'],
        'primary_color': value['primary_color'],
        'logo': value['logo'],
        'routing_numbers': value['routing_numbers'],
        'dtc_numbers': value['dtc_numbers'],
        'oauth': value['oauth'],
        'status': InstitutionStatusToJSON(value['status']),
        'payment_initiation_metadata': PaymentInitiationMetadataToJSON(value['payment_initiation_metadata']),
        'auth_metadata': AuthMetadataToJSON(value['auth_metadata']),
    };
}

