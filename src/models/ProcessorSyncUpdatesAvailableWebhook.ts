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
 * This webhook is only sent to [Plaid processor partners](https://plaid.com/docs/auth/partnerships/).
 * 
 * Fired when an Item's transactions change. This can be due to any event resulting in new changes, such as an initial 30-day transactions fetch upon the initialization of an Item with transactions, the backfill of historical transactions that occurs shortly after, or when changes are populated from a regularly-scheduled transactions update job. It is recommended to listen for the `SYNC_UPDATES_AVAILABLE` webhook when using the `/processor/transactions/sync` endpoint. Note that when using `/processor/transactions/sync` the older webhooks `INITIAL_UPDATE`, `HISTORICAL_UPDATE`, `DEFAULT_UPDATE`, and `TRANSACTIONS_REMOVED`, which are intended for use with `/processor/transactions/get`, will also continue to be sent in order to maintain backwards compatibility. It is not necessary to listen for and respond to those webhooks when using `/processor/transactions/sync`.
 * 
 * After receipt of this webhook, the new changes can be fetched for the Item from `/processor/transactions/sync`.
 * 
 * Note that to receive this webhook for an Item, `/processor/transactions/sync` must have been called at least once on that Item. This means that, unlike the `INITIAL_UPDATE` and `HISTORICAL_UPDATE` webhooks, it will not fire immediately upon Item creation. If `/transactions/sync` is called on an Item that was *not* initialized with Transactions, the webhook will fire twice: once the first 30 days of transactions data has been fetched, and a second time when all available historical transactions data has been fetched.
 * 
 * This webhook will typically not fire in the Sandbox environment, due to the lack of dynamic transactions data. To test this webhook in Sandbox, call `/sandbox/item/fire_webhook`.
 * @export
 * @interface ProcessorSyncUpdatesAvailableWebhook
 */
export interface ProcessorSyncUpdatesAvailableWebhook {
    [key: string]: any | any;
    /**
     * `TRANSACTIONS`
     * @type {string}
     * @memberof ProcessorSyncUpdatesAvailableWebhook
     */
    webhook_type: string;
    /**
     * `SYNC_UPDATES_AVAILABLE`
     * @type {string}
     * @memberof ProcessorSyncUpdatesAvailableWebhook
     */
    webhook_code: string;
    /**
     * The ID of the account.
     * @type {string}
     * @memberof ProcessorSyncUpdatesAvailableWebhook
     */
    account_id: string;
    /**
     * Indicates if initial pull information is available.
     * @type {boolean}
     * @memberof ProcessorSyncUpdatesAvailableWebhook
     */
    initial_update_complete: boolean;
    /**
     * Indicates if historical pull information is available.
     * @type {boolean}
     * @memberof ProcessorSyncUpdatesAvailableWebhook
     */
    historical_update_complete: boolean;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof ProcessorSyncUpdatesAvailableWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the ProcessorSyncUpdatesAvailableWebhook interface.
 */
export function instanceOfProcessorSyncUpdatesAvailableWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('account_id' in value)) return false;
    if (!('initial_update_complete' in value)) return false;
    if (!('historical_update_complete' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function ProcessorSyncUpdatesAvailableWebhookFromJSON(json: any): ProcessorSyncUpdatesAvailableWebhook {
    return ProcessorSyncUpdatesAvailableWebhookFromJSONTyped(json, false);
}

export function ProcessorSyncUpdatesAvailableWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessorSyncUpdatesAvailableWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'account_id': json['account_id'],
        'initial_update_complete': json['initial_update_complete'],
        'historical_update_complete': json['historical_update_complete'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function ProcessorSyncUpdatesAvailableWebhookToJSON(value?: ProcessorSyncUpdatesAvailableWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'account_id': value['account_id'],
        'initial_update_complete': value['initial_update_complete'],
        'historical_update_complete': value['historical_update_complete'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

