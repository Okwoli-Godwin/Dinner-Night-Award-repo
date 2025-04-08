


import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import AOS from 'aos';
import 'aos/dist/aos.css';





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
  // const { setOpen } = useOutletContext<OutletContextType>();

  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({});

  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const ticketsPerPage = 6; // Number of tickets per page
  const [Loading, setLoading] = useState(false)
  const [error, setError] = useState <string | null >(null)

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          "https://our-lady-database.onrender.com/api/getTickets"
        );
        const data = await response.json();


        if (data && data.tickets) {
          setTickets(data.tickets);
          setLoading(false)
        } else {
          console.error("Unexpected API response structure:", data);
          setLoading(false)
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
        setLoading(false)
        setError("something went wrong while Fetching the data ")  
      }
    };

    fetchTickets();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // whether animation should happen only once
    });
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





if (Loading) {
  return <div className="w-full h-screen bg-slate-50 flex items-center justify-center"><ClipLoader /></div>
}

if (error) {
  return (
    <div className="w-full h-screen bg-slate-100 flex items-center justify-center">
      <p className="text-red-600 text-lg font-semibold text-center">{error}</p>
    </div>
  );
}

return (
  <div className="w-full min-h-full bg-gray-50 py-1 md: px-2 flex flex-col gap-10 ">

    <p className="md:text-3xl text-2xl font-bold text-center md:text-start mt-5 md:mt-0">Tickets Sold</p>


    {/* Pagination Controls */}
    <div className="w-full mx-auto  text-gray-600">
      <div className="flex items-center justify-between text-sm text-gray font-bold">
        <a
          href="javascript:void(0)"
          className="px-4 py-2 border rounded duration-150 hover:bg-gray-50 shadow shadow-gray-500"
          onClick={handlePreviousPage}
        >
          Previous
        </a>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <a
          href="javascript:void(0)"
          className="px-4 py-2 border rounded duration-150 hover:bg-gray-50 shadow shadow-gray-500"
          onClick={handleNextPage}
        >
          Next
        </a>
      </div>
    </div>

    {/* Ticket Table */}
    <div className="w-full bg-white shadow-md overflow-x-auto" data-aos="fade-up"  data-aos-duration="3000">
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


