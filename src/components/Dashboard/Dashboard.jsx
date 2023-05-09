import Datatable from "./Datatable";

const Dashboard = () => {
  return (
    <div className=" flex flex-col items-center">
        <h1 className="text-3xl text-center text-black font-bold mt-3 mb-3 flex flex-row items-center">
          <img src="https://uploads-ssl.webflow.com/60d587746fd9b73fa84f0665/60d6da7b9b981f813d9b1dd4_Group%201505.svg" alt="" />
          Dashboard
        </h1>
         <Datatable />
    </div>
  );
};

export default Dashboard;
