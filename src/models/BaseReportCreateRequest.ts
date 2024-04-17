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
import type { ConsumerReportPermissiblePurpose } from './ConsumerReportPermissiblePurpose';
import {
    ConsumerReportPermissiblePurposeFromJSON,
    ConsumerReportPermissiblePurposeFromJSONTyped,
    ConsumerReportPermissiblePurposeToJSON,
} from './ConsumerReportPermissiblePurpose';

/**
 * BaseReportCreateRequest defines the request schema for `/cra/base_report/create`
 * @export
 * @interface BaseReportCreateRequest
 */
export interface BaseReportCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof BaseReportCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof BaseReportCreateRequest
     */
    secret?: string;
    /**
     * The user token associated with the User data is being requested for.
     * @type {string}
     * @memberof BaseReportCreateRequest
     */
    user_token: string;
    /**
     * The duration of transaction history you requested
     * @type {number}
     * @memberof BaseReportCreateRequest
     */
    days_requested: number;
    /**
     * URL to which Plaid will send Assets webhooks, for example when the requested Asset Report is ready.
     * @type {string}
     * @memberof BaseReportCreateRequest
     */
    webhook: string | null;
    /**
     * 
     * @type {ConsumerReportPermissiblePurpose}
     * @memberof BaseReportCreateRequest
     */
    consumer_report_permissible_purpose: ConsumerReportPermissiblePurpose;
}

/**
 * Check if a given object implements the BaseReportCreateRequest interface.
 */
export function instanceOfBaseReportCreateRequest(value: object): boolean {
    if (!('user_token' in value)) return false;
    if (!('days_requested' in value)) return false;
    if (!('webhook' in value)) return false;
    if (!('consumer_report_permissible_purpose' in value)) return false;
    return true;
}

export function BaseReportCreateRequestFromJSON(json: any): BaseReportCreateRequest {
    return BaseReportCreateRequestFromJSONTyped(json, false);
}

export function BaseReportCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseReportCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'user_token': json['user_token'],
        'days_requested': json['days_requested'],
        'webhook': json['webhook'],
        'consumer_report_permissible_purpose': ConsumerReportPermissiblePurposeFromJSON(json['consumer_report_permissible_purpose']),
    };
}

export function BaseReportCreateRequestToJSON(value?: BaseReportCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'user_token': value['user_token'],
        'days_requested': value['days_requested'],
        'webhook': value['webhook'],
        'consumer_report_permissible_purpose': ConsumerReportPermissiblePurposeToJSON(value['consumer_report_permissible_purpose']),
    };
}

