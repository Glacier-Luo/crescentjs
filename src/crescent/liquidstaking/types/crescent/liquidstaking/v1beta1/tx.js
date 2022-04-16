/* eslint-disable */
import _m0 from 'protobufjs/minimal.js'

const util = _m0.util
const configure = _m0.configure
const Writer = _m0.Writer
const Reader = _m0.Reader

import { Timestamp } from '../../../google/protobuf/timestamp.js'
import { Coin } from '../../../cosmos/base/v1beta1/coin.js'
export const protobufPackage = 'crescent.liquidstaking.v1beta1'
const baseMsgLiquidStake = { delegatorAddress: '' }
export const MsgLiquidStake = {
  encode (message, writer = Writer.create()) {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress)
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgLiquidStake }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string()
          break
        case 2:
          message.amount = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgLiquidStake }
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress)
    } else {
      message.delegatorAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount)
    } else {
      message.amount = undefined
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress)
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgLiquidStake }
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress
    } else {
      message.delegatorAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount)
    } else {
      message.amount = undefined
    }
    return message
  }
}
const baseMsgLiquidStakeResponse = {}
export const MsgLiquidStakeResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgLiquidStakeResponse }
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
    const message = { ...baseMsgLiquidStakeResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgLiquidStakeResponse }
    return message
  }
}
const baseMsgLiquidUnstake = { delegatorAddress: '' }
export const MsgLiquidUnstake = {
  encode (message, writer = Writer.create()) {
    if (message.delegatorAddress !== '') {
      writer.uint32(10).string(message.delegatorAddress)
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgLiquidUnstake }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string()
          break
        case 2:
          message.amount = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgLiquidUnstake }
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress)
    } else {
      message.delegatorAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount)
    } else {
      message.amount = undefined
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress)
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgLiquidUnstake }
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress
    } else {
      message.delegatorAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount)
    } else {
      message.amount = undefined
    }
    return message
  }
}
const baseMsgLiquidUnstakeResponse = {}
export const MsgLiquidUnstakeResponse = {
  encode (message, writer = Writer.create()) {
    if (message.completionTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.completionTime),
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgLiquidUnstakeResponse
    }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
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
      ...baseMsgLiquidUnstakeResponse
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = fromJsonTimestamp(object.completionTime)
    } else {
      message.completionTime = undefined
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.completionTime !== undefined &&
      (obj.completionTime =
        message.completionTime !== undefined
          ? message.completionTime.toISOString()
          : null)
    return obj
  },
  fromPartial (object) {
    const message = {
      ...baseMsgLiquidUnstakeResponse
    }
    if (object.completionTime !== undefined && object.completionTime !== null) {
      message.completionTime = object.completionTime
    } else {
      message.completionTime = undefined
    }
    return message
  }
}
export class MsgClientImpl {
  constructor (rpc) {
    this.rpc = rpc
  }
  LiquidStake (request) {
    const data = MsgLiquidStake.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidstaking.v1beta1.Msg',
      'LiquidStake',
      data
    )
    return promise.then(data => MsgLiquidStakeResponse.decode(new Reader(data)))
  }
  LiquidUnstake (request) {
    const data = MsgLiquidUnstake.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.liquidstaking.v1beta1.Msg',
      'LiquidUnstake',
      data
    )
    return promise.then(data =>
      MsgLiquidUnstakeResponse.decode(new Reader(data))
    )
  }
}
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
