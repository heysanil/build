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
 * CreditRelayCreateRequest defines the request schema for `/credit/relay/create`
 * @export
 * @interface CreditRelayCreateRequest
 */
export interface CreditRelayCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof CreditRelayCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof CreditRelayCreateRequest
     */
    secret?: string;
    /**
     * List of report token strings, with at most one token of each report type. Currently only Asset Report token is supported.
     * @type {Array<string>}
     * @memberof CreditRelayCreateRequest
     */
    report_tokens: Array<string>;
    /**
     * The `secondary_client_id` is the client id of the third party with whom you would like to share the relay token.
     * @type {string}
     * @memberof CreditRelayCreateRequest
     */
    secondary_client_id: string;
    /**
     * URL to which Plaid will send webhooks when the Secondary Client successfully retrieves an Asset Report by calling `/credit/relay/get`.
     * @type {string}
     * @memberof CreditRelayCreateRequest
     */
    webhook?: string;
}

/**
 * Check if a given object implements the CreditRelayCreateRequest interface.
 */
export function instanceOfCreditRelayCreateRequest(value: object): boolean {
    if (!('report_tokens' in value)) return false;
    if (!('secondary_client_id' in value)) return false;
    return true;
}

export function CreditRelayCreateRequestFromJSON(json: any): CreditRelayCreateRequest {
    return CreditRelayCreateRequestFromJSONTyped(json, false);
}

export function CreditRelayCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditRelayCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'report_tokens': json['report_tokens'],
        'secondary_client_id': json['secondary_client_id'],
        'webhook': json['webhook'] == null ? undefined : json['webhook'],
    };
}

export function CreditRelayCreateRequestToJSON(value?: CreditRelayCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'report_tokens': value['report_tokens'],
        'secondary_client_id': value['secondary_client_id'],
        'webhook': value['webhook'],
    };
}
