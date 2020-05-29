import React, { Component } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {routes} from '../../Utils/routeUtils.js'
import { Link } from "react-router-dom"
class SidebarCategory extends Component {
    state = {
        routes,
        active: "dashboard"
    }

    render() {
        return (
            <div>
                {routes.map((item,i) => {
                    return (
                        <Link key={i}to={item.path} className="MuiButtonBase-root MuiListItem-root MuiListItem-gutters MuiListItem-button">
                                 <ListItemIcon>
                                     {item.icone()}
                                   </ListItemIcon>
                                  <ListItemText primary={item.name}/>
                               </Link>
                                            )
                })}
            </div>
        );
    }
}
export default SidebarCategory;