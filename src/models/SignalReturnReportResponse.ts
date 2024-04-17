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
 * SignalReturnReportResponse defines the response schema for `/signal/return/report`
 * @export
 * @interface SignalReturnReportResponse
 */
export interface SignalReturnReportResponse {
    [key: string]: any | any;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof SignalReturnReportResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the SignalReturnReportResponse interface.
 */
export function instanceOfSignalReturnReportResponse(value: object): boolean {
    if (!('request_id' in value)) return false;
    return true;
}

export function SignalReturnReportResponseFromJSON(json: any): SignalReturnReportResponse {
    return SignalReturnReportResponseFromJSONTyped(json, false);
}

export function SignalReturnReportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignalReturnReportResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'request_id': json['request_id'],
    };
}

export function SignalReturnReportResponseToJSON(value?: SignalReturnReportResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'request_id': value['request_id'],
    };
}
