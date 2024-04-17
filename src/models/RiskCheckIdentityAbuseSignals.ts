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
import type { RiskCheckStolenIdentity } from './RiskCheckStolenIdentity';
import {
    RiskCheckStolenIdentityFromJSON,
    RiskCheckStolenIdentityFromJSONTyped,
    RiskCheckStolenIdentityToJSON,
} from './RiskCheckStolenIdentity';
import type { RiskCheckSyntheticIdentity } from './RiskCheckSyntheticIdentity';
import {
    RiskCheckSyntheticIdentityFromJSON,
    RiskCheckSyntheticIdentityFromJSONTyped,
    RiskCheckSyntheticIdentityToJSON,
} from './RiskCheckSyntheticIdentity';

/**
 * Result summary object capturing abuse signals related to `identity abuse`, e.g. stolen and synthetic identity fraud. These attributes are only available for US identities and some signals may not be available depending on what information was collected.
 * @export
 * @interface RiskCheckIdentityAbuseSignals
 */
export interface RiskCheckIdentityAbuseSignals {
    [key: string]: any | any;
    /**
     * 
     * @type {RiskCheckSyntheticIdentity}
     * @memberof RiskCheckIdentityAbuseSignals
     */
    synthetic_identity: RiskCheckSyntheticIdentity | null;
    /**
     * 
     * @type {RiskCheckStolenIdentity}
     * @memberof RiskCheckIdentityAbuseSignals
     */
    stolen_identity: RiskCheckStolenIdentity | null;
}

/**
 * Check if a given object implements the RiskCheckIdentityAbuseSignals interface.
 */
export function instanceOfRiskCheckIdentityAbuseSignals(value: object): boolean {
    if (!('synthetic_identity' in value)) return false;
    if (!('stolen_identity' in value)) return false;
    return true;
}

export function RiskCheckIdentityAbuseSignalsFromJSON(json: any): RiskCheckIdentityAbuseSignals {
    return RiskCheckIdentityAbuseSignalsFromJSONTyped(json, false);
}

export function RiskCheckIdentityAbuseSignalsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RiskCheckIdentityAbuseSignals {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'synthetic_identity': RiskCheckSyntheticIdentityFromJSON(json['synthetic_identity']),
        'stolen_identity': RiskCheckStolenIdentityFromJSON(json['stolen_identity']),
    };
}

export function RiskCheckIdentityAbuseSignalsToJSON(value?: RiskCheckIdentityAbuseSignals | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'synthetic_identity': RiskCheckSyntheticIdentityToJSON(value['synthetic_identity']),
        'stolen_identity': RiskCheckStolenIdentityToJSON(value['stolen_identity']),
    };
}
