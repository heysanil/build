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
import type { PaystubPayFrequency } from './PaystubPayFrequency';
import {
    PaystubPayFrequencyFromJSON,
    PaystubPayFrequencyFromJSONTyped,
    PaystubPayFrequencyToJSON,
} from './PaystubPayFrequency';

/**
 * An object representing details that can be found on the paystub.
 * @export
 * @interface PaystubDetails
 */
export interface PaystubDetails {
    [key: string]: any | any;
    /**
     * Beginning date of the pay period on the paystub in the 'YYYY-MM-DD' format.
     * @type {Date}
     * @memberof PaystubDetails
     */
    pay_period_start_date?: Date;
    /**
     * Ending date of the pay period on the paystub in the 'YYYY-MM-DD' format.
     * @type {Date}
     * @memberof PaystubDetails
     */
    pay_period_end_date?: Date;
    /**
     * Pay date on the paystub in the 'YYYY-MM-DD' format.
     * @type {Date}
     * @memberof PaystubDetails
     */
    pay_date?: Date;
    /**
     * The name of the payroll provider that generated the paystub, e.g. ADP
     * @type {string}
     * @memberof PaystubDetails
     */
    paystub_provider?: string;
    /**
     * 
     * @type {PaystubPayFrequency}
     * @memberof PaystubDetails
     */
    pay_frequency?: PaystubPayFrequency;
}

/**
 * Check if a given object implements the PaystubDetails interface.
 */
export function instanceOfPaystubDetails(value: object): boolean {
    return true;
}

export function PaystubDetailsFromJSON(json: any): PaystubDetails {
    return PaystubDetailsFromJSONTyped(json, false);
}

export function PaystubDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaystubDetails {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'pay_period_start_date': json['pay_period_start_date'] == null ? undefined : (new Date(json['pay_period_start_date'])),
        'pay_period_end_date': json['pay_period_end_date'] == null ? undefined : (new Date(json['pay_period_end_date'])),
        'pay_date': json['pay_date'] == null ? undefined : (new Date(json['pay_date'])),
        'paystub_provider': json['paystub_provider'] == null ? undefined : json['paystub_provider'],
        'pay_frequency': json['pay_frequency'] == null ? undefined : PaystubPayFrequencyFromJSON(json['pay_frequency']),
    };
}

export function PaystubDetailsToJSON(value?: PaystubDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'pay_period_start_date': value['pay_period_start_date'] == null ? undefined : ((value['pay_period_start_date'] as any).toISOString().substring(0,10)),
        'pay_period_end_date': value['pay_period_end_date'] == null ? undefined : ((value['pay_period_end_date'] as any).toISOString().substring(0,10)),
        'pay_date': value['pay_date'] == null ? undefined : ((value['pay_date'] as any).toISOString().substring(0,10)),
        'paystub_provider': value['paystub_provider'],
        'pay_frequency': PaystubPayFrequencyToJSON(value['pay_frequency']),
    };
}

