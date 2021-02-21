import React, {useState} from 'react'
import PinterestIcon from '@material-ui/icons/Pinterest';
import styled from 'styled-components'
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FaceIcon from '@material-ui/icons/Face';
import TextsmsIcon from '@material-ui/icons/Textsms';


function Header(props) {

    const [input, setinput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input)
        
    }

    return (
        <Wrapper>
             <LogoWrapper>
              <IconButton>
                  <PinterestIcon />
              </IconButton>
             </LogoWrapper>
             <HomePageButton>
               <a href="/">Homepage</a>
             </HomePageButton>
             <FollowingButton>
               <a href="/">Following</a>
             </FollowingButton>
             <SearchWrapper>
                 <SearchBarWrapper>
                     <IconButton>
                        <SearchIcon />
                     </IconButton>
                     <form>
                         <input placeholder="Search anything" type="text" onChange= {(e) => setinput(e.target.value) } />
                         <button type="submit" onClick={onSearchSubmit}></button>
                     </form>
                 </SearchBarWrapper>
             </SearchWrapper>
             <IconsWrapper>
               <IconButton>
                   <NotificationsIcon />
               </IconButton>
               <IconButton>
                   <TextsmsIcon />
               </IconButton>
               <IconButton>
                   <FaceIcon />
               </IconButton>
               <IconButton>
                   <KeyboardArrowDownIcon />
               </IconButton>
             </IconsWrapper>
             
        </Wrapper>
    )
}

export default Header


const Wrapper = styled.div`
   display: flex;
   align-items: center;
   height: 56px;
   padding: 12px 4px 4px 16px;
   background-color: white;
   color: black
`

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
      color: #e60023;
      font-size: 32px;
      cursor: pointer;
  }
`
const NavButton = styled.div`
    display: flex;
    padding: 0.5rem 1rem;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 30px;
`

const HomePageButton = styled(NavButton)`
   
    background-color: rgb(17, 17, 17);
   
    a{
        text-decoration: none;
        color:white;
        font-weight: 600;
    }
  
`
const FollowingButton = styled(NavButton)`
    background-color: white;
   
    a{
        text-decoration: none;
        color:black;
         font-weight: 600;
    }
    :hover{
        background-color: whitesmoke;
    }
  
`
const SearchWrapper = styled.div`
  flex: 1;
`

const SearchBarWrapper = styled.div`
  background: whitesmoke;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form{
      display: flex;
      flex: 1;
  }

  form > input{
      background-color: transparent;
      border: none;
      width: 100%;
      margin-left: 5px;
      font-size: 16px;
  }

  form > button {
      display:none;
  }

  input:focus {
      outline:none;
  }

`
const IconsWrapper = styled.div`
`