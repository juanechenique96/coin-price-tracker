export default function HeroSection() {
    return (
        <section id="about" className="hero">
            <div className="phrase">
                <h1 className="title-1">Welcome to</h1>
                <h1 className="title-2">Coin tracker</h1>
                <h2 className="subtitle">A real time crypto tracker</h2>
            </div>
            <div className="logos">
                <div className="btc">
                    <img src="/Bitcoin-Logo.png" />
                </div>
                <div className="eth">
                    <img src="/Ethereum-Logo.png" />
                </div>
            </div>

            <style jsx>{`
                .hero {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    margin-top: 120px;
                    margin-bottom: 90px;
                }
                .phrase {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    position: absolute;
                    z-index: 0;
                }
                .title-1, .title-2 {
                    font-size: 64px;
                    font-weight: 700;
                    color: #191716;
                }
                .subtitle {
                    font-weight: 400;
                    font-size: 28px;
                    color: #635d5a;
                    padding-left: 50px;
                    padding-bottom: 10px;
                }
                .logos {
                    display: grid;
                    grid-template-columns: 50% 50%;
                    grid-template-rows: 50% 50%;
                    width: 760px;
                    height: 150px;
                }
                .logos img {
                    height: 70px;
                    width: auto;
                }
                .btc {
                    z-index: 1;
                    display: flex;
                    justify-content: center;
                    margin-right: 42px;
                }
                .eth {
                    display: flex;
                    justify-content: center;
                    grid-column-start: 2;
                    grid-row-start: 2;
                    margin-top: 10px; 
                    margin-left: 30px;
                }

                @media only screen and (max-width: 840px){
                    .title-1, .title-2 {
                        font-size: 48px;
                    }
                    .subtitle {
                        font-size: 16px;
                    }
                    .logos {
                        width: 400px;
                    }
                    .logos img {
                        height: 40px;
                    }
                    .btc {
                       margin-right: 42px;
                       margin-top: 32px;
                    }
                    .eth {
                        grid-row-start: 1;
                        margin-left: 32px;
                        margin-top: 32px;
                    }
                }
            `}</style>
        </section>
    )
}