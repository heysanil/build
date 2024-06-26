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
import type { WebhookEnvironmentValues } from './WebhookEnvironmentValues';
import {
    WebhookEnvironmentValuesFromJSON,
    WebhookEnvironmentValuesFromJSONTyped,
    WebhookEnvironmentValuesToJSON,
} from './WebhookEnvironmentValues';

/**
 * Fired when a bank income report has failed to generate
 * @export
 * @interface CraBankIncomeErrorWebhook
 */
export interface CraBankIncomeErrorWebhook {
    [key: string]: any | any;
    /**
     * `CRA_INCOME`
     * @type {string}
     * @memberof CraBankIncomeErrorWebhook
     */
    webhook_type: string;
    /**
     * `ERROR`
     * @type {string}
     * @memberof CraBankIncomeErrorWebhook
     */
    webhook_code: string;
    /**
     * The `user_id` corresponding to the user the webhook has fired for.
     * @type {string}
     * @memberof CraBankIncomeErrorWebhook
     */
    user_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof CraBankIncomeErrorWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the CraBankIncomeErrorWebhook interface.
 */
export function instanceOfCraBankIncomeErrorWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('user_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function CraBankIncomeErrorWebhookFromJSON(json: any): CraBankIncomeErrorWebhook {
    return CraBankIncomeErrorWebhookFromJSONTyped(json, false);
}

export function CraBankIncomeErrorWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): CraBankIncomeErrorWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'user_id': json['user_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function CraBankIncomeErrorWebhookToJSON(value?: CraBankIncomeErrorWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'user_id': value['user_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

