import BigNumber from 'bignumber.js';

export const crescentTypes = {
    '/crescent.claim.v1beta1.MsgClaim': {
        aminoType: 'claim/MsgClaim',
        toAmino: ({ airdropId, recipient, conditionType }) => ({
            airdrop_id: String(airdropId),
            recipient,
            condition_type: Number(conditionType),
        }),
        fromAmino: ({ airdrop_id, recipient, condition_type }) => ({
            airdropId: Number(airdrop_id),
            recipient,
            conditionType: condition_type,
        }),
    },
    '/crescent.liquidstaking.v1beta1.MsgLiquidStake': {
        aminoType: 'liquidstaking/MsgLiquidStake',
        toAmino: ({ delegatorAddress, amount }) => ({
            delegator_address: delegatorAddress,
            amount,
        }),
        fromAmino: ({ delegator_address, amount }) => ({
            delegatorAddress: delegator_address,
            amount,
        }),
    },
    '/crescent.liquidstaking.v1beta1.MsgLiquidUnstake': {
        aminoType: 'liquidstaking/MsgLiquidUnstake',
        toAmino: ({ delegatorAddress, amount }) => ({
            delegator_address: delegatorAddress,
            amount,
        }),
        fromAmino: ({ delegator_address, amount }) => ({
            delegatorAddress: delegator_address,
            amount,
        }),
    },
    '/crescent.liquidity.v1beta1.MsgDeposit': {
        aminoType: 'liquidity/MsgDeposit',
        toAmino: ({ depositor, depositCoins, poolId }) => {
            return {
                depositor,
                deposit_coins: depositCoins,
                pool_id: String(poolId),
            };
        },
        fromAmino: ({ depositor, deposit_coins, pool_id }) => {
            return {
                depositor,
                depositCoins: deposit_coins,
                poolId: Number(pool_id),
            };
        },
    },
    '/crescent.liquidity.v1beta1.MsgWithdraw': {
        aminoType: 'liquidity/MsgWithdraw',
        toAmino: ({ withdrawer, poolId, poolCoin }) => {
            return {
                withdrawer,
                pool_id: String(poolId),
                pool_coin: poolCoin,
            };
        },
        fromAmino: ({ withdrawer, pool_id, pool_coin }) => {
            return {
                withdrawer,
                poolId: Number(pool_id),
                poolCoin: pool_coin,
            };
        },
    },
    '/crescent.liquidity.v1beta1.MsgLimitOrder': {
        aminoType: 'liquidity/MsgLimitOrder',
        toAmino: ({
            orderer,
            pairId,
            direction,
            offerCoin,
            demandCoinDenom,
            price,
            amount,
            orderLifespan,
        }) => {
            const _price = `${new BigNumber(price).shiftedBy(-18).toFixed(18)}`;
            return {
                orderer: orderer,
                pair_id: String(pairId),
                direction: Number(direction),
                offer_coin: offerCoin,
                demand_coin_denom: demandCoinDenom,
                price: _price,
                amount: amount,
                order_lifespan: '0',
            };
        },
        fromAmino: ({
            orderer,
            pair_id,
            direction,
            offer_coin,
            demand_coin_denom,
            price,
            amount,
            order_lifespan,
        }) => {
            return {
                orderer: orderer,
                pairId: parseInt(pair_id),
                direction: direction,
                offerCoin: offer_coin,
                demandCoinDenom: demand_coin_denom,
                price: new BigNumber(price).multipliedBy(10 ** 18).toString(),
                amount: amount,
                orderLifespan: { seconds: 0, nanos: 0 },
            };
        },
    },
    '/crescent.farming.v1beta1.MsgStake': {
        aminoType: 'farming/MsgStake',
        toAmino: ({ farmer, stakingCoins }) => {
            return {
                farmer,
                staking_coins: stakingCoins,
            };
        },
        fromAmino: ({ farmer, staking_coins }) => {
            return {
                farmer,
                stakingCoins: staking_coins,
            };
        },
    },
    '/crescent.farming.v1beta1.MsgHarvest': {
        aminoType: 'farming/MsgHarvest',
        toAmino: ({ farmer, stakingCoinDenoms }) => {
            return {
                farmer,
                staking_coin_denoms: stakingCoinDenoms,
            };
        },
        fromAmino: ({ farmer, staking_coin_denoms }) => {
            return {
                farmer,
                stakingCoinDenoms: staking_coin_denoms,
            };
        },
    },
    '/crescent.farming.v1beta1.MsgUnstake': {
        aminoType: 'farming/MsgUnstake',
        toAmino: ({ farmer, unstakingCoins }) => {
            return {
                farmer,
                unstaking_coins: unstakingCoins,
            };
        },
        fromAmino: ({ farmer, unstaking_coins }) => {
            return {
                farmer,
                unstakingCoins: unstaking_coins,
            };
        },
    },
};
