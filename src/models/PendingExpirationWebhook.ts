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
 * Fired when an Item’s access consent is expiring in 7 days. Some Items have explicit expiration times and we try to relay this when possible to reduce service disruption. This can be resolved by having the user go through Link’s update mode.
 * @export
 * @interface PendingExpirationWebhook
 */
export interface PendingExpirationWebhook {
    [key: string]: any | any;
    /**
     * `ITEM`
     * @type {string}
     * @memberof PendingExpirationWebhook
     */
    webhook_type: string;
    /**
     * `PENDING_EXPIRATION`
     * @type {string}
     * @memberof PendingExpirationWebhook
     */
    webhook_code: string;
    /**
     * The `item_id` of the Item associated with this webhook, warning, or error
     * @type {string}
     * @memberof PendingExpirationWebhook
     */
    item_id: string;
    /**
     * The date and time at which the Item's access consent will expire, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format
     * @type {Date}
     * @memberof PendingExpirationWebhook
     */
    consent_expiration_time: Date;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof PendingExpirationWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the PendingExpirationWebhook interface.
 */
export function instanceOfPendingExpirationWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('item_id' in value)) return false;
    if (!('consent_expiration_time' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function PendingExpirationWebhookFromJSON(json: any): PendingExpirationWebhook {
    return PendingExpirationWebhookFromJSONTyped(json, false);
}

export function PendingExpirationWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): PendingExpirationWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'item_id': json['item_id'],
        'consent_expiration_time': (new Date(json['consent_expiration_time'])),
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function PendingExpirationWebhookToJSON(value?: PendingExpirationWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'item_id': value['item_id'],
        'consent_expiration_time': ((value['consent_expiration_time']).toISOString()),
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

