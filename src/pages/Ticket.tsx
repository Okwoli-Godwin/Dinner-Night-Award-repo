import img from "../images/entertainment.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import img1 from "../assets/ticket1.jpg";
import img3 from "../assets/ticket3.jpg";
import img4 from "../assets/ticket4.jpg";

const Ticket = () => {
  return (
    <>
      <div className="w-[100%] relative h-[200px]">
        <img
          src={img}
          alt="img"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000] bg-opacity-60 flex justify-center items-center">
          <div className="flex items-center">
            <h4 className="text-[20px] font-[700] text-[#fff]">Ticket</h4>
            <MdKeyboardDoubleArrowRight
              size={18}
              className="ml-[15px] text-[#fff]"
            />
            <h2 className="font-[700] ml-[15px] text-[#d8b300] text-[35px]">
              Get Your Ticket
            </h2>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex justify-center pl-[40px] pr-[40px] mt-[50px] items-center flex-col">
        <h2 className="text-[32px] font-[700]">Choose Your Tickets</h2>

        <div className="w-[90%] flex justify-between flex-wrap mt-[70px] mb-[50px]">
          <div className="w-[330px] relative h-[500px] overflow-hidden flex rounded-[20px]">
            <img
              src={img1}
              alt="img"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="flex absolute flex-col items-center inset-0 w-full h-full bg-[#000] bg-opacity-60">
              <div className="w-[70%] h-[50px] bg-[#fff] rounded-bl-[12px] rounded-br-[12px] flex justify-center items-center">
                <h3 className="text-[20px] font-[600] text-[#1a1a1a]">
                  Regular
                </h3>
              </div>

              <div className="w-[100%] border-b border-[#d4d4d4] flex justify-center border-dashed pb-[20px]">
                <h3 className="text-[31px] font-[700] text-[#fff] mt-[15px]">
                  ₦5,000
                </h3>
              </div>
              <div className="mt-[40px] w-[100%] flex-col flex items-center border-b border-[#d4d4d4] border-dashed">
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Get everything a Conference pass
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Enjoy 2 days of inspiring talks
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Breakout sessions exploring
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Challenging topics, great food.
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  With experts at a Workshops
                </p>
              </div>

              <button className="w-[70%] h-[55px] bg-[#0C8F54] mt-[12px] rounded-[12px] justify-center items-center flex text-[#fff] font-[700]">
                Buy
              </button>
            </div>
          </div>

          <div className="w-[330px] relative h-[500px] overflow-hidden flex rounded-[20px]">
            <img
              src={img4}
              alt="img"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="flex absolute flex-col items-center inset-0 w-full h-full bg-[#000] bg-opacity-60">
              <div className="w-[70%] h-[50px] bg-[#fff] rounded-bl-[12px] rounded-br-[12px] flex justify-center items-center">
                <h3 className="text-[20px] font-[600] text-[#1a1a1a]">Vip</h3>
              </div>

              <div className="w-[100%] border-b border-[#d4d4d4] flex justify-center border-dashed pb-[20px]">
                <h3 className="text-[31px] font-[700] text-[#fff] mt-[15px]">
                  ₦10,000
                </h3>
              </div>
              <div className="mt-[40px] w-[100%] flex-col flex items-center border-b border-[#d4d4d4] border-dashed">
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Get everything a Conference pass
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Enjoy 2 days of inspiring talks
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Breakout sessions exploring
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Challenging topics, great food.
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  With experts at a Workshops
                </p>
              </div>

              <button className="w-[70%] h-[55px] bg-[#d8b300] mt-[12px] rounded-[12px] justify-center items-center flex text-[#fff] font-[700]">
                Buy
              </button>
            </div>
          </div>

          <div className="w-[330px] relative h-[500px] overflow-hidden flex rounded-[20px]">
            <img
              src={img3}
              alt="img"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="flex absolute flex-col items-center inset-0 w-full h-full bg-[#000] bg-opacity-60">
              <div className="w-[70%] h-[50px] bg-[#fff] rounded-bl-[12px] rounded-br-[12px] flex justify-center items-center">
                <h3 className="text-[20px] font-[600] text-[#1a1a1a]">
                  Couples
                </h3>
              </div>

              <div className="w-[100%] border-b border-[#d4d4d4] flex justify-center border-dashed pb-[20px]">
                <h3 className="text-[31px] font-[700] text-[#fff] mt-[15px]">
                  ₦20,000
                </h3>
              </div>
              <div className="mt-[40px] w-[100%] flex-col flex items-center border-b border-[#d4d4d4] border-dashed">
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Get everything a Conference pass
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Enjoy 2 days of inspiring talks
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Breakout sessions exploring
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  Challenging topics, great food.
                </p>
                <p className="text-[14px] font-[700] text-[#fff] pb-[30px]">
                  With experts at a Workshops
                </p>
              </div>

              <button className="w-[70%] h-[55px] bg-[#0C8F54] mt-[12px] rounded-[12px] justify-center items-center flex text-[#fff] font-[700]">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
