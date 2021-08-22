import Head from 'next/head'


import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Coin Tracker | Contact</title>
            </Head>
            <main>
                <Navbar />
                <Form />
                <Footer />

                <style jsx global>{`
                        * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: 'Poppins', sans-serif;
                        }
                        li {
                        list-style-type: none;
                        }

                        a {
                        text-decoration: none;
                        }
                        
                        body {
                        overflow-x: hidden;
                        background-color: #F4F4F8;
                        }
                    `}
                </style>
            </main>
        </>
    )
}