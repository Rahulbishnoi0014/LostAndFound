import React, { Component } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false,
        };
    }

    toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        this.setState({ ...this.state, [anchor]: open });
    };

    render() {

        const profile = () => {
            return <>


            </>
        }

        const list = (anchor) => (
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, display: "flex", flexDirection: "column", alignItems: "center" }}
                role="presentation"
                onClick={this.toggleDrawer(anchor, false)}
                onKeyDown={this.toggleDrawer(anchor, false)}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1 style={{ color: "#49386b" }}>MENU</h1>
                    <br /><br />
                    <Link to="/addItem"><Button>Add New Item</Button></Link>
                    <br />
                    <Link to="/viewAllItems"><Button>View All Items </Button></Link>
                    <br />
                    <Link to='/claims'><Button>View All Claims</Button></Link>

                </div>

            </Box>
        );

        return (
            <div style={{ backgroundColor: "ButtonShadow" }}>
                {/* {h = `<h2>MENU</h2>`} */}
                {['MEnu'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={this.toggleDrawer(anchor, true)}>{anchor}</Button>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={this.state[anchor]}
                            onClose={this.toggleDrawer(anchor, false)}
                            onOpen={this.toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
        );
    }
}

export default SideBar;