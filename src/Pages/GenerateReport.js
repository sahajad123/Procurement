import React, { useState } from 'react';
import jsPDF from 'jspdf';
import '../Pages/Pages.css'

const GenerateReport = () => {
  const [formData, setFormData] = useState({
    requisitionDate: '',
    requisitionNo: '',
    requestorInformation: {
      name: '',
      designation: '',
      department: '',   
      expensesType: '',
      deliveryTime: '',
    },
    supplierVendorInformation: {
      name: '',
      address: '',
      phoneNumber: '',
      contactPerson: '',
    },
    // ... other form fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');

    if (field) {
      setFormData((prevData) => ({
        ...prevData,
        [section]: {
          ...prevData[section],
          [field]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateReport(formData);
  };

  const generateReport = (data) => {
    const doc = new jsPDF();
    
    // Add content to the PDF
    doc.text('Procurement Request Report', 10, 10);

    doc.text(`Requisition Date: ${data.requisitionDate}`, 10, 20);
    doc.text(`Requisition No: ${data.requisitionNo}`, 10, 30);

    doc.text('Requestor Information:', 10, 40);
    doc.text(`Name: ${data.requestorInformation.name}`, 10, 50);
    doc.text(`Designation: ${data.requestorInformation.designation}`, 10, 60);
    doc.text(`Department: ${data.requestorInformation.department}`, 10, 70);
    doc.text(`Expenses Type: ${data.requestorInformation.expensesType}`, 10, 80);
    doc.text(`Delivery Time: ${data.requestorInformation.deliveryTime}`, 10, 90);

    doc.text('Supplier/Vendor Information:', 10, 100);
    doc.text(`Name: ${data.supplierVendorInformation.name}`, 10, 110);
    doc.text(`Address: ${data.supplierVendorInformation.address}`, 10, 120);
    doc.text(`Phone Number: ${data.supplierVendorInformation.phoneNumber}`, 10, 130);
    doc.text(`Contact Person: ${data.supplierVendorInformation.contactPerson}`, 10, 140);

    // ... Add other form fields as needed

    doc.save('procurement_request.pdf');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Requisition Date:
          <input type="date" name="requisitionDate" value={formData.requisitionDate} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Requisition No:
          <input type="text" name="requisitionNo" value={formData.requisitionNo} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Requestor Name:
          <input type="text" name="requestorInformation.name" value={formData.requestorInformation.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Designation:
          <input type="text" name="requestorInformation.designation" value={formData.requestorInformation.designation} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Department:
          <input type="text" name="requestorInformation.department" value={formData.requestorInformation.department} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Expenses Type:
          <input type="text" name="requestorInformation.expensesType" value={formData.requestorInformation.expensesType} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Delivery Time:
          <input type="text" name="requestorInformation.deliveryTime" value={formData.requestorInformation.deliveryTime} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Supplier/Vendor Name:
          <input type="text" name="supplierVendorInformation.name" value={formData.supplierVendorInformation.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input type="text" name="supplierVendorInformation.address" value={formData.supplierVendorInformation.address} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input type="text" name="supplierVendorInformation.phoneNumber" value={formData.supplierVendorInformation.phoneNumber} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Contact Person:
          <input type="text" name="supplierVendorInformation.contactPerson" value={formData.supplierVendorInformation.contactPerson} onChange={handleChange} />
        </label>
      </div>
      {/* Add other form fields as needed */}
      <button type="submit">Submit</button>
      <button type="button" onClick={() => generateReport(formData)}>View</button>
    </form>
  );
};

export default GenerateReport;
