// import React, { useState } from 'react';
// import '../Pages/Pages.css'; // Import the external CSS file

// function Procurements() {
//   const [items, setItems] = useState([{ item: '', quantity: '', unitPrice: '', totalPrice: '' }]);
//   const [itemCount, setItemCount] = useState(0)

//   const handleAddItem = () => {
//     setItems([...items, { item: '', quantity: '', unitPrice: '', totalPrice: '' }]);
//     setItemCount(itemCount+1)
//   };

//   const handleRemoveItem = (index) => {
//     const newItems = items.filter((_, i) => i !== index);
//     setItems(newItems);
//     setItemCount(itemCount-1)
//   };

//   const handleChange = (index, event) => {
//     const { name, value } = event.target;
//     const newItems = items.map((item, i) => (i === index ? { ...item, [name]: value } : item));
//     setItems(newItems);
//   };

//   return (
//     <div>
//       <div className="procurements-content-area">
//         <div className="back-button">
//           <button className="back-button-text">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//               <path d="M15 4L7 12L15 20" stroke="url(#paint0_linear_64_844)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//               <defs>
//                 <linearGradient id="paint0_linear_64_844" x1="15" y1="4" x2="2.2" y2="10.4" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#75C043" />
//                   <stop offset="1" stopColor="#64B730" />
//                 </linearGradient>
//               </defs>
//             </svg>
//             Back
//           </button>
//         </div>
//         <div className="procurements-section">
//           <h1 className="section-title">Requisition Information<span className='star'>*</span></h1>
//           <div className="field-group">
//             <div className="field-item">
//               <label className="field-label">Requisition Number</label>
//               <input type="number" className="field-input" />
//             </div>

//             <div className="field-item" style={{ marginLeft: "20px" }}>
//               <label className="field-label">Requisition Date</label>
//               <input type="date" className="field-input" />
//             </div>
//           </div>

//           <div className="field-group">
//             <div className="field-item">
//               <label className="field-label">Requested By</label>
//               <input type="text" className="field-input" />
//             </div>

//             <div className="field-item" style={{ marginLeft: "20px" }}>
//               <label className="field-label">Designation</label>
//               <input type="text" className="field-input" />
//             </div>

//             <div className="field-item" style={{ marginLeft: "20px" }}>
//               <label className="field-label">Department</label>
//               <input type="text" className="field-input" />
//             </div>
//           </div>
//         </div>

//         <div className="procurements-section expenses-section">
//           <h1 className="section-title">Expenses Information<span className='star'>*</span></h1>
//           <div className="field-group">
//             <div className="field-item">
//               <label className="field-label">Expense Type</label>
//               <input type="text" className="field-input" />
//             </div>

//             <div className="field-item" style={{ marginLeft: "20px" }}>
//               <label className="field-label">Reason for Purchase</label>
//               <textarea className="field-textarea" rows="15"></textarea>
//             </div>
//           </div>
//         </div>

//         <div className="procurements-section procurement-request">
//           <h1 className="section-title">Procurement Request<span className='star'>*</span></h1>
//           {items.map((item, index) => (
//             <div key={index} className="field-group">
//               <div className="field-item">
//                 <label className="field-label">Item</label>
//                 <input
//                   type="text"
//                   name="item"
//                   value={item.item}
//                   onChange={(e) => handleChange(index, e)}
//                   className="field-input"
//                 />
//               </div>
//               <div className="field-item" style={{ marginLeft: "20px" }}>
//                 <label className="field-label">Quantity</label>
//                 <input
//                   type="number"
//                   name="quantity"
//                   value={item.quantity}
//                   onChange={(e) => handleChange(index, e)}
//                   className="field-input"
//                 />
//               </div>
//               <div className="field-item" style={{ marginLeft: "20px" }}>
//                 <label className="field-label">Unit Price</label>
//                 <input
//                   type="number"
//                   name="unitPrice"
//                   value={item.unitPrice}
//                   onChange={(e) => handleChange(index, e)}
//                   className="field-input"
//                 />
//               </div>
//               <div className="field-item" style={{ marginLeft: "20px" }}>
//                 <label className="field-label">Total Price</label>
//                 <input
//                   type="number"
//                   name="totalPrice"
//                   value={item.totalPrice}
//                   onChange={(e) => handleChange(index, e)}
//                   className="field-input"
//                 />
//               </div>
//               {itemCount>0?<div className="field-item-btn" style={{ marginLeft: "20px" }}>
//               <button onClick={() => handleRemoveItem(index)} className="remove-item-button">Remove</button>
//               </div>:""}
              
//             </div>
//           ))}
          
//           <div style={{ marginTop: "32px" }}>
//             <button onClick={handleAddItem} className="add-items-button">Add more items</button>
//           </div>
//         </div>

//         <div className="procurements-section vendor-information">
//           <h1 className="section-title">Vendor Information<span className='optional'>(optional)</span></h1>
//           <div className="field-group">
//             <div className="field-item">
//               <label className="field-label">Name</label>
//               <input type="text" className="field-input" />
//             </div>
//             <div className="field-item" style={{ marginLeft: "20px" }}>
//               <label className="field-label">Address</label>
//               <input type="text" className="field-input" />
//             </div>
//             <div className="field-item" style={{ marginLeft: "20px" }}>
//               <label className="field-label">Phone Number</label>
//               <input type="text" className="field-input" />
//             </div>
//           </div>

//           <div className="field-group">
//             <div className="field-item">
//               <label className="field-label">Contact Person</label>
//               <input type="text" className="field-input" />
//             </div>
//             <div className="field-item" style={{ marginLeft: "20px" }}>
//               <label className="field-label">Expected Delivery Date</label>
//               <input type="date" className="field-input" />
//             </div>
//           </div>
//         </div>

//         <div className="submit-section">
//           <button className="submit-button">Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Procurements;
import React, { useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import '../Pages/Pages.css'; 
import { Link } from 'react-router-dom';


const schema = yup.object().shape({
  RequisitionNo: yup.string().required('Requisition Number is required'),
  RequisitionDate: yup.date().required('Requisition Date is required'),
  RequestorInformation: yup.object().shape({
    Name: yup.string().required('Requested By is required'),
    Designation: yup.string().required('Designation is required'),
    Department: yup.string().required('Department is required'),
    ExpensesType: yup.string().required('Expense Type is required'),
    ReasonForPurchase: yup.string().required('Reason for Purchase is required'),
  }),
  SupplierVendorInformation: yup.object().shape({
    Name: yup.string().optional(),
    Address: yup.string().optional(),
    PhoneNumber: yup.string().optional(),
    ContactPerson: yup.string().optional(),
    ExpectedDeliveryDate: yup.date().optional(),
  }),
  Items: yup.array().of(
    yup.object().shape({
      item: yup.string().required('Item is required'),
      quantity: yup.number().required('Quantity is required').positive().integer(),
      unitPrice: yup.number().required('Unit Price is required').positive(),
      totalPrice: yup.number().required('Total Price is required').positive(),
    })
  ).required('Must have at least one item')
});

function Procurements({userDetails}) {
  const { register, control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      RequisitionNo: '',
      RequisitionDate: '',
      RequestorInformation: {
        Name: '',
        Designation: '',
        Department: '',
        ExpensesType: '',
        ReasonForPurchase: '',
      },
      SupplierVendorInformation: {
        Name: '',
        Address: '',
        PhoneNumber: '',
        ContactPerson: '',
        ExpectedDeliveryDate: '',
      },
      Items: [{ item: '', quantity: '', unitPrice: '', totalPrice: '' }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'Items'
  });

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios.post('/api/requisitions', data, {
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('Successfully submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  if(!userDetails){
    return<h1>Please login</h1>
  }

  return (
    <div>
      <div className="procurements-content-area">
        <div className="back-button">
          <Link to='/Main/UserRequests'><button className="back-button-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 4L7 12L15 20" stroke="url(#paint0_linear_64_844)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_64_844" x1="15" y1="4" x2="2.2" y2="10.4" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#75C043" />
                  <stop offset="1" stopColor="#64B730" />
                </linearGradient>
              </defs>
            </svg>
            Back
          </button>
          </Link>
        </div>
        <form className='Requisition-form' onSubmit={handleSubmit(onSubmit)}>
          <div className="procurements-section">
            <h1 className="section-title">Requisition Information<span className='star'>*</span></h1>
            <div className="field-group">
              <div className="field-item">
                <label className="field-label">Requisition Number</label>
                <input type="number" className="field-input" {...register('RequisitionNo')} />
                <p>{errors.RequisitionNo?.message}</p>
              </div>

              <div className="field-item" style={{ marginLeft: "20px" }}>
                <label className="field-label">Requisition Date</label>
                <input type="date" className="field-input" {...register('RequisitionDate')} />
                <p>{errors.RequisitionDate?.message}</p>
              </div>
            </div>

            <div className="field-group">
              <div className="field-item">
                <label className="field-label">Requested By</label>
                <input type="text" className="field-input" {...register('RequestorInformation.Name')} />
                <p>{errors.RequestorInformation?.Name?.message}</p>
              </div>

              <div className="field-item" style={{ marginLeft: "20px" }}>
                <label className="field-label">Designation</label>
                <input type="text" className="field-input" {...register('RequestorInformation.Designation')} />
                <p>{errors.RequestorInformation?.Designation?.message}</p>
              </div>

              <div className="field-item" style={{ marginLeft: "20px" }}>
                <label className="field-label">Department</label>
                <input type="text" className="field-input" {...register('RequestorInformation.Department')} />
                <p>{errors.RequestorInformation?.Department?.message}</p>
              </div>
            </div>
          </div>

          <div className="procurements-section expenses-section">
            <h1 className="section-title">Expenses Information<span className='star'>*</span></h1>
            <div className="field-group">
              <div className="field-item">
                <label className="field-label">Expense Type</label>
                <input type="text" className="field-input" {...register('RequestorInformation.ExpensesType')} />
                <p>{errors.RequestorInformation?.ExpensesType?.message}</p>
              </div>
              <div className="field-item" style={{ marginLeft: "20px" }}>
                <label className="field-label">Request Type</label>
                <input type="text" className="field-input" {...register('RequestorInformation.ExpensesType')} />
                <p>{errors.RequestorInformation?.ExpensesType?.message}</p>
              </div>

              
            </div>
            <div className="field-group">
            <div className="field-item">
                <label className="field-label">Reason for Purchase</label>
                <textarea className="field-textarea" rows="15" {...register('RequestorInformation.ReasonForPurchase')}></textarea>
                <p>{errors.RequestorInformation?.ReasonForPurchase?.message}</p>
              </div>
            </div>
          </div>

          <div className="procurements-section procurement-request">
            <h1 className="section-title">Procurement Request<span className='star'>*</span></h1>
            {fields.map((item, index) => (
              <div key={item.id} className="field-group">
                <div className="field-item">
                  <label className="field-label">Item</label>
                  <input type="text" className="field-input" {...register(`Items.${index}.item`)} />
                  <p>{errors.Items?.[index]?.item?.message}</p>
                </div>
                <div className="field-item" style={{ marginLeft: "20px" }}>
                  <label className="field-label">Quantity</label>
                  <input type="number" className="field-input" {...register(`Items.${index}.quantity`)} />
                  <p>{errors.Items?.[index]?.quantity?.message}</p>
                </div>
                <div className="field-item" style={{ marginLeft: "20px" }}>
                  <label className="field-label">Unit Price</label>
                  <input type="number" className="field-input" {...register(`Items.${index}.unitPrice`)} />
                  <p>{errors.Items?.[index]?.unitPrice?.message}</p>
                </div>
                <div className="field-item" style={{ marginLeft: "20px" }}>
                  <label className="field-label">Total Price</label>
                  <input type="number" className="field-input" {...register(`Items.${index}.totalPrice`)} />
                  <p>{errors.Items?.[index]?.totalPrice?.message}</p>
                </div>
                {fields.length > 1 && (
                  <div className="field-item-btn" style={{ marginLeft: "20px" }}>
                    <button type="button" onClick={() => remove(index)} className="remove-item-button">Remove</button>
                  </div>
                )}
              </div>
            ))}
            <div style={{ marginTop: "32px" }}>
              <button type="button" onClick={() => append({ item: '', quantity: '', unitPrice: '', totalPrice: '' })} className="add-items-button">Add more items</button>
            </div>
          </div>

          <div className="procurements-section vendor-information">
            <h1 className="section-title">Vendor Information<span className='optional'>(optional)</span></h1>
            <div className="field-group">
              <div className="field-item">
                <label className="field-label">Name</label>
                <input type="text" className="field-input" {...register('SupplierVendorInformation.Name')} />
              </div>
              <div className="field-item" style={{ marginLeft: "20px" }}>
                <label className="field-label">Address</label>
                <input type="text" className="field-input" {...register('SupplierVendorInformation.Address')} />
              </div>
              <div className="field-item" style={{ marginLeft: "20px" }}>
                <label className="field-label">Phone Number</label>
                <input type="text" className="field-input" {...register('SupplierVendorInformation.PhoneNumber')} />
              </div>
            </div>

            <div className="field-group">
              <div className="field-item">
                <label className="field-label">Contact Person</label>
                <input type="text" className="field-input" {...register('SupplierVendorInformation.ContactPerson')} />
              </div>
              <div className="field-item" style={{ marginLeft: "20px" }}>
                <label className="field-label">Expected Delivery Date</label>
                <input type="date" className="field-input" {...register('SupplierVendorInformation.ExpectedDeliveryDate')} />
              </div>
            </div>
          </div>

          <div className="submit-section">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Procurements;
