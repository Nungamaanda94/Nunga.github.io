import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-dom';
import Landing from './Landing';
import About from './About';
import Profile from './Profile';
import Users from './Users';
import Home from './Home';


export default class Menu extends Component{
    
    Const  = () => {
                
            return(
                <>
                <Router>
                 <div>
                  <nav className='Menu'>
                       <ul>
                           <li>
                               <link to="/">Landing</link>
                           </li>
                           <li>
                               <link to="/Home">Home</link>
                           </li>
                           <li>
                               <link to="/About">About</link>
                           </li>
                           <li>
                               <link to="/Profile">Profile</link>
                           </li>
                           <li>
                               <link to="/Users">Users</link>
                           </li>
                       </ul>
                   </nav>
      
                 </div>
                </Router>
      
                <switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                   <Route path="Landing">
                       <Landing/>
                   </Route>
                   <Route path="Profile">
                       <Profile/>
                   </Route>
                   <Route path="About">
                       <About/>
                   </Route>
                   <Route path="Users">
                       <Users/>
                   </Route>
                </switch>
                </>
          )
          }
      }
