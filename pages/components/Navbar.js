import { useState } from "react";

export default function Navbar() {

    const [active, setActive] = useState(false);

    const menuClick = () => {
        setActive(!active);

        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const linkClick = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    return (
        <header>
            <nav className="navbar fixed-top">
                <a href="#" className="nav-logo">Coin Tracker</a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={linkClick}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link" onClick={linkClick}>Contact Us</a>
                    </li>
                </ul>
                <div className="hamburger" onClick={menuClick}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>

            <style jsx>{`
            header {
                border-bottom: 1px solid #E2E8F0;
                margin-bottom: 20px;
            }
            .fixed-top {
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                z-index: 1030;
            }

            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 1.5rem;
                margin: 0rem 2rem;
                background: white;
            }

            .hamburger {
                display: none;
            }

            .bar {
                display: block;
                width: 25px;
                height: 3px;
                margin: 5px auto;
                -webkit-transition: all 0.3s ease-in-out;
                transition: all 0.3s ease-in-out;
                background-color: #101010;
            }

            .nav-menu {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .nav-item {
                margin-left: 5rem;
            }

            .nav-link {
                font-size: 1.4rem;
                font-weight: 400;
                color: #191716;
            }

            .nav-link:hover {
                color: #482ff7;
            }

            .nav-logo {
                font-size: 2.1rem;
                font-weight: 500;
                color: #482ff7;
            }

            @media only screen and (max-width: 890px) {
                .nav-menu {
                    position: fixed;
                    left: -100%;
                    top: 5rem;
                    flex-direction: column;
                    background-color: #fff;
                    width: 100%;
                    border-radius: 10px;
                    text-align: center;
                    transition: 0.3s;
                    box-shadow:
                        0 10px 27px rgba(0, 0, 0, 0.05);
                }

                .nav-menu.active {
                    left: 0;
                }

                .nav-item {
                    margin: 2.5rem 0;
                }

                .hamburger {
                    display: block;
                    cursor: pointer;
                }

                .hamburger.active .bar:nth-child(2) {
                    opacity: 0;
                }

                .hamburger.active .bar:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }

                .hamburger.active .bar:nth-child(3) {
                    transform: translateY(-8px) rotate(-45deg);
                }
                @media only screen and (max-width: 490px) {
                    .navbar {
                        margin: 0px 0px;
                    }
                }
            }
            `}</style>
        </header>
    );
}