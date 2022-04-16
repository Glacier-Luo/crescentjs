/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
/**
* OrderDirection enumerates order directions.

 - ORDER_DIRECTION_UNSPECIFIED: ORDER_DIRECTION_UNSPECIFIED specifies unknown order direction
 - ORDER_DIRECTION_BUY: ORDER_DIRECTION_BUY specifies buy(swap quote coin to base coin) order direction
 - ORDER_DIRECTION_SELL: ORDER_DIRECTION_SELL specifies sell(swap base coin to quote coin) order direction
*/
export var V1Beta1OrderDirection;
(function (V1Beta1OrderDirection) {
    V1Beta1OrderDirection["ORDER_DIRECTION_UNSPECIFIED"] = "ORDER_DIRECTION_UNSPECIFIED";
    V1Beta1OrderDirection["ORDER_DIRECTION_BUY"] = "ORDER_DIRECTION_BUY";
    V1Beta1OrderDirection["ORDER_DIRECTION_SELL"] = "ORDER_DIRECTION_SELL";
})(V1Beta1OrderDirection || (V1Beta1OrderDirection = {}));
/**
* OrderStatus enumerates order statuses.

 - ORDER_STATUS_UNSPECIFIED: ORDER_STATUS_UNSPECIFIED specifies unknown order status
 - ORDER_STATUS_NOT_EXECUTED: ORDER_STATUS_NOT_EXECUTED indicates the order has not been executed yet
 - ORDER_STATUS_NOT_MATCHED: ORDER_STATUS_NOT_MATCHED indicates the order has been executed but has no match
 - ORDER_STATUS_PARTIALLY_MATCHED: ORDER_STATUS_PARTIALLY_MATCHED indicates the order has been partially matched
 - ORDER_STATUS_COMPLETED: ORDER_STATUS_COMPLETED indicates the order has been fully matched and completed
 - ORDER_STATUS_CANCELED: ORDER_STATUS_CANCELED indicates the order has been canceled
 - ORDER_STATUS_EXPIRED: ORDER_STATUS_EXPIRED indicates the order has been expired
*/
export var V1Beta1OrderStatus;
(function (V1Beta1OrderStatus) {
    V1Beta1OrderStatus["ORDER_STATUS_UNSPECIFIED"] = "ORDER_STATUS_UNSPECIFIED";
    V1Beta1OrderStatus["ORDER_STATUS_NOT_EXECUTED"] = "ORDER_STATUS_NOT_EXECUTED";
    V1Beta1OrderStatus["ORDER_STATUS_NOT_MATCHED"] = "ORDER_STATUS_NOT_MATCHED";
    V1Beta1OrderStatus["ORDER_STATUS_PARTIALLY_MATCHED"] = "ORDER_STATUS_PARTIALLY_MATCHED";
    V1Beta1OrderStatus["ORDER_STATUS_COMPLETED"] = "ORDER_STATUS_COMPLETED";
    V1Beta1OrderStatus["ORDER_STATUS_CANCELED"] = "ORDER_STATUS_CANCELED";
    V1Beta1OrderStatus["ORDER_STATUS_EXPIRED"] = "ORDER_STATUS_EXPIRED";
})(V1Beta1OrderStatus || (V1Beta1OrderStatus = {}));
/**
* RequestStatus enumerates request statuses.

 - REQUEST_STATUS_UNSPECIFIED: REQUEST_STATUS_UNSPECIFIED specifies unknown request status
 - REQUEST_STATUS_NOT_EXECUTED: REQUEST_STATUS_NOT_EXECUTED indicates the request is not executed yet
 - REQUEST_STATUS_SUCCEEDED: REQUEST_STATUS_SUCCEEDED indicates the request has been succeeded
 - REQUEST_STATUS_FAILED: REQUEST_STATUS_FAILED indicates the request is failed
*/
export var V1Beta1RequestStatus;
(function (V1Beta1RequestStatus) {
    V1Beta1RequestStatus["REQUEST_STATUS_UNSPECIFIED"] = "REQUEST_STATUS_UNSPECIFIED";
    V1Beta1RequestStatus["REQUEST_STATUS_NOT_EXECUTED"] = "REQUEST_STATUS_NOT_EXECUTED";
    V1Beta1RequestStatus["REQUEST_STATUS_SUCCEEDED"] = "REQUEST_STATUS_SUCCEEDED";
    V1Beta1RequestStatus["REQUEST_STATUS_FAILED"] = "REQUEST_STATUS_FAILED";
})(V1Beta1RequestStatus || (V1Beta1RequestStatus = {}));
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
            if (this.abortControllers.has(cancelToken)) {
                const abortController = this.abortControllers.get(cancelToken);
                if (abortController) {
                    return abortController.signal;
                }
                return void 0;
            }
            const abortController = new AbortController();
            this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
            const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
                ...requestParams,
                headers: {
                    ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
                    ...(requestParams.headers || {}),
                },
                signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
                body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
            }).then(async (response) => {
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
                if (cancelToken) {
                    this.abortControllers.delete(cancelToken);
                }
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
}
/**
 * @title crescent/liquidity/v1beta1/genesis.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryOrdersByOrderer
         * @summary OrdersByOrderer returns orders made by an orderer.
         * @request GET:/crescent/liquidity/v1beta1/orders/{orderer}
         */
        this.queryOrdersByOrderer = (orderer, query, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/orders/${orderer}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPairs
         * @summary Pairs returns all liquidity pairs.
         * @request GET:/crescent/liquidity/v1beta1/pairs
         */
        this.queryPairs = (query, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pairs`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPair
         * @summary Pair returns the specific pair.
         * @request GET:/crescent/liquidity/v1beta1/pairs/{pairId}
         */
        this.queryPair = (pairId, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pairs/${pairId}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryOrders
         * @summary Orders returns all orders within the pair.
         * @request GET:/crescent/liquidity/v1beta1/pairs/{pairId}/orders
         */
        this.queryOrders = (pairId, query, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pairs/${pairId}/orders`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryOrder
         * @summary Order returns the specific order.
         * @request GET:/crescent/liquidity/v1beta1/pairs/{pairId}/orders/{id}
         */
        this.queryOrder = (pairId, id, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pairs/${pairId}/orders/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryParams
         * @summary Params returns parameters of the module.
         * @request GET:/crescent/liquidity/v1beta1/params
         */
        this.queryParams = (params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/params`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPools
         * @summary Pools returns all liquidity pools.
         * @request GET:/crescent/liquidity/v1beta1/pools
         */
        this.queryPools = (query, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pools`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPoolByPoolCoinDenom
         * @summary PoolByPoolCoinDenom returns all pools that correspond to the pool coin denom.
         * @request GET:/crescent/liquidity/v1beta1/pools/pool_coin_denom/{poolCoinDenom}
         */
        this.queryPoolByPoolCoinDenom = (poolCoinDenom, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pools/pool_coin_denom/${poolCoinDenom}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPoolByReserveAddress
         * @summary PoolByReserveAddress returns all pools that correspond to the reserve account.
         * @request GET:/crescent/liquidity/v1beta1/pools/reserve_address/{reserveAddress}
         */
        this.queryPoolByReserveAddress = (reserveAddress, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pools/reserve_address/${reserveAddress}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool
         * @summary Pool returns the specific liquidity pool.
         * @request GET:/crescent/liquidity/v1beta1/pools/{poolId}
         */
        this.queryPool = (poolId, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pools/${poolId}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryDepositRequests
         * @summary DepositRequests returns all deposit requests.
         * @request GET:/crescent/liquidity/v1beta1/pools/{poolId}/deposit_requests
         */
        this.queryDepositRequests = (poolId, query, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pools/${poolId}/deposit_requests`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryDepositRequest
         * @summary DepositRequest returns the specific deposit request.
         * @request GET:/crescent/liquidity/v1beta1/pools/{poolId}/deposit_requests/{id}
         */
        this.queryDepositRequest = (poolId, id, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pools/${poolId}/deposit_requests/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryWithdrawRequests
         * @summary WithdrawRequests returns all withdraw requests.
         * @request GET:/crescent/liquidity/v1beta1/pools/{poolId}/withdraw_requests
         */
        this.queryWithdrawRequests = (poolId, query, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pools/${poolId}/withdraw_requests`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryWithdrawRequest
         * @summary WithdrawRequest returns the specific withdraw request.
         * @request GET:/crescent/liquidity/v1beta1/pools/{poolId}/withdraw_requests/{id}
         */
        this.queryWithdrawRequest = (poolId, id, params = {}) => this.request({
            path: `/crescent/liquidity/v1beta1/pools/${poolId}/withdraw_requests/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
