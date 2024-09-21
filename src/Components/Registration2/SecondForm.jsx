import { useEffect, useState } from 'react';
import Form2 from './Form2';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Form1 from './Form1';

const SecondForm = ({ pageNo, setPageNo, setSecondFormData }) => {
    const [selected, setSelected] = useState(0);
    const [errors, setErrors] = useState([])
    const [companyName, setCompanyName] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postCode, setPostCode] = useState('')
    const [country, setCountry] = useState('')
    const [recruitCountry, setRecruitCountry] = useState('')


    const addError = (e) => {
        setErrors(prevErrors => [...prevErrors, e]);
    };

    const next = (e) => {
        e.preventDefault();
        if (!companyName) addError(1);
        if (!address) addError(2);
        if (!city) addError(3);
        if (!postCode) addError(4);
        if (!country) addError(5);
        if (!recruitCountry) addError(6);

        if (errors.length === 0 && companyName && address && city && postCode && country && recruitCountry) {
            setPageNo(pageNo + 1)
        } else {
            alert('fuck')
        }
    }
    useEffect(() => {
        const data = {   companyName, address, city, website };
        setSecondFormData(data);
    }, [companyName, address, website, city, setSecondFormData]);

    return (

        <div>
            <form onSubmit={(e) => next(e)}>
                <Form2 int={1} label='Company Name' state={companyName} setState={setCompanyName} placeholder='JohnDoe.Inc' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form1 int={55} label='Website' state={website} setState={setWebsite} placeholder='www.website.com' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={2} label='Address' state={address} setState={setAddress} placeholder='123, street avenue' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={3} label='City' state={city} setState={setCity} placeholder='London' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={4} label='Post Code' state={postCode} setState={setPostCode} placeholder='1234' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={5} label='Country' state={country} setState={setCountry} placeholder='UK' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={6} label='Country' state={recruitCountry} setState={setRecruitCountry} placeholder='UK' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />

                <div className='flex gap-20'>
                    <button onClick={() => setPageNo(pageNo - 1)} className="  w-full lg:ml-auto btn-primary text-base lg:text-lg text-white bg-[#7367f0] hover:bg-[#675dd8] rounded-xl p-2 my-10 font-bold">Previous</button>
                    <button type='submit' className="  w-full lg:ml-auto btn-primary text-base lg:text-lg text-white bg-[#7367f0] hover:bg-[#675dd8] rounded-xl p-2 my-10 font-bold">Next</button>
                </div>
            </form>
        </div>
    );
};

export default SecondForm;