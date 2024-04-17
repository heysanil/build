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
 * Fired when a change to the user's income is detected. You should call `/credit/bank_income/refresh` to get updated income data for the user. To receive this webhook, subscribe in the [Dashboard](https://dashboard.plaid.com/developers/webhooks).
 * @export
 * @interface BankIncomeRefreshUpdateWebhook
 */
export interface BankIncomeRefreshUpdateWebhook {
    [key: string]: any | any;
    /**
     * `INCOME`
     * @type {string}
     * @memberof BankIncomeRefreshUpdateWebhook
     */
    webhook_type: string;
    /**
     * `BANK_INCOME_REFRESH_UPDATE`
     * @type {string}
     * @memberof BankIncomeRefreshUpdateWebhook
     */
    webhook_code: string;
    /**
     * The `user_id` corresponding to the user the webhook has fired for.
     * @type {string}
     * @memberof BankIncomeRefreshUpdateWebhook
     */
    user_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof BankIncomeRefreshUpdateWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the BankIncomeRefreshUpdateWebhook interface.
 */
export function instanceOfBankIncomeRefreshUpdateWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('user_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function BankIncomeRefreshUpdateWebhookFromJSON(json: any): BankIncomeRefreshUpdateWebhook {
    return BankIncomeRefreshUpdateWebhookFromJSONTyped(json, false);
}

export function BankIncomeRefreshUpdateWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankIncomeRefreshUpdateWebhook {
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

export function BankIncomeRefreshUpdateWebhookToJSON(value?: BankIncomeRefreshUpdateWebhook | null): any {
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

