import CampaignIcon from '@mui/icons-material/Campaign';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
const Items=()=>{
    return (
        <div className="hover:shadow-2xl cursor-pointer px-10 py-10 border-2 rounded-lg px-10 py-10">
              <div className="title flex">
                   <CampaignIcon></CampaignIcon>
                   <h1 className='font-semibold'>Hourly Order Rate High</h1>
              </div>
              <div className='text-[#4f5a6d] py-3'>
                 This is placeholder text. Two sentences <br/>ideally placed here
              </div>
                <div>
                <span className='float-left text-[#475065] font-semibold'>Orders</span>
                <span className='float-right text-[#3557bb]'>
                    <span >
                        <ElectricBoltIcon></ElectricBoltIcon>
                    </span>
                    <span className='font-semibold text-[15px]' >Send Test Alert</span>
                </span>
              </div>
        </div>
    )
}
export default Items;