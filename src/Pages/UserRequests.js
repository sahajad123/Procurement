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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Pages/Pages.css";
import config from "../utils/config";

const baseUrl = config.baseUrl;
const UserRequests = ({ userDetails }) => {
  const [requisitions, setRequisitions] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequisitions = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage or wherever you store it
        let url = baseUrl + "requisitions";

        // if (
        //   userDetails.designation !== "Procurement officer" &&
        //   userDetails.designation !== "CEO"
        // ) {
        //   url = `${baseUrl}requisitions/${userDetails._id}`;
        // }

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRequisitions(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.message : "Server error");
      }
    };

    fetchRequisitions();
  }, [userDetails]);
  // if(!userDetails){
  //   return<h1>Please log in</h1>
  // }

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
            {console.log({ requisitions })}
            {requisitions.map((req, index) => (
              <tr
                key={req._id}
                onClick={() => {
                  console.log("REQQ", req?._id);
                  navigate(`/Main/Procurements/${req?._id}`);
                }}
              >
                <td>{index + 1}</td>
                <td>{req.requisitionNo}</td>
                {/* <td>{req.qty}</td> */}
                <td>
                  {req.items.reduce((total, item) => total + item.total, 0)}
                </td>
                <td>{req.requestor.username}</td>
                {/* <td>{req.sentTo}</td> */}
                <td>{new Date(req.requisitionDate).toLocaleDateString()}</td>
                <td
                  className={
                    req.verificationStatus.level1
                      ? req.verificationStatus.level1.toLowerCase()
                      : ""
                  }
                >
                  {req.verificationStatus.level1}
                </td>
                <td
                  className={
                    req.verificationStatus.level2
                      ? req.verificationStatus.level2.toLowerCase()
                      : ""
                  }
                >
                  {req.verificationStatus.level2}
                </td>
                <td>
                  <Link to={`/requisitions/${req._id}`}>View more</Link>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UserRequests;
