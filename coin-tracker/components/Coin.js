export default function Coin({ image, name, symbol, price, volume, price_change, market_cap }) {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt={name} />
                    <h2>{name}</h2>
                    <p>{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price" title="Price">${price.toLocaleString()}</p>
                    <p className="coin-volume" title="Volume">${volume.toLocaleString()}</p>
                    {price_change < 0 ? (
                        <p className="coin-percentChange red" title="Price change in the last 24hs">{price_change.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percentChange green" title="Price change in the last 24hs">{price_change.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketCap" title="Market capital">${market_cap.toLocaleString()}</p>
                </div>
            </div>

            <style jsx>{`
                .coin-container {
                    display: flex;
                    justify-content: center;
                }
                .coin-row {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    height: 80px;
                    width: 70%;
                    border-bottom: 1px solid #E2E8F0;
                }
                .coin {
                    display: flex;
                    align-items: center;
                    padding-right:12px;
                    min-width: 220px;
                }          
                .coin img {
                    height: 35px;
                    width: 35px;
                    margin-right: 10px;
                }
                .coin h2 {
                    font-size: 16px;
                    font-weight: 700;
                    width: 140px;
                    color: #191716;
                }
                .coin p {
                    text-transform: uppercase;
                    color: #191716;
                }
                .coin-data {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    text-align: right;
                    width: 100%;
                }
                .coin-price {
                width: 110px;
                color: #191716;
                }

                .coin-volume {
                width: 155px;
                color: #191716;
                }

                .coin-marketCap {
                width: 160px;
                color: #191716;
                }

                .coin-percent {
                width: 100px;
                }

                .red {
                color: #C20114;
                }

                .green {
                color: #01C22B;
                }

                @media only screen and (max-width: 960px){
                    .coin {
                        padding-right: 12px;
                        min-width: 160px;
                    }
                    .coin h2 {
                        width: 90px;
                    }
                    .coin-price {
                        width: 110px;
                    }

                    .coin-volume {
                        width: 155px;
                    }

                    .coin-marketCap {
                     width: 140px;
                    }

                    .coin-percent {
                        width: 100px;
                    }
                }
                @media only screen and (max-width: 930px){
                    .coin-row {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        border: none;
                        border-radius: 10px;
                        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                        height: 70px;
                        width: 70%;
                        margin-bottom: 30px;
                    }
                    .coin {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 40%;
                        min-width: 0px;
                        padding-right: 0px;                      
                    }
                    .coin-data {
                        justify-content: space-around;
                        width: 60%;
                    }
                    .coin h2 {
                        display: none;
                    }
                    .coin-volume {
                        display: none;
                    }
                    .coin-marketCap {
                        display: none;
                    }
                    .coin-price {
                        width: auto;
                    }
                    .coin-percent {
                        width: auto;
                    }              
                }

            `}</style>
        </div>
    )
}