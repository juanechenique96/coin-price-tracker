import Coin from './Coin'

export default function CoinsList({ data }) {
    return (
        <>
            {data.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        id={coin.id}
                        name={coin.name}
                        symbol={coin.symbol}
                        image={coin.image}
                        price={coin.current_price}
                        market_cap={coin.market_cap}
                        volume={coin.total_volume}
                        price_change={coin.price_change_percentage_24h}
                    />
                )
            })}
        </>
    )
}