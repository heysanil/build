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
 * WebhookVerificationKeyGetRequest defines the request schema for `/webhook_verification_key/get`
 * @export
 * @interface WebhookVerificationKeyGetRequest
 */
export interface WebhookVerificationKeyGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof WebhookVerificationKeyGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof WebhookVerificationKeyGetRequest
     */
    secret?: string;
    /**
     * The key ID ( `kid` ) from the JWT header.
     * @type {string}
     * @memberof WebhookVerificationKeyGetRequest
     */
    key_id: string;
}

/**
 * Check if a given object implements the WebhookVerificationKeyGetRequest interface.
 */
export function instanceOfWebhookVerificationKeyGetRequest(value: object): boolean {
    if (!('key_id' in value)) return false;
    return true;
}

export function WebhookVerificationKeyGetRequestFromJSON(json: any): WebhookVerificationKeyGetRequest {
    return WebhookVerificationKeyGetRequestFromJSONTyped(json, false);
}

export function WebhookVerificationKeyGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookVerificationKeyGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'key_id': json['key_id'],
    };
}

export function WebhookVerificationKeyGetRequestToJSON(value?: WebhookVerificationKeyGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'key_id': value['key_id'],
    };
}

