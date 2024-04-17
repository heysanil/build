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
 * PaymentInitiationConsentGetRequest defines the request schema for `/payment_initiation/consent/get`
 * @export
 * @interface PaymentInitiationConsentGetRequest
 */
export interface PaymentInitiationConsentGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof PaymentInitiationConsentGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof PaymentInitiationConsentGetRequest
     */
    secret?: string;
    /**
     * The `consent_id` returned from `/payment_initiation/consent/create`.
     * @type {string}
     * @memberof PaymentInitiationConsentGetRequest
     */
    consent_id: string;
}

/**
 * Check if a given object implements the PaymentInitiationConsentGetRequest interface.
 */
export function instanceOfPaymentInitiationConsentGetRequest(value: object): boolean {
    if (!('consent_id' in value)) return false;
    return true;
}

export function PaymentInitiationConsentGetRequestFromJSON(json: any): PaymentInitiationConsentGetRequest {
    return PaymentInitiationConsentGetRequestFromJSONTyped(json, false);
}

export function PaymentInitiationConsentGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationConsentGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'consent_id': json['consent_id'],
    };
}

export function PaymentInitiationConsentGetRequestToJSON(value?: PaymentInitiationConsentGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'consent_id': value['consent_id'],
    };
}

