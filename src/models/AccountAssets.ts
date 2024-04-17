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
import type { AccountSubtype } from './AccountSubtype';
import {
    AccountSubtypeFromJSON,
    AccountSubtypeFromJSONTyped,
    AccountSubtypeToJSON,
} from './AccountSubtype';
import type { AccountType } from './AccountType';
import {
    AccountTypeFromJSON,
    AccountTypeFromJSONTyped,
    AccountTypeToJSON,
} from './AccountType';
import type { AssetReportAccountBalance } from './AssetReportAccountBalance';
import {
    AssetReportAccountBalanceFromJSON,
    AssetReportAccountBalanceFromJSONTyped,
    AssetReportAccountBalanceToJSON,
} from './AssetReportAccountBalance';
import type { AssetReportInvestments } from './AssetReportInvestments';
import {
    AssetReportInvestmentsFromJSON,
    AssetReportInvestmentsFromJSONTyped,
    AssetReportInvestmentsToJSON,
} from './AssetReportInvestments';
import type { AssetReportTransaction } from './AssetReportTransaction';
import {
    AssetReportTransactionFromJSON,
    AssetReportTransactionFromJSONTyped,
    AssetReportTransactionToJSON,
} from './AssetReportTransaction';
import type { HistoricalBalance } from './HistoricalBalance';
import {
    HistoricalBalanceFromJSON,
    HistoricalBalanceFromJSONTyped,
    HistoricalBalanceToJSON,
} from './HistoricalBalance';
import type { Owner } from './Owner';
import {
    OwnerFromJSON,
    OwnerFromJSONTyped,
    OwnerToJSON,
} from './Owner';
import type { OwnershipType } from './OwnershipType';
import {
    OwnershipTypeFromJSON,
    OwnershipTypeFromJSONTyped,
    OwnershipTypeToJSON,
} from './OwnershipType';

/**
 * Asset information about an account
 * @export
 * @interface AccountAssets
 */
export interface AccountAssets {
    [key: string]: any | any;
    /**
     * Plaid’s unique identifier for the account. This value will not change unless Plaid can't reconcile the account with the data returned by the financial institution. This may occur, for example, when the name of the account changes. If this happens a new `account_id` will be assigned to the account.
     * 
     * The `account_id` can also change if the `access_token` is deleted and the same credentials that were used to generate that `access_token` are used to generate a new `access_token` on a later date. In that case, the new `account_id` will be different from the old `account_id`.
     * 
     * If an account with a specific `account_id` disappears instead of changing, the account is likely closed. Closed accounts are not returned by the Plaid API.
     * 
     * Like all Plaid identifiers, the `account_id` is case sensitive.
     * @type {string}
     * @memberof AccountAssets
     */
    account_id: string;
    /**
     * 
     * @type {AssetReportAccountBalance}
     * @memberof AccountAssets
     */
    balances: AssetReportAccountBalance;
    /**
     * The last 2-4 alphanumeric characters of an account's official account number. Note that the mask may be non-unique between an Item's accounts, and it may also not match the mask that the bank displays to the user.
     * @type {string}
     * @memberof AccountAssets
     */
    mask: string | null;
    /**
     * The name of the account, either assigned by the user or by the financial institution itself
     * @type {string}
     * @memberof AccountAssets
     */
    name: string;
    /**
     * The official name of the account as given by the financial institution
     * @type {string}
     * @memberof AccountAssets
     */
    official_name: string | null;
    /**
     * 
     * @type {AccountType}
     * @memberof AccountAssets
     */
    type: AccountType;
    /**
     * 
     * @type {AccountSubtype}
     * @memberof AccountAssets
     */
    subtype: AccountSubtype | null;
    /**
     * The current verification status of an Auth Item initiated through Automated or Manual micro-deposits.  Returned for Auth Items only.
     * 
     * `pending_automatic_verification`: The Item is pending automatic verification
     * 
     * `pending_manual_verification`: The Item is pending manual micro-deposit verification. Items remain in this state until the user successfully verifies the micro-deposit.
     * 
     * `automatically_verified`: The Item has successfully been automatically verified	
     * 
     * `manually_verified`: The Item has successfully been manually verified
     * 
     * `verification_expired`: Plaid was unable to automatically verify the deposit within 7 calendar days and will no longer attempt to validate the Item. Users may retry by submitting their information again through Link.
     * 
     * `verification_failed`: The Item failed manual micro-deposit verification because the user exhausted all 3 verification attempts. Users may retry by submitting their information again through Link.
     * 
     * `database_matched`: The Item has successfully been verified using Plaid's data sources. Note: Database Match is currently a beta feature, please contact your account manager for more information.	
     * 	
     * @type {string}
     * @memberof AccountAssets
     */
    verification_status?: AccountAssetsVerificationStatusEnum;
    /**
     * A unique and persistent identifier for accounts that can be used to trace multiple instances of the same account across different Items for depository accounts. This is currently an opt-in field and only supported for Chase Items.
     * @type {string}
     * @memberof AccountAssets
     */
    persistent_account_id?: string;
    /**
     * The duration of transaction history available for this Item, typically defined as the time since the date of the earliest transaction in that account.
     * @type {number}
     * @memberof AccountAssets
     */
    days_available: number;
    /**
     * Transaction history associated with the account.
     * @type {Array<AssetReportTransaction>}
     * @memberof AccountAssets
     */
    transactions: Array<AssetReportTransaction>;
    /**
     * 
     * @type {AssetReportInvestments}
     * @memberof AccountAssets
     */
    investments?: AssetReportInvestments;
    /**
     * Data returned by the financial institution about the account owner or owners.For business accounts, the name reported may be either the name of the individual or the name of the business, depending on the institution. Multiple owners on a single account will be represented in the same `owner` object, not in multiple owner objects within the array. In API versions 2018-05-22 and earlier, the `owners` object is not returned, and instead identity information is returned in the top level `identity` object. For more details, see [Plaid API versioning](https://plaid.com/docs/api/versioning/#version-2019-05-29)
     * @type {Array<Owner>}
     * @memberof AccountAssets
     */
    owners: Array<Owner>;
    /**
     * 
     * @type {OwnershipType}
     * @memberof AccountAssets
     */
    ownership_type?: OwnershipType;
    /**
     * Calculated data about the historical balances on the account.
     * @type {Array<HistoricalBalance>}
     * @memberof AccountAssets
     */
    historical_balances: Array<HistoricalBalance>;
}


/**
 * @export
 */
export const AccountAssetsVerificationStatusEnum = {
    AutomaticallyVerified: 'automatically_verified',
    PendingAutomaticVerification: 'pending_automatic_verification',
    PendingManualVerification: 'pending_manual_verification',
    ManuallyVerified: 'manually_verified',
    VerificationExpired: 'verification_expired',
    VerificationFailed: 'verification_failed',
    DatabaseMatched: 'database_matched'
} as const;
export type AccountAssetsVerificationStatusEnum = typeof AccountAssetsVerificationStatusEnum[keyof typeof AccountAssetsVerificationStatusEnum];


/**
 * Check if a given object implements the AccountAssets interface.
 */
export function instanceOfAccountAssets(value: object): boolean {
    if (!('account_id' in value)) return false;
    if (!('balances' in value)) return false;
    if (!('mask' in value)) return false;
    if (!('name' in value)) return false;
    if (!('official_name' in value)) return false;
    if (!('type' in value)) return false;
    if (!('subtype' in value)) return false;
    if (!('days_available' in value)) return false;
    if (!('transactions' in value)) return false;
    if (!('owners' in value)) return false;
    if (!('historical_balances' in value)) return false;
    return true;
}

export function AccountAssetsFromJSON(json: any): AccountAssets {
    return AccountAssetsFromJSONTyped(json, false);
}

export function AccountAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountAssets {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'account_id': json['account_id'],
        'balances': AssetReportAccountBalanceFromJSON(json['balances']),
        'mask': json['mask'],
        'name': json['name'],
        'official_name': json['official_name'],
        'type': AccountTypeFromJSON(json['type']),
        'subtype': AccountSubtypeFromJSON(json['subtype']),
        'verification_status': json['verification_status'] == null ? undefined : json['verification_status'],
        'persistent_account_id': json['persistent_account_id'] == null ? undefined : json['persistent_account_id'],
        'days_available': json['days_available'],
        'transactions': ((json['transactions'] as Array<any>).map(AssetReportTransactionFromJSON)),
        'investments': json['investments'] == null ? undefined : AssetReportInvestmentsFromJSON(json['investments']),
        'owners': ((json['owners'] as Array<any>).map(OwnerFromJSON)),
        'ownership_type': json['ownership_type'] == null ? undefined : OwnershipTypeFromJSON(json['ownership_type']),
        'historical_balances': ((json['historical_balances'] as Array<any>).map(HistoricalBalanceFromJSON)),
    };
}

export function AccountAssetsToJSON(value?: AccountAssets | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'account_id': value['account_id'],
        'balances': AssetReportAccountBalanceToJSON(value['balances']),
        'mask': value['mask'],
        'name': value['name'],
        'official_name': value['official_name'],
        'type': AccountTypeToJSON(value['type']),
        'subtype': AccountSubtypeToJSON(value['subtype']),
        'verification_status': value['verification_status'],
        'persistent_account_id': value['persistent_account_id'],
        'days_available': value['days_available'],
        'transactions': ((value['transactions'] as Array<any>).map(AssetReportTransactionToJSON)),
        'investments': AssetReportInvestmentsToJSON(value['investments']),
        'owners': ((value['owners'] as Array<any>).map(OwnerToJSON)),
        'ownership_type': OwnershipTypeToJSON(value['ownership_type']),
        'historical_balances': ((value['historical_balances'] as Array<any>).map(HistoricalBalanceToJSON)),
    };
}
