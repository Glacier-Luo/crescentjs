// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUnstake } from "./types/crescent/farming/v1beta1/tx";
import { MsgCreateFixedAmountPlan } from "./types/crescent/farming/v1beta1/tx";
import { MsgAdvanceEpoch } from "./types/crescent/farming/v1beta1/tx";
import { MsgRemovePlan } from "./types/crescent/farming/v1beta1/tx";
import { MsgStake } from "./types/crescent/farming/v1beta1/tx";
import { MsgHarvest } from "./types/crescent/farming/v1beta1/tx";
import { MsgCreateRatioPlan } from "./types/crescent/farming/v1beta1/tx";
const types = [
    ["/crescent.farming.v1beta1.MsgUnstake", MsgUnstake],
    ["/crescent.farming.v1beta1.MsgCreateFixedAmountPlan", MsgCreateFixedAmountPlan],
    ["/crescent.farming.v1beta1.MsgAdvanceEpoch", MsgAdvanceEpoch],
    ["/crescent.farming.v1beta1.MsgRemovePlan", MsgRemovePlan],
    ["/crescent.farming.v1beta1.MsgStake", MsgStake],
    ["/crescent.farming.v1beta1.MsgHarvest", MsgHarvest],
    ["/crescent.farming.v1beta1.MsgCreateRatioPlan", MsgCreateRatioPlan],
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
        msgUnstake: (data) => ({ typeUrl: "/crescent.farming.v1beta1.MsgUnstake", value: MsgUnstake.fromPartial(data) }),
        msgCreateFixedAmountPlan: (data) => ({ typeUrl: "/crescent.farming.v1beta1.MsgCreateFixedAmountPlan", value: MsgCreateFixedAmountPlan.fromPartial(data) }),
        msgAdvanceEpoch: (data) => ({ typeUrl: "/crescent.farming.v1beta1.MsgAdvanceEpoch", value: MsgAdvanceEpoch.fromPartial(data) }),
        msgRemovePlan: (data) => ({ typeUrl: "/crescent.farming.v1beta1.MsgRemovePlan", value: MsgRemovePlan.fromPartial(data) }),
        msgStake: (data) => ({ typeUrl: "/crescent.farming.v1beta1.MsgStake", value: MsgStake.fromPartial(data) }),
        msgHarvest: (data) => ({ typeUrl: "/crescent.farming.v1beta1.MsgHarvest", value: MsgHarvest.fromPartial(data) }),
        msgCreateRatioPlan: (data) => ({ typeUrl: "/crescent.farming.v1beta1.MsgCreateRatioPlan", value: MsgCreateRatioPlan.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
