import { exportToExcel } from 'react-json-to-excel';

const ExportData = ({registrations}) => {

    const formattedTime =(registration)=> new Date(registration?.createdAt).toLocaleString(
        "en-US",
        {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }
      );
    const data = registrations?.map(registration =>({
        Name:registration.firstName + " " + registration.lastName,
        Mobile: registration.mobileNo,
        Email:registration.email,
        Whatsapp:registration.whatsappNo,
        Password:registration.password,
        CompanyName:registration.companyDetails.companyName,
        Address:registration.companyDetails.address,
        City:registration.companyDetails.city,
        Website:registration.companyDetails.website,
        PostCode:registration.companyDetails.postcode,
        Country:registration.companyDetails.country,
        RecruitsFromCountry:registration.companyDetails.recruitCountry,
        Time:formattedTime(registration)


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