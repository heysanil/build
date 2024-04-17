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
import type { PaymentConsentMaxPaymentAmount } from './PaymentConsentMaxPaymentAmount';
import {
    PaymentConsentMaxPaymentAmountFromJSON,
    PaymentConsentMaxPaymentAmountFromJSONTyped,
    PaymentConsentMaxPaymentAmountToJSON,
} from './PaymentConsentMaxPaymentAmount';
import type { PaymentConsentPeriodicAmount } from './PaymentConsentPeriodicAmount';
import {
    PaymentConsentPeriodicAmountFromJSON,
    PaymentConsentPeriodicAmountFromJSONTyped,
    PaymentConsentPeriodicAmountToJSON,
} from './PaymentConsentPeriodicAmount';
import type { PaymentConsentValidDateTime } from './PaymentConsentValidDateTime';
import {
    PaymentConsentValidDateTimeFromJSON,
    PaymentConsentValidDateTimeFromJSONTyped,
    PaymentConsentValidDateTimeToJSON,
} from './PaymentConsentValidDateTime';

/**
 * Limitations that will be applied to payments initiated using the payment consent.
 * @export
 * @interface PaymentInitiationConsentConstraints
 */
export interface PaymentInitiationConsentConstraints {
    /**
     * 
     * @type {PaymentConsentValidDateTime}
     * @memberof PaymentInitiationConsentConstraints
     */
    valid_date_time?: PaymentConsentValidDateTime;
    /**
     * 
     * @type {PaymentConsentMaxPaymentAmount}
     * @memberof PaymentInitiationConsentConstraints
     */
    max_payment_amount: PaymentConsentMaxPaymentAmount;
    /**
     * A list of amount limitations per period of time.
     * @type {Array<PaymentConsentPeriodicAmount>}
     * @memberof PaymentInitiationConsentConstraints
     */
    periodic_amounts: Array<PaymentConsentPeriodicAmount>;
}

/**
 * Check if a given object implements the PaymentInitiationConsentConstraints interface.
 */
export function instanceOfPaymentInitiationConsentConstraints(value: object): boolean {
    if (!('max_payment_amount' in value)) return false;
    if (!('periodic_amounts' in value)) return false;
    return true;
}

export function PaymentInitiationConsentConstraintsFromJSON(json: any): PaymentInitiationConsentConstraints {
    return PaymentInitiationConsentConstraintsFromJSONTyped(json, false);
}

export function PaymentInitiationConsentConstraintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationConsentConstraints {
    if (json == null) {
        return json;
    }
    return {
        
        'valid_date_time': json['valid_date_time'] == null ? undefined : PaymentConsentValidDateTimeFromJSON(json['valid_date_time']),
        'max_payment_amount': PaymentConsentMaxPaymentAmountFromJSON(json['max_payment_amount']),
        'periodic_amounts': ((json['periodic_amounts'] as Array<any>).map(PaymentConsentPeriodicAmountFromJSON)),
    };
}

export function PaymentInitiationConsentConstraintsToJSON(value?: PaymentInitiationConsentConstraints | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'valid_date_time': PaymentConsentValidDateTimeToJSON(value['valid_date_time']),
        'max_payment_amount': PaymentConsentMaxPaymentAmountToJSON(value['max_payment_amount']),
        'periodic_amounts': ((value['periodic_amounts'] as Array<any>).map(PaymentConsentPeriodicAmountToJSON)),
    };
}

