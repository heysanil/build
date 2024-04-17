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
import type { IncomeVerificationCreateRequestOptions } from './IncomeVerificationCreateRequestOptions';
import {
    IncomeVerificationCreateRequestOptionsFromJSON,
    IncomeVerificationCreateRequestOptionsFromJSONTyped,
    IncomeVerificationCreateRequestOptionsToJSON,
} from './IncomeVerificationCreateRequestOptions';

/**
 * IncomeVerificationCreateRequest defines the request schema for `/income/verification/create`
 * @export
 * @interface IncomeVerificationCreateRequest
 */
export interface IncomeVerificationCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof IncomeVerificationCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof IncomeVerificationCreateRequest
     */
    secret?: string;
    /**
     * The URL endpoint to which Plaid should send webhooks related to the progress of the income verification process.
     * @type {string}
     * @memberof IncomeVerificationCreateRequest
     */
    webhook: string;
    /**
     * The ID of a precheck created with `/income/verification/precheck`. Will be used to improve conversion of the income verification flow.
     * @type {string}
     * @memberof IncomeVerificationCreateRequest
     */
    precheck_id?: string;
    /**
     * 
     * @type {IncomeVerificationCreateRequestOptions}
     * @memberof IncomeVerificationCreateRequest
     */
    options?: IncomeVerificationCreateRequestOptions;
}

/**
 * Check if a given object implements the IncomeVerificationCreateRequest interface.
 */
export function instanceOfIncomeVerificationCreateRequest(value: object): boolean {
    if (!('webhook' in value)) return false;
    return true;
}

export function IncomeVerificationCreateRequestFromJSON(json: any): IncomeVerificationCreateRequest {
    return IncomeVerificationCreateRequestFromJSONTyped(json, false);
}

export function IncomeVerificationCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomeVerificationCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'webhook': json['webhook'],
        'precheck_id': json['precheck_id'] == null ? undefined : json['precheck_id'],
        'options': json['options'] == null ? undefined : IncomeVerificationCreateRequestOptionsFromJSON(json['options']),
    };
}

export function IncomeVerificationCreateRequestToJSON(value?: IncomeVerificationCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'webhook': value['webhook'],
        'precheck_id': value['precheck_id'],
        'options': IncomeVerificationCreateRequestOptionsToJSON(value['options']),
    };
}

