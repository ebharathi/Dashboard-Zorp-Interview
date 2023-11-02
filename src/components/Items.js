import CampaignIcon from '@mui/icons-material/Campaign';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
const Items=()=>{
    return (
        <div className="px-2 py-1 border-2 px-10 py-10">
              <div className="title flex">
                   <CampaignIcon></CampaignIcon>
                   <h1>Hourly Order Rate High</h1>
              </div>
              <div className='text-[#4f5a6d] py-3'>
                 Hourly Order rate is significantly compared to last week
              </div>
                <div>
                <span className='float-leeft'>Orders</span>
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