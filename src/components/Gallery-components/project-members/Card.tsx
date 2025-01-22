import image from '../../../images/intro-image.png'

const Card = () => {
  return (
    <div className="md:w-56 w-36 flex flex-col items-center justify-center md:bg-white md:shadow-none bg-slate-100 py-3 rounded shadow-2xl ">
        <img src={image} alt=""  className="md:w-40 w-20 md:h-40 h-20 rounded-full bg-black"/>
        <div className="text-center mt-3">
            <h2 className="font-bold md:text-2xl text-[15px] text-gray-800">Esther Howard</h2>
            <h2 className="text-yellow-500">stack</h2>

        </div>
    </div>
  )
}

export default Card