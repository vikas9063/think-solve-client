import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from './../../../assets/logo.jpg'
import {
    Avatar,
    Button,
    Tooltip,
    Typography,
    useMediaQuery,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import PeopleIcon from "@mui/icons-material/People";
import FeedIcon from "@mui/icons-material/Feed";
import FolderIcon from "@mui/icons-material/Folder";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../slices/userSlice";
import { IS_MOBILE } from "../Utils";
import { Outlet } from "react-router-dom";
import { useTheme } from "@emotion/react";




const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme,isMobile) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(isMobile ? 0:7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(isMobile ? 0:9)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open ,isMobile }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme,isMobile),
        "& .MuiDrawer-paper": closedMixin(theme,isMobile),
    }),
}));

export default function UserNavbar() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [open, setOpen] = React.useState(!isMobile);

    // Login Check From Redux Store 

    const islogin = useSelector((state) => state.loginCheck.value);
    const dispatch = useDispatch();

    //Logout Function
    const handleLogOut = () => {
        console.log('Inside Logout Function:');
        localStorage.clear();
        dispatch(doLogout());
        window.location.href = "/";
    }



    return (
        <Box>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="fixed" style={{ backgroundColor: "#faf9f9" }}>
                    <Toolbar color="primary">
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                {islogin && <IconButton
                                    style={{ color: "#003E70" }}
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={() => setOpen(!open)}
                                    edge="start"
                                >
                                    <MenuIcon />
                                </IconButton>}
                                <img src={logo} alt="Logo" style={{ height: '55px', marginRight: '16px', objectFit: 'cover' }} />
                                {/* <img
                src="/assets/main-logo.jpg"
                alt=""
                style={{
                  height: "60px",
                  width: "270px",
                  mixBlendMode: "darken",
                }}
              /> */}
                            </Box>
                            <Box>
                                <Tooltip title="click to open">
                                    <IconButton sx={{ pr: "10%" }}>
                                        <Avatar alt="A" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box sx={{ position: "absolute" }}>
                    {islogin && <Drawer
                        variant="permanent"
                        open={open}
                        isMobile = {isMobile}
                        PaperProps={{
                            sx: {
                                backgroundColor: "#faf9f9",
                                position: "fixed",
                                boxShadow:
                                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                            },
                        }}
                    >
                        <DrawerHeader></DrawerHeader>
                        <Divider />
                        <List>
                            {[
                                {
                                    id: "1",
                                    name: "Dashboard",
                                    icon: <DashboardIcon />,
                                    link: "/user/dashboard",
                                },
                                {
                                    id: "2",
                                    name: "Profile",
                                    icon: <PersonIcon />,
                                    link: "/user/profile",
                                },
                                {
                                    id: "3",
                                    name: "Users",
                                    icon: <PeopleIcon />,
                                    link: "/user/all-users",
                                },
                                {
                                    id: "4",
                                    name: "My Documents",
                                    icon: <FolderIcon />,
                                    link: "/user/my-documents",
                                },

                                {
                                    id: "5",
                                    name: "Send Documents",
                                    icon: <DriveFolderUploadIcon />,
                                    link: "/user/documents",
                                },
                                {
                                    id: "6",
                                    name: "All Documents",
                                    icon: <FolderCopyIcon />,
                                    link: "/user/all-users-documents",
                                },

                                {
                                    id: "7",
                                    name: "News",
                                    icon: <FeedIcon />,
                                    link: "/user/blog",
                                },
                            ].map((text, index) => (
                                <ListItem
                                    key={text.id}
                                    disablePadding
                                    sx={{ display: "block" }}
                                    // onClick={() => handleNavClick(text.link)}
                                    // selected={activeItem === text.link}
                                    button
                                >
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? "initial" : "center",
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : "auto",
                                                justifyContent: "center",
                                                color: '#3D0844'

                                            }}
                                        >
                                            {text.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={text.name}
                                            sx={{
                                                opacity: open ? 1 : 0,
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: "50px", // Adjust the bottom spacing as needed
                                left: "50%",
                                transform: "translateX(-50%)",
                            }}
                        >
                            {open ? <Button onClick={handleLogOut}
                                variant="contained"
                                style={{ backgroundColor: "#ef233c" }}
                            //   onClick={handleLogoutConfirm}
                            >
                                <AiOutlineLogout style={{ marginRight: '3' }} /> Logout
                            </Button> : <AiOutlineLogout size="30" style={{ color: '#ef233c' }}
                                onClick={handleLogOut}
                            />}

                        </Box>
                    </Drawer>}
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        padding: !isMobile ? (!open?'12px 65px' : '12px') : 1,
                        //   pl: { xs: 8, md: 10, xl: 32, lg: 32 },
                        marginLeft: !isMobile ? (!open ? 2 : 30) : 0,
                        backgroundColor:'#F8F1FF'
                    }}
                >
                    <DrawerHeader />
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}