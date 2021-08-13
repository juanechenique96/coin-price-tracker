export default function Footer() {
    return (
        <footer>
            <div className="info">
                <a href="#">
                    <img className="twitter" src="/twitter.svg" />
                </a>
                <a href="#">
                    <img className="facebook" src="/facebook.svg" />
                </a>
                <a href="#">
                    <img className="instagram" src="/instagram.svg" />
                </a>
            </div>
            <p className="company">© 2021 Coin Tracker.</p>
            <div className="form">

            </div>

            <style jsx>{`
                footer {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #191716;
                    width: 100%;
                    height: 100px;
                    margin-top: 50px;
                }
                .info {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    height: 60%;
                    width: 100%;
                }
                .info * {
                    margin-right: 10px;
                }
                .info *:hover{
                    transform: rotateZ(-4deg);
                }
                .company {
                    color: white;
                    font-size: 12px;
                    margin-right: 15px;
                }
            `}</style>
        </footer>
    )
}