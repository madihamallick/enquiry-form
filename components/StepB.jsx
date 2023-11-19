const StepB = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div className="w-8/12 mx-auto">
      <div className="mb-10 relative">
        <label className="block">
          1. 10th Marksheet<span className="text-red-500">*</span>
        </label>
        <span className="absolute z-10 mx-6 mt-2">
          <img src="/assets/clip.png" className="w-8 opacity-50" />
        </span>
        <input
          type="file"
          name="tenmarksheet"
          className="relative py-1 cursor-pointer text-gray-500 outline-none border border-gray-400 rounded-md file:py-2 file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-transparent"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>

      <div className="mb-10 relative">
        <label className="block">
          2. 12th Marksheet<span className="text-red-500">*</span>
        </label>
        <span className="absolute z-10 mx-6 mt-2">
          <img src="/assets/clip.png" className="w-8 opacity-50" />
        </span>
        <input
          type="file"
          name="twelvemarksheet"
          className="relative py-1 cursor-pointer text-gray-500 outline-none border border-gray-400 rounded-md file:py-2 file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-transparent"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-10 relative">
        <label className="block">
          3. Graduation Marksheet<span className="text-red-500">*</span>
        </label>
        <span className="absolute z-10 mx-6 mt-2">
          <img src="/assets/clip.png" className="w-8 opacity-50" />
        </span>
        <input
          type="file"
          name="graduationmarksheet"
          className="relative py-1 cursor-pointer text-gray-500 outline-none border border-gray-400 rounded-md file:py-2 file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-transparent"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-10 relative">
        <label className="block">4. Post Graduation Marksheet</label>
        <span className="absolute z-10 mx-6 mt-2">
          <img src="/assets/clip.png" className="w-8 opacity-50" />
        </span>
        <input
          type="file"
          name="postgraduationmarksheet"
          className="relative py-1 cursor-pointer text-gray-500 outline-none border border-gray-400 rounded-md file:py-2 file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-transparent"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-10 relative">
        <label className="block">
          5. Offer Letter<span className="text-red-500">*</span>
        </label>
        <span className="absolute z-10 mx-6 mt-2">
          <img src="/assets/clip.png" className="w-8 opacity-50" />
        </span>
        <input
          type="file"
          name="offerletter"
          className="relative py-1 cursor-pointer text-gray-500 outline-none border border-gray-400 rounded-md file:py-2 file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-transparent"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-10 relative">
        <label className="block">
          6. Salary Slips<span className="text-red-500">*</span>
        </label>
        <span className="absolute z-10 mx-6 mt-2">
          <img src="/assets/clip.png" className="w-8 opacity-50" />
        </span>
        <input
          type="file"
          name="salaryslip"
          className="relative py-1 cursor-pointer text-gray-500 outline-none border border-gray-400 rounded-md file:py-2 file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-transparent"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-10 relative">
        <label className="block">
          7. Bank Statement<span className="text-red-500">*</span>
        </label>
        <span className="absolute z-10 mx-6 mt-2">
          <img src="/assets/clip.png" className="w-8 opacity-50" />
        </span>
        <input
          type="file"
          name="bankstatement"
          className="relative py-1 cursor-pointer text-gray-500 outline-none border border-gray-400 rounded-md file:py-2 file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-transparent"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-10 relative">
        <label className="block">8. Increment Letter (if any)</label>
        <span className="absolute z-10 mx-6 mt-2">
          <img src="/assets/clip.png" className="w-8 opacity-50" />
        </span>
        <input
          type="file"
          name="incrementletter"
          className="relative py-1 cursor-pointer text-gray-500 outline-none border border-gray-400 rounded-md file:py-2 file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-transparent"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-10 relative">
        <label className="block">9. Others (if any)</label>
        <span className="absolute z-10 mx-6 mt-2">
          <img src="/assets/clip.png" className="w-8 opacity-50" />
        </span>
        <input
          type="file"
          name="others"
          className="relative py-1 cursor-pointer text-gray-500 outline-none border border-gray-400 rounded-md file:py-2 file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-transparent"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="my-2 flex justify-between items-center">
        <button
          className="bg-normalblue px-8 py-2 rounded-md text-md text-white"
          onClick={handlePrevStep}
        >
          Prev
        </button>
        <button
          className="bg-normalblue px-8 py-2 rounded-md text-md text-white"
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepB;
