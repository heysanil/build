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
import type { TransferRefundFailure } from './TransferRefundFailure';
import {
    TransferRefundFailureFromJSON,
    TransferRefundFailureFromJSONTyped,
    TransferRefundFailureToJSON,
} from './TransferRefundFailure';
import type { TransferRefundStatus } from './TransferRefundStatus';
import {
    TransferRefundStatusFromJSON,
    TransferRefundStatusFromJSONTyped,
    TransferRefundStatusToJSON,
} from './TransferRefundStatus';

/**
 * Represents a refund within the Transfers API.
 * @export
 * @interface TransferRefund
 */
export interface TransferRefund {
    [key: string]: any | any;
    /**
     * Plaid’s unique identifier for a refund.
     * @type {string}
     * @memberof TransferRefund
     */
    id: string;
    /**
     * The ID of the transfer to refund.
     * @type {string}
     * @memberof TransferRefund
     */
    transfer_id: string;
    /**
     * The amount of the refund (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferRefund
     */
    amount: string;
    /**
     * 
     * @type {TransferRefundStatus}
     * @memberof TransferRefund
     */
    status: TransferRefundStatus;
    /**
     * 
     * @type {TransferRefundFailure}
     * @memberof TransferRefund
     */
    failure_reason: TransferRefundFailure | null;
    /**
     * The datetime when this refund was created. This will be of the form `2006-01-02T15:04:05Z`
     * @type {Date}
     * @memberof TransferRefund
     */
    created: Date;
    /**
     * The trace identifier for the transfer based on its network. This will only be set after the transfer has posted.
     * 
     * For `ach` or `same-day-ach` transfers, this is the ACH trace number.
     * For `rtp` transfers, this is the Transaction Identification number.
     * For `wire` transfers, this is the IMAD (Input Message Accountability Data) number.
     * @type {string}
     * @memberof TransferRefund
     */
    network_trace_id?: string;
}

/**
 * Check if a given object implements the TransferRefund interface.
 */
export function instanceOfTransferRefund(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('transfer_id' in value)) return false;
    if (!('amount' in value)) return false;
    if (!('status' in value)) return false;
    if (!('failure_reason' in value)) return false;
    if (!('created' in value)) return false;
    return true;
}

export function TransferRefundFromJSON(json: any): TransferRefund {
    return TransferRefundFromJSONTyped(json, false);
}

export function TransferRefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferRefund {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'id': json['id'],
        'transfer_id': json['transfer_id'],
        'amount': json['amount'],
        'status': TransferRefundStatusFromJSON(json['status']),
        'failure_reason': TransferRefundFailureFromJSON(json['failure_reason']),
        'created': (new Date(json['created'])),
        'network_trace_id': json['network_trace_id'] == null ? undefined : json['network_trace_id'],
    };
}

export function TransferRefundToJSON(value?: TransferRefund | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'id': value['id'],
        'transfer_id': value['transfer_id'],
        'amount': value['amount'],
        'status': TransferRefundStatusToJSON(value['status']),
        'failure_reason': TransferRefundFailureToJSON(value['failure_reason']),
        'created': ((value['created']).toISOString()),
        'network_trace_id': value['network_trace_id'],
    };
}

