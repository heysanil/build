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
/**
 * Specifies options for initializing Link for use with the Payment Initiation (Europe) product. This field is required if `payment_initiation` is included in the `products` array. Either `payment_id` or `consent_id` must be provided.
 * @export
 * @interface LinkTokenCreateRequestPaymentInitiation
 */
export interface LinkTokenCreateRequestPaymentInitiation {
    /**
     * The `payment_id` provided by the `/payment_initiation/payment/create` endpoint.
     * @type {string}
     * @memberof LinkTokenCreateRequestPaymentInitiation
     */
    payment_id?: string;
    /**
     * The `consent_id` provided by the `/payment_initiation/consent/create` endpoint.
     * @type {string}
     * @memberof LinkTokenCreateRequestPaymentInitiation
     */
    consent_id?: string;
}

/**
 * Check if a given object implements the LinkTokenCreateRequestPaymentInitiation interface.
 */
export function instanceOfLinkTokenCreateRequestPaymentInitiation(value: object): boolean {
    return true;
}

export function LinkTokenCreateRequestPaymentInitiationFromJSON(json: any): LinkTokenCreateRequestPaymentInitiation {
    return LinkTokenCreateRequestPaymentInitiationFromJSONTyped(json, false);
}

export function LinkTokenCreateRequestPaymentInitiationFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenCreateRequestPaymentInitiation {
    if (json == null) {
        return json;
    }
    return {
        
        'payment_id': json['payment_id'] == null ? undefined : json['payment_id'],
        'consent_id': json['consent_id'] == null ? undefined : json['consent_id'],
    };
}

export function LinkTokenCreateRequestPaymentInitiationToJSON(value?: LinkTokenCreateRequestPaymentInitiation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'payment_id': value['payment_id'],
        'consent_id': value['consent_id'],
    };
}

