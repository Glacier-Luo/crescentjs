/* eslint-disable */
import {
  conditionTypeFromJSON,
  conditionTypeToJSON
} from '../../../crescent/claim/v1beta1/claim.js'
import _m0 from 'protobufjs/minimal.js'

const util = _m0.util
const configure = _m0.configure
const Writer = _m0.Writer
const Reader = _m0.Reader

import * as Long from 'long'
export const protobufPackage = 'crescent.claim.v1beta1'
const baseMsgClaim = { airdropId: 0, recipient: '', conditionType: 0 }
export const MsgClaim = {
  encode (message, writer = Writer.create()) {
    if (message.airdropId !== 0) {
      writer.uint32(8).uint64(message.airdropId)
    }
    if (message.recipient !== '') {
      writer.uint32(18).string(message.recipient)
    }
    if (message.conditionType !== 0) {
      writer.uint32(24).int32(message.conditionType)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgClaim }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.airdropId = longToNumber(reader.uint64())
          break
        case 2:
          message.recipient = reader.string()
          break
        case 3:
          message.conditionType = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseMsgClaim }
    if (object.airdropId !== undefined && object.airdropId !== null) {
      message.airdropId = Number(object.airdropId)
    } else {
      message.airdropId = 0
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient)
    } else {
      message.recipient = ''
    }
    if (object.conditionType !== undefined && object.conditionType !== null) {
      message.conditionType = conditionTypeFromJSON(object.conditionType)
    } else {
      message.conditionType = 0
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.airdropId !== undefined && (obj.airdropId = message.airdropId)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    message.conditionType !== undefined &&
      (obj.conditionType = conditionTypeToJSON(message.conditionType))
    return obj
  },
  fromPartial (object) {
    const message = { ...baseMsgClaim }
    if (object.airdropId !== undefined && object.airdropId !== null) {
      message.airdropId = object.airdropId
    } else {
      message.airdropId = 0
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient
    } else {
      message.recipient = ''
    }
    if (object.conditionType !== undefined && object.conditionType !== null) {
      message.conditionType = object.conditionType
    } else {
      message.conditionType = 0
    }
    return message
  }
}
const baseMsgClaimResponse = {}
export const MsgClaimResponse = {
  encode (_, writer = Writer.create()) {
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgClaimResponse }
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
    const message = { ...baseMsgClaimResponse }
    return message
  },
  toJSON (_) {
    const obj = {}
    return obj
  },
  fromPartial (_) {
    const message = { ...baseMsgClaimResponse }
    return message
  }
}
export class MsgClientImpl {
  constructor (rpc) {
    this.rpc = rpc
  }
  Claim (request) {
    const data = MsgClaim.encode(request).finish()
    const promise = this.rpc.request(
      'crescent.claim.v1beta1.Msg',
      'Claim',
      data
    )
    return promise.then(data => MsgClaimResponse.decode(new Reader(data)))
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
