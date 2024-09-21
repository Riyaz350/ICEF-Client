import {  useRef, useState } from 'react';
import Form2 from './Form2';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { extractDateTime } from '../Tools/Time';
import ThankYouModal from '../ThankYouModal';
import Swal from 'sweetalert2'
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';

const MainForm = () => {
  
    
  const [firstFormData, setFirstFormData] = useState('');
  const [secondFormData, setSecondFormData] = useState('');
  const [documents, setDocuments] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageNo, setPageNo] = useState(0)
  const time = extractDateTime();

  const forms = useRef();
  // const studentName = firstName + " " + lastName;
  // const studentMessage = `Thank you for submitting a form.\nOur counsellor will contact you soon.`;


  
  

  
  return (
    <div className='max-w-5xl lg:py-10 mx-auto '>
      <div className="flex flex-col lg:flex-row gap-10 justify-center items-center   rounded-3xl  lg:pr-10 bg-white shadow-2xl  min-h-screen">

        <div style={{ background: `radial-gradient(circle, rgba(112,196,206,1) 0%, rgba(17,47,109,1) 100%)` }}
          className="w-full h-full text-white gap-5 lg:w-3/4   bg-[#112f6d] lg:rounded-3xl   flex flex-col lg:px-10 items-start justify-start p-10 lg:p-0 lg:min-h-screen  ">

          <div className="  bg-[#70c4ce]/10 backdrop-blur-md border mt-10 border-white/20 rounded-lg p-6 space-y-10">
            <div className='flex justify-center items-center gap-2'>
              <img className='pt-1 lg:pt-2  w-2/4 lg:h-2/4' src='https://i.ibb.co.com/pjjnDkR/SGE-Logo-V-2-removebg-preview.png' alt="" />
              <img className='pt-1 lg:pt-2  w-1/3 lg:h-1/3' src='https://i.ibb.co.com/3SV27h0/icef.png' alt="" />

            </div>
            <p className='text-start font-normal text-xs md:text-base lg:text-md'>Shabuj Global Education is proud to join the ICEF Higher Education network! <br /> Ready to connect, innovate, and shape the future of global education. Lets make waves together.</p>
          </div>

          <div className="  bg-[#70c4ce]/10 backdrop-blur-md border border-white/20 rounded-lg p-6 space-y-10">
            <div className='flex justify-center'>
              <img className='pt-1 lg:pt-2  w-1/2' src='https://i.ibb.co.com/3SV27h0/icef.png' alt="" />

            </div>
            <p className='text-start font-normal text-xs md:text-base lg:text-md'>At the heart of the international education industry, we facilitate access to the right relationships, insight, and training to drive growth for the sector’s educational institutions, student recruitment agents, and connected service providers.</p>
          </div>


        </div>

        <div className='h-full w-full col-span-2 my-auto p-10 lg:p-0'>
          <div    className="grid gap-2 lg:gap-1 font-medium">
            {pageNo == 0 ?
              <FirstForm pageNo={pageNo}  setPageNo={setPageNo} setFirstFormData={setFirstFormData}/>
              :
              pageNo == 1 ?
                <div className=''>
                  <SecondForm pageNo={pageNo}  setPageNo={setPageNo} setSecondFormData={setSecondFormData}/>

                </div> :
                pageNo == 2 &&
                <div>
                  <ThirdForm firstFormData={firstFormData} secondFormData={secondFormData} pageNo={pageNo} setPageNo={setPageNo} setDocuments={setDocuments}/>
                </div>
            }
            
          </div>
        </div>


      </div>

      <ThankYouModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default MainForm;