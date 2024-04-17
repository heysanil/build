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


/**
 * The trigger of the sweep
 * 
 * `"manual"` - The sweep is created manually by the customer
 * `"incoming"` - The sweep is created by incoming funds flow (e.g. Incoming Wire)
 * `"balance_threshold"` - The sweep is created by balance threshold setting
 * `"automatic_aggregate"` - The sweep is created by the Plaid automatic aggregation process. These funds did not pass through the Plaid Ledger balance.
 * @export
 */
export const SweepTrigger = {
    Manual: 'manual',
    Incoming: 'incoming',
    BalanceThreshold: 'balance_threshold',
    AutomaticAggregate: 'automatic_aggregate'
} as const;
export type SweepTrigger = typeof SweepTrigger[keyof typeof SweepTrigger];


export function SweepTriggerFromJSON(json: any): SweepTrigger {
    return SweepTriggerFromJSONTyped(json, false);
}

export function SweepTriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): SweepTrigger {
    return json as SweepTrigger;
}

export function SweepTriggerToJSON(value?: SweepTrigger | null): any {
    return value as any;
}
