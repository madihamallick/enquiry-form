const StepC = ({
  formData,
  handleChangeInput,
  handlePrevStep,
  handleNextStep,
}) => {
  return (
    <div className="w-8/12 mx-auto">
      <div className="mb-10">
        <label>
          1. Tell me about a time you were asked to do something you had never
          done before. How did you react? What did you learn?
        </label>
        <textarea
          type="text"
          name="howyoureact"
          value={formData.howyoureact}
          rows={3}
          placeholder="Enter a description for the long answer"
          className="w-full outline-none border border-gray-400 px-5 mt-2 py-2.5 rounded-md focus:border-blue-600"
          onChange={(e) => handleChangeInput(e)}
        />
        <span className="text-[10px] text-gray-500 float-right">
          300 word limit
        </span>
      </div>
      <div className="mb-10">
        <label>
          2. Tell me about the last time something significant didn’t go
          according to plan at work. What was your role? What was the outcome?
        </label>
        <textarea
          type="text"
          name="yourrole"
          value={formData.yourrole}
          rows={3}
          placeholder="Enter a description for the long answer"
          className="w-full outline-none border border-gray-400 px-5 mt-2 py-2.5 rounded-md focus:border-blue-600"
          onChange={(e) => handleChangeInput(e)}
        />
        <span className="text-[10px] text-gray-500 float-right">
          300 word limit
        </span>
      </div>
      <div className="mb-10">
        <label>
          3. What are the three things that are most important to you in a job?{" "}
        </label>
        <textarea
          type="text"
          name="importanttoyou"
          value={formData.importanttoyou}
          rows={3}
          placeholder="Enter a description for the long answer"
          className="w-full outline-none border border-gray-400 px-5 mt-2 py-2.5 rounded-md focus:border-blue-600"
          onChange={(e) => handleChangeInput(e)}
        />
        <span className="text-[10px] text-gray-500 float-right">
          300 word limit
        </span>
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

export default StepC;
