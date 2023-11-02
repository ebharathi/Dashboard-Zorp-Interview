import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
const NavList=()=>{
    return (
        <ul className="flex flex-col space-y-1">
            <li className='bg-[#243f8b] px-1 py-2 rounded-md'>
                <CampaignIcon></CampaignIcon>
               <span className="px-2">Monitors</span>
               <span className='float-right bg-white text-[#243f8b] px-2 rounded-custom-border'>10</span>
            </li>
            <li className='px-1 py-1'>
                <TrendingUpIcon></TrendingUpIcon>
                <span className="px-2">Products</span>
            </li>
            <li className='px-1 py-1'>
                <TrendingUpIcon></TrendingUpIcon>
                <span className="px-2">Customers</span>
            </li>
            <li className='px-1 py-1'>
                <TrendingUpIcon></TrendingUpIcon>
                <span className="px-2">Transactions</span>
            </li>
        </ul>
    )
}
export default NavList;