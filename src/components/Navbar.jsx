const Navbar = () => {
    return (
        <div className="bg-white p-5 px-14">
            <ul className="flex justify-between">
                <li>Open AGI</li>
                <div className="flex space-x-12">
                    <button>Deploy</button>
                    <button>Run</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar