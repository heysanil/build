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
 * LinkOAuthCorrelationIdExchangeResponse defines the response schema for `/link/oauth/correlation_id/exchange`
 * @export
 * @interface LinkOAuthCorrelationIdExchangeResponse
 */
export interface LinkOAuthCorrelationIdExchangeResponse {
    [key: string]: any | any;
    /**
     * The `link_token` associated to the given `link_correlation_id`, which can be used to re-initialize Link.
     * @type {string}
     * @memberof LinkOAuthCorrelationIdExchangeResponse
     */
    link_token: string;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof LinkOAuthCorrelationIdExchangeResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the LinkOAuthCorrelationIdExchangeResponse interface.
 */
export function instanceOfLinkOAuthCorrelationIdExchangeResponse(value: object): boolean {
    if (!('link_token' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function LinkOAuthCorrelationIdExchangeResponseFromJSON(json: any): LinkOAuthCorrelationIdExchangeResponse {
    return LinkOAuthCorrelationIdExchangeResponseFromJSONTyped(json, false);
}

export function LinkOAuthCorrelationIdExchangeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkOAuthCorrelationIdExchangeResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'link_token': json['link_token'],
        'request_id': json['request_id'],
    };
}

export function LinkOAuthCorrelationIdExchangeResponseToJSON(value?: LinkOAuthCorrelationIdExchangeResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'link_token': value['link_token'],
        'request_id': value['request_id'],
    };
}
