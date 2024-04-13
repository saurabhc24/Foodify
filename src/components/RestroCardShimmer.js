const Shimmer = () => {
  return (
    <div>
      <div className="mx-4 flex flex-wrap flex-row justify-evenly">
        <div className="mx-[10px] my-0">
          <div className="bg-white shadow-md mt-5 rounded-lg overflow-hidden w-72">
            <div className="h-40 w-full shine"></div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <line className="text-xl font-bold text-gray-900 shine"></line>
                  <line className="text-sm text-gray-600 shine"></line>
                  <br></br>
                  <line className="text-sm text-gray-600 shine"></line>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
