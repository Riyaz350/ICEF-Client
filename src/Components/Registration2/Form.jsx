import React, { useState } from 'react';
import Banner from './Banner';
import FileUpload from './FileUpload';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Form = () => {
    const inputClass = "border-2 font-medium px-2 outline-none h-[60px] placeholder:text-xl text-xl rounded-lg w-full";
    const [fileData, setFileData] = useState(null); // For file upload
    const axiosPublic = useAxiosPublic();
    
    const submitForm = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create a FormData object to handle form data and file uploads
        const formDataObj = new FormData();

        // Read and append all input values by their name attribute
        formDataObj.append('firstName', e.target.elements.firstName.value);
        formDataObj.append('lastName', e.target.elements.lastName.value);
        formDataObj.append('email', e.target.elements.email.value);
        formDataObj.append('phone', e.target.elements.phone.value);
        formDataObj.append('whatsapp', e.target.elements.whatsapp.value);
        formDataObj.append('password', e.target.elements.password.value);

        // Append company details to the FormData
        formDataObj.append('companyDetails[companyName]', e.target.elements.company.value);
        formDataObj.append('companyDetails[website]', e.target.elements.website.value);
        formDataObj.append('companyDetails[address]', e.target.elements.address.value);
        formDataObj.append('companyDetails[city]', e.target.elements.city.value);
        formDataObj.append('companyDetails[post]', e.target.elements.post.value);
        formDataObj.append('companyDetails[country]', e.target.elements.country.value);
        formDataObj.append('companyDetails[recruitCountry]', e.target.elements.recruit.value);

        // Append the file to FormData if it exists
        if (fileData) {
            formDataObj.append('file', fileData);
        }

        // Send the data using Axios
        axiosPublic.post('/registrations', formDataObj, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then(res => {
            if (res.status === 201) {
                Swal.fire({ 
                    position: "top-end", 
                    icon: "success", 
                    title: "Success", 
                    text: `Thank You for submitting your form ${formDataObj.get('firstName')} ${formDataObj.get('lastName')}`, 
                    showConfirmButton: false, 
                    timer: 1500 
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        })
        .catch(err => {
            console.error("Error submitting form:", err);
            Swal.fire({ position: "top-end", icon: "error", title: "Error", text: "Form submission failed", showConfirmButton: false, timer: 1500 });
        });
    };

    return (
        <div>
            <Banner />
            <form onSubmit={submitForm} className="bg-white px-10 py-10 mt-4" encType="multipart/form-data">
                <div className='flex'>
                    <div className={`form-control w-full px-2`}>
                        <div className="label text-xl">
                            <span className="text-purple-500 font-bold">First Name</span>
                        </div>
                        <div className='border-purple-500'>
                            <input required name='firstName' placeholder='John' className={inputClass} type="text" />
                        </div>
                    </div>

                    <div className={`form-control w-full px-2`}>
                        <div className="label text-xl">
                            <span className="text-purple-500 font-bold">Last Name</span>
                        </div>
                        <div className='border-purple-500'>
                            <input required name='lastName' placeholder='Doe' className={inputClass} type="text" />
                        </div>
                    </div>
                </div>

                {/* Email, phone, WhatsApp fields */}
                <div className={`form-control w-full px-2`}>
                    <div className="label text-xl">
                        <span className="text-purple-500 font-bold">Email</span>
                    </div>
                    <div className='border-purple-500'>
                        <input name='email' placeholder='example@gmail.com' className={inputClass} type="email" />
                    </div>
                </div>

                <div className={`form-control w-full px-2`}>
                    <div className="label text-xl">
                        <span className="text-purple-500 font-bold">Mobile NO.</span>
                    </div>
                    <div className='border-purple-500'>
                        <input name='phone' placeholder='12345' className={inputClass} type="number" />
                    </div>
                </div>

                <div className={`form-control w-full px-2`}>
                    <div className="label text-xl">
                        <span className="text-purple-500 font-bold">WhatsApp</span>
                    </div>
                    <div className='border-purple-500'>
                        <input name='whatsapp' placeholder='WhatsApp Number' className={inputClass} type="number" />
                    </div>
                </div>

                <div className={`form-control w-full px-2`}>
                    <div className="label text-xl">
                        <span className="text-purple-500 font-bold">Password</span>
                    </div>
                    <div className='border-purple-500'>
                        <input name='password' placeholder='password' className={inputClass} type="password" />
                    </div>
                </div>

                {/* Company details */}
                <h3 className="text-xl mt-4">Company Details</h3>
                <div className={`form-control w-full px-2`}>
                    <input name='company' placeholder='Company Name' className={inputClass} type="text" />
                </div>
                <div className={`form-control w-full px-2`}>
                    <input name='website' placeholder='Website' className={inputClass} type="text" />
                </div>
                <div className={`form-control w-full px-2`}>
                    <input name='address' placeholder='Address' className={inputClass} type="text" />
                </div>
                <div className={`form-control w-full px-2`}>
                    <input name='city' placeholder='City' className={inputClass} type="text" />
                </div>
                <div className={`form-control w-full px-2`}>
                    <input name='post' placeholder='Post Code' className={inputClass} type="text" />
                </div>
                <div className={`form-control w-full px-2`}>
                    <input name='country' placeholder='Country' className={inputClass} type="text" />
                </div>
                <div className={`form-control w-full px-2`}>
                    <input name='recruit' placeholder='Recruit Country' className={inputClass} type="text" />
                </div>

                {/* File Upload */}
                <h3 className="text-xl mt-4">Upload File</h3>
                <FileUpload setFileData={setFileData} fileData={fileData} />

                {/* Submit button */}
                <div className="mt-5 flex justify-end">
                    <button type="submit" className="btn-primary text-white bg-[#7367f0] hover:bg-[#675dd8] rounded-xl p-2 my-10 font-bold">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
