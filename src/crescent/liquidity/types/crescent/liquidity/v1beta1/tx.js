/* eslint-disable */
import {
  orderDirectionFromJSON,
  orderDirectionToJSON
} from '../../../crescent/liquidity/v1beta1/liquidity.js'
import _m0 from 'protobufjs/minimal.js'

const util = _m0.util
const configure = _m0.configure
const Writer = _m0.Writer
const Reader = _m0.Reader

import * as Long from 'long'
import { Coin } from '../../../cosmos/base/v1beta1/coin.js'
import { Duration } from '../../../google/protobuf/duration.js'
export const protobufPackage = 'crescent.liquidity.v1beta1'
const baseMsgCreatePair = {
  creator: '',
  baseCoinDenom: '',
  quoteCoinDenom: ''
}
export const MsgCreatePair = {
  encode (message, writer = Writer.create()) {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.baseCoinDenom !== '') {
      writer.uint32(18).string(message.baseCoinDenom)
    }
    if (message.quoteCoinDenom !== '') {
      writer.uint32(26).string(message.quoteCoinDenom)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePair }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.baseCoinDenom = reader.string()
          break
        case 3:
          message.quoteCoinDenom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgCreatePair }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.baseCoinDenom !== undefined && object.baseCoinDenom !== null) {
      message.baseCoinDenom = String(object.baseCoinDenom)
    } else {
      message.baseCoinDenom = ''
    }
    if (object.quoteCoinDenom !== undefined && object.quoteCoinDenom !== null) {
      message.quoteCoinDenom = String(object.quoteCoinDenom)
    } else {
      message.quoteCoinDenom = ''
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.baseCoinDenom !== undefined &&
      (obj.baseCoinDenom = message.baseCoinDenom)
    message.quoteCoinDenom !== undefined &&
      (obj.quoteCoinDenom = message.quoteCoinDenom)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgCreatePair }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.baseCoinDenom !== undefined && object.baseCoinDenom !== null) {
      message.baseCoinDenom = object.baseCoinDenom
    } else {
      message.baseCoinDenom = ''
    }
    if (object.quoteCoinDenom !== undefined && object.quoteCoinDenom !== null) {
      message.quoteCoinDenom = object.quoteCoinDenom
    } else {
      message.quoteCoinDenom = ''
    }
    return message
  }
}
const baseMsgCreatePairResponse = {}
export const MsgCreatePairResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePairResponse }
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
    const message = { ...baseMsgCreatePairResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgCreatePairResponse }
    return message
  }
}
const baseMsgCreatePool = { creator: '', pairId: 0 }
export const MsgCreatePool = {
  encode (message, writer = Writer.create()) {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pairId !== 0) {
      writer.uint32(16).uint64(message.pairId)
    }
    for (const v of message.depositCoins) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePool }
    message.depositCoins = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.pairId = longToNumber(reader.uint64())
          break
        case 3:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgCreatePool }
    message.depositCoins = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = Number(object.pairId)
    } else {
      message.pairId = 0
    }
    if (object.depositCoins !== undefined && object.depositCoins !== null) {
      for (const e of object.depositCoins) {
        message.depositCoins.push(Coin.fromJSON(e))
      }
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pairId !== undefined && (obj.pairId = message.pairId)
    if (message.depositCoins) {
      obj.depositCoins = message.depositCoins.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.depositCoins = []
    }
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgCreatePool }
    message.depositCoins = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = object.pairId
    } else {
      message.pairId = 0
    }
    if (object.depositCoins !== undefined && object.depositCoins !== null) {
      for (const e of object.depositCoins) {
        message.depositCoins.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}
const baseMsgCreatePoolResponse = {}
export const MsgCreatePoolResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePoolResponse }
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
    const message = { ...baseMsgCreatePoolResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgCreatePoolResponse }
    return message
  }
}
const baseMsgDeposit = { depositor: '', poolId: 0 }
export const MsgDeposit = {
  encode (message, writer = Writer.create()) {
    if (message.depositor !== '') {
      writer.uint32(10).string(message.depositor)
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId)
    }
    for (const v of message.depositCoins) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeposit }
    message.depositCoins = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.depositor = reader.string()
          break
        case 2:
          message.poolId = longToNumber(reader.uint64())
          break
        case 3:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgDeposit }
    message.depositCoins = []
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor)
    } else {
      message.depositor = ''
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId)
    } else {
      message.poolId = 0
    }
    if (object.depositCoins !== undefined && object.depositCoins !== null) {
      for (const e of object.depositCoins) {
        message.depositCoins.push(Coin.fromJSON(e))
      }
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.depositor !== undefined && (obj.depositor = message.depositor)
    message.poolId !== undefined && (obj.poolId = message.poolId)
    if (message.depositCoins) {
      obj.depositCoins = message.depositCoins.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.depositCoins = []
    }
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgDeposit }
    message.depositCoins = []
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor
    } else {
      message.depositor = ''
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId
    } else {
      message.poolId = 0
    }
    if (object.depositCoins !== undefined && object.depositCoins !== null) {
      for (const e of object.depositCoins) {
        message.depositCoins.push(Coin.fromPartial(e))
      }
    }
    return message
  }
}
const baseMsgDepositResponse = {}
export const MsgDepositResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDepositResponse }
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
    const message = { ...baseMsgDepositResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgDepositResponse }
    return message
  }
}
const baseMsgWithdraw = { withdrawer: '', poolId: 0 }
export const MsgWithdraw = {
  encode (message, writer = Writer.create()) {
    if (message.withdrawer !== '') {
      writer.uint32(10).string(message.withdrawer)
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId)
    }
    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgWithdraw }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.withdrawer = reader.string()
          break
        case 2:
          message.poolId = longToNumber(reader.uint64())
          break
        case 3:
          message.poolCoin = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgWithdraw }
    if (object.withdrawer !== undefined && object.withdrawer !== null) {
      message.withdrawer = String(object.withdrawer)
    } else {
      message.withdrawer = ''
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId)
    } else {
      message.poolId = 0
    }
    if (object.poolCoin !== undefined && object.poolCoin !== null) {
      message.poolCoin = Coin.fromJSON(object.poolCoin)
    } else {
      message.poolCoin = undefined
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer)
    message.poolId !== undefined && (obj.poolId = message.poolId)
    message.poolCoin !== undefined &&
      (obj.poolCoin = message.poolCoin
        ? Coin.toJSON(message.poolCoin)
        : undefined)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgWithdraw }
    if (object.withdrawer !== undefined && object.withdrawer !== null) {
      message.withdrawer = object.withdrawer
    } else {
      message.withdrawer = ''
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId
    } else {
      message.poolId = 0
    }
    if (object.poolCoin !== undefined && object.poolCoin !== null) {
      message.poolCoin = Coin.fromPartial(object.poolCoin)
    } else {
      message.poolCoin = undefined
    }
    return message
  }
}
const baseMsgWithdrawResponse = {}
export const MsgWithdrawResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgWithdrawResponse }
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
    const message = { ...baseMsgWithdrawResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgWithdrawResponse }
    return message
  }
}
const baseMsgLimitOrder = {
  orderer: '',
  pairId: 0,
  direction: 0,
  demandCoinDenom: '',
  price: '',
  amount: ''
}
export const MsgLimitOrder = {
  encode (message, writer = Writer.create()) {
    if (message.orderer !== '') {
      writer.uint32(10).string(message.orderer)
    }
    if (message.pairId !== 0) {
      writer.uint32(16).uint64(message.pairId)
    }
    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction)
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim()
    }
    if (message.demandCoinDenom !== '') {
      writer.uint32(42).string(message.demandCoinDenom)
    }
    if (message.price !== '') {
      writer.uint32(50).string(message.price)
    }
    if (message.amount !== '') {
      writer.uint32(58).string(message.amount)
    }
    if (message.orderLifespan !== undefined) {
      Duration.encode(message.orderLifespan, writer.uint32(66).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgLimitOrder }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string()
          break
        case 2:
          message.pairId = longToNumber(reader.uint64())
          break
        case 3:
          message.direction = reader.int32()
          break
        case 4:
          message.offerCoin = Coin.decode(reader, reader.uint32())
          break
        case 5:
          message.demandCoinDenom = reader.string()
          break
        case 6:
          message.price = reader.string()
          break
        case 7:
          message.amount = reader.string()
          break
        case 8:
          message.orderLifespan = Duration.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgLimitOrder }
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = String(object.orderer)
    } else {
      message.orderer = ''
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = Number(object.pairId)
    } else {
      message.pairId = 0
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = orderDirectionFromJSON(object.direction)
    } else {
      message.direction = 0
    }
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = Coin.fromJSON(object.offerCoin)
    } else {
      message.offerCoin = undefined
    }
    if (
      object.demandCoinDenom !== undefined &&
      object.demandCoinDenom !== null
    ) {
      message.demandCoinDenom = String(object.demandCoinDenom)
    } else {
      message.demandCoinDenom = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.orderLifespan !== undefined && object.orderLifespan !== null) {
      message.orderLifespan = Duration.fromJSON(object.orderLifespan)
    } else {
      message.orderLifespan = undefined
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.orderer !== undefined && (obj.orderer = message.orderer)
    message.pairId !== undefined && (obj.pairId = message.pairId)
    message.direction !== undefined &&
      (obj.direction = orderDirectionToJSON(message.direction))
    message.offerCoin !== undefined &&
      (obj.offerCoin = message.offerCoin
        ? Coin.toJSON(message.offerCoin)
        : undefined)
    message.demandCoinDenom !== undefined &&
      (obj.demandCoinDenom = message.demandCoinDenom)
    message.price !== undefined && (obj.price = message.price)
    message.amount !== undefined && (obj.amount = message.amount)
    message.orderLifespan !== undefined &&
      (obj.orderLifespan = message.orderLifespan
        ? Duration.toJSON(message.orderLifespan)
        : undefined)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgLimitOrder }
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = object.orderer
    } else {
      message.orderer = ''
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = object.pairId
    } else {
      message.pairId = 0
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = object.direction
    } else {
      message.direction = 0
    }
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = Coin.fromPartial(object.offerCoin)
    } else {
      message.offerCoin = undefined
    }
    if (
      object.demandCoinDenom !== undefined &&
      object.demandCoinDenom !== null
    ) {
      message.demandCoinDenom = object.demandCoinDenom
    } else {
      message.demandCoinDenom = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.orderLifespan !== undefined && object.orderLifespan !== null) {
      message.orderLifespan = Duration.fromPartial(object.orderLifespan)
    } else {
      message.orderLifespan = undefined
    }
    return message
  }
}
const baseMsgLimitOrderResponse = {}
export const MsgLimitOrderResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgLimitOrderResponse }
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
    const message = { ...baseMsgLimitOrderResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgLimitOrderResponse }
    return message
  }
}
const baseMsgMarketOrder = {
  orderer: '',
  pairId: 0,
  direction: 0,
  demandCoinDenom: '',
  amount: ''
}
export const MsgMarketOrder = {
  encode (message, writer = Writer.create()) {
    if (message.orderer !== '') {
      writer.uint32(10).string(message.orderer)
    }
    if (message.pairId !== 0) {
      writer.uint32(16).uint64(message.pairId)
    }
    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction)
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim()
    }
    if (message.demandCoinDenom !== '') {
      writer.uint32(42).string(message.demandCoinDenom)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    if (message.orderLifespan !== undefined) {
      Duration.encode(message.orderLifespan, writer.uint32(58).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMarketOrder }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string()
          break
        case 2:
          message.pairId = longToNumber(reader.uint64())
          break
        case 3:
          message.direction = reader.int32()
          break
        case 4:
          message.offerCoin = Coin.decode(reader, reader.uint32())
          break
        case 5:
          message.demandCoinDenom = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        case 7:
          message.orderLifespan = Duration.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgMarketOrder }
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = String(object.orderer)
    } else {
      message.orderer = ''
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = Number(object.pairId)
    } else {
      message.pairId = 0
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = orderDirectionFromJSON(object.direction)
    } else {
      message.direction = 0
    }
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = Coin.fromJSON(object.offerCoin)
    } else {
      message.offerCoin = undefined
    }
    if (
      object.demandCoinDenom !== undefined &&
      object.demandCoinDenom !== null
    ) {
      message.demandCoinDenom = String(object.demandCoinDenom)
    } else {
      message.demandCoinDenom = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.orderLifespan !== undefined && object.orderLifespan !== null) {
      message.orderLifespan = Duration.fromJSON(object.orderLifespan)
    } else {
      message.orderLifespan = undefined
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.orderer !== undefined && (obj.orderer = message.orderer)
    message.pairId !== undefined && (obj.pairId = message.pairId)
    message.direction !== undefined &&
      (obj.direction = orderDirectionToJSON(message.direction))
    message.offerCoin !== undefined &&
      (obj.offerCoin = message.offerCoin
        ? Coin.toJSON(message.offerCoin)
        : undefined)
    message.demandCoinDenom !== undefined &&
      (obj.demandCoinDenom = message.demandCoinDenom)
    message.amount !== undefined && (obj.amount = message.amount)
    message.orderLifespan !== undefined &&
      (obj.orderLifespan = message.orderLifespan
        ? Duration.toJSON(message.orderLifespan)
        : undefined)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgMarketOrder }
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = object.orderer
    } else {
      message.orderer = ''
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = object.pairId
    } else {
      message.pairId = 0
    }
    if (object.direction !== undefined && object.direction !== null) {
      message.direction = object.direction
    } else {
      message.direction = 0
    }
    if (object.offerCoin !== undefined && object.offerCoin !== null) {
      message.offerCoin = Coin.fromPartial(object.offerCoin)
    } else {
      message.offerCoin = undefined
    }
    if (
      object.demandCoinDenom !== undefined &&
      object.demandCoinDenom !== null
    ) {
      message.demandCoinDenom = object.demandCoinDenom
    } else {
      message.demandCoinDenom = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.orderLifespan !== undefined && object.orderLifespan !== null) {
      message.orderLifespan = Duration.fromPartial(object.orderLifespan)
    } else {
      message.orderLifespan = undefined
    }
    return message
  }
}
const baseMsgMarketOrderResponse = {}
export const MsgMarketOrderResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMarketOrderResponse }
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
    const message = { ...baseMsgMarketOrderResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgMarketOrderResponse }
    return message
  }
}
const baseMsgCancelOrder = { orderer: '', pairId: 0, orderId: 0 }
export const MsgCancelOrder = {
  encode (message, writer = Writer.create()) {
    if (message.orderer !== '') {
      writer.uint32(10).string(message.orderer)
    }
    if (message.pairId !== 0) {
      writer.uint32(16).uint64(message.pairId)
    }
    if (message.orderId !== 0) {
      writer.uint32(24).uint64(message.orderId)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCancelOrder }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string()
          break
        case 2:
          message.pairId = longToNumber(reader.uint64())
          break
        case 3:
          message.orderId = longToNumber(reader.uint64())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgCancelOrder }
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = String(object.orderer)
    } else {
      message.orderer = ''
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = Number(object.pairId)
    } else {
      message.pairId = 0
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = Number(object.orderId)
    } else {
      message.orderId = 0
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.orderer !== undefined && (obj.orderer = message.orderer)
    message.pairId !== undefined && (obj.pairId = message.pairId)
    message.orderId !== undefined && (obj.orderId = message.orderId)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgCancelOrder }
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = object.orderer
    } else {
      message.orderer = ''
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = object.pairId
    } else {
      message.pairId = 0
    }
    if (object.orderId !== undefined && object.orderId !== null) {
      message.orderId = object.orderId
    } else {
      message.orderId = 0
    }
    return message
  }
}
const baseMsgCancelOrderResponse = {}
export const MsgCancelOrderResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCancelOrderResponse }
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
    const message = { ...baseMsgCancelOrderResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgCancelOrderResponse }
    return message
  }
}
const baseMsgCancelAllOrders = { orderer: '', pairIds: 0 }
export const MsgCancelAllOrders = {
  encode (message, writer = Writer.create()) {
    if (message.orderer !== '') {
      writer.uint32(10).string(message.orderer)
    }
    writer.uint32(18).fork()
    for (const v of message.pairIds) {
      writer.uint64(v)
    }
    writer.ldelim()
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCancelAllOrders }
    message.pairIds = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.orderer = reader.string()
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.pairIds.push(longToNumber(reader.uint64()))
            }
          } else {
            message.pairIds.push(longToNumber(reader.uint64()))
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgCancelAllOrders }
    message.pairIds = []
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = String(object.orderer)
    } else {
      message.orderer = ''
    }
    if (object.pairIds !== undefined && object.pairIds !== null) {
      for (const e of object.pairIds) {
        message.pairIds.push(Number(e))
      }
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.orderer !== undefined && (obj.orderer = message.orderer)
    if (message.pairIds) {
      obj.pairIds = message.pairIds.map(e => e)
    } else {
      obj.pairIds = []
    }
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgCancelAllOrders }
    message.pairIds = []
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = object.orderer
    } else {
      message.orderer = ''
    }
    if (object.pairIds !== undefined && object.pairIds !== null) {
      for (const e of object.pairIds) {
        message.pairIds.push(e)
      }
    }
    return message
  }
}
const baseMsgCancelAllOrdersResponse = {}
export const MsgCancelAllOrdersResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCancelAllOrdersResponse
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
      ...baseMsgCancelAllOrdersResponse
    }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = {
      ...baseMsgCancelAllOrdersResponse
    }
    return message
  }
}
export class MsgClientImpl {
  constructor (rpc) {
    this.rpc = rpc
  }
  CreatePair (request) {
    const data = MsgCreatePair.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidity.v1beta1.Msg',
      'CreatePair',
      data
    )
    return promise.then(data => MsgCreatePairResponse.decode(new Reader(data)))
  }
  CreatePool (request) {
    const data = MsgCreatePool.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidity.v1beta1.Msg',
      'CreatePool',
      data
    )
    return promise.then(data => MsgCreatePoolResponse.decode(new Reader(data)))
  }
  Deposit (request) {
    const data = MsgDeposit.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidity.v1beta1.Msg',
      'Deposit',
      data
    )
    return promise.then(data => MsgDepositResponse.decode(new Reader(data)))
  }
  Withdraw (request) {
    const data = MsgWithdraw.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidity.v1beta1.Msg',
      'Withdraw',
      data
    )
    return promise.then(data => MsgWithdrawResponse.decode(new Reader(data)))
  }
  LimitOrder (request) {
    const data = MsgLimitOrder.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidity.v1beta1.Msg',
      'LimitOrder',
      data
    )
    return promise.then(data => MsgLimitOrderResponse.decode(new Reader(data)))
  }
  MarketOrder (request) {
    const data = MsgMarketOrder.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidity.v1beta1.Msg',
      'MarketOrder',
      data
    )
    return promise.then(data => MsgMarketOrderResponse.decode(new Reader(data)))
  }
  CancelOrder (request) {
    const data = MsgCancelOrder.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidity.v1beta1.Msg',
      'CancelOrder',
      data
    )
    return promise.then(data => MsgCancelOrderResponse.decode(new Reader(data)))
  }
  CancelAllOrders (request) {
    const data = MsgCancelAllOrders.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidity.v1beta1.Msg',
      'CancelAllOrders',
      data
    )
    return promise.then(data =>
      MsgCancelAllOrdersResponse.decode(new Reader(data))
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
