// import { useState, useEffect } from "react";
// import { useOutletContext } from "react-router-dom";
// // import { CiMenuFries } from "react-icons/ci";

// // Define a type for the outlet context
// type OutletContextType = {
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   open: boolean;
// };

// type TicketType = {
//   _id: string;
//   name: string;
//   email: string;
//   ID: string;
//   ticketType: string;
//   isAdmin: boolean;
//   isSuperAdmin: boolean;
//   purchaseDate: string;
//   ticketPriority: number;
// };

// const TicketSold: React.FC = () => {
//   const { setOpen } = useOutletContext<OutletContextType>();

//   const [tickets, setTickets] = useState<TicketType[]>([]);
//   const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({});

//   useEffect(() => {
//     const fetchTickets = async () => {
//       try {
//         const response = await fetch(
//           "https://our-lady-database.onrender.com/api/getTickets"
//         );
//         const data = await response.json();

//         if (data && data.tickets) {
//           setTickets(data.tickets);
          
//         } else {
//           console.error("Unexpected API response structure:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching tickets:", error);
//       }
//     };

//     fetchTickets();
//   }, []);

//   // Map ticket types to their CSS classes
//   const ticketClassMap: Record<string, string> = {
//     singles: "bg-blue-100 border-blue-600 text-blue-600 text",
//     vip: "bg-purple-100 border-purple-600 text-purple-600",
//     vvip: "bg-orange-100 border-orange-600 text-orange-600",
//     admin: "bg-red-100 border-red-600 text-red-600",
//     couples: "bg-green-100 border-green-600 text-green-600",
//     tablefor8: "bg-yellow-100 border-yellow-600 text-yellow-600",
//   };

//   // All possible ticket types, even those with zero count
//   const allTicketTypes = ["singles", "vip", "vvip", "admin", "couples",'tablefor8'];

//   // Initialize ticket counts to zero for each ticket type
//   const ticketCounts = tickets.reduce<Record<string, number>>((acc, ticket) => {
//     acc[ticket.ticketType] = (acc[ticket.ticketType] || 0) + 1;
//     return acc;
//   }, {});

//   // Ensure all ticket types are included in the ticketCounts object, even if the count is zero
//   allTicketTypes.forEach((type) => {
//     if (!(type in ticketCounts)) {
//       ticketCounts[type] = 0;
//     }
//   });

//   // Handle change for checkboxes
//   const handleCheckboxChange = (ticketId: string) => {
//     setCheckedState((prevState) => ({
//       ...prevState,
//       [ticketId]: !prevState[ticketId], // Toggle the checkbox for this ticket
//     }));
//   };
//   //  pagination
//   const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
//   const [currentPage, setCurrentPage] = useState("1")

//   return (
//     <div className="w-full min-h-full bg-gray-50 py-6 md:px-4 px-2 flex flex-col gap-6">
//       {/* Page Header */}
//       <div className="flex justify-between items-center md:shadow-none shadow md:mt-4 py-3 ">
//         <p className="md:text-3xl text-2xl font-bold">Tickets Sold</p>
//         <button
//           className="flex flex-col gap-[2px] w-6 shadow shadow-black py-[3px] px-[2px] md:hidden"
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           <div className="h-[2px] w-full bg-black rounded"></div>
//           <div className="h-[2px] w-full bg-black rounded"></div>
//           <div className="h-[2px] w-full bg-black rounded"></div>
//         </button>
//         {/* <CiMenuFries /> */}
//       </div>

//       {/* Summary Cards */}
//       <div className="flex md:gap-5 gap-1 justify-center flex-wrap mb-11">
//         {Object.keys(ticketCounts).map((ticketType) => (
//           <div
//             key={ticketType}
//             className="md:w-[32%] w-[30%] md:h-25 h-24 md:p-9 p-1 md:rounded-lg shadow bg-white flex flex-col items-center justify-center "
//           >
//             <button
//               className={`md:w-32 px-1 py-1 text-center rounded border font-bold ${ticketClassMap[ticketType] || "bg-gray-100 border-gray-400 text-gray-600"}`}
//             >
//               {ticketType.charAt(0).toUpperCase() + ticketType.slice(1)}
//             </button>
//             <p className="text-4xl font-bold">{ticketCounts[ticketType]}</p>
//           </div>
//         ))}
//       </div>

//       {/* Ticket Table */}
//       <div className="w-full mx-auto mt-12  text-gray-600 ">
//             <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
//                 <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Previous</a>
//                 <div>
//                     Page {currentPage} of {pages.length}
//                 </div>
//                 <a href="javascript:void(0)" className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50">Next</a>
//             </div>
//         </div>

//       <div className="w-full bg-white shadow-md overflow-x-auto">
//         <table className="min-w-[900px] w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-left h-20 shadow text-xl">
//               <th className="p-3 border border-gray-300">S/N</th>
//               <th className="p-3 border border-gray-300">Ticket Owners</th>
//               <th className="p-3 border border-gray-300">Email</th>
//               <th className="p-3 border border-gray-300">ID</th>
//               <th className="p-3 border border-gray-300">Ticket Type</th>
//               <th className="p-3 border border-gray-300">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {tickets.map((ticket, index) => (
//               <tr key={ticket._id} className="shadow">
//                 <td className="p-3 border border-gray-300">{index + 1}</td>
//                 <td className="p-3 border border-gray-300">{ticket.name}</td>
//                 <td className="p-3 border border-gray-300">{ticket.email}</td>
//                 <td className="p-3 border border-gray-300">{ticket.ID}</td>
//                 <td className="p-3 border border-gray-300">
//                   <button
//                     className={`px-3 py-1 w-32 rounded border font-bold ${ticketClassMap[ticket.ticketType] || "bg-gray-100 border-gray-400 text-gray-600"}`}
//                   >
//                     ✨ {ticket.ticketType}
//                   </button>
//                 </td>
//                 <td className="p-3 border border-gray-300">
//                   <div>
//                     <label className="cursor-pointer">
//                       <input
//                         className="cursor-pointer"
//                         type="checkbox"
//                         checked={checkedState[ticket._id] || false}
//                         onChange={() => handleCheckboxChange(ticket._id)}
//                       />
//                     </label>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TicketSold;


import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

// Define a type for the outlet context
type OutletContextType = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

type TicketType = {
  _id: string;
  name: string;
  email: string;
  ID: string;
  ticketType: string;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  purchaseDate: string;
  ticketPriority: number;
};

const TicketSold: React.FC = () => {
  const { setOpen } = useOutletContext<OutletContextType>();

  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({});

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const ticketsPerPage = 10; // Number of tickets per page

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          "https://our-lady-database.onrender.com/api/getTickets"
        );
        const data = await response.json();

        if (data && data.tickets) {
          setTickets(data.tickets);
        } else {
          console.error("Unexpected API response structure:", data);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);



  // Calculate the total number of pages
  const totalPages = Math.ceil(tickets.length / ticketsPerPage);

  // Slice tickets based on current page
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };


    // Handle change for checkboxes
  const handleCheckboxChange = (ticketId: string) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [ticketId]: !prevState[ticketId], // Toggle the checkbox for this ticket
    }));
  };


  
  // Map ticket types to their CSS classes
  const ticketClassMap: Record<string, string> = {
    singles: "bg-blue-100 border-blue-600 text-blue-600 text",
    vip: "bg-purple-100 border-purple-600 text-purple-600",
    vvip: "bg-orange-100 border-orange-600 text-orange-600",
    admin: "bg-red-100 border-red-600 text-red-600",
    couples: "bg-green-100 border-green-600 text-green-600",
    tablefor8: "bg-yellow-100 border-yellow-600 text-yellow-600",
  };

  return (
    <div className="w-full min-h-full bg-gray-50 py-6 md:px-4 px-2 flex flex-col gap-6">
      <div className="flex justify-between items-center md:shadow-none shadow md:mt-4 py-3 ">
        <p className="md:text-3xl text-2xl font-bold">Tickets Sold</p>
        <button
          className="flex flex-col gap-[2px] w-6 shadow shadow-black py-[3px] px-[2px] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="h-[2px] w-full bg-black rounded"></div>
          <div className="h-[2px] w-full bg-black rounded"></div>
          <div className="h-[2px] w-full bg-black rounded"></div>
        </button>
      </div>

      {/* Pagination Controls */}
      <div className="w-full mx-auto mt-12 text-gray-600 ">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
          <a
            href="javascript:void(0)"
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
            onClick={handlePreviousPage}
          >
            Previous
          </a>
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <a
            href="javascript:void(0)"
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
            onClick={handleNextPage}
          >
            Next
          </a>
        </div>
      </div>

      {/* Ticket Table */}
      <div className="w-full bg-white shadow-md overflow-x-auto">
        <table className="min-w-[900px] w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left h-20 shadow text-xl">
              <th className="p-3 border border-gray-300">S/N</th>
              <th className="p-3 border border-gray-300">Ticket Owners</th>
              <th className="p-3 border border-gray-300">Email</th>
              <th className="p-3 border border-gray-300">ID</th>
              <th className="p-3 border border-gray-300">Ticket Type</th>
              <th className="p-3 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentTickets.map((ticket, index) => (
              <tr key={ticket._id} className="shadow">
                <td className="p-3 border border-gray-300">
                  {index + 1 + (currentPage - 1) * ticketsPerPage}
                </td>
                <td className="p-3 border border-gray-300">{ticket.name}</td>
                <td className="p-3 border border-gray-300">{ticket.email}</td>
                <td className="p-3 border border-gray-300">{ticket.ID}</td>
                <td className="p-3 border border-gray-300">
                  <button
                    className={`px-3 py-1 w-32 rounded border font-bold ${ticketClassMap[ticket.ticketType] || "bg-gray-100 border-gray-400 text-gray-600"}`}
                  >
                    ✨ {ticket.ticketType}
                  </button>
                </td>
                <td className="p-3 border border-gray-300">
                  <div>
                    <label className="cursor-pointer">
                      <input
                        className="cursor-pointer"
                        type="checkbox"
                        checked={checkedState[ticket._id] || false}
                        onChange={() => handleCheckboxChange(ticket._id)}
                      />
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketSold;


