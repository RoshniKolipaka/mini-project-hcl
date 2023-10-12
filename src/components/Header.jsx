import logo from '../assets/logo.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center  ">
        <img
          className="w-32 cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] text-gradient-to-r from-blue-200 to-green-200 md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial display-none "
      >
        <li className="mx-4 cursor-pointer"></li>
        <li className="mx-4 cursor-pointer"></li>
        <li className="mx-4 cursor-pointer"></li>
        <li className="mx-4 cursor-pointer"></li>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#2b292a] hover:bg-[#242323] md:text-xs p-2
          rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#2b292a] hover:bg-[#242323] md:text-xs p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
