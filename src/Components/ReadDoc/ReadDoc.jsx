import { useEffect } from "react";
import useRegistrations from "../Hooks/useRegistrations";
import ExportData from "./ExportData";
import DocRow from "./DocRow";

const ReadDoc = () => {
  const [registrations, refetch] = useRegistrations();
  console.log(registrations);
  const regArray = [...registrations].reverse();

  console.log(registrations);
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [refetch]);

  return (
    <div>
      <div>
        {registrations ? (
          <div className=" overflow-scroll no-scrollbar bg-white max-w-5xl mx-auto shadow-lg  min-h-screen">
            <div className="   bg-white w-full py-5 ">
              <div>
                <ExportData registrations={registrations} />
              </div>
              <table className="table w-full overflow-x-scroll">
                <thead>
                  <tr className="text-xl font-medium">
                    <th>Counsellor NAME</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Time</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                {regArray ? (
                  <tbody className="">
                    {regArray.map((registration) => (
                      <DocRow
                        key={registration._id}
                        registration={registration}
                      ></DocRow>
                    ))}
                  </tbody>
                ) : (
                  <span className="loading loading-spinner loading-lg"></span>
                )}
              </table>
            </div>
          </div>
        ) : (
          <div className=" max-w-5xl mx-auto  min-h-screen  bg-white flex items-center justify-center">
            <span className=" loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadDoc;
