import {React} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { Paper, TextField } from '@mui/material';
import {Navigate} from 'react-router-dom'
import {getUserPayload} from '../../authService'
import { useSelector, useDispatch } from 'react-redux';
import { RemoveUser } from '../redux/UserContext/UserSlice';
import { Card } from '@mui/material';
import  { selectUser } from "../redux/UserContext/UserSlice"

const Header = () => {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);



  const data = getUserPayload(localStorage.getItem('token'));
  console.log(data)
  const handleLogout = () =>
  {
    dispatch(RemoveUser())
    localStorage.removeItem("token");
    <Navigate to='/signin' />
  }
    return (
       <Card style={{position: "fixed" , width: "100%"}}>
       <div className='header'>
      <Link to="/" >
      <img className="logo__header"  src='images/SignUp.png'  alt='Not Found' />
      </Link>
      <div className="header__search">
      <TextField  fullWidth variant="outlined" name="search" placeholder='search'/>
          {/* Search Logo */}
          <SearchIcon className="header__searchIcon" />
      </div>


      <div className="header__nav">

        
          <div className="header__option">
          <span className="header__optionLineOne">{data.sub}</span>
          <Link to="/signin">
          <span className="header__optionLineTwo" style={{textDecoration: 'None'}} onClick={handleLogout}>Logout</span>
          </Link>
          </div>
        
          <div className="header__option">
          <span className="header__optionLineOne">Applied</span>
          <span className="header__optionLineTwo">& Jobs</span>
          </div>
          
          <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Notifications</span>
          </div>

      </div>
  </div>
      </Card>  
    )
}

export default Header
