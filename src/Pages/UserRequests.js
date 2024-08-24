// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../Pages/Pages.css';

// const UserRequests = () => {
//   const [requisitions, setRequisitions] = useState([]);

//   useEffect(() => {
//     axios.get('/api/requisitions')
//       .then(response => {
//         setRequisitions(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching the requisitions:', error);
//       });
//   }, []);

//   return (
//     <div className="procurement-table">
//       <div className="container">
//         <span className="label">Procurement request</span>
//         <button className="button">
//           <Link to="/Main/Procurements">Make procurement request</Link>
//         </button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>S/N</th>
//             <th>Requisition Number</th>
//             {/* <th>Qty</th> */}
//             <th>Amount</th>
//             <th>Requested By</th>
//             {/* <th>Sent to</th> */}
//             <th>Date</th>
//             <th>Procurement Status</th>
//             <th>CEO Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requisitions.map((req, index) => (
//             <tr key={req.id}>
//               <td>{index + 1}</td>
//               <td>{req.requisitionNumber}</td>
//               {/* <td>{req.qty}</td> */}
//               <td>{req.amount}</td>
//               <td>{req.requestedBy}</td>
//               {/* <td>{req.sentTo}</td> */}
//               <td>{new Date(req.date).toLocaleDateString()}</td>
//               <td className={req.status.toLowerCase()}>{req.status}</td>
//               <td className={req.status.toLowerCase()}>{req.status}</td>
//               <td><Link to={`/requisitions/${req.id}`}>View more</Link></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserRequests;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import '../Pages/Pages.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Pages/Pages.css';

const UserRequests = ({ userDetails }) => {
  const [requisitions, setRequisitions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequisitions = async () => {
      try {
        const token = localStorage.getItem('token'); 
        let url = '10.11.0.141/api/requisitions';

        if (userDetails.Designation !== 'Procurement officer' && userDetails.Designation !== 'CEO') {
          url = `/api/requisitions/user/${userDetails._id}`;
        }

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRequisitions(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Server error');
      }
    };

    fetchRequisitions();
  }, [userDetails]);
  if(!userDetails){
    return<h1>Please log in</h1>
  }

  return (
    <div className="procurement-table">
      <div className="container">
        <span className="label">Procurement request</span>
        <button className="button">
          <Link to="/Main/Procurements">Make procurement request</Link>
        </button>
      </div>
      
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Requisition Number</th>
              {/* <th>Qty</th> */}
              <th>Amount</th>
              <th>Requested By</th>
              {/* <th>Sent to</th> */}
              <th>Date</th>
              <th>Procurement Status</th>
              <th>CEO Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {error ? (
        <div>Error: {error}</div>
      ) : (
          <tbody>
            {requisitions.map((req, index) => (
              <tr key={req._id}>
                <td>{index + 1}</td>
                <td>{req.requisitionNo}</td>
                {/* <td>{req.qty}</td> */}
                <td>{req.items.reduce((total, item) => total + item.total, 0)}</td>
                <td>{req.requestor.name}</td>
                {/* <td>{req.sentTo}</td> */}
                <td>{new Date(req.requisitionDate).toLocaleDateString()}</td>
                <td className={req.status ? req.status.toLowerCase() : ''}>{req.status}</td>
                <td className={req.status ? req.status.toLowerCase() : ''}>{req.status}</td>
                <td><Link to={`/requisitions/${req._id}`}>View more</Link></td>
              </tr>
            ))}
          </tbody>
          )}
        </table>
      
    </div>
  );
};

export default UserRequests;

