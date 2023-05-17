import React, {useState, useRef} from 'react';
import './Contact.css';


const Contact = () => {

  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzcLZqmyeI6fnNHccAT47sMoKuI6m0lcIl_P_nT3B7cjtoMtUUyGwXZ1x_7Rk-Zzvo5Kw/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='contact'>
        <div className='leftSide'></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>

            <form  ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                <label>Full Name: </label>
                <input name='name' placeholder='Enter full name...' type='text' required/>
                <label>Email: </label>
                <input name='email' placeholder='Enter email...' type='email' required/>
                <label>Message: </label>
                <textarea name='message' rows='6' placeholder='Enter message...' required></textarea>
                <button type='submit' name="submit">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact