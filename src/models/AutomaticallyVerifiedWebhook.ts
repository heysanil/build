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
import type { PlaidError } from './PlaidError';
import {
    PlaidErrorFromJSON,
    PlaidErrorFromJSONTyped,
    PlaidErrorToJSON,
} from './PlaidError';
import type { WebhookEnvironmentValues } from './WebhookEnvironmentValues';
import {
    WebhookEnvironmentValuesFromJSON,
    WebhookEnvironmentValuesFromJSONTyped,
    WebhookEnvironmentValuesToJSON,
} from './WebhookEnvironmentValues';

/**
 * Fired when an Item is verified via automated micro-deposits. We recommend communicating to your users when this event is received to notify them that their account is verified and ready for use.
 * @export
 * @interface AutomaticallyVerifiedWebhook
 */
export interface AutomaticallyVerifiedWebhook {
    [key: string]: any | any;
    /**
     * `AUTH`
     * @type {string}
     * @memberof AutomaticallyVerifiedWebhook
     */
    webhook_type: string;
    /**
     * `AUTOMATICALLY_VERIFIED`
     * @type {string}
     * @memberof AutomaticallyVerifiedWebhook
     */
    webhook_code: string;
    /**
     * The `account_id` of the account associated with the webhook
     * @type {string}
     * @memberof AutomaticallyVerifiedWebhook
     */
    account_id: string;
    /**
     * The `item_id` of the Item associated with this webhook, warning, or error
     * @type {string}
     * @memberof AutomaticallyVerifiedWebhook
     */
    item_id: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof AutomaticallyVerifiedWebhook
     */
    environment: WebhookEnvironmentValues;
    /**
     * 
     * @type {PlaidError}
     * @memberof AutomaticallyVerifiedWebhook
     */
    error?: PlaidError;
}

/**
 * Check if a given object implements the AutomaticallyVerifiedWebhook interface.
 */
export function instanceOfAutomaticallyVerifiedWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('account_id' in value)) return false;
    if (!('item_id' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function AutomaticallyVerifiedWebhookFromJSON(json: any): AutomaticallyVerifiedWebhook {
    return AutomaticallyVerifiedWebhookFromJSONTyped(json, false);
}

export function AutomaticallyVerifiedWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutomaticallyVerifiedWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'account_id': json['account_id'],
        'item_id': json['item_id'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
        'error': json['error'] == null ? undefined : PlaidErrorFromJSON(json['error']),
    };
}

export function AutomaticallyVerifiedWebhookToJSON(value?: AutomaticallyVerifiedWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'account_id': value['account_id'],
        'item_id': value['item_id'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
        'error': PlaidErrorToJSON(value['error']),
    };
}
