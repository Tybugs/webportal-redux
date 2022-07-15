import * as React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StoreIcon from '@mui/icons-material/Store';
import PaymentIcon from '@mui/icons-material/Payment';
import ArticleIcon from '@mui/icons-material/Article';
import SettingsIcon from '@mui/icons-material/Settings';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';



import logojc from '../../assets/jc-logo.png'

const categories = [
  {
    id: 'Main',
    children: [
      {
        id: 'Dashboard',
        icon: <DashboardIcon />,
        active: true,
      },
      { id: 'Orders', icon: <ShoppingBasketIcon /> },
      { id: 'Menu Management', icon: <RestaurantMenuIcon /> },
      { id: 'Shop Management', icon: <StoreIcon /> },
      { id: 'Remittance', icon: <PaymentIcon /> },
      { id: 'Reports', icon: <ArticleIcon /> },
      { id: 'Settings', icon: <SettingsIcon /> },
      { id: 'Wallet', icon: <CreditCardIcon /> },
      { id: 'Promotion', icon: <CampaignIcon /> },
      { id: 'Accounts', icon: <PeopleIcon /> },
    ],
  },
  {
    id: 'Others',
    children: [
      { id: 'Profile Settings', icon: <SettingsIcon /> },
      { id: 'Notifications', icon: <NotificationsActiveIcon /> },
    ],
  },
  {
    id: 'Control Panel',
    children: [
      { id: 'Developer Settings', icon: <AdminPanelSettingsIcon /> },
    ],
  },

];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(134, 188, 66)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
       <Box>
           {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#242833' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
       </Box>
       
  );
}