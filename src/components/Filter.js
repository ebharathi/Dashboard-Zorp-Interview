import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import Select from 'react-select';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Filters=()=>{
    const options = [
        { value: 'chocolate', label: <div className='flex font-semibold space-x-1'><img src={"https://img.icons8.com/color/48/money-bag.png"} height="25px" width="25px"/><span>Shopify E-Commerce</span></div> },
      ];
      const defaultValue = options[0];
    return (
        <div className='grid grid-cols-4'>
          <div className='col-span-4 md:col-span-1 pt-2 md:col-span-1 grid grid-cols-5'>
            <Select
            className='col-span-4'
            options={options}
            defaultValue={defaultValue}
            />
            <div className='col-span-1 mx-2 flex space-x-1 border-2 w-16 md:w-28 justify-center'>
              <img src='https://img.icons8.com/color/48/NBC.png' width={25} height={20}/>
              <span className='hidden md:block  px-2 pt-1 font-semibold'>Slack</span>
            </div>
          </div>
          <div className='col-span-4 md:col-span-3 flex  space-y-2 md:space-y-0 flex-row justify-end'>
           <div className=' md:col-span-2 pt-5 md:pt-2 flex justify-center'>
               <SettingsIcon sx={{color:'#4f5a6d'}}></SettingsIcon>
               <span className='hidden lg:block mx-1 text-[#4f5a6d] font-semibold'>Manage Activity Alerts</span>
           </div>
            <div className=' mx-2 pt-2 flex space-x-1 px-3 rounded-md justify-center' style={{border:'1px solid #d7dae3'}}>
              <span className=''> <AddIcon className='' sx={{color:'#4f5a6d'}}></AddIcon></span>
              <span className='hidden lg:block px-1 text-[#4f5a6d] font-semibold'>Create From Scratch</span>
            </div>
            <div className=' text-right '>
                <button className='bg-[#3d68e7] text-white px-2 py-2 rounded-lg'>
                  <span className='pr-4'>Next</span>
                  <ArrowForwardIcon></ArrowForwardIcon>
                </button>
            </div> 
         
          </div>
        </div>
    )
}
export default Filters