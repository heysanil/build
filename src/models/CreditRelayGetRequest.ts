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
import type { ReportType } from './ReportType';
import {
    ReportTypeFromJSON,
    ReportTypeFromJSONTyped,
    ReportTypeToJSON,
} from './ReportType';

/**
 * CreditRelayGetRequest defines the request schema for `/credit/relay/get`
 * @export
 * @interface CreditRelayGetRequest
 */
export interface CreditRelayGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof CreditRelayGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof CreditRelayGetRequest
     */
    secret?: string;
    /**
     * The `relay_token` granting access to the report you would like to get.
     * @type {string}
     * @memberof CreditRelayGetRequest
     */
    relay_token: string;
    /**
     * 
     * @type {ReportType}
     * @memberof CreditRelayGetRequest
     */
    report_type: ReportType;
}

/**
 * Check if a given object implements the CreditRelayGetRequest interface.
 */
export function instanceOfCreditRelayGetRequest(value: object): boolean {
    if (!('relay_token' in value)) return false;
    if (!('report_type' in value)) return false;
    return true;
}

export function CreditRelayGetRequestFromJSON(json: any): CreditRelayGetRequest {
    return CreditRelayGetRequestFromJSONTyped(json, false);
}

export function CreditRelayGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditRelayGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'relay_token': json['relay_token'],
        'report_type': ReportTypeFromJSON(json['report_type']),
    };
}

export function CreditRelayGetRequestToJSON(value?: CreditRelayGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'relay_token': value['relay_token'],
        'report_type': ReportTypeToJSON(value['report_type']),
    };
}

