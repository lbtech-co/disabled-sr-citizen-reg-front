import React from "react";
import Icon from "../components/Icon";
import List from "@mui/material/List";
import Badge from "@mui/material/Badge";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Theme, styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { colors } from "../constants/constants";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../constants/constants";
import { DashboardRoutes } from "../AppRoutes";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

export default function Layout() {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm"),
  );
  const [open, setOpen] = React.useState(!isSmallScreen);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: "flex" }}>
      <AppBar position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
            height: "65px",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" sx={{ marginLeft: "auto" }}>
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            textAlign: "left",
            pl: [2],
            pr: [1],
          }}
        >
          <Typography
            noWrap
            sx={{
              flexGrow: 1,
              fontSize: "18px",
              fontWeight: "500",
              padding: 0,
            }}
          >
            अपांग र जेष्ठ नागरिक दर्ता
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <Icon name="Left" sx={{ color: colors.white }} />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {MENU_ITEMS.map((menu) => (
            <ListItemButton component={Link} to={menu.path} key={menu.title}>
              <ListItemIcon>
                <Icon name={menu.icon} sx={{ color: colors.white }} />
              </ListItemIcon>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <MainContent>{DashboardRoutes()}</MainContent>
    </div>
  );
}

const drawerWidth: string = "256px";
const appBarHeight: string = "65px";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const MainContent = styled("div")(({ theme }) => ({
  flexGrow: 1,
  marginTop: appBarHeight,
  height: "calc(100vh - 130px)",
  width: "100%",
  overflow: "auto",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundeColor: colors.blue,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth})`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  minHeight: appBarHeight,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    color: colors.white,
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    backgroundColor: colors.blue,
    height: "100vh",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      height: "100vh",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
