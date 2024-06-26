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
 * ProcessorApexProcessorTokenCreateRequest defines the request schema for `/processor/apex/processor_token/create`
 * @export
 * @interface ProcessorApexProcessorTokenCreateRequest
 */
export interface ProcessorApexProcessorTokenCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorApexProcessorTokenCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof ProcessorApexProcessorTokenCreateRequest
     */
    secret?: string;
    /**
     * The access token associated with the Item data is being requested for.
     * @type {string}
     * @memberof ProcessorApexProcessorTokenCreateRequest
     */
    access_token: string;
    /**
     * The `account_id` value obtained from the `onSuccess` callback in Link
     * @type {string}
     * @memberof ProcessorApexProcessorTokenCreateRequest
     */
    account_id: string;
}

/**
 * Check if a given object implements the ProcessorApexProcessorTokenCreateRequest interface.
 */
export function instanceOfProcessorApexProcessorTokenCreateRequest(value: object): boolean {
    if (!('access_token' in value)) return false;
    if (!('account_id' in value)) return false;
    return true;
}

export function ProcessorApexProcessorTokenCreateRequestFromJSON(json: any): ProcessorApexProcessorTokenCreateRequest {
    return ProcessorApexProcessorTokenCreateRequestFromJSONTyped(json, false);
}

export function ProcessorApexProcessorTokenCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorApexProcessorTokenCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'access_token': json['access_token'],
        'account_id': json['account_id'],
    };
}

export function ProcessorApexProcessorTokenCreateRequestToJSON(value?: ProcessorApexProcessorTokenCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'access_token': value['access_token'],
        'account_id': value['account_id'],
    };
}

