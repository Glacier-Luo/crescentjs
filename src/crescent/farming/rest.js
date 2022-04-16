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
 * @title crescent/farming/v1beta1/farming.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * @description Returns the current epoch days
         *
         * @tags Query
         * @name QueryCurrentEpochDays
         * @summary CurrentEpochDays returns current epoch days.
         * @request GET:/crescent/farming/v1beta1/current_epoch_days
         */
        this.queryCurrentEpochDays = (params = {}) => this.request({
            path: `/crescent/farming/v1beta1/current_epoch_days`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * @description Returns all parameters of the farming module.
         *
         * @tags Query
         * @name QueryParams
         * @summary Params returns parameters of the farming module.
         * @request GET:/crescent/farming/v1beta1/params
         */
        this.queryParams = (params = {}) => this.request({
            path: `/crescent/farming/v1beta1/params`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * @description Returns a list of all farming plans with pagination result.
         *
         * @tags Query
         * @name QueryPlans
         * @summary Plans returns all plans.
         * @request GET:/crescent/farming/v1beta1/plans
         */
        this.queryPlans = (query, params = {}) => this.request({
            path: `/crescent/farming/v1beta1/plans`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * @description Returns the farming plan that corresponds to the plan_id.
         *
         * @tags Query
         * @name QueryPlan
         * @summary Plan returns a specific plan.
         * @request GET:/crescent/farming/v1beta1/plans/{planId}
         */
        this.queryPlan = (planId, params = {}) => this.request({
            path: `/crescent/farming/v1beta1/plans/${planId}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * @description Returns all rewards coins that corresponds to the farmer
         *
         * @tags Query
         * @name QueryRewards
         * @summary Rewards returns rewards for a farmer
         * @request GET:/crescent/farming/v1beta1/rewards/{farmer}
         */
        this.queryRewards = (farmer, query, params = {}) => this.request({
            path: `/crescent/farming/v1beta1/rewards/${farmer}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * @description Returns all stakings (staked and queued coins) that corresponds to the farmer
         *
         * @tags Query
         * @name QueryStakings
         * @summary Stakings returns all stakings by a farmer.
         * @request GET:/crescent/farming/v1beta1/stakings/{farmer}
         */
        this.queryStakings = (farmer, query, params = {}) => this.request({
            path: `/crescent/farming/v1beta1/stakings/${farmer}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * @description Returns total stakings that corresponds to the staking_coin_denom
         *
         * @tags Query
         * @name QueryTotalStakings
         * @summary TotalStakings returns total staking amount for a staking coin denom
         * @request GET:/crescent/farming/v1beta1/total_stakings/{stakingCoinDenom}
         */
        this.queryTotalStakings = (stakingCoinDenom, params = {}) => this.request({
            path: `/crescent/farming/v1beta1/total_stakings/${stakingCoinDenom}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
