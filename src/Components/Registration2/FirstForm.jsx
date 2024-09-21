import { useEffect, useState } from 'react';
import Form2 from './Form2';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Form1 from './Form1';

const FirstForm = ({ pageNo, setPageNo, setFirstFormData }) => {
    const [selected, setSelected] = useState(0);
    const [errors, setErrors] = useState([])
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNo, setMobileNO] = useState(0);
    const [whatsAppNo, setWhatsAppNO] = useState(0);
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [pass, setPass] = useState(0)
    const Field = () => {
        return (<div className="label">
            <span className="label-text text-red-500">This field is required</span>
        </div>)
    }
    const Label = ({ text, ind }) => {
        return (<div className="label">
            <span className={errors.includes(parseInt(ind)) ? "label-text text-red-500" : selected == parseInt(ind) ? "label-text text-purple-500" : "label-text text-black-500"}>{text}</span>
        </div>)
    }
    const throwError = () => {
        Swal.fire({ icon: "error", title: "Registration Failed", text: "Please make sure the passwords match." });
    }

    const addError = (e) => {
        setErrors(prevErrors => [...prevErrors, e]);
    };

    const inputStyle = "input input-bordered  text-[#0d3454] w-full   focus:border-2 focus:outline-0 focus:border-purple-400 focus:placeholder:pl-2 transition-all duration-100"

    const next = (e) => {
        e.preventDefault();
        if (!firstName) addError(1);
        if (!lastName) addError(2);
        if (!email) addError(3);
        if (!mobileNo) addError(4);
        if (!password) addError(6);
        if (!rePassword) addError(7);
        else if (password !== rePassword) {
            throwError()
        }

        if (errors.length === 0 && firstName && lastName && email && mobileNo && password && password == rePassword  ) {
            setPageNo(pageNo + 1)
        }
    }
    useEffect(() => {
        const data = { firstName, lastName, mobileNo, whatsAppNo, email, password };
        setFirstFormData(data);
    }, [firstName, lastName, mobileNo, email, whatsAppNo,password, setFirstFormData]);

    return (

        <div>
            <form  onSubmit={(e)=>next(e)}>
            <div className='flex gap-5'>
                <Form2 int={1} label='First Name' state={firstName} setState={setFirstName} placeholder='John' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
                <Form2 int={2} label='Last Name' state={lastName} setState={setLastName} placeholder='Doe' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'text'} />
            </div>
            <Form2 int={3} label='Email' state={email} setState={setEmail} placeholder='Email' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'email'} />
            <Form2 int={4} label='Mobile No:' state={mobileNo} setState={setMobileNO} placeholder='+8801---------' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'number'} />
            <Form1 int={55} label='Whatsapp No:' state={whatsAppNo} setState={setWhatsAppNO} placeholder='+8801---------' selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} type={'number'} />

            <div className="lg:flex  gap-5">
                <div className="form-control w-full">
                    <Label ind={"6"} text="Password  *" />
                    <div className={`flex items-center    gap-5 ${`${errors?.includes(6) ? 'border-2 border-red-500 focus:border-red-500' : 'border-gray-400'} ${inputStyle}`}`}>
                        <input onFocus={() => setSelected(6)} onBlur={() => {
                            setSelected(0)
                            !password && addError(6)
                        }} className="w-full" onChange={e => {
                            setSelected(6)
                            setErrors((prevItems) => prevItems.filter(item => item !== 6))
                            setPassword(e.target.value)
                        }} type={pass ? "text" : "password"} placeholder="Password" />
                        <div className="cursor-pointer justify-end flex" onClick={() => setPass(!pass)}>
                            {pass ? <p><FaRegEyeSlash /></p> :
                                <p><FaRegEye /></p>}
                        </div>
                    </div>
                    {errors.includes(6) ? <Field /> : <></>}
                </div>

                <div className="form-control w-full">
                    <Label ind={"7"} text="Confirm Password  *" />
                    <div className={`flex items-center    gap-5 ${`${errors?.includes(7) ? 'border-2 border-red-500 focus:border-red-500' : 'border-gray-400'} ${inputStyle}`}`}>
                        <input onFocus={() => setSelected(7)} onBlur={() => {
                            setSelected(0)
                            !rePassword && addError(7)
                        }} className="w-full" onChange={e => {
                            setSelected(7)
                            setErrors((prevItems) => prevItems.filter(item => item !== 7))
                            setRePassword(e.target.value)
                        }} type={pass ? "text" : "password"} placeholder="Confirm Password" />
                        <div className="w-fit" onClick={() => setPass(!pass)}>
                            {pass ? <p><FaRegEyeSlash /></p > :
                                <p><FaRegEye /></p>}
                        </div>
                    </div>
                    {errors.includes(7) ? <Field /> : <></>}
                    {rePassword && password !== rePassword && <p className="text-red-500">The Confirm Password field confirmation does not match</p>}

                </div>

            </div>
            <div className='flex gap-20'>
                {/* <button onClick={() => setPageNo(pageNo -1)} className="  w-full lg:ml-auto btn-primary text-base lg:text-lg text-white bg-[#7367f0] hover:bg-[#675dd8] rounded-xl p-2 my-10 font-bold">Previous</button> */}
                <button  type='submit' className="  w-full lg:ml-auto btn-primary text-base lg:text-lg text-white bg-[#7367f0] hover:bg-[#675dd8] rounded-xl p-2 my-10 font-bold">Next</button>
            </div>
            </form>
        </div>
    );
};

export default FirstForm;