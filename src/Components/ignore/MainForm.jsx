import { useState } from 'react';
import FirstForm from './FirstForm';
import SecondForm from '../SecondForm';
import ThirdForm from './ThirdForm';

const MainForm = () => {



  const [firstFormData, setFirstFormData] = useState('');
  const [secondFormData, setSecondFormData] = useState('');
  const [documents, setDocuments] = useState('');
  const [pageNo, setPageNo] = useState(0)

  // const studentName = firstName + " " + lastName;
  // const studentMessage = `Thank you for submitting a form.\nOur counsellor will contact you soon.`;
  const [selected, setSelected] = useState(0);
  const [errors, setErrors] = useState([])


  return (
    <div className='max-w-5xl  mx-auto '>
      <div className="flex lg:border-[2px] lg:border-[#7367f0] flex-col lg:flex-row lg:gap-10     rounded-3xl  lg:p-5 bg-white shadow-2xl  ">

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

        <div className='h-full w-full col-span-2 my-auto p-10 lg:p-5 '>
          <div className="grid gap-2 lg:gap-1 font-medium">
            <h2 className='text-2xl font-bold'>Personal Information</h2>
            <FirstForm setFirstFormData={setFirstFormData} selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />

            <div className=''>
              <h2 className='text-2xl pt-5 font-bold'>Company Information</h2>
              <SecondForm setSecondFormData={setSecondFormData} selected={selected} setSelected={setSelected} errors={errors} setErrors={setErrors} />

            </div>
            <div>
              {/* <h2 className='text-2xl pt-5'>Documents</h2> */}
              <ThirdForm firstFormData={firstFormData} secondFormData={secondFormData} pageNo={pageNo} setPageNo={setPageNo} setDocuments={setDocuments} errors={errors} setErrors={setErrors} />
            </div>


          </div>
        </div>


      </div>

    </div>
  );
};

export default MainForm;