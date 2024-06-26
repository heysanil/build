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
import type { WalletTransactionStatus } from './WalletTransactionStatus';
import {
    WalletTransactionStatusFromJSON,
    WalletTransactionStatusFromJSONTyped,
    WalletTransactionStatusToJSON,
} from './WalletTransactionStatus';

/**
 * PaymentInitiationPaymentReverseResponse defines the response schema for `/payment_initation/payment/reverse`
 * @export
 * @interface PaymentInitiationPaymentReverseResponse
 */
export interface PaymentInitiationPaymentReverseResponse {
    [key: string]: any | any;
    /**
     * A unique ID identifying the refund
     * @type {string}
     * @memberof PaymentInitiationPaymentReverseResponse
     */
    refund_id: string;
    /**
     * 
     * @type {WalletTransactionStatus}
     * @memberof PaymentInitiationPaymentReverseResponse
     */
    status: WalletTransactionStatus;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof PaymentInitiationPaymentReverseResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the PaymentInitiationPaymentReverseResponse interface.
 */
export function instanceOfPaymentInitiationPaymentReverseResponse(value: object): boolean {
    if (!('refund_id' in value)) return false;
    if (!('status' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function PaymentInitiationPaymentReverseResponseFromJSON(json: any): PaymentInitiationPaymentReverseResponse {
    return PaymentInitiationPaymentReverseResponseFromJSONTyped(json, false);
}

export function PaymentInitiationPaymentReverseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentInitiationPaymentReverseResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'refund_id': json['refund_id'],
        'status': WalletTransactionStatusFromJSON(json['status']),
        'request_id': json['request_id'],
    };
}

export function PaymentInitiationPaymentReverseResponseToJSON(value?: PaymentInitiationPaymentReverseResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'refund_id': value['refund_id'],
        'status': WalletTransactionStatusToJSON(value['status']),
        'request_id': value['request_id'],
    };
}

