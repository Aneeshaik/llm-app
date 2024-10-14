import inputLogo from "../assets/images/input-logo.png"
import llmLogo from "../assets/images/llm-logo.png"
import outputLogo from "../assets/images/output-logo.png"
import threeLines from "../assets/images/three-lines.png"

const Sidebar = () => {
    return (
        <div className="inline-block min-w-max m-6 mr-0 border bg-white border-gray-200 rounded-3xl p-4 text-left">
            <h1 className="text-xl mb-3 font-semibold">Components</h1>
            <hr />
            <p className="my-4 opacity-50">Drag and Drop</p>
            <ul className="space-y-4">
                <div className="border-2 p-[6px] rounded-lg w-52 flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                        <img src={inputLogo} alt="Input Logo" />
                        <li>Input</li>
                    </div>
                    <img src={threeLines} alt="" />
                </div> 
                <div className="border-2 p-[6px] rounded-lg w-52 flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                        <img className="h-[18px]" src={llmLogo} alt="LLM Logo" />
                        <li>LLM Engine</li>
                    </div>
                    <img src={threeLines} alt="" />
                </div> 
                <div className="border-2 p-[6px] rounded-lg w-52 flex justify-between items-center">
                    <div className="flex space-x-2 items-center">
                        <img src={outputLogo} alt="Output Logo" />
                        <li>Output</li>
                    </div>
                    <img src={threeLines} alt="" />
                </div> 
            </ul>
        </div>
    )
}

export default Sidebar