/* eslint-disable */
import { Timestamp } from '../../../google/protobuf/timestamp.js'
import * as Long from 'long'
import _m0 from 'protobufjs/minimal.js'

const util = _m0.util
const configure = _m0.configure
const Writer = _m0.Writer
const Reader = _m0.Reader

import { Coin } from '../../../cosmos/base/v1beta1/coin.js'
export const protobufPackage = 'crescent.claim.v1beta1'
/** ConditionType defines the type of condition that a recipient must execute in order to receive a claimable amount. */
export var ConditionType
;(function (ConditionType) {
  /** CONDITION_TYPE_UNSPECIFIED - CONDITION_TYPE_UNSPECIFIED specifies an unknown condition type */
  ConditionType[(ConditionType['CONDITION_TYPE_UNSPECIFIED'] = 0)] =
    'CONDITION_TYPE_UNSPECIFIED'
  /** CONDITION_TYPE_DEPOSIT - CONDITION_TYPE_DEPOSIT specifies deposit condition type */
  ConditionType[(ConditionType['CONDITION_TYPE_DEPOSIT'] = 1)] =
    'CONDITION_TYPE_DEPOSIT'
  /** CONDITION_TYPE_SWAP - CONDITION_TYPE_SWAP specifies swap condition type */
  ConditionType[(ConditionType['CONDITION_TYPE_SWAP'] = 2)] =
    'CONDITION_TYPE_SWAP'
  /** CONDITION_TYPE_LIQUIDSTAKE - CONDITION_TYPE_LIQUIDSTAKE specifies liquid stake condition type */
  ConditionType[(ConditionType['CONDITION_TYPE_LIQUIDSTAKE'] = 3)] =
    'CONDITION_TYPE_LIQUIDSTAKE'
  /** CONDITION_TYPE_VOTE - CONDITION_TYPE_VOTE specifies governance vote condition type */
  ConditionType[(ConditionType['CONDITION_TYPE_VOTE'] = 4)] =
    'CONDITION_TYPE_VOTE'
  ConditionType[(ConditionType['UNRECOGNIZED'] = -1)] = 'UNRECOGNIZED'
})(ConditionType || (ConditionType = {}))
export function conditionTypeFromJSON (object) {
  switch (object) {
    case 0:
    case 'CONDITION_TYPE_UNSPECIFIED':
      return ConditionType.CONDITION_TYPE_UNSPECIFIED
    case 1:
    case 'CONDITION_TYPE_DEPOSIT':
      return ConditionType.CONDITION_TYPE_DEPOSIT
    case 2:
    case 'CONDITION_TYPE_SWAP':
      return ConditionType.CONDITION_TYPE_SWAP
    case 3:
    case 'CONDITION_TYPE_LIQUIDSTAKE':
      return ConditionType.CONDITION_TYPE_LIQUIDSTAKE
    case 4:
    case 'CONDITION_TYPE_VOTE':
      return ConditionType.CONDITION_TYPE_VOTE
    case -1:
    case 'UNRECOGNIZED':
    default:
      return ConditionType.UNRECOGNIZED
  }
}
export function conditionTypeToJSON (object) {
  switch (object) {
    case ConditionType.CONDITION_TYPE_UNSPECIFIED:
      return 'CONDITION_TYPE_UNSPECIFIED'
    case ConditionType.CONDITION_TYPE_DEPOSIT:
      return 'CONDITION_TYPE_DEPOSIT'
    case ConditionType.CONDITION_TYPE_SWAP:
      return 'CONDITION_TYPE_SWAP'
    case ConditionType.CONDITION_TYPE_LIQUIDSTAKE:
      return 'CONDITION_TYPE_LIQUIDSTAKE'
    case ConditionType.CONDITION_TYPE_VOTE:
      return 'CONDITION_TYPE_VOTE'
    default:
      return 'UNKNOWN'
  }
}
const baseAirdrop = { id: 0, sourceAddress: '', conditions: 0 }
export const Airdrop = {
  encode (message, writer = Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.sourceAddress !== '') {
      writer.uint32(18).string(message.sourceAddress)
    }
    writer.uint32(26).fork()
    for (const v of message.conditions) {
      writer.int32(v)
    }
    writer.ldelim()
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
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAirdrop }
    message.conditions = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64())
          break
        case 2:
          message.sourceAddress = reader.string()
          break
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.conditions.push(reader.int32())
            }
          } else {
            message.conditions.push(reader.int32())
          }
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
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseAirdrop }
    message.conditions = []
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.sourceAddress !== undefined && object.sourceAddress !== null) {
      message.sourceAddress = String(object.sourceAddress)
    } else {
      message.sourceAddress = ''
    }
    if (object.conditions !== undefined && object.conditions !== null) {
      for (const e of object.conditions) {
        message.conditions.push(conditionTypeFromJSON(e))
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
    return message
  },
  toJSON (message) {
    const obj = {}
    message.id !== undefined && (obj.id = message.id)
    message.sourceAddress !== undefined &&
      (obj.sourceAddress = message.sourceAddress)
    if (message.conditions) {
      obj.conditions = message.conditions.map(e => conditionTypeToJSON(e))
    } else {
      obj.conditions = []
    }
    message.startTime !== undefined &&
      (obj.startTime =
        message.startTime !== undefined
          ? message.startTime.toISOString()
          : null)
    message.endTime !== undefined &&
      (obj.endTime =
        message.endTime !== undefined ? message.endTime.toISOString() : null)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseAirdrop }
    message.conditions = []
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.sourceAddress !== undefined && object.sourceAddress !== null) {
      message.sourceAddress = object.sourceAddress
    } else {
      message.sourceAddress = ''
    }
    if (object.conditions !== undefined && object.conditions !== null) {
      for (const e of object.conditions) {
        message.conditions.push(e)
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
    return message
  }
}
const baseClaimRecord = {
  airdropId: 0,
  recipient: '',
  claimedConditions: 0
}
export const ClaimRecord = {
  encode (message, writer = Writer.create()) {
    if (message.airdropId !== 0) {
      writer.uint32(8).uint64(message.airdropId)
    }
    if (message.recipient !== '') {
      writer.uint32(18).string(message.recipient)
    }
    for (const v of message.initialClaimableCoins) {
      Coin.encode(v, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.claimableCoins) {
      Coin.encode(v, writer.uint32(34).fork()).ldelim()
    }
    writer.uint32(42).fork()
    for (const v of message.claimedConditions) {
      writer.int32(v)
    }
    writer.ldelim()
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseClaimRecord }
    message.initialClaimableCoins = []
    message.claimableCoins = []
    message.claimedConditions = []
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
          message.initialClaimableCoins.push(
            Coin.decode(reader, reader.uint32())
          )
          break
        case 4:
          message.claimableCoins.push(Coin.decode(reader, reader.uint32()))
          break
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.claimedConditions.push(reader.int32())
            }
          } else {
            message.claimedConditions.push(reader.int32())
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
    const message = { ...baseClaimRecord }
    message.initialClaimableCoins = []
    message.claimableCoins = []
    message.claimedConditions = []
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
    if (
      object.initialClaimableCoins !== undefined &&
      object.initialClaimableCoins !== null
    ) {
      for (const e of object.initialClaimableCoins) {
        message.initialClaimableCoins.push(Coin.fromJSON(e))
      }
    }
    if (object.claimableCoins !== undefined && object.claimableCoins !== null) {
      for (const e of object.claimableCoins) {
        message.claimableCoins.push(Coin.fromJSON(e))
      }
    }
    if (
      object.claimedConditions !== undefined &&
      object.claimedConditions !== null
    ) {
      for (const e of object.claimedConditions) {
        message.claimedConditions.push(conditionTypeFromJSON(e))
      }
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.airdropId !== undefined && (obj.airdropId = message.airdropId)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    if (message.initialClaimableCoins) {
      obj.initialClaimableCoins = message.initialClaimableCoins.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.initialClaimableCoins = []
    }
    if (message.claimableCoins) {
      obj.claimableCoins = message.claimableCoins.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.claimableCoins = []
    }
    if (message.claimedConditions) {
      obj.claimedConditions = message.claimedConditions.map(e =>
        conditionTypeToJSON(e)
      )
    } else {
      obj.claimedConditions = []
    }
    return obj
  },
  fromPartial (object) {
    const message = { ...baseClaimRecord }
    message.initialClaimableCoins = []
    message.claimableCoins = []
    message.claimedConditions = []
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
    if (
      object.initialClaimableCoins !== undefined &&
      object.initialClaimableCoins !== null
    ) {
      for (const e of object.initialClaimableCoins) {
        message.initialClaimableCoins.push(Coin.fromPartial(e))
      }
    }
    if (object.claimableCoins !== undefined && object.claimableCoins !== null) {
      for (const e of object.claimableCoins) {
        message.claimableCoins.push(Coin.fromPartial(e))
      }
    }
    if (
      object.claimedConditions !== undefined &&
      object.claimedConditions !== null
    ) {
      for (const e of object.claimedConditions) {
        message.claimedConditions.push(e)
      }
    }
    return message
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
