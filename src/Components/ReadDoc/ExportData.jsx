import { exportToExcel } from 'react-json-to-excel';

const ExportData = ({registrations}) => {
    console.log(registrations)
    const data = registrations?.map(registration =>({
        Name:registration.personalInformation.firstName + " " + registration.personalInformation.lastName,
        Mobile: registration.personalInformation.mobileNo,
        Email:registration.personalInformation.email,
        Whatsapp:registration.personalInformation.whatsappNo,
        Password:registration.personalInformation.password,
        CompanyName:registration.companyDetails.companyName,
        Address:registration.companyDetails.address,
        City:registration.companyDetails.city,
        Website:registration.companyDetails.website,
        PostCode:registration.companyDetails.postcode,
        Country:registration.companyDetails.country,
        RecruitsFromCountry:registration.companyDetails.recruitCountry,
        Time:registration.time


    }))
    
    return (
        <div className='w-full flex justify-center lg:justify-end lg:pr-5'>
            <button className='bg-blue-500 text-white font-bold p-2 rounded-2xl   ' onClick={() => exportToExcel(data, 'downloadfilename')}>
                Download
            </button>
        </div>
    );
};

export default ExportData;