import React, { useState } from 'react';
import { Mail, Globe, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactWindow = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    // Replace these with your EmailJS service/template/public key
    const serviceID = '';
    const templateID = '';
    const publicKey = '';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        alert('Failed to send message: ' + err.text);
      });
  };

  return (
    <div className="p-4 bg-white h-full">
      <div className="flex items-center gap-2 mb-4">
        <Mail size={16} />
        <h2 className="text-lg font-bold text-win95-blue-title">Contact Information</h2>
      </div>
      
      <div className="space-y-4">
        <div className="win95-window p-3">
          <h3 className="font-bold text-sm mb-2">Get In Touch</h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <Mail size={12} />
              <span>omar.chiboub.w@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={12} />
              <span>https://omarchiboubportfolio.netlify.app/</span>
            </div>
          </div>
        </div>

        <div className="win95-window p-3">
          <h3 className="font-bold text-sm mb-2">Social Links</h3>
          <div className="space-y-2">
            <a
              href="https://github.com/R4M-0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="win95-button flex items-center gap-2 text-xs w-full justify-start">
                <Github size={12} />
                R4M-0
              </button>
            </a>

            <a
              href="https://www.linkedin.com/in/omar-chiboub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="win95-button flex items-center gap-2 text-xs w-full justify-start">
                <Linkedin size={12} />
                Omar Chiboub
              </button>
            </a>

          </div>
        </div>

        <form className="win95-window p-3" onSubmit={handleSend}>
          <h3 className="font-bold text-sm mb-2">Quick Message</h3>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full p-2 mb-2 border-2 border-inset text-xs"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 mb-2 border-2 border-inset text-xs"
            required
          />
          <textarea 
            placeholder="Type your message here..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            className="w-full h-16 p-2 border-2 border-inset text-xs resize-none"
            required
          />
          <button type="submit" className="win95-button mt-2">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactWindow;