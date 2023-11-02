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
        <div className='flex space-x-3'>
          <Select
           options={options}
           defaultValue={defaultValue}
          />
          <div className='mx-2 flex space-x-1 border-2 w-28 justify-center'>
             <img src='https://img.icons8.com/color/48/NBC.png' width={25} height={20}/>
             <span className='px-2 pt-1 font-semibold'>Slack</span>
          </div>
          <div className='flex-[2]'></div>
          <div className='pt-2'>
              <SettingsIcon sx={{color:'#4f5a6d'}}></SettingsIcon>
              <span className='mx-1 mt-1 text-[#4f5a6d] font-semibold'>Manage Activity Alerts</span>
          </div>
          <div className='mx-2 flex space-x-1 px-3 rounded-md justify-center' style={{border:'1px solid #d7dae3'}}>
             <span className='pt-1'> <AddIcon className='pt-1' sx={{color:'#4f5a6d'}}></AddIcon></span>
             <span className='px-1 pt-2 text-[#4f5a6d] font-semibold'>Create From Scratch</span>
          </div>
          <div className='text-right'>
              <button className='bg-[#3d68e7] text-white px-2 py-2 rounded-lg'>
                <span className='pr-4'>Next</span>
                <ArrowForwardIcon></ArrowForwardIcon>
              </button>
          </div>
        </div>
    )
}
export default Filters