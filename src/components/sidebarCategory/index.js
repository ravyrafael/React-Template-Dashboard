import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {routes} from '../../Utils/routeUtils.js'
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
                               <ListItem key={i} component="a"  button href={item.path}>
                                 <ListItemIcon>
                                     {item.icone()}
                                   </ListItemIcon>
                                  <ListItemText primary={item.name}/>
                               </ListItem>
                                            )
                })}
            </div>
        );
    }
}
export default SidebarCategory;