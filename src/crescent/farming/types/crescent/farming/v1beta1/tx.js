/* eslint-disable */
import _m0 from 'protobufjs/minimal.js'

const util = _m0.util
const configure = _m0.configure
const Writer = _m0.Writer
const Reader = _m0.Reader

import { Timestamp } from '../../../google/protobuf/timestamp.js'
import * as Long from 'long'
import { DecCoin, Coin } from '../../../cosmos/base/v1beta1/coin.js'
export const protobufPackage = 'crescent.farming.v1beta1'
const baseMsgCreateFixedAmountPlan = { name: '', creator: '' }
export const MsgCreateFixedAmountPlan = {
  encode (message, writer = Writer.create()) {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.creator !== '') {
      writer.uint32(18).string(message.creator)
    }
    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v, writer.uint32(26).fork()).ldelim()
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork()
      ).ldelim()
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(42).fork()
      ).ldelim()
    }
    for (const v of message.epochAmount) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateFixedAmountPlan
    }
    message.stakingCoinWeights = []
    message.epochAmount = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.creator = reader.string()
          break
        case 3:
          message.stakingCoinWeights.push(
            DecCoin.decode(reader, reader.uint32())
          )
          break
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 5:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 6:
          message.epochAmount.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = {
      ...baseMsgCreateFixedAmountPlan
    }
    message.stakingCoinWeights = []
    message.epochAmount = []
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (
      object.stakingCoinWeights !== undefined &&
      object.stakingCoinWeights !== null
    ) {
      for (const e of object.stakingCoinWeights) {
        message.stakingCoinWeights.push(DecCoin.fromJSON(e))
      }
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = fromJsonTimestamp(object.startTime)
    } else {
      message.startTime = undefined
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = fromJsonTimestamp(object.endTime)
    } else {
      message.endTime = undefined
    }
    if (object.epochAmount !== undefined && object.epochAmount !== null) {
      for (const e of object.epochAmount) {
        message.epochAmount.push(Coin.fromJSON(e))
      }
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.name !== undefined && (obj.name = message.name)
    message.creator !== undefined && (obj.creator = message.creator)
    if (message.stakingCoinWeights) {
      obj.stakingCoinWeights = message.stakingCoinWeights.map(e =>
        e ? DecCoin.toJSON(e) : undefined
      )
    } else {
      obj.stakingCoinWeights = []
    }
    message.startTime !== undefined &&
      (obj.startTime =
        message.startTime !== undefined
          ? message.startTime.toISOString()
          : null)
    message.endTime !== undefined &&
      (obj.endTime =
        message.endTime !== undefined ? message.endTime.toISOString() : null)
    if (message.epochAmount) {
      obj.epochAmount = message.epochAmount.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.epochAmount = []
    }
    return obj
  },
  fromPartial (object) {
    const message = {
      ...baseMsgCreateFixedAmountPlan
    }
    message.stakingCoinWeights = []
    message.epochAmount = []
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (
      object.stakingCoinWeights !== undefined &&
      object.stakingCoinWeights !== null
    ) {
      for (const e of object.stakingCoinWeights) {
        message.stakingCoinWeights.push(DecCoin.fromPartial(e))
      }
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime
    } else {
      message.startTime = undefined
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime
    } else {
      message.endTime = undefined
    }
    if (object.epochAmount !== undefined && object.epochAmount !== null) {
      for (const e of object.epochAmount) {
        message.epochAmount.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}
const baseMsgCreateFixedAmountPlanResponse = {}
export const MsgCreateFixedAmountPlanResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateFixedAmountPlanResponse
    }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (_) {
    const message = {
      ...baseMsgCreateFixedAmountPlanResponse
    }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = {
      ...baseMsgCreateFixedAmountPlanResponse
    }
    return message
  }
}
const baseMsgCreateRatioPlan = {
  name: '',
  creator: '',
  epochRatio: ''
}
export const MsgCreateRatioPlan = {
  encode (message, writer = Writer.create()) {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.creator !== '') {
      writer.uint32(18).string(message.creator)
    }
    for (const v of message.stakingCoinWeights) {
      DecCoin.encode(v, writer.uint32(26).fork()).ldelim()
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(34).fork()
      ).ldelim()
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(42).fork()
      ).ldelim()
    }
    if (message.epochRatio !== '') {
      writer.uint32(50).string(message.epochRatio)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateRatioPlan }
    message.stakingCoinWeights = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.creator = reader.string()
          break
        case 3:
          message.stakingCoinWeights.push(
            DecCoin.decode(reader, reader.uint32())
          )
          break
        case 4:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 5:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 6:
          message.epochRatio = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgCreateRatioPlan }
    message.stakingCoinWeights = []
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (
      object.stakingCoinWeights !== undefined &&
      object.stakingCoinWeights !== null
    ) {
      for (const e of object.stakingCoinWeights) {
        message.stakingCoinWeights.push(DecCoin.fromJSON(e))
      }
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = fromJsonTimestamp(object.startTime)
    } else {
      message.startTime = undefined
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = fromJsonTimestamp(object.endTime)
    } else {
      message.endTime = undefined
    }
    if (object.epochRatio !== undefined && object.epochRatio !== null) {
      message.epochRatio = String(object.epochRatio)
    } else {
      message.epochRatio = ''
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.name !== undefined && (obj.name = message.name)
    message.creator !== undefined && (obj.creator = message.creator)
    if (message.stakingCoinWeights) {
      obj.stakingCoinWeights = message.stakingCoinWeights.map(e =>
        e ? DecCoin.toJSON(e) : undefined
      )
    } else {
      obj.stakingCoinWeights = []
    }
    message.startTime !== undefined &&
      (obj.startTime =
        message.startTime !== undefined
          ? message.startTime.toISOString()
          : null)
    message.endTime !== undefined &&
      (obj.endTime =
        message.endTime !== undefined ? message.endTime.toISOString() : null)
    message.epochRatio !== undefined && (obj.epochRatio = message.epochRatio)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgCreateRatioPlan }
    message.stakingCoinWeights = []
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (
      object.stakingCoinWeights !== undefined &&
      object.stakingCoinWeights !== null
    ) {
      for (const e of object.stakingCoinWeights) {
        message.stakingCoinWeights.push(DecCoin.fromPartial(e))
      }
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime
    } else {
      message.startTime = undefined
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime
    } else {
      message.endTime = undefined
    }
    if (object.epochRatio !== undefined && object.epochRatio !== null) {
      message.epochRatio = object.epochRatio
    } else {
      message.epochRatio = ''
    }
    return message
  }
}
const baseMsgCreateRatioPlanResponse = {}
export const MsgCreateRatioPlanResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCreateRatioPlanResponse
    }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (_) {
    const message = {
      ...baseMsgCreateRatioPlanResponse
    }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = {
      ...baseMsgCreateRatioPlanResponse
    }
    return message
  }
}
const baseMsgStake = { farmer: '' }
export const MsgStake = {
  encode (message, writer = Writer.create()) {
    if (message.farmer !== '') {
      writer.uint32(10).string(message.farmer)
    }
    for (const v of message.stakingCoins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgStake }
    message.stakingCoins = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string()
          break
        case 2:
          message.stakingCoins.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgStake }
    message.stakingCoins = []
    if (object.farmer !== undefined && object.farmer !== null) {
      message.farmer = String(object.farmer)
    } else {
      message.farmer = ''
    }
    if (object.stakingCoins !== undefined && object.stakingCoins !== null) {
      for (const e of object.stakingCoins) {
        message.stakingCoins.push(Coin.fromJSON(e))
      }
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.farmer !== undefined && (obj.farmer = message.farmer)
    if (message.stakingCoins) {
      obj.stakingCoins = message.stakingCoins.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.stakingCoins = []
    }
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgStake }
    message.stakingCoins = []
    if (object.farmer !== undefined && object.farmer !== null) {
      message.farmer = object.farmer
    } else {
      message.farmer = ''
    }
    if (object.stakingCoins !== undefined && object.stakingCoins !== null) {
      for (const e of object.stakingCoins) {
        message.stakingCoins.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}
const baseMsgStakeResponse = {}
export const MsgStakeResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgStakeResponse }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (_) {
    const message = { ...baseMsgStakeResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgStakeResponse }
    return message
  }
}
const baseMsgUnstake = { farmer: '' }
export const MsgUnstake = {
  encode (message, writer = Writer.create()) {
    if (message.farmer !== '') {
      writer.uint32(10).string(message.farmer)
    }
    for (const v of message.unstakingCoins) {
      Coin.encode(v, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUnstake }
    message.unstakingCoins = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string()
          break
        case 2:
          message.unstakingCoins.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgUnstake }
    message.unstakingCoins = []
    if (object.farmer !== undefined && object.farmer !== null) {
      message.farmer = String(object.farmer)
    } else {
      message.farmer = ''
    }
    if (object.unstakingCoins !== undefined && object.unstakingCoins !== null) {
      for (const e of object.unstakingCoins) {
        message.unstakingCoins.push(Coin.fromJSON(e))
      }
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.farmer !== undefined && (obj.farmer = message.farmer)
    if (message.unstakingCoins) {
      obj.unstakingCoins = message.unstakingCoins.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.unstakingCoins = []
    }
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgUnstake }
    message.unstakingCoins = []
    if (object.farmer !== undefined && object.farmer !== null) {
      message.farmer = object.farmer
    } else {
      message.farmer = ''
    }
    if (object.unstakingCoins !== undefined && object.unstakingCoins !== null) {
      for (const e of object.unstakingCoins) {
        message.unstakingCoins.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}
const baseMsgUnstakeResponse = {}
export const MsgUnstakeResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUnstakeResponse }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (_) {
    const message = { ...baseMsgUnstakeResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgUnstakeResponse }
    return message
  }
}
const baseMsgHarvest = { farmer: '', stakingCoinDenoms: '' }
export const MsgHarvest = {
  encode (message, writer = Writer.create()) {
    if (message.farmer !== '') {
      writer.uint32(10).string(message.farmer)
    }
    for (const v of message.stakingCoinDenoms) {
      writer.uint32(18).string(v)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgHarvest }
    message.stakingCoinDenoms = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.farmer = reader.string()
          break
        case 2:
          message.stakingCoinDenoms.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgHarvest }
    message.stakingCoinDenoms = []
    if (object.farmer !== undefined && object.farmer !== null) {
      message.farmer = String(object.farmer)
    } else {
      message.farmer = ''
    }
    if (
      object.stakingCoinDenoms !== undefined &&
      object.stakingCoinDenoms !== null
    ) {
      for (const e of object.stakingCoinDenoms) {
        message.stakingCoinDenoms.push(String(e))
      }
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.farmer !== undefined && (obj.farmer = message.farmer)
    if (message.stakingCoinDenoms) {
      obj.stakingCoinDenoms = message.stakingCoinDenoms.map(e => e)
    } else {
      obj.stakingCoinDenoms = []
    }
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgHarvest }
    message.stakingCoinDenoms = []
    if (object.farmer !== undefined && object.farmer !== null) {
      message.farmer = object.farmer
    } else {
      message.farmer = ''
    }
    if (
      object.stakingCoinDenoms !== undefined &&
      object.stakingCoinDenoms !== null
    ) {
      for (const e of object.stakingCoinDenoms) {
        message.stakingCoinDenoms.push(e)
      }
    }
    return message
  }
}
const baseMsgHarvestResponse = {}
export const MsgHarvestResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgHarvestResponse }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (_) {
    const message = { ...baseMsgHarvestResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgHarvestResponse }
    return message
  }
}
const baseMsgRemovePlan = { creator: '', planId: 0 }
export const MsgRemovePlan = {
  encode (message, writer = Writer.create()) {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.planId !== 0) {
      writer.uint32(16).uint64(message.planId)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRemovePlan }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.planId = longToNumber(reader.uint64())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgRemovePlan }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.planId !== undefined && object.planId !== null) {
      message.planId = Number(object.planId)
    } else {
      message.planId = 0
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.planId !== undefined && (obj.planId = message.planId)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgRemovePlan }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.planId !== undefined && object.planId !== null) {
      message.planId = object.planId
    } else {
      message.planId = 0
    }
    return message
  }
}
const baseMsgRemovePlanResponse = {}
export const MsgRemovePlanResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRemovePlanResponse }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (_) {
    const message = { ...baseMsgRemovePlanResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgRemovePlanResponse }
    return message
  }
}
const baseMsgAdvanceEpoch = { requester: '' }
export const MsgAdvanceEpoch = {
  encode (message, writer = Writer.create()) {
    if (message.requester !== '') {
      writer.uint32(10).string(message.requester)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAdvanceEpoch }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requester = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgAdvanceEpoch }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = String(object.requester)
    } else {
      message.requester = ''
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.requester !== undefined && (obj.requester = message.requester)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgAdvanceEpoch }
    if (object.requester !== undefined && object.requester !== null) {
      message.requester = object.requester
    } else {
      message.requester = ''
    }
    return message
  }
}
const baseMsgAdvanceEpochResponse = {}
export const MsgAdvanceEpochResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgAdvanceEpochResponse
    }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (_) {
    const message = {
      ...baseMsgAdvanceEpochResponse
    }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = {
      ...baseMsgAdvanceEpochResponse
    }
    return message
  }
}
export class MsgClientImpl {
  constructor (rpc) {
    this.rpc = rpc
  }
  CreateFixedAmountPlan (request) {
    const data = MsgCreateFixedAmountPlan.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.farming.v1beta1.Msg',
      'CreateFixedAmountPlan',
      data
    )
    return promise.then(data =>
      MsgCreateFixedAmountPlanResponse.decode(new Reader(data))
    )
  }
  CreateRatioPlan (request) {
    const data = MsgCreateRatioPlan.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.farming.v1beta1.Msg',
      'CreateRatioPlan',
      data
    )
    return promise.then(data =>
      MsgCreateRatioPlanResponse.decode(new Reader(data))
    )
  }
  Stake (request) {
    const data = MsgStake.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.farming.v1beta1.Msg',
      'Stake',
      data
    )
    return promise.then(data => MsgStakeResponse.decode(new Reader(data)))
  }
  Unstake (request) {
    const data = MsgUnstake.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.farming.v1beta1.Msg',
      'Unstake',
      data
    )
    return promise.then(data => MsgUnstakeResponse.decode(new Reader(data)))
  }
  Harvest (request) {
    const data = MsgHarvest.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.farming.v1beta1.Msg',
      'Harvest',
      data
    )
    return promise.then(data => MsgHarvestResponse.decode(new Reader(data)))
  }
  RemovePlan (request) {
    const data = MsgRemovePlan.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.farming.v1beta1.Msg',
      'RemovePlan',
      data
    )
    return promise.then(data => MsgRemovePlanResponse.decode(new Reader(data)))
  }
  AdvanceEpoch (request) {
    const data = MsgAdvanceEpoch.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.farming.v1beta1.Msg',
      'AdvanceEpoch',
      data
    )
    return promise.then(data =>
      MsgAdvanceEpochResponse.decode(new Reader(data))
    )
  }
}
var globalThis = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()
function toTimestamp (date) {
  const seconds = date.getTime() / 1000
  const nanos = (date.getTime() % 1000) * 1000000
  return { seconds, nanos }
}
function fromTimestamp (t) {
  let millis = t.seconds * 1000
  millis += t.nanos / 1000000
  return new Date(millis)
}
function fromJsonTimestamp (o) {
  if (o instanceof Date) {
    return o
  } else if (typeof o === 'string') {
    return new Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}
function longToNumber (long) {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}
// @ts-ignore
if (util.Long !== Long) {
  util.Long = Long
  configure()
}
