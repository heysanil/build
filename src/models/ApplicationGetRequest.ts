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
 * ApplicationGetRequest defines the schema for `/application/get`
 * @export
 * @interface ApplicationGetRequest
 */
export interface ApplicationGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof ApplicationGetRequest
     */
    client_id: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof ApplicationGetRequest
     */
    secret: string;
    /**
     * This field will map to the application ID that is returned from /item/application/list, or provided to the institution in an oauth redirect.
     * @type {string}
     * @memberof ApplicationGetRequest
     */
    application_id: string;
}

/**
 * Check if a given object implements the ApplicationGetRequest interface.
 */
export function instanceOfApplicationGetRequest(value: object): boolean {
    if (!('client_id' in value)) return false;
    if (!('secret' in value)) return false;
    if (!('application_id' in value)) return false;
    return true;
}

export function ApplicationGetRequestFromJSON(json: any): ApplicationGetRequest {
    return ApplicationGetRequestFromJSONTyped(json, false);
}

export function ApplicationGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'],
        'secret': json['secret'],
        'application_id': json['application_id'],
    };
}

export function ApplicationGetRequestToJSON(value?: ApplicationGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'application_id': value['application_id'],
    };
}

