import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
const DocRow = ({ registration }) => {
    console.log(registration)
    const thStyle = "font-normal text-base"
    const { selectedRegistration, setSelectedRegistration } = useContext(AuthContext)
    const handleSearch = () => {
        setSelectedRegistration(registration)
    }
    const [photo, setPhoto] = useState()
    // const handleDelete=()=>{
    //     console.log('done')
    // }
    console.log(`${import.meta.env.VITE_IMG_URL}/${registration}`)

    return (
        <tr className="border-b-[1px] font-thin border-gray-300 rounded-lg ">
            <th className={thStyle}>{registration.firstName}{" "}{registration.lastName}</th>
            <th className={thStyle}><p className="  text-start rounded-lg   font-semibold p-2">{registration?.mobileNo}</p></th>
            <th className={thStyle}><p className="  text-start rounded-lg   font-semibold p-2">{registration?.email}</p></th>
            <th className={thStyle}>{registration?.time}</th>
            <th>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById(registration._id).showModal()}>Show Details</button>
                <dialog id={registration._id} className="modal modal-center sm:modal-middle">
                    <div className="modal-box">
                        <div>
                            <p className="py-4 font-normal"><span className="font-bold pr-2">Company Name:</span>{registration?.companyDetails.companyName}</p>
                            <p className="py-4 font-normal"><span className="font-bold pr-2">Address:</span>{registration?.companyDetails.address}</p>
                            <p className="py-4 font-normal"><span className="font-bold pr-2">Website:</span>{registration?.companyDetails.website}</p>
                            <p className="py-4 font-normal"><span className="font-bold pr-2">Post Code:</span>{registration?.companyDetails.postcode}</p>
                            <p className="py-4 font-normal"><span className="font-bold pr-2">Country:</span>{registration?.companyDetails.country}</p>
                            <p className="py-4 font-normal"><span className="font-bold pr-2">Recruits from:</span>{registration?.companyDetails.recruitCountry}</p>
                            <div>
                                <img src={`${import.meta.env.VITE_IMG_URL}/${registration.file.name}`} alt="" />
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </th>

        </tr>
    );
};

export default DocRow;