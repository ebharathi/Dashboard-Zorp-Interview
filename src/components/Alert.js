import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Alert=()=>{
    return (
        <div className="bg-[#3055b8] px-5 text-white py-5 rounded-md grid grid-cols-5  relative">
           <span className='col-span-5 lg:col-span-4 pt-2'>
                <span className=''>
              Book a free introductory call <span className="font-light">Learn more about zorp and how it can help your business</span>
                </span>
           </span>
           <span className="col-span-5 lg:col-span-1 text-right px-3 ">
                    <button className="bg-white text-[#555f6f] font-semibold px-3 py-2 mx-2 rounded-md">Book a Session</button>
           </span>
           <span className='absolute top-6 right-1 mr-1'>
                    <CloseOutlinedIcon className='cursor-pointer'></CloseOutlinedIcon>
           </span>
        </div>
    )
}
export default Alert;