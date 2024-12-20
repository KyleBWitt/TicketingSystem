// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TicketManagementHome = () => {
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTickets = async () => {
//       try {
//         const response = await axios.get("https://localhost:44372/api/incidents"); // Update to match your API endpoint
//         setTickets(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTickets();
//   }, []);

//   if (loading) return <div>Loading tickets...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="ticket-management-home">
//       <header>
//         <h1>Ticket Management System</h1>
//         <p>Welcome to the Ticket Management System. Manage your tickets effectively!</p>
//       </header>

//       <main>
//         <h2>Current Tickets</h2>
//         {tickets.length === 0 ? (
//           <p>No tickets available.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Description</th>
//                 <th>Priority</th>
//                 <th>Created On</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tickets.map((ticket) => (
//                 <tr key={ticket.id}>
//                   <td>{ticket.id}</td>
//                   <td>{ticket.description}</td>
//                   <td>{ticket.priority}</td>
//                   <td>{new Date(ticket.createdOn).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </main>

//       <footer>
//         <p>&copy; 2024 Ticket Management System</p>
//       </footer>
//     </div>
//   );
// };

// export default TicketManagementHome;
