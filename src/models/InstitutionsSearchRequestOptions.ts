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
import type { InstitutionsSearchPaymentInitiationOptions } from './InstitutionsSearchPaymentInitiationOptions';
import {
    InstitutionsSearchPaymentInitiationOptionsFromJSON,
    InstitutionsSearchPaymentInitiationOptionsFromJSONTyped,
    InstitutionsSearchPaymentInitiationOptionsToJSON,
} from './InstitutionsSearchPaymentInitiationOptions';

/**
 * An optional object to filter `/institutions/search` results.
 * @export
 * @interface InstitutionsSearchRequestOptions
 */
export interface InstitutionsSearchRequestOptions {
    /**
     * Limit results to institutions with or without OAuth login flows. Note that institutions will have `oauth` set to `true` if some Items associated with that institution are required to use OAuth flows; institutions in a state of migration to OAuth will have the `oauth` attribute set to `true`.
     * @type {boolean}
     * @memberof InstitutionsSearchRequestOptions
     */
    oauth?: boolean;
    /**
     * When true, return the institution's homepage URL, logo and primary brand color.
     * @type {boolean}
     * @memberof InstitutionsSearchRequestOptions
     */
    include_optional_metadata?: boolean;
    /**
     * When `true`, returns metadata related to the Auth product indicating which auth methods are supported.
     * @type {boolean}
     * @memberof InstitutionsSearchRequestOptions
     */
    include_auth_metadata?: boolean;
    /**
     * When `true`, returns metadata related to the Payment Initiation product indicating which payment configurations are supported.
     * @type {boolean}
     * @memberof InstitutionsSearchRequestOptions
     */
    include_payment_initiation_metadata?: boolean;
    /**
     * 
     * @type {InstitutionsSearchPaymentInitiationOptions}
     * @memberof InstitutionsSearchRequestOptions
     */
    payment_initiation?: InstitutionsSearchPaymentInitiationOptions;
}

/**
 * Check if a given object implements the InstitutionsSearchRequestOptions interface.
 */
export function instanceOfInstitutionsSearchRequestOptions(value: object): boolean {
    return true;
}

export function InstitutionsSearchRequestOptionsFromJSON(json: any): InstitutionsSearchRequestOptions {
    return InstitutionsSearchRequestOptionsFromJSONTyped(json, false);
}

export function InstitutionsSearchRequestOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InstitutionsSearchRequestOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'oauth': json['oauth'] == null ? undefined : json['oauth'],
        'include_optional_metadata': json['include_optional_metadata'] == null ? undefined : json['include_optional_metadata'],
        'include_auth_metadata': json['include_auth_metadata'] == null ? undefined : json['include_auth_metadata'],
        'include_payment_initiation_metadata': json['include_payment_initiation_metadata'] == null ? undefined : json['include_payment_initiation_metadata'],
        'payment_initiation': json['payment_initiation'] == null ? undefined : InstitutionsSearchPaymentInitiationOptionsFromJSON(json['payment_initiation']),
    };
}

export function InstitutionsSearchRequestOptionsToJSON(value?: InstitutionsSearchRequestOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'oauth': value['oauth'],
        'include_optional_metadata': value['include_optional_metadata'],
        'include_auth_metadata': value['include_auth_metadata'],
        'include_payment_initiation_metadata': value['include_payment_initiation_metadata'],
        'payment_initiation': InstitutionsSearchPaymentInitiationOptionsToJSON(value['payment_initiation']),
    };
}

