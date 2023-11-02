import CommentIcon from '@mui/icons-material/Comment';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SettingsIcon from '@mui/icons-material/Settings';

const NavFooter=()=>{
    return (
        <div>
             <ul className="">
                <li className="px-1 py-2">
                    <CommentIcon></CommentIcon>
                    <span className='px-2'>Chat with Us</span>
                </li>
                <li className="px-1 py-2">
                    <AutoStoriesIcon></AutoStoriesIcon>
                    <span className='px-2'>Knowledge Base</span>
                </li>
                <li className="px-1 py-2">
                    <SettingsIcon></SettingsIcon>
                    <span className='px-2'>Settings</span>
                </li>
             </ul>
        </div>
    )
}
export default NavFooter;