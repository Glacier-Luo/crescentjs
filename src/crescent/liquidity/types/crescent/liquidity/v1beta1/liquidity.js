/* eslint-disable */
import { Timestamp } from '../../../google/protobuf/timestamp.js'
import * as Long from 'long'
import _m0 from 'protobufjs/minimal.js'

const util = _m0.util
const configure = _m0.configure
const Writer = _m0.Writer
const Reader = _m0.Reader

import { Coin } from '../../../cosmos/base/v1beta1/coin.js'
import { Duration } from '../../../google/protobuf/duration.js'
export const protobufPackage = 'crescent.liquidity.v1beta1'
/** OrderDirection enumerates order directions. */
export var OrderDirection
;(function (OrderDirection) {
  /** ORDER_DIRECTION_UNSPECIFIED - ORDER_DIRECTION_UNSPECIFIED specifies unknown order direction */
  OrderDirection[(OrderDirection['ORDER_DIRECTION_UNSPECIFIED'] = 0)] =
    'ORDER_DIRECTION_UNSPECIFIED'
  /** ORDER_DIRECTION_BUY - ORDER_DIRECTION_BUY specifies buy(swap quote coin to base coin) order direction */
  OrderDirection[(OrderDirection['ORDER_DIRECTION_BUY'] = 1)] =
    'ORDER_DIRECTION_BUY'
  /** ORDER_DIRECTION_SELL - ORDER_DIRECTION_SELL specifies sell(swap base coin to quote coin) order direction */
  OrderDirection[(OrderDirection['ORDER_DIRECTION_SELL'] = 2)] =
    'ORDER_DIRECTION_SELL'
  OrderDirection[(OrderDirection['UNRECOGNIZED'] = -1)] = 'UNRECOGNIZED'
})(OrderDirection || (OrderDirection = {}))
export function orderDirectionFromJSON (object) {
  switch (object) {
    case 0:
    case 'ORDER_DIRECTION_UNSPECIFIED':
      return OrderDirection.ORDER_DIRECTION_UNSPECIFIED
    case 1:
    case 'ORDER_DIRECTION_BUY':
      return OrderDirection.ORDER_DIRECTION_BUY
    case 2:
    case 'ORDER_DIRECTION_SELL':
      return OrderDirection.ORDER_DIRECTION_SELL
    case -1:
    case 'UNRECOGNIZED':
    default:
      return OrderDirection.UNRECOGNIZED
  }
}
export function orderDirectionToJSON (object) {
  switch (object) {
    case OrderDirection.ORDER_DIRECTION_UNSPECIFIED:
      return 'ORDER_DIRECTION_UNSPECIFIED'
    case OrderDirection.ORDER_DIRECTION_BUY:
      return 'ORDER_DIRECTION_BUY'
    case OrderDirection.ORDER_DIRECTION_SELL:
      return 'ORDER_DIRECTION_SELL'
    default:
      return 'UNKNOWN'
  }
}
/** RequestStatus enumerates request statuses. */
export var RequestStatus
;(function (RequestStatus) {
  /** REQUEST_STATUS_UNSPECIFIED - REQUEST_STATUS_UNSPECIFIED specifies unknown request status */
  RequestStatus[(RequestStatus['REQUEST_STATUS_UNSPECIFIED'] = 0)] =
    'REQUEST_STATUS_UNSPECIFIED'
  /** REQUEST_STATUS_NOT_EXECUTED - REQUEST_STATUS_NOT_EXECUTED indicates the request is not executed yet */
  RequestStatus[(RequestStatus['REQUEST_STATUS_NOT_EXECUTED'] = 1)] =
    'REQUEST_STATUS_NOT_EXECUTED'
  /** REQUEST_STATUS_SUCCEEDED - REQUEST_STATUS_SUCCEEDED indicates the request has been succeeded */
  RequestStatus[(RequestStatus['REQUEST_STATUS_SUCCEEDED'] = 2)] =
    'REQUEST_STATUS_SUCCEEDED'
  /** REQUEST_STATUS_FAILED - REQUEST_STATUS_FAILED indicates the request is failed */
  RequestStatus[(RequestStatus['REQUEST_STATUS_FAILED'] = 3)] =
    'REQUEST_STATUS_FAILED'
  RequestStatus[(RequestStatus['UNRECOGNIZED'] = -1)] = 'UNRECOGNIZED'
})(RequestStatus || (RequestStatus = {}))
export function requestStatusFromJSON (object) {
  switch (object) {
    case 0:
    case 'REQUEST_STATUS_UNSPECIFIED':
      return RequestStatus.REQUEST_STATUS_UNSPECIFIED
    case 1:
    case 'REQUEST_STATUS_NOT_EXECUTED':
      return RequestStatus.REQUEST_STATUS_NOT_EXECUTED
    case 2:
    case 'REQUEST_STATUS_SUCCEEDED':
      return RequestStatus.REQUEST_STATUS_SUCCEEDED
    case 3:
    case 'REQUEST_STATUS_FAILED':
      return RequestStatus.REQUEST_STATUS_FAILED
    case -1:
    case 'UNRECOGNIZED':
    default:
      return RequestStatus.UNRECOGNIZED
  }
}
export function requestStatusToJSON (object) {
  switch (object) {
    case RequestStatus.REQUEST_STATUS_UNSPECIFIED:
      return 'REQUEST_STATUS_UNSPECIFIED'
    case RequestStatus.REQUEST_STATUS_NOT_EXECUTED:
      return 'REQUEST_STATUS_NOT_EXECUTED'
    case RequestStatus.REQUEST_STATUS_SUCCEEDED:
      return 'REQUEST_STATUS_SUCCEEDED'
    case RequestStatus.REQUEST_STATUS_FAILED:
      return 'REQUEST_STATUS_FAILED'
    default:
      return 'UNKNOWN'
  }
}
/** OrderStatus enumerates order statuses. */
export var OrderStatus
;(function (OrderStatus) {
  /** ORDER_STATUS_UNSPECIFIED - ORDER_STATUS_UNSPECIFIED specifies unknown order status */
  OrderStatus[(OrderStatus['ORDER_STATUS_UNSPECIFIED'] = 0)] =
    'ORDER_STATUS_UNSPECIFIED'
  /** ORDER_STATUS_NOT_EXECUTED - ORDER_STATUS_NOT_EXECUTED indicates the order has not been executed yet */
  OrderStatus[(OrderStatus['ORDER_STATUS_NOT_EXECUTED'] = 1)] =
    'ORDER_STATUS_NOT_EXECUTED'
  /** ORDER_STATUS_NOT_MATCHED - ORDER_STATUS_NOT_MATCHED indicates the order has been executed but has no match */
  OrderStatus[(OrderStatus['ORDER_STATUS_NOT_MATCHED'] = 2)] =
    'ORDER_STATUS_NOT_MATCHED'
  /** ORDER_STATUS_PARTIALLY_MATCHED - ORDER_STATUS_PARTIALLY_MATCHED indicates the order has been partially matched */
  OrderStatus[(OrderStatus['ORDER_STATUS_PARTIALLY_MATCHED'] = 3)] =
    'ORDER_STATUS_PARTIALLY_MATCHED'
  /** ORDER_STATUS_COMPLETED - ORDER_STATUS_COMPLETED indicates the order has been fully matched and completed */
  OrderStatus[(OrderStatus['ORDER_STATUS_COMPLETED'] = 4)] =
    'ORDER_STATUS_COMPLETED'
  /** ORDER_STATUS_CANCELED - ORDER_STATUS_CANCELED indicates the order has been canceled */
  OrderStatus[(OrderStatus['ORDER_STATUS_CANCELED'] = 5)] =
    'ORDER_STATUS_CANCELED'
  /** ORDER_STATUS_EXPIRED - ORDER_STATUS_EXPIRED indicates the order has been expired */
  OrderStatus[(OrderStatus['ORDER_STATUS_EXPIRED'] = 6)] =
    'ORDER_STATUS_EXPIRED'
  OrderStatus[(OrderStatus['UNRECOGNIZED'] = -1)] = 'UNRECOGNIZED'
})(OrderStatus || (OrderStatus = {}))
export function orderStatusFromJSON (object) {
  switch (object) {
    case 0:
    case 'ORDER_STATUS_UNSPECIFIED':
      return OrderStatus.ORDER_STATUS_UNSPECIFIED
    case 1:
    case 'ORDER_STATUS_NOT_EXECUTED':
      return OrderStatus.ORDER_STATUS_NOT_EXECUTED
    case 2:
    case 'ORDER_STATUS_NOT_MATCHED':
      return OrderStatus.ORDER_STATUS_NOT_MATCHED
    case 3:
    case 'ORDER_STATUS_PARTIALLY_MATCHED':
      return OrderStatus.ORDER_STATUS_PARTIALLY_MATCHED
    case 4:
    case 'ORDER_STATUS_COMPLETED':
      return OrderStatus.ORDER_STATUS_COMPLETED
    case 5:
    case 'ORDER_STATUS_CANCELED':
      return OrderStatus.ORDER_STATUS_CANCELED
    case 6:
    case 'ORDER_STATUS_EXPIRED':
      return OrderStatus.ORDER_STATUS_EXPIRED
    case -1:
    case 'UNRECOGNIZED':
    default:
      return OrderStatus.UNRECOGNIZED
  }
}
export function orderStatusToJSON (object) {
  switch (object) {
    case OrderStatus.ORDER_STATUS_UNSPECIFIED:
      return 'ORDER_STATUS_UNSPECIFIED'
    case OrderStatus.ORDER_STATUS_NOT_EXECUTED:
      return 'ORDER_STATUS_NOT_EXECUTED'
    case OrderStatus.ORDER_STATUS_NOT_MATCHED:
      return 'ORDER_STATUS_NOT_MATCHED'
    case OrderStatus.ORDER_STATUS_PARTIALLY_MATCHED:
      return 'ORDER_STATUS_PARTIALLY_MATCHED'
    case OrderStatus.ORDER_STATUS_COMPLETED:
      return 'ORDER_STATUS_COMPLETED'
    case OrderStatus.ORDER_STATUS_CANCELED:
      return 'ORDER_STATUS_CANCELED'
    case OrderStatus.ORDER_STATUS_EXPIRED:
      return 'ORDER_STATUS_EXPIRED'
    default:
      return 'UNKNOWN'
  }
}
const baseParams = {
  batchSize: 0,
  tickPrecision: 0,
  feeCollectorAddress: '',
  dustCollectorAddress: '',
  initialPoolCoinSupply: '',
  minInitialDepositAmount: '',
  maxPriceLimitRatio: '',
  swapFeeRate: '',
  withdrawFeeRate: ''
}
export const Params = {
  encode (message, writer = Writer.create()) {
    if (message.batchSize !== 0) {
      writer.uint32(8).uint32(message.batchSize)
    }
    if (message.tickPrecision !== 0) {
      writer.uint32(16).uint32(message.tickPrecision)
    }
    if (message.feeCollectorAddress !== '') {
      writer.uint32(26).string(message.feeCollectorAddress)
    }
    if (message.dustCollectorAddress !== '') {
      writer.uint32(34).string(message.dustCollectorAddress)
    }
    if (message.initialPoolCoinSupply !== '') {
      writer.uint32(42).string(message.initialPoolCoinSupply)
    }
    for (const v of message.pairCreationFee) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim()
    }
    for (const v of message.poolCreationFee) {
      Coin.encode(v, writer.uint32(58).fork()).ldelim()
    }
    if (message.minInitialDepositAmount !== '') {
      writer.uint32(66).string(message.minInitialDepositAmount)
    }
    if (message.maxPriceLimitRatio !== '') {
      writer.uint32(74).string(message.maxPriceLimitRatio)
    }
    if (message.maxOrderLifespan !== undefined) {
      Duration.encode(
        message.maxOrderLifespan,
        writer.uint32(82).fork()
      ).ldelim()
    }
    if (message.swapFeeRate !== '') {
      writer.uint32(90).string(message.swapFeeRate)
    }
    if (message.withdrawFeeRate !== '') {
      writer.uint32(98).string(message.withdrawFeeRate)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseParams }
    message.pairCreationFee = []
    message.poolCreationFee = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.batchSize = reader.uint32()
          break
        case 2:
          message.tickPrecision = reader.uint32()
          break
        case 3:
          message.feeCollectorAddress = reader.string()
          break
        case 4:
          message.dustCollectorAddress = reader.string()
          break
        case 5:
          message.initialPoolCoinSupply = reader.string()
          break
        case 6:
          message.pairCreationFee.push(Coin.decode(reader, reader.uint32()))
          break
        case 7:
          message.poolCreationFee.push(Coin.decode(reader, reader.uint32()))
          break
        case 8:
          message.minInitialDepositAmount = reader.string()
          break
        case 9:
          message.maxPriceLimitRatio = reader.string()
          break
        case 10:
          message.maxOrderLifespan = Duration.decode(reader, reader.uint32())
          break
        case 11:
          message.swapFeeRate = reader.string()
          break
        case 12:
          message.withdrawFeeRate = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseParams }
    message.pairCreationFee = []
    message.poolCreationFee = []
    if (object.batchSize !== undefined && object.batchSize !== null) {
      message.batchSize = Number(object.batchSize)
    } else {
      message.batchSize = 0
    }
    if (object.tickPrecision !== undefined && object.tickPrecision !== null) {
      message.tickPrecision = Number(object.tickPrecision)
    } else {
      message.tickPrecision = 0
    }
    if (
      object.feeCollectorAddress !== undefined &&
      object.feeCollectorAddress !== null
    ) {
      message.feeCollectorAddress = String(object.feeCollectorAddress)
    } else {
      message.feeCollectorAddress = ''
    }
    if (
      object.dustCollectorAddress !== undefined &&
      object.dustCollectorAddress !== null
    ) {
      message.dustCollectorAddress = String(object.dustCollectorAddress)
    } else {
      message.dustCollectorAddress = ''
    }
    if (
      object.initialPoolCoinSupply !== undefined &&
      object.initialPoolCoinSupply !== null
    ) {
      message.initialPoolCoinSupply = String(object.initialPoolCoinSupply)
    } else {
      message.initialPoolCoinSupply = ''
    }
    if (
      object.pairCreationFee !== undefined &&
      object.pairCreationFee !== null
    ) {
      for (const e of object.pairCreationFee) {
        message.pairCreationFee.push(Coin.fromJSON(e))
      }
    }
    if (
      object.poolCreationFee !== undefined &&
      object.poolCreationFee !== null
    ) {
      for (const e of object.poolCreationFee) {
        message.poolCreationFee.push(Coin.fromJSON(e))
      }
    }
    if (
      object.minInitialDepositAmount !== undefined &&
      object.minInitialDepositAmount !== null
    ) {
      message.minInitialDepositAmount = String(object.minInitialDepositAmount)
    } else {
      message.minInitialDepositAmount = ''
    }
    if (
      object.maxPriceLimitRatio !== undefined &&
      object.maxPriceLimitRatio !== null
    ) {
      message.maxPriceLimitRatio = String(object.maxPriceLimitRatio)
    } else {
      message.maxPriceLimitRatio = ''
    }
    if (
      object.maxOrderLifespan !== undefined &&
      object.maxOrderLifespan !== null
    ) {
      message.maxOrderLifespan = Duration.fromJSON(object.maxOrderLifespan)
    } else {
      message.maxOrderLifespan = undefined
    }
    if (object.swapFeeRate !== undefined && object.swapFeeRate !== null) {
      message.swapFeeRate = String(object.swapFeeRate)
    } else {
      message.swapFeeRate = ''
    }
    if (
      object.withdrawFeeRate !== undefined &&
      object.withdrawFeeRate !== null
    ) {
      message.withdrawFeeRate = String(object.withdrawFeeRate)
    } else {
      message.withdrawFeeRate = ''
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.batchSize !== undefined && (obj.batchSize = message.batchSize)
    message.tickPrecision !== undefined &&
      (obj.tickPrecision = message.tickPrecision)
    message.feeCollectorAddress !== undefined &&
      (obj.feeCollectorAddress = message.feeCollectorAddress)
    message.dustCollectorAddress !== undefined &&
      (obj.dustCollectorAddress = message.dustCollectorAddress)
    message.initialPoolCoinSupply !== undefined &&
      (obj.initialPoolCoinSupply = message.initialPoolCoinSupply)
    if (message.pairCreationFee) {
      obj.pairCreationFee = message.pairCreationFee.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.pairCreationFee = []
    }
    if (message.poolCreationFee) {
      obj.poolCreationFee = message.poolCreationFee.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.poolCreationFee = []
    }
    message.minInitialDepositAmount !== undefined &&
      (obj.minInitialDepositAmount = message.minInitialDepositAmount)
    message.maxPriceLimitRatio !== undefined &&
      (obj.maxPriceLimitRatio = message.maxPriceLimitRatio)
    message.maxOrderLifespan !== undefined &&
      (obj.maxOrderLifespan = message.maxOrderLifespan
        ? Duration.toJSON(message.maxOrderLifespan)
        : undefined)
    message.swapFeeRate !== undefined && (obj.swapFeeRate = message.swapFeeRate)
    message.withdrawFeeRate !== undefined &&
      (obj.withdrawFeeRate = message.withdrawFeeRate)
    return obj
  },
  fromPartial (object) {
    const message = { ...baseParams }
    message.pairCreationFee = []
    message.poolCreationFee = []
    if (object.batchSize !== undefined && object.batchSize !== null) {
      message.batchSize = object.batchSize
    } else {
      message.batchSize = 0
    }
    if (object.tickPrecision !== undefined && object.tickPrecision !== null) {
      message.tickPrecision = object.tickPrecision
    } else {
      message.tickPrecision = 0
    }
    if (
      object.feeCollectorAddress !== undefined &&
      object.feeCollectorAddress !== null
    ) {
      message.feeCollectorAddress = object.feeCollectorAddress
    } else {
      message.feeCollectorAddress = ''
    }
    if (
      object.dustCollectorAddress !== undefined &&
      object.dustCollectorAddress !== null
    ) {
      message.dustCollectorAddress = object.dustCollectorAddress
    } else {
      message.dustCollectorAddress = ''
    }
    if (
      object.initialPoolCoinSupply !== undefined &&
      object.initialPoolCoinSupply !== null
    ) {
      message.initialPoolCoinSupply = object.initialPoolCoinSupply
    } else {
      message.initialPoolCoinSupply = ''
    }
    if (
      object.pairCreationFee !== undefined &&
      object.pairCreationFee !== null
    ) {
      for (const e of object.pairCreationFee) {
        message.pairCreationFee.push(Coin.fromPartial(e))
      }
    }
    if (
      object.poolCreationFee !== undefined &&
      object.poolCreationFee !== null
    ) {
      for (const e of object.poolCreationFee) {
        message.poolCreationFee.push(Coin.fromPartial(e))
      }
    }
    if (
      object.minInitialDepositAmount !== undefined &&
      object.minInitialDepositAmount !== null
    ) {
      message.minInitialDepositAmount = object.minInitialDepositAmount
    } else {
      message.minInitialDepositAmount = ''
    }
    if (
      object.maxPriceLimitRatio !== undefined &&
      object.maxPriceLimitRatio !== null
    ) {
      message.maxPriceLimitRatio = object.maxPriceLimitRatio
    } else {
      message.maxPriceLimitRatio = ''
    }
    if (
      object.maxOrderLifespan !== undefined &&
      object.maxOrderLifespan !== null
    ) {
      message.maxOrderLifespan = Duration.fromPartial(object.maxOrderLifespan)
    } else {
      message.maxOrderLifespan = undefined
    }
    if (object.swapFeeRate !== undefined && object.swapFeeRate !== null) {
      message.swapFeeRate = object.swapFeeRate
    } else {
      message.swapFeeRate = ''
    }
    if (
      object.withdrawFeeRate !== undefined &&
      object.withdrawFeeRate !== null
    ) {
      message.withdrawFeeRate = object.withdrawFeeRate
    } else {
      message.withdrawFeeRate = ''
    }
    return message
  }
}
const basePair = {
  id: 0,
  baseCoinDenom: '',
  quoteCoinDenom: '',
  escrowAddress: '',
  lastOrderId: 0,
  lastPrice: '',
  currentBatchId: 0
}
export const Pair = {
  encode (message, writer = Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.baseCoinDenom !== '') {
      writer.uint32(18).string(message.baseCoinDenom)
    }
    if (message.quoteCoinDenom !== '') {
      writer.uint32(26).string(message.quoteCoinDenom)
    }
    if (message.escrowAddress !== '') {
      writer.uint32(34).string(message.escrowAddress)
    }
    if (message.lastOrderId !== 0) {
      writer.uint32(40).uint64(message.lastOrderId)
    }
    if (message.lastPrice !== '') {
      writer.uint32(50).string(message.lastPrice)
    }
    if (message.currentBatchId !== 0) {
      writer.uint32(56).uint64(message.currentBatchId)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePair }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64())
          break
        case 2:
          message.baseCoinDenom = reader.string()
          break
        case 3:
          message.quoteCoinDenom = reader.string()
          break
        case 4:
          message.escrowAddress = reader.string()
          break
        case 5:
          message.lastOrderId = longToNumber(reader.uint64())
          break
        case 6:
          message.lastPrice = reader.string()
          break
        case 7:
          message.currentBatchId = longToNumber(reader.uint64())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...basePair }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
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
    if (object.escrowAddress !== undefined && object.escrowAddress !== null) {
      message.escrowAddress = String(object.escrowAddress)
    } else {
      message.escrowAddress = ''
    }
    if (object.lastOrderId !== undefined && object.lastOrderId !== null) {
      message.lastOrderId = Number(object.lastOrderId)
    } else {
      message.lastOrderId = 0
    }
    if (object.lastPrice !== undefined && object.lastPrice !== null) {
      message.lastPrice = String(object.lastPrice)
    } else {
      message.lastPrice = ''
    }
    if (object.currentBatchId !== undefined && object.currentBatchId !== null) {
      message.currentBatchId = Number(object.currentBatchId)
    } else {
      message.currentBatchId = 0
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.id !== undefined && (obj.id = message.id)
    message.baseCoinDenom !== undefined &&
      (obj.baseCoinDenom = message.baseCoinDenom)
    message.quoteCoinDenom !== undefined &&
      (obj.quoteCoinDenom = message.quoteCoinDenom)
    message.escrowAddress !== undefined &&
      (obj.escrowAddress = message.escrowAddress)
    message.lastOrderId !== undefined && (obj.lastOrderId = message.lastOrderId)
    message.lastPrice !== undefined && (obj.lastPrice = message.lastPrice)
    message.currentBatchId !== undefined &&
      (obj.currentBatchId = message.currentBatchId)
    return obj
  },
  fromPartial (object) {
    const message = { ...basePair }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
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
    if (object.escrowAddress !== undefined && object.escrowAddress !== null) {
      message.escrowAddress = object.escrowAddress
    } else {
      message.escrowAddress = ''
    }
    if (object.lastOrderId !== undefined && object.lastOrderId !== null) {
      message.lastOrderId = object.lastOrderId
    } else {
      message.lastOrderId = 0
    }
    if (object.lastPrice !== undefined && object.lastPrice !== null) {
      message.lastPrice = object.lastPrice
    } else {
      message.lastPrice = ''
    }
    if (object.currentBatchId !== undefined && object.currentBatchId !== null) {
      message.currentBatchId = object.currentBatchId
    } else {
      message.currentBatchId = 0
    }
    return message
  }
}
const basePool = {
  id: 0,
  pairId: 0,
  reserveAddress: '',
  poolCoinDenom: '',
  lastDepositRequestId: 0,
  lastWithdrawRequestId: 0,
  disabled: false
}
export const Pool = {
  encode (message, writer = Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.pairId !== 0) {
      writer.uint32(16).uint64(message.pairId)
    }
    if (message.reserveAddress !== '') {
      writer.uint32(26).string(message.reserveAddress)
    }
    if (message.poolCoinDenom !== '') {
      writer.uint32(34).string(message.poolCoinDenom)
    }
    if (message.lastDepositRequestId !== 0) {
      writer.uint32(40).uint64(message.lastDepositRequestId)
    }
    if (message.lastWithdrawRequestId !== 0) {
      writer.uint32(48).uint64(message.lastWithdrawRequestId)
    }
    if (message.disabled === true) {
      writer.uint32(56).bool(message.disabled)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePool }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64())
          break
        case 2:
          message.pairId = longToNumber(reader.uint64())
          break
        case 3:
          message.reserveAddress = reader.string()
          break
        case 4:
          message.poolCoinDenom = reader.string()
          break
        case 5:
          message.lastDepositRequestId = longToNumber(reader.uint64())
          break
        case 6:
          message.lastWithdrawRequestId = longToNumber(reader.uint64())
          break
        case 7:
          message.disabled = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...basePool }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = Number(object.pairId)
    } else {
      message.pairId = 0
    }
    if (object.reserveAddress !== undefined && object.reserveAddress !== null) {
      message.reserveAddress = String(object.reserveAddress)
    } else {
      message.reserveAddress = ''
    }
    if (object.poolCoinDenom !== undefined && object.poolCoinDenom !== null) {
      message.poolCoinDenom = String(object.poolCoinDenom)
    } else {
      message.poolCoinDenom = ''
    }
    if (
      object.lastDepositRequestId !== undefined &&
      object.lastDepositRequestId !== null
    ) {
      message.lastDepositRequestId = Number(object.lastDepositRequestId)
    } else {
      message.lastDepositRequestId = 0
    }
    if (
      object.lastWithdrawRequestId !== undefined &&
      object.lastWithdrawRequestId !== null
    ) {
      message.lastWithdrawRequestId = Number(object.lastWithdrawRequestId)
    } else {
      message.lastWithdrawRequestId = 0
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = Boolean(object.disabled)
    } else {
      message.disabled = false
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.id !== undefined && (obj.id = message.id)
    message.pairId !== undefined && (obj.pairId = message.pairId)
    message.reserveAddress !== undefined &&
      (obj.reserveAddress = message.reserveAddress)
    message.poolCoinDenom !== undefined &&
      (obj.poolCoinDenom = message.poolCoinDenom)
    message.lastDepositRequestId !== undefined &&
      (obj.lastDepositRequestId = message.lastDepositRequestId)
    message.lastWithdrawRequestId !== undefined &&
      (obj.lastWithdrawRequestId = message.lastWithdrawRequestId)
    message.disabled !== undefined && (obj.disabled = message.disabled)
    return obj
  },
  fromPartial (object) {
    const message = { ...basePool }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = object.pairId
    } else {
      message.pairId = 0
    }
    if (object.reserveAddress !== undefined && object.reserveAddress !== null) {
      message.reserveAddress = object.reserveAddress
    } else {
      message.reserveAddress = ''
    }
    if (object.poolCoinDenom !== undefined && object.poolCoinDenom !== null) {
      message.poolCoinDenom = object.poolCoinDenom
    } else {
      message.poolCoinDenom = ''
    }
    if (
      object.lastDepositRequestId !== undefined &&
      object.lastDepositRequestId !== null
    ) {
      message.lastDepositRequestId = object.lastDepositRequestId
    } else {
      message.lastDepositRequestId = 0
    }
    if (
      object.lastWithdrawRequestId !== undefined &&
      object.lastWithdrawRequestId !== null
    ) {
      message.lastWithdrawRequestId = object.lastWithdrawRequestId
    } else {
      message.lastWithdrawRequestId = 0
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled
    } else {
      message.disabled = false
    }
    return message
  }
}
const baseDepositRequest = {
  id: 0,
  poolId: 0,
  msgHeight: 0,
  depositor: '',
  status: 0
}
export const DepositRequest = {
  encode (message, writer = Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId)
    }
    if (message.msgHeight !== 0) {
      writer.uint32(24).int64(message.msgHeight)
    }
    if (message.depositor !== '') {
      writer.uint32(34).string(message.depositor)
    }
    for (const v of message.depositCoins) {
      Coin.encode(v, writer.uint32(42).fork()).ldelim()
    }
    for (const v of message.acceptedCoins) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim()
    }
    if (message.mintedPoolCoin !== undefined) {
      Coin.encode(message.mintedPoolCoin, writer.uint32(58).fork()).ldelim()
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseDepositRequest }
    message.depositCoins = []
    message.acceptedCoins = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64())
          break
        case 2:
          message.poolId = longToNumber(reader.uint64())
          break
        case 3:
          message.msgHeight = longToNumber(reader.int64())
          break
        case 4:
          message.depositor = reader.string()
          break
        case 5:
          message.depositCoins.push(Coin.decode(reader, reader.uint32()))
          break
        case 6:
          message.acceptedCoins.push(Coin.decode(reader, reader.uint32()))
          break
        case 7:
          message.mintedPoolCoin = Coin.decode(reader, reader.uint32())
          break
        case 8:
          message.status = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseDepositRequest }
    message.depositCoins = []
    message.acceptedCoins = []
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId)
    } else {
      message.poolId = 0
    }
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = Number(object.msgHeight)
    } else {
      message.msgHeight = 0
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor)
    } else {
      message.depositor = ''
    }
    if (object.depositCoins !== undefined && object.depositCoins !== null) {
      for (const e of object.depositCoins) {
        message.depositCoins.push(Coin.fromJSON(e))
      }
    }
    if (object.acceptedCoins !== undefined && object.acceptedCoins !== null) {
      for (const e of object.acceptedCoins) {
        message.acceptedCoins.push(Coin.fromJSON(e))
      }
    }
    if (object.mintedPoolCoin !== undefined && object.mintedPoolCoin !== null) {
      message.mintedPoolCoin = Coin.fromJSON(object.mintedPoolCoin)
    } else {
      message.mintedPoolCoin = undefined
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status)
    } else {
      message.status = 0
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.id !== undefined && (obj.id = message.id)
    message.poolId !== undefined && (obj.poolId = message.poolId)
    message.msgHeight !== undefined && (obj.msgHeight = message.msgHeight)
    message.depositor !== undefined && (obj.depositor = message.depositor)
    if (message.depositCoins) {
      obj.depositCoins = message.depositCoins.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.depositCoins = []
    }
    if (message.acceptedCoins) {
      obj.acceptedCoins = message.acceptedCoins.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.acceptedCoins = []
    }
    message.mintedPoolCoin !== undefined &&
      (obj.mintedPoolCoin = message.mintedPoolCoin
        ? Coin.toJSON(message.mintedPoolCoin)
        : undefined)
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status))
    return obj
  },
  fromPartial (object) {
    const message = { ...baseDepositRequest }
    message.depositCoins = []
    message.acceptedCoins = []
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId
    } else {
      message.poolId = 0
    }
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = object.msgHeight
    } else {
      message.msgHeight = 0
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor
    } else {
      message.depositor = ''
    }
    if (object.depositCoins !== undefined && object.depositCoins !== null) {
      for (const e of object.depositCoins) {
        message.depositCoins.push(Coin.fromPartial(e))
      }
    }
    if (object.acceptedCoins !== undefined && object.acceptedCoins !== null) {
      for (const e of object.acceptedCoins) {
        message.acceptedCoins.push(Coin.fromPartial(e))
      }
    }
    if (object.mintedPoolCoin !== undefined && object.mintedPoolCoin !== null) {
      message.mintedPoolCoin = Coin.fromPartial(object.mintedPoolCoin)
    } else {
      message.mintedPoolCoin = undefined
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = 0
    }
    return message
  }
}
const baseWithdrawRequest = {
  id: 0,
  poolId: 0,
  msgHeight: 0,
  withdrawer: '',
  status: 0
}
export const WithdrawRequest = {
  encode (message, writer = Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId)
    }
    if (message.msgHeight !== 0) {
      writer.uint32(24).int64(message.msgHeight)
    }
    if (message.withdrawer !== '') {
      writer.uint32(34).string(message.withdrawer)
    }
    if (message.poolCoin !== undefined) {
      Coin.encode(message.poolCoin, writer.uint32(42).fork()).ldelim()
    }
    for (const v of message.withdrawnCoins) {
      Coin.encode(v, writer.uint32(50).fork()).ldelim()
    }
    if (message.status !== 0) {
      writer.uint32(56).int32(message.status)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseWithdrawRequest }
    message.withdrawnCoins = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64())
          break
        case 2:
          message.poolId = longToNumber(reader.uint64())
          break
        case 3:
          message.msgHeight = longToNumber(reader.int64())
          break
        case 4:
          message.withdrawer = reader.string()
          break
        case 5:
          message.poolCoin = Coin.decode(reader, reader.uint32())
          break
        case 6:
          message.withdrawnCoins.push(Coin.decode(reader, reader.uint32()))
          break
        case 7:
          message.status = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseWithdrawRequest }
    message.withdrawnCoins = []
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = Number(object.poolId)
    } else {
      message.poolId = 0
    }
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = Number(object.msgHeight)
    } else {
      message.msgHeight = 0
    }
    if (object.withdrawer !== undefined && object.withdrawer !== null) {
      message.withdrawer = String(object.withdrawer)
    } else {
      message.withdrawer = ''
    }
    if (object.poolCoin !== undefined && object.poolCoin !== null) {
      message.poolCoin = Coin.fromJSON(object.poolCoin)
    } else {
      message.poolCoin = undefined
    }
    if (object.withdrawnCoins !== undefined && object.withdrawnCoins !== null) {
      for (const e of object.withdrawnCoins) {
        message.withdrawnCoins.push(Coin.fromJSON(e))
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = requestStatusFromJSON(object.status)
    } else {
      message.status = 0
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.id !== undefined && (obj.id = message.id)
    message.poolId !== undefined && (obj.poolId = message.poolId)
    message.msgHeight !== undefined && (obj.msgHeight = message.msgHeight)
    message.withdrawer !== undefined && (obj.withdrawer = message.withdrawer)
    message.poolCoin !== undefined &&
      (obj.poolCoin = message.poolCoin
        ? Coin.toJSON(message.poolCoin)
        : undefined)
    if (message.withdrawnCoins) {
      obj.withdrawnCoins = message.withdrawnCoins.map(e =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.withdrawnCoins = []
    }
    message.status !== undefined &&
      (obj.status = requestStatusToJSON(message.status))
    return obj
  },
  fromPartial (object) {
    const message = { ...baseWithdrawRequest }
    message.withdrawnCoins = []
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = object.poolId
    } else {
      message.poolId = 0
    }
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = object.msgHeight
    } else {
      message.msgHeight = 0
    }
    if (object.withdrawer !== undefined && object.withdrawer !== null) {
      message.withdrawer = object.withdrawer
    } else {
      message.withdrawer = ''
    }
    if (object.poolCoin !== undefined && object.poolCoin !== null) {
      message.poolCoin = Coin.fromPartial(object.poolCoin)
    } else {
      message.poolCoin = undefined
    }
    if (object.withdrawnCoins !== undefined && object.withdrawnCoins !== null) {
      for (const e of object.withdrawnCoins) {
        message.withdrawnCoins.push(Coin.fromPartial(e))
      }
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = 0
    }
    return message
  }
}
const baseOrder = {
  id: 0,
  pairId: 0,
  msgHeight: 0,
  orderer: '',
  direction: 0,
  price: '',
  amount: '',
  openAmount: '',
  batchId: 0,
  status: 0
}
export const Order = {
  encode (message, writer = Writer.create()) {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.pairId !== 0) {
      writer.uint32(16).uint64(message.pairId)
    }
    if (message.msgHeight !== 0) {
      writer.uint32(24).int64(message.msgHeight)
    }
    if (message.orderer !== '') {
      writer.uint32(34).string(message.orderer)
    }
    if (message.direction !== 0) {
      writer.uint32(40).int32(message.direction)
    }
    if (message.offerCoin !== undefined) {
      Coin.encode(message.offerCoin, writer.uint32(50).fork()).ldelim()
    }
    if (message.remainingOfferCoin !== undefined) {
      Coin.encode(message.remainingOfferCoin, writer.uint32(58).fork()).ldelim()
    }
    if (message.receivedCoin !== undefined) {
      Coin.encode(message.receivedCoin, writer.uint32(66).fork()).ldelim()
    }
    if (message.price !== '') {
      writer.uint32(74).string(message.price)
    }
    if (message.amount !== '') {
      writer.uint32(82).string(message.amount)
    }
    if (message.openAmount !== '') {
      writer.uint32(90).string(message.openAmount)
    }
    if (message.batchId !== 0) {
      writer.uint32(96).uint64(message.batchId)
    }
    if (message.expireAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expireAt),
        writer.uint32(106).fork()
      ).ldelim()
    }
    if (message.status !== 0) {
      writer.uint32(112).int32(message.status)
    }
    return writer
  },
  decode (input, length) {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseOrder }
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64())
          break
        case 2:
          message.pairId = longToNumber(reader.uint64())
          break
        case 3:
          message.msgHeight = longToNumber(reader.int64())
          break
        case 4:
          message.orderer = reader.string()
          break
        case 5:
          message.direction = reader.int32()
          break
        case 6:
          message.offerCoin = Coin.decode(reader, reader.uint32())
          break
        case 7:
          message.remainingOfferCoin = Coin.decode(reader, reader.uint32())
          break
        case 8:
          message.receivedCoin = Coin.decode(reader, reader.uint32())
          break
        case 9:
          message.price = reader.string()
          break
        case 10:
          message.amount = reader.string()
          break
        case 11:
          message.openAmount = reader.string()
          break
        case 12:
          message.batchId = longToNumber(reader.uint64())
          break
        case 13:
          message.expireAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 14:
          message.status = reader.int32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },
  fromJSON (object) {
    const message = { ...baseOrder }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = Number(object.pairId)
    } else {
      message.pairId = 0
    }
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = Number(object.msgHeight)
    } else {
      message.msgHeight = 0
    }
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = String(object.orderer)
    } else {
      message.orderer = ''
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
      object.remainingOfferCoin !== undefined &&
      object.remainingOfferCoin !== null
    ) {
      message.remainingOfferCoin = Coin.fromJSON(object.remainingOfferCoin)
    } else {
      message.remainingOfferCoin = undefined
    }
    if (object.receivedCoin !== undefined && object.receivedCoin !== null) {
      message.receivedCoin = Coin.fromJSON(object.receivedCoin)
    } else {
      message.receivedCoin = undefined
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
    if (object.openAmount !== undefined && object.openAmount !== null) {
      message.openAmount = String(object.openAmount)
    } else {
      message.openAmount = ''
    }
    if (object.batchId !== undefined && object.batchId !== null) {
      message.batchId = Number(object.batchId)
    } else {
      message.batchId = 0
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = fromJsonTimestamp(object.expireAt)
    } else {
      message.expireAt = undefined
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = orderStatusFromJSON(object.status)
    } else {
      message.status = 0
    }
    return message
  },
  toJSON (message) {
    const obj = {}
    message.id !== undefined && (obj.id = message.id)
    message.pairId !== undefined && (obj.pairId = message.pairId)
    message.msgHeight !== undefined && (obj.msgHeight = message.msgHeight)
    message.orderer !== undefined && (obj.orderer = message.orderer)
    message.direction !== undefined &&
      (obj.direction = orderDirectionToJSON(message.direction))
    message.offerCoin !== undefined &&
      (obj.offerCoin = message.offerCoin
        ? Coin.toJSON(message.offerCoin)
        : undefined)
    message.remainingOfferCoin !== undefined &&
      (obj.remainingOfferCoin = message.remainingOfferCoin
        ? Coin.toJSON(message.remainingOfferCoin)
        : undefined)
    message.receivedCoin !== undefined &&
      (obj.receivedCoin = message.receivedCoin
        ? Coin.toJSON(message.receivedCoin)
        : undefined)
    message.price !== undefined && (obj.price = message.price)
    message.amount !== undefined && (obj.amount = message.amount)
    message.openAmount !== undefined && (obj.openAmount = message.openAmount)
    message.batchId !== undefined && (obj.batchId = message.batchId)
    message.expireAt !== undefined &&
      (obj.expireAt =
        message.expireAt !== undefined ? message.expireAt.toISOString() : null)
    message.status !== undefined &&
      (obj.status = orderStatusToJSON(message.status))
    return obj
  },
  fromPartial (object) {
    const message = { ...baseOrder }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.pairId !== undefined && object.pairId !== null) {
      message.pairId = object.pairId
    } else {
      message.pairId = 0
    }
    if (object.msgHeight !== undefined && object.msgHeight !== null) {
      message.msgHeight = object.msgHeight
    } else {
      message.msgHeight = 0
    }
    if (object.orderer !== undefined && object.orderer !== null) {
      message.orderer = object.orderer
    } else {
      message.orderer = ''
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
      object.remainingOfferCoin !== undefined &&
      object.remainingOfferCoin !== null
    ) {
      message.remainingOfferCoin = Coin.fromPartial(object.remainingOfferCoin)
    } else {
      message.remainingOfferCoin = undefined
    }
    if (object.receivedCoin !== undefined && object.receivedCoin !== null) {
      message.receivedCoin = Coin.fromPartial(object.receivedCoin)
    } else {
      message.receivedCoin = undefined
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
    if (object.openAmount !== undefined && object.openAmount !== null) {
      message.openAmount = object.openAmount
    } else {
      message.openAmount = ''
    }
    if (object.batchId !== undefined && object.batchId !== null) {
      message.batchId = object.batchId
    } else {
      message.batchId = 0
    }
    if (object.expireAt !== undefined && object.expireAt !== null) {
      message.expireAt = object.expireAt
    } else {
      message.expireAt = undefined
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = 0
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
