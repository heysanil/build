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
import type { TransferAuthorization } from './TransferAuthorization';
import {
    TransferAuthorizationFromJSON,
    TransferAuthorizationFromJSONTyped,
    TransferAuthorizationToJSON,
} from './TransferAuthorization';

/**
 * Defines the response schema for `/transfer/authorization/create`
 * @export
 * @interface TransferAuthorizationCreateResponse
 */
export interface TransferAuthorizationCreateResponse {
    [key: string]: any | any;
    /**
     * 
     * @type {TransferAuthorization}
     * @memberof TransferAuthorizationCreateResponse
     */
    authorization: TransferAuthorization;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferAuthorizationCreateResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the TransferAuthorizationCreateResponse interface.
 */
export function instanceOfTransferAuthorizationCreateResponse(value: object): boolean {
    if (!('authorization' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function TransferAuthorizationCreateResponseFromJSON(json: any): TransferAuthorizationCreateResponse {
    return TransferAuthorizationCreateResponseFromJSONTyped(json, false);
}

export function TransferAuthorizationCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferAuthorizationCreateResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'authorization': TransferAuthorizationFromJSON(json['authorization']),
        'request_id': json['request_id'],
    };
}

export function TransferAuthorizationCreateResponseToJSON(value?: TransferAuthorizationCreateResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'authorization': TransferAuthorizationToJSON(value['authorization']),
        'request_id': value['request_id'],
    };
}

