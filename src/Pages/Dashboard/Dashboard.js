import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddProduct from "../../Components/Navbar/AddProduct/AddProduct";
import DashboardHome from "./DashboardHome/DashboardHome";
import MyOrder from "../../Components/MyOrder/MyOrder";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import ManageOrders from "../../Components/ManageOrders/ManageOrders";
import Pay from "../../Components/Pay/Pay";
import Review from "../../Components/Review/Review";
import ManageProducts from "../../Components/ManageProducts/ManageProducts";
import MakeAdmin from "../../Components/MakeAdming/MakeAdmin";
import AdminRoute from "../../AdminRoute/AdminRoute";
import NotFound from "../NotFound/NotFound";

const drawerWidth = 240;

function Dashboard(props) {
  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="ps-5">
      <Toolbar />
      <List className="">
        <Link
          style={{ textAlign: "center", textDecoration: "none" }}
          to="/home"
        >
          <Button variant="outline-primary">Home</Button>
        </Link>
      </List>
      {admin && (
        <Box>
          <List>
            <Link
              style={{ textAlign: "center", textDecoration: "none" }}
              to={`${url}/addProduct`}
            >
              <Button variant="outline-primary">Add Product</Button>
            </Link>
          </List>
          <List>
            <Link
              style={{ textAlign: "center", textDecoration: "none" }}
              to={`${url}/makeAdmin`}
            >
              <Button variant="outline-primary">Make Admin</Button>
            </Link>
          </List>
          <List>
            <Link
              style={{ textAlign: "center", textDecoration: "none" }}
              to={`${url}/manageOrders`}
            >
              <Button variant="outline-primary">Manage All Orders</Button>
            </Link>
          </List>
          <List>
            <Link
              style={{ textAlign: "center", textDecoration: "none" }}
              to={`${url}/manageProducts`}
            >
              <Button variant="outline-primary">Manage Products</Button>
            </Link>
          </List>
        </Box>
      )}
      {!admin && (
        <Box>
          <List>
            <Link
              style={{ textAlign: "center", textDecoration: "none" }}
              to={`${url}/myOrder`}
            >
              <Button variant="outline-primary">My Orders</Button>
            </Link>
          </List>
          <List>
            <Link
              style={{ textAlign: "center", textDecoration: "none" }}
              to={`${url}/pay`}
            >
              <Button variant="outline-primary">Pay</Button>
            </Link>
          </List>
          <List>
            <Link
              style={{ textAlign: "center", textDecoration: "none" }}
              to={`${url}/review`}
            >
              <Button variant="outline-primary">Review</Button>
            </Link>
          </List>
        </Box>
      )}

      <Button onClick={logOut} variant="primary">
        LogOut
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className="bg-primary"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <Route path={`${path}/myOrder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
