// import React, { useEffect, useState } from 'react';
// import axios from 'axios'; // Ensure axios is installed

// const ApiComponent = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Make API call directly to the backend with the full URL
//         const response = await axios.get('https://localhost:44372/api/users'); // Full URL used here
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this runs once when the component mounts

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>
//             {user.username} - {user.email}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ApiComponent;
