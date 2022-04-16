// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMarketOrder } from "./types/crescent/liquidity/v1beta1/tx";
import { MsgWithdraw } from "./types/crescent/liquidity/v1beta1/tx";
import { MsgCreatePair } from "./types/crescent/liquidity/v1beta1/tx";
import { MsgCreatePool } from "./types/crescent/liquidity/v1beta1/tx";
import { MsgDeposit } from "./types/crescent/liquidity/v1beta1/tx";
import { MsgCancelOrder } from "./types/crescent/liquidity/v1beta1/tx";
import { MsgCancelAllOrders } from "./types/crescent/liquidity/v1beta1/tx";
import { MsgLimitOrder } from "./types/crescent/liquidity/v1beta1/tx";
const types = [
    ["/crescent.liquidity.v1beta1.MsgMarketOrder", MsgMarketOrder],
    ["/crescent.liquidity.v1beta1.MsgWithdraw", MsgWithdraw],
    ["/crescent.liquidity.v1beta1.MsgCreatePair", MsgCreatePair],
    ["/crescent.liquidity.v1beta1.MsgCreatePool", MsgCreatePool],
    ["/crescent.liquidity.v1beta1.MsgDeposit", MsgDeposit],
    ["/crescent.liquidity.v1beta1.MsgCancelOrder", MsgCancelOrder],
    ["/crescent.liquidity.v1beta1.MsgCancelAllOrders", MsgCancelAllOrders],
    ["/crescent.liquidity.v1beta1.MsgLimitOrder", MsgLimitOrder],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgMarketOrder: (data) => ({ typeUrl: "/crescent.liquidity.v1beta1.MsgMarketOrder", value: MsgMarketOrder.fromPartial(data) }),
        msgWithdraw: (data) => ({ typeUrl: "/crescent.liquidity.v1beta1.MsgWithdraw", value: MsgWithdraw.fromPartial(data) }),
        msgCreatePair: (data) => ({ typeUrl: "/crescent.liquidity.v1beta1.MsgCreatePair", value: MsgCreatePair.fromPartial(data) }),
        msgCreatePool: (data) => ({ typeUrl: "/crescent.liquidity.v1beta1.MsgCreatePool", value: MsgCreatePool.fromPartial(data) }),
        msgDeposit: (data) => ({ typeUrl: "/crescent.liquidity.v1beta1.MsgDeposit", value: MsgDeposit.fromPartial(data) }),
        msgCancelOrder: (data) => ({ typeUrl: "/crescent.liquidity.v1beta1.MsgCancelOrder", value: MsgCancelOrder.fromPartial(data) }),
        msgCancelAllOrders: (data) => ({ typeUrl: "/crescent.liquidity.v1beta1.MsgCancelAllOrders", value: MsgCancelAllOrders.fromPartial(data) }),
        msgLimitOrder: (data) => ({ typeUrl: "/crescent.liquidity.v1beta1.MsgLimitOrder", value: MsgLimitOrder.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
