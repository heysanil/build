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
import type { RecurringFrequency } from './RecurringFrequency';
import {
    RecurringFrequencyFromJSON,
    RecurringFrequencyFromJSONTyped,
    RecurringFrequencyToJSON,
} from './RecurringFrequency';

/**
 * Insights relating to expenses and deposits that are predicted to occur on a scheduled basis, such as biweekly, monthly, or annually.
 * 
 * Common examples include loan payments, bill payments, subscriptions, and payroll income.
 * 
 * This is a beta field, available to all users.
 * @export
 * @interface Recurrence
 */
export interface Recurrence {
    [key: string]: any | any;
    /**
     * Whether or not the transaction is periodically recurring.
     * @type {boolean}
     * @memberof Recurrence
     */
    is_recurring?: boolean;
    /**
     * 
     * @type {RecurringFrequency}
     * @memberof Recurrence
     */
    frequency?: RecurringFrequency;
}

/**
 * Check if a given object implements the Recurrence interface.
 */
export function instanceOfRecurrence(value: object): boolean {
    return true;
}

export function RecurrenceFromJSON(json: any): Recurrence {
    return RecurrenceFromJSONTyped(json, false);
}

export function RecurrenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Recurrence {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'is_recurring': json['is_recurring'] == null ? undefined : json['is_recurring'],
        'frequency': json['frequency'] == null ? undefined : RecurringFrequencyFromJSON(json['frequency']),
    };
}

export function RecurrenceToJSON(value?: Recurrence | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'is_recurring': value['is_recurring'],
        'frequency': RecurringFrequencyToJSON(value['frequency']),
    };
}
