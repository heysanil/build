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
 * Fired when a recurring transfer is cancelled by Plaid.
 * @export
 * @interface RecurringCancelledWebhook
 */
export interface RecurringCancelledWebhook {
    [key: string]: any | any;
    /**
     * `TRANSFER`
     * @type {string}
     * @memberof RecurringCancelledWebhook
     */
    webhook_type: string;
    /**
     * `RECURRING_CANCELLED`
     * @type {string}
     * @memberof RecurringCancelledWebhook
     */
    webhook_code: string;
    /**
     * Plaid’s unique identifier for a recurring transfer.
     * @type {string}
     * @memberof RecurringCancelledWebhook
     */
    recurring_transfer_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof RecurringCancelledWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the RecurringCancelledWebhook interface.
 */
export function instanceOfRecurringCancelledWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('recurring_transfer_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function RecurringCancelledWebhookFromJSON(json: any): RecurringCancelledWebhook {
    return RecurringCancelledWebhookFromJSONTyped(json, false);
}

export function RecurringCancelledWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecurringCancelledWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'recurring_transfer_id': json['recurring_transfer_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function RecurringCancelledWebhookToJSON(value?: RecurringCancelledWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'recurring_transfer_id': value['recurring_transfer_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

