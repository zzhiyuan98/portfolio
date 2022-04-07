import { useRef } from "react";
import emailjs from "emailjs-com";
import "./styles/ContactForm.css";

function ContactForm(props) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
        .then((result) => {
            console.log(result.text);
            alert("success!");
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            alert("failed...", error);
        });
    };

    return (<form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">NAME</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">EMAIL</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="message">MESSAGE</label>
        <textarea id="message" name="message" />
        <button type="submit">
            HIT ME UP
        </button>
    </form>);
}

export default ContactForm;