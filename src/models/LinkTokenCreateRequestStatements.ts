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
 * Specifies options for initializing Link for use with the Statements product.
 * @export
 * @interface LinkTokenCreateRequestStatements
 */
export interface LinkTokenCreateRequestStatements {
    /**
     * The start date for statements, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) “YYYY-MM-DD” format, e.g. "2020-10-30". If no value is provided, this will default to 3 months prior to the current date.
     * @type {Date}
     * @memberof LinkTokenCreateRequestStatements
     */
    start_date?: Date;
    /**
     * The end date for statements, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) “YYYY-MM-DD” format, e.g. "2020-10-30". If no value is provided, this will default to the current date. You can request up to two years of data.
     * @type {Date}
     * @memberof LinkTokenCreateRequestStatements
     */
    end_date?: Date;
}

/**
 * Check if a given object implements the LinkTokenCreateRequestStatements interface.
 */
export function instanceOfLinkTokenCreateRequestStatements(value: object): boolean {
    return true;
}

export function LinkTokenCreateRequestStatementsFromJSON(json: any): LinkTokenCreateRequestStatements {
    return LinkTokenCreateRequestStatementsFromJSONTyped(json, false);
}

export function LinkTokenCreateRequestStatementsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkTokenCreateRequestStatements {
    if (json == null) {
        return json;
    }
    return {
        
        'start_date': json['start_date'] == null ? undefined : (new Date(json['start_date'])),
        'end_date': json['end_date'] == null ? undefined : (new Date(json['end_date'])),
    };
}

export function LinkTokenCreateRequestStatementsToJSON(value?: LinkTokenCreateRequestStatements | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'start_date': value['start_date'] == null ? undefined : ((value['start_date']).toISOString().substring(0,10)),
        'end_date': value['end_date'] == null ? undefined : ((value['end_date']).toISOString().substring(0,10)),
    };
}

