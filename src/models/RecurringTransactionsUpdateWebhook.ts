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
 * Fired when recurring transactions data is updated. This includes when a new recurring stream is detected or when a new transaction is added to an existing recurring stream. The `RECURRING_TRANSACTIONS_UPDATE` webhook will also fire when one or more attributes of the recurring stream changes, which is usually a result of the addition, update, or removal of transactions to the stream.
 * 
 * After receipt of this webhook, the updated data can be fetched from `/transactions/recurring/get`.
 * @export
 * @interface RecurringTransactionsUpdateWebhook
 */
export interface RecurringTransactionsUpdateWebhook {
    [key: string]: any | any;
    /**
     * `TRANSACTIONS`
     * @type {string}
     * @memberof RecurringTransactionsUpdateWebhook
     */
    webhook_type: string;
    /**
     * `RECURRING_TRANSACTIONS_UPDATE`
     * @type {string}
     * @memberof RecurringTransactionsUpdateWebhook
     */
    webhook_code: string;
    /**
     * The `item_id` of the Item associated with this webhook, warning, or error
     * @type {string}
     * @memberof RecurringTransactionsUpdateWebhook
     */
    item_id: string;
    /**
     * A list of `account_ids` for accounts that have new or updated recurring transactions data.
     * @type {Array<string>}
     * @memberof RecurringTransactionsUpdateWebhook
     */
    account_ids: Array<string>;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof RecurringTransactionsUpdateWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the RecurringTransactionsUpdateWebhook interface.
 */
export function instanceOfRecurringTransactionsUpdateWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('item_id' in value)) return false;
    if (!('account_ids' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function RecurringTransactionsUpdateWebhookFromJSON(json: any): RecurringTransactionsUpdateWebhook {
    return RecurringTransactionsUpdateWebhookFromJSONTyped(json, false);
}

export function RecurringTransactionsUpdateWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringTransactionsUpdateWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'item_id': json['item_id'],
        'account_ids': json['account_ids'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function RecurringTransactionsUpdateWebhookToJSON(value?: RecurringTransactionsUpdateWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'item_id': value['item_id'],
        'account_ids': value['account_ids'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

