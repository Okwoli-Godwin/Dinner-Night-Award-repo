import Gallery from "./Gallery"

const OurGallery = () => {
  return (
    <div className="mt-32 w-full md:px-8 px-0 flex items-center justify-center flex-col ">
    <h2 className="text-yellow-400 uppercase font-bold">our gallery</h2>
    <h2 className="md:text-5xl font-extrabold  capitalize text-gray-800 mb-5 text-3xl text-center">our previous events</h2>

    <div className="md:w-[90%] w-[100%] m flex flex-wrap p-3  gap-2 items-center justify-center mb-5">
        <Gallery/>
    </div>
  </div>
  )
}

export default OurGallery