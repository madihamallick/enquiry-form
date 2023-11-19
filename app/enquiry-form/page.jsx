"use client";
import React, { useEffect, useState } from "react";
import SideNavbar from "@/components/SideNavbar";
import TopNavbar from "@/components/TopNavbar";
import StepA from "@/components/StepA";
import StepB from "@/components/StepB";
import StepC from "@/components/StepC";
import StepD from "@/components/StepD";
import StepFinal from "@/components/StepFinal";
import Card from "@/components/Card";

const initialFormData = {
  name: "",
  email: "",
  dob: "",
  contact: "",
  tenmarksheet: null,
  twelvemarksheet: null,
  graduationmarksheet: null,
  postgraduationmarksheet: null,
  offerletter: null,
  salaryslip: null,
  bankstatement: null,
  incrementletter: null,
  others: null,
  howyoureact: "",
  yourrole: "",
  importanttoyou: "",
  location: "",
  interviewdate: "",
  interviewtime: "",
  timezone: "",
  interviewmedium: ""
};

const stepsArray = ["Form Selection", "Set up", "Form Creation", "Review"];
const sideItemObject = {
  "Details Collection":
    "Collect information from Candidates on their education, work experience, contact no,etc",
  "Document Collection":
    "Save time and efforts: Explore this template to find a set of questions required document collection ",
  "Statement of Purpose":
    "Start creating a new form with the wide options of fields available",
  "Interview Availability":
    "Start creating a new form with the wide options of fields available",
};
const page = () => {
  const [step, setStep] = useState("Details Collection");
  const [formData, setFormData] = useState(initialFormData);

  const handleNextStep = () => {
    if (step === "Details Collection") setStep("Document Collection");
    else if (step === "Document Collection") setStep("Statement of Purpose");
    else if (step === "Statement of Purpose") setStep("Interview Availability");
  };

  const handlePrevStep = () => {
    if (step === "Interview Availability") setStep("Statement of Purpose");
    else if (step === "Statement of Purpose") setStep("Document Collection");
    else if (step === "Document Collection") setStep("Details Collection");
  };

  const handleChangeInput = (event) => {
    const fieldName = event.target.name;

    if (event.target.type === "file") {
      setFormData({
        ...formData,
        [fieldName]: event.target.files[0],
      });
    } else {
      const fieldValue = event.target.value;
      setFormData({
        ...formData,
        [fieldName]: fieldValue,
      });
    }
  };

  const handleSubmitFormData = () => {
    if (!formData.name || !formData.email) {
      alert("Error! Please Fill all the required fields");
    } else {
      setStep("Final");
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const renderSideNavItems = () => {
    if (step === "Final") {
      return null;
    }

    return Object.keys(sideItemObject).map((title, index) => (
      <Card
        key={index}
        title={title}
        description={sideItemObject[title]}
        active={step === title}
        setStep={setStep}
      />
    ));
  };

  const renderTopStepNumbers = () => {
    if (step === "Final") {
      return null;
    }
    return (
      <section className="flex justify-center items-center">
        {stepsArray.map((item, index) => (
          <>
            <div
              key={item}
              className={`w-8 h-8 flex justify-center items-center border-2 border-gray-200 rounded-full cursor-pointer ${
                item === "Form Selection" ? "bg-blue-500" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-white h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="mx-3">{item}</span>
            {index < stepsArray.length - 1 && (
              <hr
                key={`line-${index}`}
                className="border border-greylight ml-5 mr-10 w-[10rem]"
              />
            )}
          </>
        ))}
      </section>
    );
  };

  return (
    <div className="bg-greybody">
      <TopNavbar renderTopStepNumbers={renderTopStepNumbers} />
      <div className="flex">
        <SideNavbar renderSideNavItems={renderSideNavItems} />
        <div className="flex-1 w-[600px] max-w-full md:px-24 py-14 mx-auto h-[90vh] overflow-y-scroll">
          <h2 className="font-sans text-2xl">PInterview Availability</h2>
          <span>
            You will be able to customize the fields in the later stage
          </span>
          <div className="border border-gray-200 my-6 bg-white">
            <div className="bg-normalblue bg-opacity-20 p-10">
              <h2 className="font-sans text-2xl">Name of the Enquiry Form</h2>
              <h4 className="text-sm text-gray-700">
                One line description of the form
              </h4>
              <span className="text-sm mt-10 inline-block text-gray-500">
                Provide the following information to process your application
              </span>
            </div>
            <div className="p-10">
              {step === "Details Collection" ? (
                <StepA
                  formData={formData}
                  handleChangeInput={handleChangeInput}
                  handleNextStep={handleNextStep}
                />
              ) : null}
              {step === "Document Collection" ? (
                <StepB
                  formData={formData}
                  handleChangeInput={handleChangeInput}
                  handlePrevStep={handlePrevStep}
                  handleNextStep={handleNextStep}
                />
              ) : null}
              {step === "Statement of Purpose" ? (
                <StepC
                  formData={formData}
                  handleChangeInput={handleChangeInput}
                  handlePrevStep={handlePrevStep}
                  handleNextStep={handleNextStep}
                />
              ) : null}
              {step === "Interview Availability" ? (
                <StepD
                  formData={formData}
                  handleChangeInput={handleChangeInput}
                  handlePrevStep={handlePrevStep}
                  handleSubmitFormData={handleSubmitFormData}
                />
              ) : null}
              {step === "Final" ? <StepFinal /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
