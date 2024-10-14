import siteLogo from "../assets/images/site-logo.png"
import playLogo from "../assets/images/play-logo.png"

const Navbar = () => {
    return (
        <div className="bg-white p-3 px-14">
            <ul className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img src={siteLogo} alt="" />
                    <li className="font-bold">Open AGI</li>
                </div>
                <div className="flex space-x-5">
                    <button className="bg-gray-400 cursor-not-allowed py-1 px-4 rounded-lg text-white">Deploy</button>
                    <button className="bg-green-700 flex items-center space-x-1 py-1 px-4 rounded-lg text-white">
                        <img src={playLogo} alt="" />
                        <p>Run</p>
                    </button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar