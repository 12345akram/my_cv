import "./contact.css";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { MdMarkEmailRead } from "react-icons/md";
import { FaWhatsappSquare, FaFacebookSquare } from "react-icons/fa";
const contactData = [
  {
    id: 1,
    icon: <MdMarkEmailRead/>,
    title:'Email',
    info: 'akramameensaifanam@gmail.com',
    link: 'mailto:akramameensaifanam@gmail.com'
  },
   {
    id: 2,
    icon: <FaWhatsappSquare/>,
    title:'whatsAPP',
    info: '782203877',
    link: 'https://wa.me/967782203877'
  }, {
     id: 3,
    icon: <FaFacebookSquare/>,
    title:'facebook',
    info: 'altofan',
    link: 'https://facebook.com/altofan'
  }
]

const Contact = () => {
    const form = useRef();
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6ld8b76', 'template_x4ykh5j', form.current, {
        publicKey: 'DCX8otLdbVZJSMv9c',
      })
      e.target.reset();
     
  };

  return (
   <section className="contact" id="contact">
    <div className="top_sec">
      <h5>of in toutch</h5>
      <h2> contact us</h2>
    </div>
    <div className="container contact_contaner">
      <div className="contact_options">

      {contactData.map(({id , icon, title, info, link})=>(
        <article key={id} className="contact_option">
          {icon}
          <h4>{title}</h4>
          <h5>{info}</h5>
          <a href={link}target="_blank">send massage</a>
        </article>
      ))}
      </div>
     <form ref={form} onSubmit={sendEmail}>
      <input type="text" placeholder="full name"  name="name"/>
      <input type="email"  placeholder="your email" name="email"/>
      <textarea  rows={10} name="message" id="" placeholder="enter to massage"></textarea>
      <button className="btn btn-primary"> send massage</button>
     </form>
    </div>
     <div className="map_container">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157.1008375695908!2d44.17046007323058!3d15.36005320035612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603ddd3aa42ec8f%3A0x945d25ab2494c6d!2z2KzYp9mF2LnYqSDYp9mE2YbYp9i12LEg2KfZhNin2K_Yp9ix2Kkg2KfZhNi52KfZhdip!5e0!3m2!1sar!2s!4v1757119518309!5m2!1sar!2s"  
       allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
      </div>
      
   </section>
  );
};

export default Contact;
