const Dashboard = () => {
  return (
    <div className="flex w-full h-screen p-4 sm:ml-64">
      <div className="m-auto text-center h-1/2 sm:4/6 space-y-4">
        <h1 className="sm:text-3xl text-2xl font-pacifico">
          Welcome to the Cat Browser!
        </h1>
        <p className="font-open-sans">
          To get started, please select a cat breed to know more about its
          information.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
