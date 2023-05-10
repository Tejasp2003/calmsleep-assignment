/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import rows from "../../data/data.json";

const Table =() => {
  
  




  return (
    <div className="flex flex-col items-center justify-center sm:w-[90%] w-[60vw] m-auto bg-white/50 border rounded-3xl relative overflow-hidden   h-full">
      <table className=" w-full  ">
        <thead>
          <tr className="p-4 border-b-slate-400">
            <th className="  p-4">Id</th>
            <th className="  p-4">Title</th>
            <th className="  p-4">Image</th>
            <th className="  p-4">Total Plays</th>
            <th className="  p-4">Unique Plays</th>
            <th className="  p-4">Completion Rate</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            
            <tr
              className="p-4  cursor-pointer
              transform
              hover:bg-gray-100
              hover:scale-105 transition-all duration-200 "

              key={row.id}
              onClick={() => {
                window.location.href = `/${row.id}`;
              }}
              
            >
              <td className="  p-1 sm:p-4 text-center">{row.id}</td>
              <td className=" p-1 sm:p-4 text-center">{row.title}</td>
              <td className=" p-1 sm:p-4  flex justify-center">
                <div>
                  <img
                    src={row.image}
                    alt=""
                    className="rounded-full h-10 w-10"
                  />
                </div>
              </td>
              <td className="p-1 sm:p-4 text-center">
                {
                  //  avg of all total plays array

                 parseInt( row.totalPlays.reduce((a, b) => a + b, 0) /
                    row.totalPlays.length)
                }
              </td>
              <td className=" p-1 sm:p-4 text-center">
                {
                  //  avg of all unique plays array

                 parseInt( row.uniquePlays.reduce((a, b) => a + b, 0) /
                  row.uniquePlays.length)

                }
              </td>
              <td className=" p-1 sm:p-4 text-center">{row.completionRate*100}%</td>
            </tr>
            
          ))}

          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
