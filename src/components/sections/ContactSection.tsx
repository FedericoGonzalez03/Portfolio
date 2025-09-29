'use client';
import { useLanguage } from '@/lib/context/LanguageContext';
import { Mail, Linkedin, Github } from 'lucide-react';
import Parallax from '../Parallax';
import kart from '@/public/purple-pixel.gif';
import LoadingSpinner from '../LoadingSpinner';
import { useState } from 'react';
import { useToast } from '../ToastProvider';

const ContactSection = () => {
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = t.nameRequired;
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired;
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.emailInvalid;
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t.messageRequired;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': process.env.NEXT_PUBLIC_API_KEY || ''
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        showToast(t.successMessageSent, 'success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        showToast(t.errorSendingMessage, 'error');
      }
    } catch (error) {
      showToast(t.errorSendingMessage, 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <LoadingSpinner isLoading={isLoading} text='Enviando mensaje...' />
      <Parallax
        urlImage={kart.src}
        className='py-20 px-4'
        minHeight='0px'
      >
        <section id="contact">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-8  text-shadow-lg/90">
              {t.getInTouch}
            </h2>
            <p className="text-lg text-neutral-300 mb-8 text-shadow-lg/90">
              {t.getInTouchDescription}
            </p>
            <form className='mb-12' onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className='flex-1'>
                  <label htmlFor='name' className="place-self-start block mb-2 text-sm font-bold text-neutral-300">{t.name}</label>
                  <input
                    name='name'
                    id='name'
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder={t.namePlaceholder}
                    className="cursor-target w-full px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-950 text-neutral-100 focus:outline-none focus:border-green-400 transition-colors"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600 place-self-start text-shadow-lg/90">{errors.name}</p>}
                </div>
                <div className='flex-1'>
                  <label htmlFor='email' className="place-self-start block mb-2 text-sm font-bold text-neutral-300">{t.email}</label>
                  <input
                    name='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder={t.emailPlaceholder}
                    className="cursor-target w-full px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-950 text-neutral-100 focus:outline-none focus:border-green-400 transition-colors"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600 place-self-start text-shadow-lg/90">{errors.email}</p>}
                </div>
              </div>
              <div className='mb-6'>
                <label htmlFor='message' className="place-self-start block mb-2 text-sm font-bold text-neutral-300">{t.message}</label>
                <textarea
                  name='message'
                  id='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.messagePlaceholder}
                  className="cursor-target w-full px-4 py-2 border border-neutral-600 rounded-lg bg-neutral-950 text-neutral-100 focus:outline-none focus:border-green-400 transition-colors"
                  rows={4}
                ></textarea>
                {errors.message && <p className="text-sm text-red-600 place-self-start text-shadow-lg/90">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="cursor-target px-6 py-3 bg-green-500 text-neutral-950 font-semibold rounded-full shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
              >
                {t.sendMessage}
              </button>
            </form>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://linkedin.com/in/federicogonzalezsalomon"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center px-6 py-3 border-2 border-blue-400 text-blue-400 rounded-full shadow-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/federicogonzalezsalomon"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target inline-flex items-center px-6 py-3 border-2 border-purple-300 text-purple-300 rounded-full shadow-lg hover:bg-purple-700 transform hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-2" /> GitHub
              </a>
            </div>
          </div>
        </section>
      </Parallax>
    </>
  );
};

export default ContactSection;
