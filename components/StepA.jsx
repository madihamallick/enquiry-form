const StepA = ({ formData, handleChangeInput, handleNextStep }) => {
  return (
    <div className="w-8/12 mx-auto">
      <div className="mb-8">
        <label>
          1. Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a Valid Salary in numbers e.g 50,000/-"
          className="w-full outline-none border border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-8">
        <label>
          2. Email<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Example - userid@gmail.com"
          className="w-full outline-none border border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-8">
        <label>3. Date of Birth</label>
        <div>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            className="outline-none border border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      </div>
      <div className="mb-8">
        <label>
          4. Contact no<span className="text-red-500">*</span>
        </label>
        <input
          type="phone"
          name="contact"
          value={formData.contact}
          placeholder="Enter your 10 digit contact no"
          className="w-full outline-none border border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="mb-8 flex justify-end items-center">
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

export default StepA;
