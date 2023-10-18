'use client';
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslations } from 'next-intl';

export type Contact = {
  company?: string;
  name?: string;
  phone?: string;
  email?: string;
  inquiry?: string;
};
const Contact = () => {
  const t = useTranslations('contact');

  const [contactData, setContactData] = useState<Contact>({ company: '' });
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    contactData.company && contactData.name && contactData.phone && contactData.email && contactData.inquiry
      ? setIsValid(true)
      : setIsValid(false);
  }, [contactData]);

  const postMessageToSlack = async (data: Contact) => {
    let text = `---`;
    if (data.company) text += `\nname: ${data.company}`;
    if (data.name) text += `\ncompany: ${data.name}`;
    if (data.phone) text += `\nemail: ${data.phone}`;
    if (data.email) text += `\nserviceType: ${data.email}`;
    if (data.inquiry) text += `\ndetail: ${data.inquiry}`;

    try {
      const data = {
        channel: process.env.NEXT_PUBLIC_SLACK_HYPERHIREIN_CHANNEL,
        text,
        token: process.env.NEXT_PUBLIC_SLACK_TOKEN,
      };
      const res = await axios.post('https://slack.com/api/chat.postMessage', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout: 2000,
      });
      if (res.status === 200) {
        toast.success(t('complete'), {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setContactData({ company: '', name: '', phone: '', email: '', inquiry: '' });
      }
    } catch (err) {
      console.log('error', err);
      return false;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (contactData) {
      await postMessageToSlack(contactData);
    }
  };

  return (
    <div id="contact" className={'flex flex-row w-full items-center justify-center bg-white py-20 md:py-40'}>
      <div className="flex flex-col flex-1 max-w-screen-xl px-[16px] gap-6">
        <div className={'text-3xl font-bold'}>{t('title')}</div>
        <form className={'flex w-full flex-col items-center gap-2'} onSubmit={handleSubmit}>
          <div className={'flex w-full flex-row gap-2'}>
            <input
              className={
                'flex flex-1 border border-[#DEDEDE] bg-[#F2F1F3] text-[#7E7E7E] p-2 text-sm items-center rounded'
              }
              type="text"
              placeholder={t('company')}
              value={contactData.company}
              onChange={(event) => setContactData({ ...contactData, company: event.target.value })}
            />
            <input
              className={
                'flex flex-1 border border-[#DEDEDE] bg-[#F2F1F3] text-[#7E7E7E] p-2 text-sm items-center rounded'
              }
              type="text"
              placeholder={t('name')}
              value={contactData.name}
              onChange={(event) => setContactData({ ...contactData, name: event.target.value })}
            />
          </div>
          <div className={'flex w-full flex-row gap-2'}>
            <input
              className={
                'flex flex-1 border border-[#DEDEDE] bg-[#F2F1F3] text-[#7E7E7E] p-2 text-sm items-center rounded'
              }
              type="tel"
              placeholder={t('mobile')}
              value={contactData.phone}
              onChange={(event) => setContactData({ ...contactData, phone: event.target.value })}
            />
            <input
              className={
                'flex flex-1 border border-[#DEDEDE] bg-[#F2F1F3] text-[#7E7E7E] p-2 text-sm items-center rounded'
              }
              type="email"
              placeholder={t('email')}
              value={contactData.email}
              onChange={(event) => setContactData({ ...contactData, email: event.target.value })}
            />
          </div>
          <textarea
            className={
              'flex w-full border border-[#DEDEDE] bg-[#F2F1F3] text-[#7E7E7E] p-2 text-sm items-center rounded'
            }
            placeholder={t('detail')}
            value={contactData.inquiry}
            rows={5}
            onChange={(event) => setContactData({ ...contactData, inquiry: event.target.value })}
          />
          <div className={'flex w-full items-center justify-start'}>
            <button
              disabled={!isValid}
              className={`${
                isValid ? 'bg-[#7959f2] cursor-poiner' : 'bg-[#DEDEDE]'
              } bg-[#7959f2] px-[68px] py-[12px] text-white text-base`}
              type="submit">
              {t('send')}
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
export default Contact;
