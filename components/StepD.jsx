const StepD = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleSubmitFormData,
}) => {
  return (
    <div className="w-8/12 mx-auto">
      <div className="mb-8">
        <label>
          2. Email<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => handleChangeInput(e)}
          placeholder="Example - userid@gmail.com"
          className="w-full outline-none border border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
        />
      </div>
      <div className="mb-8">
        <label>2. Location</label>
        <div>
          <input
            type="text"
            placeholder="Search or enter your location "
            name="location"
            value={formData.location}
            onChange={(e) => handleChangeInput(e)}
            className="w-full outline-none border border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
          />
        </div>
      </div>
      <div className="mb-8">
        <label>3. Interview Date</label>
        <div>
          <input
            type="date"
            name="interviewdate"
            value={formData.interviewdate}
            onChange={(e) => handleChangeInput(e)}
            className="outline-none border border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
          />
        </div>
      </div>
      <div className="mb-8">
        <label>4. Interview Time</label>
        <div>
          <input
            type="time"
            name="interviewtime"
            value={formData.interviewtime}
            onChange={(e) => handleChangeInput(e)}
            className="outline-none border border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
          />
        </div>
      </div>
      <div className="mb-8">
        <label>5. Time Zone</label>
        <select
          type="text"
          name="timezone"
          value={formData.timezone}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border bg-white border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
        >
          <option value="" disabled>
            Search or Select a time zone from below
          </option>
          <option value="EST">Eastern Standard Time (EST)</option>
          <option value="PST">Pacific Standard Time (PST)</option>
        </select>
      </div>
      <div className="mb-8">
        <label>6. Interview Medium</label>
        <select
          type="text"
          name="interviewmedium"
          value={formData.interviewmedium}
          onChange={(e) => handleChangeInput(e)}
          className="w-full outline-none border bg-white border-gray-400 px-5 py-2 rounded-md focus:border-blue-600"
        >
          <option value="" disabled>
            Search or Select medium of Interview from below
          </option>
          <option value="InPerson">In Person</option>
          <option value="Phone">Phone</option>{" "}
        </select>
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
          onClick={handleSubmitFormData}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepD;
