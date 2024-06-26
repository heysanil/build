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
import type { PaymentAmountCurrency } from './PaymentAmountCurrency';
import {
    PaymentAmountCurrencyFromJSON,
    PaymentAmountCurrencyFromJSONTyped,
    PaymentAmountCurrencyToJSON,
} from './PaymentAmountCurrency';

/**
 * The amount and currency of a payment
 * @export
 * @interface PaymentAmountToRefund
 */
export interface PaymentAmountToRefund {
    /**
     * 
     * @type {PaymentAmountCurrency}
     * @memberof PaymentAmountToRefund
     */
    currency: PaymentAmountCurrency;
    /**
     * The amount of the payment. Must contain at most two digits of precision e.g. `1.23`.
     * @type {number}
     * @memberof PaymentAmountToRefund
     */
    value: number;
}

/**
 * Check if a given object implements the PaymentAmountToRefund interface.
 */
export function instanceOfPaymentAmountToRefund(value: object): boolean {
    if (!('currency' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function PaymentAmountToRefundFromJSON(json: any): PaymentAmountToRefund {
    return PaymentAmountToRefundFromJSONTyped(json, false);
}

export function PaymentAmountToRefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentAmountToRefund {
    if (json == null) {
        return json;
    }
    return {
        
        'currency': PaymentAmountCurrencyFromJSON(json['currency']),
        'value': json['value'],
    };
}

export function PaymentAmountToRefundToJSON(value?: PaymentAmountToRefund | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'currency': PaymentAmountCurrencyToJSON(value['currency']),
        'value': value['value'],
    };
}

