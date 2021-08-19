import Image from 'next/image'


export default function Footer() {
    return (
        <footer>
            <div className="info">
                <a href="#">
                    <div className="image-container">
                        <Image
                            className="twitter"
                            src="/twitter.svg"
                            layout="responsive"
                            width={24}
                            height={24}
                        />
                    </div>
                </a>
                <a href="#">
                    <div className="image-container">
                        <Image
                            className="facebook"
                            src="/facebook.svg"
                            layout="responsive"
                            width={24}
                            height={24}
                        />
                    </div>
                </a>
                <a href="#">
                    <div className="image-container">
                        <Image
                            className="instagram"
                            src="/instagram.svg"
                            layout="responsive"
                            width={24}
                            height={24}
                        />
                    </div>
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
                .image-container {
                    width: 24px;
                    height: 24px;
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