import { useEffect } from "react";

const StepFinal = ({ formData }) => {
  useEffect(() => {
    console.log(formData);
  }, []);

  return (
    <div className="my-4">
      <h3 className="text-3xl font-bold">Data Submited Successfully</h3>
      <DataConfirmRow label="Name" value={formData.name} />
      <DataConfirmRow label="Email" value={formData.email} />
      <DataConfirmRow label="Date of Birth" value={formData.dob} />
      <DataConfirmRow label="Contact" value={formData.contact} />
      <DataConfirmRow
        label="10th Marksheet"
        value={formData.tenmarksheet ? "Attached" : "Not Attached"}
      />
      <DataConfirmRow
        label="12th Marksheet"
        value={formData.twelvemarksheet ? "Attached" : "Not Attached"}
      />
      <DataConfirmRow
        label="Graduation Marksheet"
        value={formData.graduationmarksheet ? "Attached" : "Not Attached"}
      />
      <DataConfirmRow
        label="Postgraduation Marksheet"
        value={formData.postgraduationmarksheet ? "Attached" : "Not Attached"}
      />
      <DataConfirmRow
        label="Offer Letter"
        value={formData.offerletter ? "Attached" : "Not Attached"}
      />
      <DataConfirmRow
        label="Salary Slip"
        value={formData.salaryslip ? "Attached" : "Not Attached"}
      />
      <DataConfirmRow
        label="Bank Statement"
        value={formData.bankstatement ? "Attached" : "Not Attached"}
      />
      <DataConfirmRow
        label="Increment Letter"
        value={formData.incrementletter ? "Attached" : "Not Attached"}
      />
      <DataConfirmRow
        label="Others"
        value={formData.others ? "Attached" : "Not Attached"}
      />
      <DataConfirmRow label="How You React" value={formData.howyoureact} />
      <DataConfirmRow label="Your Role" value={formData.yourrole} />
      <DataConfirmRow
        label="Important to You"
        value={formData.importanttoyou}
      />
      <DataConfirmRow label="Location" value={formData.location} />
      <DataConfirmRow label="Interview Date" value={formData.interviewdate} />
      <DataConfirmRow label="Interview Time" value={formData.interviewtime} />
      <DataConfirmRow label="Timezone" value={formData.timezone} />
      <DataConfirmRow
        label="Interview Medium"
        value={formData.interviewmedium}
      />
    </div>
  );
};

export default StepFinal;

const DataConfirmRow = ({ label, value }) => {
  return (
    <div className="my-3 border border-dashed border-gray-200 p-1 rounded-lg">
      <span className="mr-4 text-slate-500">{label}</span>
      <span className="mr-4 text-slate-900">{value}</span>
    </div>
  );
};
