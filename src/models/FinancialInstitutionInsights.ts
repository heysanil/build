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
import type { DetectedAccount } from './DetectedAccount';
import {
    DetectedAccountFromJSON,
    DetectedAccountFromJSONTyped,
    DetectedAccountToJSON,
} from './DetectedAccount';

/**
 * Insights surrounding external financial institution counterparties associated with a user.
 * @export
 * @interface FinancialInstitutionInsights
 */
export interface FinancialInstitutionInsights {
    /**
     * Name of the financial institution counterparty.
     * @type {string}
     * @memberof FinancialInstitutionInsights
     */
    name: string;
    /**
     * A unique, stable, Plaid-generated id that maps to the counterparty.
     * @type {string}
     * @memberof FinancialInstitutionInsights
     */
    entity_id?: string;
    /**
     * The website associated with the counterparty.
     * @type {string}
     * @memberof FinancialInstitutionInsights
     */
    website: string | null;
    /**
     * Associated accounts, detected based on the nature of transfers to/from this institution.
     * @type {Array<DetectedAccount>}
     * @memberof FinancialInstitutionInsights
     */
    detected_accounts: Array<DetectedAccount>;
}

/**
 * Check if a given object implements the FinancialInstitutionInsights interface.
 */
export function instanceOfFinancialInstitutionInsights(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('website' in value)) return false;
    if (!('detected_accounts' in value)) return false;
    return true;
}

export function FinancialInstitutionInsightsFromJSON(json: any): FinancialInstitutionInsights {
    return FinancialInstitutionInsightsFromJSONTyped(json, false);
}

export function FinancialInstitutionInsightsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialInstitutionInsights {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'entity_id': json['entity_id'] == null ? undefined : json['entity_id'],
        'website': json['website'],
        'detected_accounts': ((json['detected_accounts'] as Array<any>).map(DetectedAccountFromJSON)),
    };
}

export function FinancialInstitutionInsightsToJSON(value?: FinancialInstitutionInsights | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'entity_id': value['entity_id'],
        'website': value['website'],
        'detected_accounts': ((value['detected_accounts'] as Array<any>).map(DetectedAccountToJSON)),
    };
}

