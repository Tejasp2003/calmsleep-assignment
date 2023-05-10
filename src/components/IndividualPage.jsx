import { useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import LineChart from "./LineChart";
import rows from "../../public/data.json";

const Single = () => {

  const { userId } = useParams();

  
  const data = rows.find((row) => row.id === parseInt(userId));
  

  return (
    <div className="flex flex-col justify-between w-[80%] bg-green-200/70 p-2 h-[90vh] m-auto mt-5 rounded-2xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center  justify-between  ml-10  gap-4 sm:gap-6 md:gap-8">
          <div
            className="
            flex flex-col items-center justify-center  h-24 w-40 md:h-32 md:w-60 rounded-xl bg-blue-100/50 border-[3px] border-black text-center "
          >
            <h2
              className="
                text-xl md:text-3xl text-center text-black font-bold 
             "
            >
              <h3
                className="
                text-xl md:text-xl text-center  font-bold text-blue-900
                "
              >
                Song Name:
              </h3>
              {data.title}
            </h2>
          </div>
          <div
            className="
            flex flex-col items-center justify-center   h-24 w-40 md:h-32 md:w-60 rounded-xl bg-white/50 text-center  border-[2px] border-black/50 relative
         "
          >
            <h2
              className="
                text-xl text-center text-black font-bold
            "
            >
              Completion Rate
            </h2>

            <span
              className="
                text-md text-left text-black font-bold absolute top-1/2 left-[70%]  transition-all duration-200 h-full w-full
            "
            >
              {data.completionRate * 100}%
            </span>

            <LinearProgress
              variant="determinate"
              value={data.completionRate * 100}
              className="
            w-52
            mt-7
            cursor-pointer

        "
            />
          </div>
        </div>

        <div className=" ">
          <img
            src={data.image}
            alt=""
            className="rounded-xl h-[300px] w-[250px] mr-5 border-[3px] border-blue-900/60"
          />
        </div>
      </div>

      <div className="flex flex-row items-center justify-between m-6">
        <div className="h-full w-full">
          <LineChart values={data.totalPlays} label="Total Plays" />
        </div>
        <div className="h-full w-full">
          <LineChart values={data.uniquePlays} label="Unique Plays" />
        </div>
      </div>
    </div>
  );
};

export default Single;
