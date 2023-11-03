import Alert from "./Alert";
import Filters from "./Filter";
import Items from './Items'
const Container=({className="",isMobile=" "})=>{
    const arr=[1,2,3,4,5,6,7,8];
    return (
        <div className={className+isMobile}>
             <h1 className="text-[25px] font-semibold">Hey Ajay, Welcome to Zorp!</h1>
             <p className="text-[18px] text-[#525f70]">Select some template alerts & dashboards and click to get started.</p>
             <br/>
             <Alert/>
             <br/>
             <Filters/>
             <br/>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:space-x-3 space-y-2">
             {
                arr.map((x)=><Items/>)
             }
             </div>
        </div>
    )
}
export default Container;