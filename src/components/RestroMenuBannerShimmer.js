const Shimmer = () => {
  return (
    <div className="mt-12 mx-44">
      <div className="mx-[40px] my-[30px] flex flex-wrap flex-row justify-between items-center">
        <div className="ml-[15px] flex flex-wrap flex-row items-center">
          <div className="h-[150px] w-[200px] rounded-lg shine"></div>
          <div className="ml-[15px]">
            <line className="w-[300px] h-[30px] mb-3 shine"></line>
            <br></br>
            <line className="shine"></line>
            <br></br>
            <line className="shine"></line>
            <div className="my-[10px] mx-0 flex flex-wrap flex-row ">
              <line className="w-[50px] shine"></line>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <line className="w-[50px] shine"></line>
            </div>
          </div>
        </div>
        <line className="w-[100px] h-[90px] shine"></line>
      </div>
      <hr className="border-dashed border-t border-gray-300"></hr>
    </div>
  );
};

export default Shimmer;
