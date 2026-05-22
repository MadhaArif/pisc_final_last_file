import React, { useState } from 'react';
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore";
import firebaseApp from "../../firebase";

const Result = () => {
    return (
        <p className="success-message" style={{ color: '#1ab69d', marginTop: '20px', marginBottom: '0' }}>Thanks for your query. We will contact with you soon.</p>
    )
}

const ContactUsForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [result, setResult] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        const db = getFirestore(firebaseApp);

        try {
            const docRef = await addDoc(collection(db, "users"), { ...formData, createdAt: Timestamp.fromDate(new Date()) });
            console.log("Document written with ID: ", docRef.id);
            
            // Fire GA4 Event for Form Submission
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'generate_lead', {
                    'event_category': 'Form',
                    'event_label': 'Contact Us Form',
                    'form_id': 'contact-us-form'
                });
            }

            e.target.reset();
            setResult(true);

        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };
   
    setTimeout(() => {
        setResult(false);
    }, 5000);

    return (
        <form id="contact-us-form" className="rnt-contact-form rwt-dynamic-form" action="" onSubmit={sendEmail}>
            <div className="row row--10">
                <div className="form-group col-12">
                    <input type="text" name="name" placeholder="Your name*" required onChange={handleChange} />
                </div>
                <div className="form-group col-12">
                    <input type="email" name="email" placeholder="Enter your email*" required onChange={handleChange} />
                </div>
                <div className="form-group col-12">
                    <input type="tel" name="phone" placeholder="Phone number" onChange={handleChange} />
                </div>
                <div className="form-group col-12">
                    <textarea name="message" cols="30" rows="4" placeholder="Your message" onChange={handleChange}></textarea>
                </div>
                <div className="form-group col-12">
                    <button className="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">Submit Message <i className="icon-4"></i></button>
                </div>
                {result ? <div className="form-group"><Result /></div> : null}
            </div>
        </form>
    )
}

export default ContactUsForm;