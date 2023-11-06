const Newsletter = () => {
  return (
    <div className="bg-white h-full overflow-y-scroll">
      <div className="my-6 mx-8 text-center">
        <h3 className="text-lg">Stay updated on your favourite topics</h3>
        <p className="text-gray-500 m-2">Find channels to follow below</p>
      </div>
      <div className="flex justify-center">
        <button className="mt-4 px-6 py-2 font-medium bg-[#008069] hover:bg-[#017561] rounded-full text-white outline-0 text-sm">
          Find channels
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
