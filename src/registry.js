import { Registry } from '@cosmjs/proto-signing'
import {
  defaultRegistryTypes as defaultStargateTypes,
} from '@cosmjs/stargate'
import {
  MsgLimitOrder,
  MsgMarketOrder,
  MsgDeposit,
  MsgWithdraw
} from './crescent/liquidity/types/crescent/liquidity/v1beta1/tx.js'
import {
  MsgHarvest,
  MsgStake,
  MsgUnstake
} from './crescent/farming/types/crescent/farming/v1beta1/tx.js'
import {
  MsgLiquidStake,
  MsgLiquidUnstake
} from './crescent/liquidstaking/types/crescent/liquidstaking/v1beta1/tx.js'
import { MsgClaim } from './crescent/claim/types/crescent/claim/v1beta1/tx.js'

export const defaultRegistry = new Registry(defaultStargateTypes)

defaultRegistry.register('/crescent.claim.v1beta1.MsgClaim', MsgClaim)
defaultRegistry.register(
  '/crescent.liquidity.v1beta1.MsgLimitOrder',
  MsgLimitOrder
)
defaultRegistry.register(
  '/crescent.liquidity.v1beta1.MsgMarketOrder',
  MsgMarketOrder
)
defaultRegistry.register('/crescent.liquidity.v1beta1.MsgDeposit', MsgDeposit)
defaultRegistry.register('/crescent.liquidity.v1beta1.MsgWithdraw', MsgWithdraw)

defaultRegistry.register('/crescent.farming.v1beta1.MsgStake', MsgStake)
defaultRegistry.register('/crescent.farming.v1beta1.MsgUnstake', MsgUnstake)
defaultRegistry.register('/crescent.farming.v1beta1.MsgHarvest', MsgHarvest)
defaultRegistry.register(
  '/crescent.liquidstaking.v1beta1.MsgLiquidStake',
  MsgLiquidStake
)
defaultRegistry.register(
  '/crescent.liquidstaking.v1beta1.MsgLiquidUnstake',
  MsgLiquidUnstake
)
