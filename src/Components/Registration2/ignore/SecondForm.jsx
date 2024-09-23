import { useEffect, useState } from 'react';
import Form2 from './Form2';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Form1 from './Form1';

const SecondForm = ({   setSecondFormData, selected, setSelected, errors, setErrors }) => {
    
    const [companyName, setCompanyName] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postCode, setPostCode] = useState('')
    const [country, setCountry] = useState('')
    const [recruitCountry, setRecruitCountry] = useState('')

    const next = (e) => {
        e.preventDefault();
        
    }
    useEffect(() => {
        const data = {   companyName, address, city, website, postCode, country, recruitCountry };
        setSecondFormData(data);
    }, [companyName, address, website, city,postCode, country, recruitCountry, setSecondFormData]);

    return (

        <div className='pl-2'>
            <form onSubmit={(e) => next(e)}>
                <Form2 int={8} label='Company Name' state={companyName} setState={setCompanyName} placeholder='JohnDoe.Inc' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form1 int={55} label='Website' state={website} setState={setWebsite} placeholder='www.website.com' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={9} label='Address' state={address} setState={setAddress} placeholder='123, street avenue' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={10} label='City' state={city} setState={setCity} placeholder='London' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={11} label='Post Code' state={postCode} setState={setPostCode} placeholder='1234' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={12} label='Country' state={country} setState={setCountry} placeholder='UK' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={13} label='Country you recruit form ' state={recruitCountry} setState={setRecruitCountry} placeholder='UK' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
            </form>
        </div>
    );
};

export default SecondForm;