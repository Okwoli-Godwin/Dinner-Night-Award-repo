import Typography from "../components/typography/Typography"
import img from "../images/gallery1.jpg"
import img2 from "../images/gallery2.jpg"
import img3 from "../images/gallery14.jpg"
import img4 from "../images/gallery17.jpg"
import img5 from "../images/gallery7.jpg"
import img6 from "../images/gallery8.jpg"
import img7 from "../images/gallery11.jpg"
import img8 from "../images/gallery16.jpg"
import img9 from "../images/gallery18.jpg"
import img10 from "../images/gallery20.jpg"


const Gallery = () => {
  return (
    <div className="w-[100%] flex  mt-[100px] flex-col items-center">
      <Typography variant="h2">Past Events Gallery</Typography>

      <div className="w-[100%] flex flex-wrap mt-[30px]">
        <div className="h-[230px] w-[20%]">
            <img src={img3} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[230px] w-[20%]">
            <img src={img6} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[230px] w-[20%]">
            <img src={img5} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[230px] w-[20%]">
            <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[230px] w-[20%]">
            <img src={img2} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[230px] w-[20%]">
            <img src={img7} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[230px] w-[20%]">
            <img src={img8} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[230px] w-[20%]">
            <img src={img4} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[230px] w-[20%]">
            <img src={img9} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
        <div className="h-[230px] w-[20%]">
            <img src={img10} alt="" className="w-[100%] h-[100%] object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default Gallery
