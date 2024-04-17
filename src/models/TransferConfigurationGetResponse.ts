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
/**
 * Defines the response schema for `/transfer/configuration/get`
 * @export
 * @interface TransferConfigurationGetResponse
 */
export interface TransferConfigurationGetResponse {
    [key: string]: any | any;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     */
    request_id: string;
    /**
     * The max limit of dollar amount of a single transfer (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     * @deprecated
     */
    max_single_transfer_amount: string;
    /**
     * The max limit of dollar amount of a single credit transfer (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     */
    max_single_transfer_credit_amount: string;
    /**
     * The max limit of dollar amount of a single debit transfer (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     */
    max_single_transfer_debit_amount: string;
    /**
     * The max limit of sum of dollar amount of credit transfers in last 24 hours (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     */
    max_daily_credit_amount: string;
    /**
     * The max limit of sum of dollar amount of debit transfers in last 24 hours (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     */
    max_daily_debit_amount: string;
    /**
     * The max limit of sum of dollar amount of credit and debit transfers in one calendar month (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     * @deprecated
     */
    max_monthly_amount: string;
    /**
     * The max limit of sum of dollar amount of credit transfers in one calendar month (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     */
    max_monthly_credit_amount: string;
    /**
     * The max limit of sum of dollar amount of debit transfers in one calendar month (decimal string with two digits of precision e.g. "10.00").
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     */
    max_monthly_debit_amount: string;
    /**
     * The currency of the dollar amount, e.g. "USD".
     * @type {string}
     * @memberof TransferConfigurationGetResponse
     */
    iso_currency_code: string;
}

/**
 * Check if a given object implements the TransferConfigurationGetResponse interface.
 */
export function instanceOfTransferConfigurationGetResponse(value: object): boolean {
    if (!('request_id' in value)) return false;
    if (!('max_single_transfer_amount' in value)) return false;
    if (!('max_single_transfer_credit_amount' in value)) return false;
    if (!('max_single_transfer_debit_amount' in value)) return false;
    if (!('max_daily_credit_amount' in value)) return false;
    if (!('max_daily_debit_amount' in value)) return false;
    if (!('max_monthly_amount' in value)) return false;
    if (!('max_monthly_credit_amount' in value)) return false;
    if (!('max_monthly_debit_amount' in value)) return false;
    if (!('iso_currency_code' in value)) return false;
    return true;
}

export function TransferConfigurationGetResponseFromJSON(json: any): TransferConfigurationGetResponse {
    return TransferConfigurationGetResponseFromJSONTyped(json, false);
}

export function TransferConfigurationGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferConfigurationGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'request_id': json['request_id'],
        'max_single_transfer_amount': json['max_single_transfer_amount'],
        'max_single_transfer_credit_amount': json['max_single_transfer_credit_amount'],
        'max_single_transfer_debit_amount': json['max_single_transfer_debit_amount'],
        'max_daily_credit_amount': json['max_daily_credit_amount'],
        'max_daily_debit_amount': json['max_daily_debit_amount'],
        'max_monthly_amount': json['max_monthly_amount'],
        'max_monthly_credit_amount': json['max_monthly_credit_amount'],
        'max_monthly_debit_amount': json['max_monthly_debit_amount'],
        'iso_currency_code': json['iso_currency_code'],
    };
}

export function TransferConfigurationGetResponseToJSON(value?: TransferConfigurationGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'request_id': value['request_id'],
        'max_single_transfer_amount': value['max_single_transfer_amount'],
        'max_single_transfer_credit_amount': value['max_single_transfer_credit_amount'],
        'max_single_transfer_debit_amount': value['max_single_transfer_debit_amount'],
        'max_daily_credit_amount': value['max_daily_credit_amount'],
        'max_daily_debit_amount': value['max_daily_debit_amount'],
        'max_monthly_amount': value['max_monthly_amount'],
        'max_monthly_credit_amount': value['max_monthly_credit_amount'],
        'max_monthly_debit_amount': value['max_monthly_debit_amount'],
        'iso_currency_code': value['iso_currency_code'],
    };
}

