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
 * CraBankIncomeCreateRequest defines the request schema for `/cra/bank_income/create`.
 * @export
 * @interface CraBankIncomeCreateRequest
 */
export interface CraBankIncomeCreateRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof CraBankIncomeCreateRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof CraBankIncomeCreateRequest
     */
    secret?: string;
    /**
     * The user token associated with the User data is being requested for.
     * @type {string}
     * @memberof CraBankIncomeCreateRequest
     */
    user_token?: string;
    /**
     * The destination URL to which webhooks will be sent
     * 
     * @type {string}
     * @memberof CraBankIncomeCreateRequest
     */
    webhook?: string;
    /**
     * The number of days of data to request for the Bank Income product
     * @type {number}
     * @memberof CraBankIncomeCreateRequest
     */
    days_requested?: number;
    /**
     * 
     * @type {ConsumerReportPermissiblePurpose}
     * @memberof CraBankIncomeCreateRequest
     */
    consumer_report_permissible_purpose?: ConsumerReportPermissiblePurpose;
}

/**
 * Check if a given object implements the CraBankIncomeCreateRequest interface.
 */
export function instanceOfCraBankIncomeCreateRequest(value: object): boolean {
    return true;
}

export function CraBankIncomeCreateRequestFromJSON(json: any): CraBankIncomeCreateRequest {
    return CraBankIncomeCreateRequestFromJSONTyped(json, false);
}

export function CraBankIncomeCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CraBankIncomeCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'user_token': json['user_token'] == null ? undefined : json['user_token'],
        'webhook': json['webhook'] == null ? undefined : json['webhook'],
        'days_requested': json['days_requested'] == null ? undefined : json['days_requested'],
        'consumer_report_permissible_purpose': json['consumer_report_permissible_purpose'] == null ? undefined : ConsumerReportPermissiblePurposeFromJSON(json['consumer_report_permissible_purpose']),
    };
}

export function CraBankIncomeCreateRequestToJSON(value?: CraBankIncomeCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'user_token': value['user_token'],
        'webhook': value['webhook'],
        'days_requested': value['days_requested'],
        'consumer_report_permissible_purpose': ConsumerReportPermissiblePurposeToJSON(value['consumer_report_permissible_purpose']),
    };
}
