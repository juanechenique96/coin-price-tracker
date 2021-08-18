import Head from 'next/head'


import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Coin Tracker | Contact</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>
            <body>
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
            `}</style>
            </body>
        </>)
}