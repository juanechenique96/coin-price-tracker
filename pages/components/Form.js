import { useState } from 'react'


export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Sending')

        let data = {
            name,
            email,
            message
        }

        let xhr = new XMLHttpRequest()
        xhr.open('POST', '/api/contact')
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.onload = () => {
            console.log(xhr.responseText)

            if (xhr.responseText === 'success') {
                alert('Email sent')
                setName('')
                setEmail('')
                setMessage('')
            } else {
                alert('Somthing went wrong')
            }
        }
        xhr.send(JSON.stringify(data))
    }
    return (
        <>
            <section className="main">
                <div className="container">
                    <h1>Contact Us</h1>
                    <form>
                        <div className="formgroup-data">
                            <input
                                type="text"
                                name="name"
                                className="input"
                                onChange={(e) => { setName(e.target.value) }}
                                required
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="formgroup-data">
                            <input
                                type="email"
                                name="email"
                                className="input"
                                onChange={(e) => { setEmail(e.target.value) }}
                                required
                            />
                            <label htmlFor="email">Email Adress</label>
                        </div>
                        <div className="formgroup-text">
                            <textarea
                                type='text'
                                name='message'
                                className="input"
                                onChange={(e) => { setMessage(e.target.value) }}
                                required
                            />
                            <label htmlFor="message">Write your message</label>
                        </div>

                        <input
                            className="submit"
                            type='submit'
                            onClick={(e) => { handleSubmit(e) }}
                        />
                    </form>
                </div>
            </section>
            <style jsx>{`
            .main {
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border-radius: 9px;
                background-color: white;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                height: 400px;
                width: 500px;
                margin: 105px 0px;
            }
            .container h1 {
                border-bottom: 6px solid #482ff7;
                margin-bottom: 35px;
            }
            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }
            .formgroup-data, .formgroup-text {
                display: flex;
                flex-direction: column;
                width: 50%;
                margin-bottom: 30px;
            }

            .formgroup-data input, .formgroup-text textarea{
                z-index: 0;
                display: block;
                width: 100%;
                height: 30px;
                font-size: 17px;
                border: none;
                border-bottom: 2px solid rgba(0,0,0,0.12);
            }
            .formgroup-data label, .formgroup-text label{
                z-index: 1;
                position: absolute;
                pointer-events: none;
                font-weight: 400;
                transition: all 0.3s ease;
            }
            .formgroup-text textarea {
                resize: none;
            }
            .formgroup-text textarea:focus {
                height: 100px;
            }
            .formgroup-data input:focus,
            .formgroup-text textarea:focus{
                border-bottom: 3px solid rgba(72, 47, 247, 0.8);
                outline: none;
            }
            .formgroup-data input:focus ~ label,
            .formgroup-text textarea:focus ~ label {
                transform: translateY(-20px);
                font-size: 14px;
                color: #482ff7;
            }
            .formgroup-data input:valid ~ label,
            .formgroup-text textarea:valid ~ label {
                transform: translateY(-20px);
                font-size: 14px;
                color: #482ff7;
            }
            {/* .formgroup-data input:invalid ,
            .formgroup-text textarea:invalid {
                border-bottom: 3px solid rgba(247, 47, 47, 0.8);
                outline: none;
            }
            .formgroup-data input:invalid ~ label,
            .formgroup-text textarea:invalid ~ label {
                transform: translateY(-20px);
                font-size: 14px;
                color: #482ff7;
            } */}
            .submit {
                width: 106px;
                height: 25px;
                border: none;
                background-color: #482ff7;
                color: white;
                font-size: 17px;
                font-weight: 400;
                cursor: pointer;
                box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
            }
            @media only screen and (max-width: 600px) {
                    .container {
                        width: 350px;
                    }
                }
        `}</style>
        </>
    )
}