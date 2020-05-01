import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MainPage from './MainPage'
import clsx from 'clsx';
import InstrumentPage from "./InstrumentPage/InstrumentPage";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StraightenIcon from '@material-ui/icons/Straighten';
import {Routes} from './routes';
import ContactPage from './contactPage/contactPage';
import AboutPage from './aboutPage/aboutPage';
import RegisterPage from './registerPage/registerPage';
import LoginPage from './loginPage/loginPage';
import PayPage from './payPage/payPage';
import ServicePage from './Service/servicePage';
import DeliveryPage from './deliveryPage/deliveryPage';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import UserContext from "./UserContext";
import CheckoutPage from "./CheckoutPage/CheckoutPage";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    title: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

function App() {
    /*Все это нужно для работы material-ui*/
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    /*А это нужно для работы сайта*/
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);
    const logout = () => setUser({});

    console.log('Cart')
    console.log(cart)

    function removeFromCart(instrument) {
        let instrIndex = cart.findIndex(item => item.instrument._id == instrument._id);
        if (instrIndex !== -1){
            if (cart[instrIndex].count === 1) setCart(cart.filter((item, index) => index !== instrIndex));
            else setCart(cart.map((item, index) => {
                if(index === instrIndex) item.count -= 1;
                return item;
            }));
        }
    }

    return (
        <div className={classes.root}>
            <UserContext.Provider value={{user: user, setUser: setUser, cart: cart, setCart: setCart,
                removeFromCart: removeFromCart}}>
                <Router>
                    <CssBaseline/>
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open
                                })}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" noWrap className={classes.title}>
                                Музмаг
                            </Typography>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Toolbar>
                        <div>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={isMenuOpen}
                                onClose={handleClose}
                            >
                                {user.username ? (
                                    <React.Fragment>
                                    <MenuItem>{user.username}</MenuItem>
                                    <MenuItem onClick={logout}>
                                        Выйти
                                    </MenuItem>
                                    </React.Fragment>) :
                                    (<React.Fragment>
                                        <MenuItem onClick={handleClose}>
                                    <NavLink exact to={Routes.Login}>Войти</NavLink>
                                    </MenuItem>
                                    </React.Fragment>)}
                            </Menu>
                        </div>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open
                            })
                        }}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === "rtl" ? (
                                    <ChevronRightIcon/>
                                ) : (
                                    <ChevronLeftIcon/>
                                )}
                            </IconButton>
                        </div>
                        <Divider/>
                        <List>
                            {["Товары", "Корзина", "Контакты"].map((text, index) => (
                                <NavLink exact to={selectNavLinkRoute(index)}>
                                    <ListItem button key={text}>
                                        <ListItemIcon>
                                            {index === 0 ? <StraightenIcon/> :
                                                (index === 1 ? <ShoppingCartIcon/> : <MailIcon/>)}
                                        </ListItemIcon>
                                        <ListItemText primary={text}/>
                                    </ListItem>
                                </NavLink>
                            ))}

                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>

                        <Switch>
                            <Route exact path={Routes.Main} component={MainPage}/>
                            <Route path="/instrument/:id" component={InstrumentPage}/>
                            <Route path="/contacts" component={ContactPage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/register" component={RegisterPage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/pay" component={PayPage}/>
                            <Route path="/service" component={ServicePage}/>
                            <Route path="/delivery" component={DeliveryPage}/>
                            <Route exact path={Routes.Checkout} component={CheckoutPage}/>
                        </Switch>

                    </main>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

function selectNavLinkRoute(index) {
    switch (Number(index)) {
        case 0:
            return Routes.Main
        case 1:
            return Routes.Checkout
        case 2:
            return Routes.About
        default:
            return Routes.Main
    }
}

export default App;
