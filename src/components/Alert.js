import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Alert=()=>{
    return (
        <div className="bg-[#3055b8] px-5 text-white py-5 rounded-md">
           <span>
              Book a free introductory call <span className="font-light">Learn more about zorp and how it can help your business</span>
           </span>
           <span className="float-right">
                    <button className="bg-white text-[#555f6f] font-semibold px-2 py-1 mx-2 rounded-sm">Book a Session</button>
                 <CloseOutlinedIcon></CloseOutlinedIcon>
           </span>
        </div>
    )
}
export default Alert;