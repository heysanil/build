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
import type { PaymentInitiationPaymentStatus } from './PaymentInitiationPaymentStatus';
import {
    PaymentInitiationPaymentStatusFromJSON,
    PaymentInitiationPaymentStatusFromJSONTyped,
    PaymentInitiationPaymentStatusToJSON,
} from './PaymentInitiationPaymentStatus';
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
 * Fired when the status of a payment has changed.
 * @export
 * @interface PaymentStatusUpdateWebhook
 */
export interface PaymentStatusUpdateWebhook {
    [key: string]: any | any;
    /**
     * `PAYMENT_INITIATION`
     * @type {string}
     * @memberof PaymentStatusUpdateWebhook
     */
    webhook_type: string;
    /**
     * `PAYMENT_STATUS_UPDATE`
     * @type {string}
     * @memberof PaymentStatusUpdateWebhook
     */
    webhook_code: string;
    /**
     * The `payment_id` for the payment being updated
     * @type {string}
     * @memberof PaymentStatusUpdateWebhook
     */
    payment_id: string;
    /**
     * The transaction ID that this payment is associated with, if any. This is present only when a payment was initiated using virtual accounts.
     * @type {string}
     * @memberof PaymentStatusUpdateWebhook
     */
    transaction_id?: string;
    /**
     * 
     * @type {PaymentInitiationPaymentStatus}
     * @memberof PaymentStatusUpdateWebhook
     */
    new_payment_status: PaymentInitiationPaymentStatus;
    /**
     * 
     * @type {PaymentInitiationPaymentStatus}
     * @memberof PaymentStatusUpdateWebhook
     */
    old_payment_status: PaymentInitiationPaymentStatus;
    /**
     * The original value of the reference when creating the payment.
     * @type {string}
     * @memberof PaymentStatusUpdateWebhook
     */
    original_reference: string | null;
    /**
     * The value of the reference sent to the bank after adjustment to pass bank validation rules.
     * @type {string}
     * @memberof PaymentStatusUpdateWebhook
     */
    adjusted_reference?: string;
    /**
     * The original value of the `start_date` provided during the creation of a standing order. If the payment is not a standing order, this field will be `null`.
     * @type {Date}
     * @memberof PaymentStatusUpdateWebhook
     */
    original_start_date: Date | null;
    /**
     * The start date sent to the bank after adjusting for holidays or weekends.  Will be provided in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DD). If the start date did not require adjustment, or if the payment is not a standing order, this field will be `null`.
     * @type {Date}
     * @memberof PaymentStatusUpdateWebhook
     */
    adjusted_start_date: Date | null;
    /**
     * The timestamp of the update, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format, e.g. `"2017-09-14T14:42:19.350Z"`
     * @type {Date}
     * @memberof PaymentStatusUpdateWebhook
     */
    timestamp: Date;
    /**
     * 
     * @type {PlaidError}
     * @memberof PaymentStatusUpdateWebhook
     */
    error?: PlaidError;
    /**
     * 
     * @type {WebhookEnvironmentValues}
     * @memberof PaymentStatusUpdateWebhook
     */
    environment: WebhookEnvironmentValues;
}

/**
 * Check if a given object implements the PaymentStatusUpdateWebhook interface.
 */
export function instanceOfPaymentStatusUpdateWebhook(value: object): boolean {
    if (!('webhook_type' in value)) return false;
    if (!('webhook_code' in value)) return false;
    if (!('payment_id' in value)) return false;
    if (!('new_payment_status' in value)) return false;
    if (!('old_payment_status' in value)) return false;
    if (!('original_reference' in value)) return false;
    if (!('original_start_date' in value)) return false;
    if (!('adjusted_start_date' in value)) return false;
    if (!('timestamp' in value)) return false;
    if (!('environment' in value)) return false;
    return true;
}

export function PaymentStatusUpdateWebhookFromJSON(json: any): PaymentStatusUpdateWebhook {
    return PaymentStatusUpdateWebhookFromJSONTyped(json, false);
}

export function PaymentStatusUpdateWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentStatusUpdateWebhook {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'webhook_type': json['webhook_type'],
        'webhook_code': json['webhook_code'],
        'payment_id': json['payment_id'],
        'transaction_id': json['transaction_id'] == null ? undefined : json['transaction_id'],
        'new_payment_status': PaymentInitiationPaymentStatusFromJSON(json['new_payment_status']),
        'old_payment_status': PaymentInitiationPaymentStatusFromJSON(json['old_payment_status']),
        'original_reference': json['original_reference'],
        'adjusted_reference': json['adjusted_reference'] == null ? undefined : json['adjusted_reference'],
        'original_start_date': (json['original_start_date'] == null ? null : new Date(json['original_start_date'])),
        'adjusted_start_date': (json['adjusted_start_date'] == null ? null : new Date(json['adjusted_start_date'])),
        'timestamp': (new Date(json['timestamp'])),
        'error': json['error'] == null ? undefined : PlaidErrorFromJSON(json['error']),
        'environment': WebhookEnvironmentValuesFromJSON(json['environment']),
    };
}

export function PaymentStatusUpdateWebhookToJSON(value?: PaymentStatusUpdateWebhook | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'webhook_type': value['webhook_type'],
        'webhook_code': value['webhook_code'],
        'payment_id': value['payment_id'],
        'transaction_id': value['transaction_id'],
        'new_payment_status': PaymentInitiationPaymentStatusToJSON(value['new_payment_status']),
        'old_payment_status': PaymentInitiationPaymentStatusToJSON(value['old_payment_status']),
        'original_reference': value['original_reference'],
        'adjusted_reference': value['adjusted_reference'],
        'original_start_date': (value['original_start_date'] == null ? null : (value['original_start_date'] as any).toISOString().substring(0,10)),
        'adjusted_start_date': (value['adjusted_start_date'] == null ? null : (value['adjusted_start_date'] as any).toISOString().substring(0,10)),
        'timestamp': ((value['timestamp']).toISOString()),
        'error': PlaidErrorToJSON(value['error']),
        'environment': WebhookEnvironmentValuesToJSON(value['environment']),
    };
}

