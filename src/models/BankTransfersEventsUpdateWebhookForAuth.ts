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
 * Fired when new ACH events are available. To begin receiving this webhook, you must first register your webhook listener endpoint via the [webhooks page in the Dashboard](https://dashboard.plaid.com/team/webhooks). The `BANK_TRANSFERS_EVENTS_UPDATE` webhook can be used to track the progress of ACH transfers used in [micro-deposit verification](/docs/auth/coverage/microdeposit-events/). Receiving this webhook indicates you should fetch the new events from `/bank_transfer/event/sync`. Note that [Transfer](https://plaid.com/docs/transfer) customers should use Transfer webhooks instead of using `BANK_TRANSFERS_EVENTS_UPDATE`; see [micro-deposit events documentation](https://plaid.com/docs/auth/coverage/microdeposit-events/) for more details.
 * @export
 * @interface BankTransfersEventsUpdateWebhookForAuth
 */
export interface BankTransfersEventsUpdateWebhookForAuth {
    [key: string]: any | any;
    /**
     * `BANK_TRANSFERS`
     * @type {string}
     * @memberof BankTransfersEventsUpdateWebhookForAuth
     */
    webhook_type: string;
    /**
     * `BANK_TRANSFERS_EVENTS_UPDATE`
     * @type {string}
     * @memberof BankTransfersEventsUpdateWebhookForAuth
     */
    webhook_code: string;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof BankTransfersEventsUpdateWebhookForAuth
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the BankTransfersEventsUpdateWebhookForAuth interface.
 */
export function instanceOfBankTransfersEventsUpdateWebhookForAuth(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function BankTransfersEventsUpdateWebhookForAuthFromJSON(json: any): BankTransfersEventsUpdateWebhookForAuth {
    return BankTransfersEventsUpdateWebhookForAuthFromJSONTyped(json, false);
}

export function BankTransfersEventsUpdateWebhookForAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankTransfersEventsUpdateWebhookForAuth {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function BankTransfersEventsUpdateWebhookForAuthToJSON(value?: BankTransfersEventsUpdateWebhookForAuth | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

