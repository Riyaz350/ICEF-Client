import { useEffect, useRef, useState } from 'react';
import Form2 from './Form2';
import logo from './Logo';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { extractDateTime } from '../Tools/Time';
import emailjs from '@emailjs/browser';
import useRegistrations from '../Hooks/useRegistrations';
import ThankYouModal from '../ThankYouModal';  // Import the modal
import Form from '../RegistrationList/Form';

const MainForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNO] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [academic, setAcademic] = useState('');
  const [course, setCourse] = useState('');
  const [university, setUniversity] = useState('');
  const [selected, setSelected] = useState(0);
  const [errors, setErrors] = useState([]);
  const [firstFormData, setFirstFormData] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);  // State to control modal visibility

  const axiosPublic = useAxiosPublic();
  const time = extractDateTime();
  const placeholderText = 'Select a country';

  const forms = useRef();
  const studentName = firstName + " " + lastName;
  const studentMessage = `Thank you for submitting a form.\nOur counsellor will contact you soon.`;

  const CPs = [
    { "counsellorMail": 'UK', "counsellorName": 'UK' },
    { "counsellorMail": 'USA', "counsellorName": 'USA' },
    { "counsellorMail": 'Canada', "counsellorName": 'Canada' },
    { "counsellorMail": 'Australia', "counsellorName": 'Australia' },
    { "counsellorMail": 'New Zealand', "counsellorName": 'New Zealand' },
    { "counsellorMail": 'Germany', "counsellorName": 'Germany' },
  ];

  const addError = (e) => {
    setErrors(prevErrors => [...prevErrors, e]);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!firstName) addError(1);
    if (!lastName) addError(2);
    if (!mobileNo) addError(3);
    if (!email) addError(4);
    if (!academic) addError(5);
    if (!country) addError(6);
    if (!course) addError(7);
    if (!university) addError(8);

    if (errors.length === 0 && firstName && lastName && email) {
      axiosPublic.post('/registrations', { formData: firstFormData, cpName: '', cpMail: '', time: time })
        .then(res => {
          if (res.status === 200) {
            const mailBody = { name: firstName + " " + lastName, to: email, mail: `Thank you for submitting a form \n Our counsellor will contact you soon. `, subject: 'Thank you for submitting a form.' }
            axiosPublic.post('/sendMail', mailBody)
              .then(res => console.log(res.status))



            setIsModalOpen(true);

            setTimeout(() => {
              location.reload();
            }, 5000);
          }
        });
    }
  };

  useEffect(() => {
    const data = { firstName, lastName, mobileNo, email, country: country.counsellorName, academic, course, university };
    setFirstFormData(data);
  }, [firstName, lastName, mobileNo, email, country, academic, course, university]);

  return (
    <div className='max-w-5xl lg:py-10 mx-auto'>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center   rounded-3xl  lg:pr-10 bg-white shadow-lg min-h-screen">
        <div
          style={{background: `radial-gradient(circle, rgba(112,196,206,1) 0%, rgba(17,47,109,1) 100%)`}}
          className="         w-full text-white gap-5 lg:w-3/4    bg-[#112f6d] lg:rounded-3xl h-full flex lg:px-10 items-start justify-center p-10 lg:p-0 lg:min-h-screen  ">
          <div className="my-auto bg-[#70c4ce]/10 backdrop-blur-md border border-white/20 rounded-lg p-6 space-y-10">
            <div className='flex justify-center'>
              <img className='pt-1 lg:pt-2 w-[40px] lg:w-fit' src={logo} alt="" />
              <h1 className='text-center font-semibold text-xl md:text-3xl lg:text-5xl'>ICEF</h1>

            </div>
            <p className='text-center font-normal text-xs md:text-base lg:text-md'>At the heart of the international education industry, we facilitate access to the right relationships, insight, and training to drive growth for the sector’s educational institutions, student recruitment agents, and connected service providers.</p>
          </div>
        </div>

        <div className='h-full w-full col-span-2 my-auto p-10 lg:p-0'>
          <form ref={forms} onSubmit={sendEmail} className="grid gap-2 lg:gap-5 font-medium">
            <div className='flex gap-5'>
              <Form2 int={1} label='Student First Name' state={firstName} setState={setFirstName} placeholder='John' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
              <Form2 int={2} label='Student Last Name' state={lastName} setState={setLastName} placeholder='Doe' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
            </div>
            <Form2 int={3} label='Mobile No:' state={mobileNo} setState={setMobileNO} placeholder='+8801---------' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'number'} />
            <Form2 int={4} label='Email' state={email} setState={setEmail} placeholder='Email' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'email'} />
            <Form2 int={5} label='Academic Qualification' state={academic} setState={setAcademic} placeholder='Intermediate' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
            <Form int={6} label='Select a country' state={country} setState={setCountry} dataArray={CPs} selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} placeholder={placeholderText} />
            <Form2 int={7} label={`In which course you're interested?`} state={course} setState={setCourse} placeholder='CSE/English/Literature' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
            <Form2 int={8} label={'Interested University'} state={university} setState={setUniversity} placeholder='Oxford/Angela Ruskin' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
            <div>
              <textarea className='hidden' value={`${studentMessage}\nPlease be on time`} name="message" />
              <div className="hidden">
                <input value={studentName} type="text" name="to_name" />
                <input value={email} type="email" name="to_mail" />
              </div>
              <button type="submit" value="Send" className="  w-full lg:ml-auto btn-primary text-base lg:text-lg text-white bg-[#3291cf] hover:bg-[#20264c] rounded-xl p-2 my-10 font-bold">Submit</button>
            </div>
          </form>
        </div>
      </div>

      <ThankYouModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MainForm;