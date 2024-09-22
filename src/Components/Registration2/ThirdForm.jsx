import { useEffect, useState } from 'react';

// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';
import DocumentViewer from './Viewers/DocumentViewer';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { extractDateTime } from '../Tools/Time';

const ThirdForm = ({ setPageNo, pageNo, setDocuments, firstFormData, secondFormData, errors, setErrors }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileData, setFileData] = useState([])
  const time = extractDateTime();
  const axiosPublic = useAxiosPublic()
  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file?.type?.startsWith('image/') || file?.type?.startsWith('application/pdf')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        setFileData(prevFiles => [...prevFiles, { string: base64String, name: file.name, type: file.type }]);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a pdf or image')
    }

  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);

  };

  const throwError = () => {
    Swal.fire({ icon: "error", title: "Registration Failed", text: "Please make sure the passwords match." });
  }
  const addError = (e) => {
    setErrors(prevErrors => [...prevErrors, e]);
  };

  const submitForm = (e) => {
    e.preventDefault()
    if (!firstFormData.firstName) addError(1);
    if (!firstFormData.lastName) addError(2);
    if (!firstFormData.email) addError(3);
    if (!firstFormData.mobileNo) addError(4);
    if (!firstFormData.password) addError(6);
    if (!firstFormData.rePassword) addError(7);
    else if (firstFormData.password !== firstFormData.rePassword) {
      throwError()
    }
    if (!secondFormData.companyName) addError(8);
    if (!secondFormData.address) addError(9);
    if (!secondFormData.city) addError(10);
    if (!secondFormData.postCode) addError(11);
    if (!secondFormData.country) addError(12);
    if (!secondFormData.recruitCountry) addError(13);

    if (errors.length === 0 && firstFormData.firstName && firstFormData.lastName && firstFormData.email && firstFormData.mobileNo && firstFormData.password && firstFormData.password == firstFormData.rePassword
      && secondFormData.companyName && secondFormData.address && secondFormData.city && secondFormData.postCode && secondFormData.country && secondFormData.recruitCountry
    ) {
      axiosPublic.post('/registrations', { personalInformation: firstFormData, companyDetails: secondFormData, document: fileData, time: time })
        .then(res => {
          if (res.status === 200) {
            Swal.fire({ position: "top-end", icon: "success", title: "Success", text: `Thank You for submitting your form ${firstFormData?.firstName} ${firstFormData?.lastName}`, showConfirmButton: false, timer: 1500 });
            setTimeout(() => {
              location.reload();
            }, 2000);
          }
        })
    }

  }

  useEffect(() => {
    setDocuments(fileData)
  }, [fileData, setDocuments])
  return (
    <div>
      <h1 className="text-xl font-semibold  text-gray-500 p-2 text-center">Please upload your portrait</h1>
      <div>
        <input type="file" name="upload" id="upload" placeholder="Drag and drop your pdf file here" onChange={handleFileUpload} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDragOver={handleDragOver} onDrop={handleFileUpload}
          className={`  rounded-lg w-2/3 bg-gray-100 mx-10 p-10 px-5 my-5  ${isDragging ? " border-purple-400 " : " border-black "}`} />

        <div className='overflow-scroll   '>
          {fileData &&
            <div className='flex flex-col gap-2'>
              {fileData.map((data, index) =>
                <div className='shadow-lg rounded-lg text-xl p-5 bg-white' key={index}>

                  <div>
                    <h1>{data?.name}</h1>
                    <DocumentViewer base64String={data?.string} type={data?.type} />
                  </div>

                </div>
              )}
            </div>
          }
        </div>

        <div className="flex gap-20">
          <button onClick={(e) => submitForm(e)} className="  w-full lg:ml-auto btn-primary text-base lg:text-lg text-white bg-[#7367f0] hover:bg-[#675dd8] rounded-xl p-2 my-10 font-bold">Submit</button>
        </div>

      </div>
    </div>
  );
};

export default ThirdForm;