import image from '../../../images/intro-image.png'
const Gallery = () => {
  return (
    <div className="md:w-[90%] w-[100%] flex flex-col md:flex-row md:p-8 p-2  md:gap-6 gap-8 items-center justify-center mb-5 bg-gradient-to-bll from-yellow-700 to-yellow-400 bg-yellow-400 rounded-3xl shadow">
        <div className="md:w-[40%] w-full h-[90vh] flex flex-col items-center justify-center md:gap-4 gap-2 ">
          <img src="" alt="" />
            <img src= {image} alt="" className="w-full  h-[45%] bg-slate-100 rounded-2xl shadow"/>
            <img src= {image}alt="" className="w-full h-[25%] bg-slate-100 rounded-2xl shadow"/>
            <img src= {image} alt="" className="w-full h-[30%] bg-slate-100 rounded-2xl shadow "/>
        </div>
        <div className="md:w-[60%] w-full h-[90vh] flex flex-col items-center justify-center md:gap-4 gap-2 ">
            <div className="w-full h-[65%]  flex md:gap-4 gap-2 ">
                <div className="h-[100%] w-[40%] flex flex-col items-center justify-center md:gap-4 gap-2 " >
                  <img src= {image} alt=""  className="w-full h-[32%] rounded-2xl bg-slate-400 shadow"/>
                  <img src= {image} alt=""  className="w-full h-[31%] rounded-2xl bg-slate-400 shadow"/>
                  <img src= {image} alt=""  className="w-full h-[31%] rounded-2xl bg-slate-400 shadow"/>
                </div>
                <div className="h-[100%] w-[60%] flex flex-col items-center justify-center md:gap-4 gap-2">
                  <img src= {image} alt="" className="w-full h-[60%] bg-slate-400 rounded-2xl shadow"/>
                  <img src= {image} alt="" className="w-full h-[40%] bg-slate-400 rounded-2xl shadow"/>
                </div>
            </div>
            <img src= {image} alt="" className="w-full h-[35%] bg-slate-400 rounded-2xl shadow"/>
        </div>
    </div>
  )
}

export default Gallery