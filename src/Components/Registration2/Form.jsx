import React, { useRef, useState } from "react";
import Banner from "./Banner";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const Form = () => {
    const inputClass =
        "border-2 font-medium px-2 outline-none h-[60px] placeholder:text-xl text-xl rounded-lg w-full";
    // const [fileData, setFileData] = useState(null);  
    const axiosPublic = useAxiosPublic();
    const formRef = useRef(null); // Ref for the form


    const submitForm = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create a FormData object to handle form data and file uploads
        const formDataObj = new FormData();

        // Read and append all input values by their name attribute
        formDataObj.append("firstName", e.target.elements.firstName.value);
        formDataObj.append("lastName", e.target.elements.lastName.value);
        formDataObj.append("email", e.target.elements.email.value);
        formDataObj.append("mobileNo", e.target.elements.phone.value); // Changed from "phone" to "mobileNo" to match backend
        formDataObj.append("whatsAppNo", e.target.elements.whatsapp.value); // Changed from "whatsapp" to "whatsAppNo" to match backend
        formDataObj.append("password", e.target.elements.password.value);

        // Append each companyDetails field separately to FormData
        formDataObj.append(
            "companyDetails[companyName]",
            e.target.elements.company.value
        );
        formDataObj.append(
            "companyDetails[website]",
            e.target.elements.website.value
        );
        formDataObj.append(
            "companyDetails[address]",
            e.target.elements.address.value
        );
        formDataObj.append("companyDetails[city]", e.target.elements.city.value);
        formDataObj.append(
            "companyDetails[postcode]",
            e.target.elements.post.value
        ); // Changed from "post" to "postcode" to match backend
        formDataObj.append(
            "companyDetails[country]",
            e.target.elements.country.value
        );
        formDataObj.append(
            "companyDetails[recruitCountry]",
            e.target.elements.recruit.value
        );

        // Append the file to FormData if it exists
        // if (fileData) {
        //     formDataObj.append("file", fileData); // Ensure the file is sent with the correct field name
        // }

        // Check if file is appended correctly
        console.log("File being sent: ", formDataObj.get("file"));

        // Send the data using Axios
        axiosPublic
            .post("/registrations", formDataObj, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                if (res.status === 201) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Success",
                        text: `Thank You for submitting your form ${formDataObj.get(
                            "firstName"
                        )} ${formDataObj.get("lastName")}`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    formRef.current.reset();
                    // setFileData(null)
                }
            })
            .catch((err) => {
                console.error("Error submitting form:", err);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Error",
                    text: "Form submission failed",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row">
                <div style={{ background: `radial-gradient(circle, rgba(112,196,206,1) 0%, rgba(17,47,109,1) 100%)` }}
                    className="w-full text-white  lg:w-3/4 lg:rounded-3xl  lg:px-10  p-10 lg:p-0   ">

                    <div className='gap-5 flex flex-col'>
                        <div className="  bg-[#70c4ce]/10 backdrop-blur-md border mt-10 border-white/20 rounded-lg p-6 space-y-10">
                            <div className='flex justify-center items-center gap-2'>
                                <img className='pt-1 lg:pt-2  w-2/4 lg:h-2/4' src='https://i.ibb.co.com/pjjnDkR/SGE-Logo-V-2-removebg-preview.png' alt="" />
                                <img className='pt-1 lg:pt-2  w-1/3 lg:h-1/3' src='https://i.ibb.co.com/3SV27h0/icef.png' alt="" />

                            </div>
                            <p className='text-start font-normal  text-base lg:text-md'>Shabuj Global Education is proud to join the ICEF Higher Education network! <br /> Ready to connect, innovate, and shape the future of global education. Lets make waves together.</p>
                        </div>

                        <div className="  bg-[#70c4ce]/10 backdrop-blur-md border border-white/20 rounded-lg p-6 space-y-10">
                            <div className='flex justify-center'>
                                <img className='pt-1 lg:pt-2  w-1/2' src='https://i.ibb.co.com/3SV27h0/icef.png' alt="" />

                            </div>
                            <p className='text-start font-normal  text-base lg:text-md'>At the heart of the international education industry, we facilitate access to the right relationships, insight, and training to drive growth for the sector’s educational institutions, student recruitment agents, and connected service providers.</p>
                        </div>
                    </div>


                </div>

                <form
                ref={formRef}
                    onSubmit={submitForm}
                    className="bg-white px-10 py-10 mt-4"
                    encType="multipart/form-data"
                >

                    {/* Email, phone, WhatsApp fields */}
                    <div>
                        <h3 className="text-xl mt-4 font-bold">Personal Details</h3>
                        <div className="flex">
                            <div className={`form-control w-full px-2`}>
                                <div className="label text-xl">
                                    <span className="text-purple-500 font-bold">First Name</span>
                                </div>
                                <div className="border-purple-500">
                                    <input
                                        required
                                        name="firstName"
                                        placeholder="John"
                                        className={inputClass}
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className={`form-control w-full px-2`}>
                                <div className="label text-xl">
                                    <span className="text-purple-500 font-bold">Last Name</span>
                                </div>
                                <div className="border-purple-500">
                                    <input
                                        required
                                        name="lastName"
                                        placeholder="Doe"
                                        className={inputClass}
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <div className="label text-xl">
                                <span className="text-purple-500 font-bold">Email</span>
                            </div>
                            <div className="border-purple-500">
                                <input
                                    required
                                    name="email"
                                    placeholder="example@gmail.com"
                                    className={inputClass}
                                    type="email"
                                />
                            </div>
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <div className="label text-xl">
                                <span className="text-purple-500 font-bold">Mobile NO.</span>
                            </div>
                            <div className="border-purple-500">
                                <input
                                    required
                                    name="phone"
                                    placeholder="12345"
                                    className={inputClass}
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <div className="label text-xl">
                                <span className="text-purple-500 font-bold">WhatsApp</span>
                            </div>
                            <div className="border-purple-500">
                                <input
                                    name="whatsapp"
                                    placeholder="WhatsApp Number"
                                    className={inputClass}
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <div className="label text-xl">
                                <span className="text-purple-500 font-bold">Password</span>
                            </div>
                            <div className="border-purple-500">
                                <input
                                    required
                                    name="password"
                                    placeholder="password"
                                    className={inputClass}
                                    type="password"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Company details */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl mt-4 font-bold">Company Details</h3>
                        <div className={`form-control w-full px-2`}>
                            <input
                                required
                                name="company"
                                placeholder="Company Name"
                                className={inputClass}
                                type="text"
                            />
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <input
                                name="website"
                                placeholder="Website"
                                className={inputClass}
                                type="text"
                            />
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <input
                                required
                                name="address"
                                placeholder="Address"
                                className={inputClass}
                                type="text"
                            />
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <input
                                required
                                name="city"
                                placeholder="City"
                                className={inputClass}
                                type="text"
                            />
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <input
                                required
                                name="post"
                                placeholder="Post Code"
                                className={inputClass}
                                type="text"
                            />
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <input
                                required
                                name="country"
                                placeholder="Country"
                                className={inputClass}
                                type="text"
                            />
                        </div>
                        <div className={`form-control w-full px-2`}>
                            <input
                                required
                                name="recruit"
                                placeholder="Recruit Country"
                                className={inputClass}
                                type="text"
                            />
                        </div>
                    </div>
                    {/* File Upload */}
                    {/* <div className=" text-center flex flex-col gap-2 items-center my-5 py-5 border-[2px]">
                        <h3 className="text-xl mt-4 font-semibold">Upload File</h3>
                        <input
                            type="file"
                            name="file"
                            onChange={(e) => setFileData(e.target.files[0])}
                        />{" "}
                    </div> */}
                    {/* Changed this line */}
                    {/* Submit button */}
                    <div className="mt-5 flex justify-end">
                        <button
                            type="submit"
                            className="btn-primary text-white bg-[#7367f0] hover:bg-[#675dd8] rounded-xl p-2 my-10 w-full font-bold"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
