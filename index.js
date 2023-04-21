import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { SigningStargateClient, StargateClient, assertIsDeliverTxSuccess } from '@cosmjs/stargate'
import { AminoTypes } from '@cosmjs/stargate'
import { crescentTypes } from './src/aminoConverter.js'
import { defaultRegistry as creRegistry } from './src/registry.js'

const creAminoTypes = new AminoTypes({
  prefix: 'cre',
  additions: crescentTypes
})

const mnemonic =
  ''
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
  prefix: 'cre'
})
const [firstAccount] = await wallet.getAccounts()
const address = firstAccount.address

const rpcEndpoint = 'https://mainnet.crescent.network:26657/'
const client = await SigningStargateClient.connectWithSigner(
  rpcEndpoint,
  wallet,
  {
    registry: creRegistry,
    aminoTypes: creAminoTypes,
    prefix: 'cre'
  }
)
// Limit Order
const limitOrder = {
  typeUrl: '/crescent.liquidity.v1beta1.MsgLimitOrder',
  value: {
    orderer: address,
    // pair_id https://apigw.crescent.network/pair/info
    pairId: 1,
    // orderDirection = pairBaseDenom === offerDenom ? 2 : 1
    direction: 2,
    offerCoin: {
      denom: 'ubcre',
      // 1bcre = 1000000cre
      amount: '100000'
    },
    demandCoinDenom: 'ucre',
    price: `${1.2 * 10 ** 18}`,
    amount: '100000',
    orderLifespan: '0s'
  }
}

// Market Order
const marketOrder = {
  typeUrl: '/crescent.liquidity.v1beta1.MsgMarketOrder',
  value: {
    orderer: address,
    // pair_id https://apigw.crescent.network/pair/info
    pairId: 1,
    // orderDirection = pairBaseDenom === offerDenom ? 2 : 1
    direction: 2,
    offerCoin: {
      denom: 'ubcre',
      // 1bcre = 1000000cre
      amount: '100000'
    },
    demandCoinDenom: 'ucre',
    amount: '10000000',
    orderLifespan: '0s'
  }
}


const fee = {
  amount: [
    {
      "denom": "ucre",
      "amount": "2000"
    }
  ],
    gas: "200000",
}

let result = client.signAndBroadcast(
    address,
    [limitOrder, marketOrder],
    fee,
    'GlacierLuo'
)
assertIsDeliverTxSuccess(result)