const img='https://miro.medium.com/max/1280/1*z-7nSVy43U9HBy17-z3aZg.png'
import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const onCreatedNFT = () => {
    setGlobalState('modal', 'scale-100')
  }

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10 bg-gradient-to-r from-blue-200 to-green-200" 
    >
      <div className="md:w-3/6 w-full">
        <div>
          <h1 className="text-black text-5xl font-bold">
           <span > ArtEreum:</span> <br /> Where Art Meets <br />
            <span >Blockchain</span> 
          </h1>
          <p className="text-gray-600 font-semibold text-sm mt-3">
           Connect, collect and create NFTs.
          </p>
        </div>

        <div className="flex flex-row mt-5">
          <button
            className=" text-white
            bg-black 
            rounded-full cursor-pointer p-2"
            onClick={onCreatedNFT}
          >
            Create NFT
          </button>
        </div>

        
      </div>

      <div
        className=" md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
      >
        <img
          src={img}
          alt="NFT Art"
          className="h-60 w-full object-cover"
        />
       
      </div>
    </div>
  )
}

export default Hero
