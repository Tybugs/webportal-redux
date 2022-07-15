// assets
import {
    IconGauge,
    IconBasket,
    IconToolsKitchen2,
    IconBuildingStore,
    IconCreditCard,
    IconFileAnalytics,
    IconSettings,
    IconWallet,
    IconSpeakerphone,
    IconUsers,
    IconUser,
    IconBell
} from '@tabler/icons';

// constant
const icons = {
    IconGauge,
    IconBasket,
    IconToolsKitchen2,
    IconBuildingStore,
    IconCreditCard,
    IconFileAnalytics,
    IconSettings,
    IconWallet,
    IconSpeakerphone,
    IconUsers,
    IconUser,
    IconBell
};

// ==============================|| Dashboard MENU ITEMS ||============================== //

const Dashboard = {
    id: 'Main',
    title: 'Main',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboardv1',
            icon: icons.IconGauge,
            breadcrumbs: true
        },
        {
            id: 'orders',
            title: 'Orders',
            type: 'item',
            url: '',
            icon: icons.IconBasket,
            breadcrumbs: true
        },
        {
            id: 'menu-management',
            title: 'Menu Management',
            type: 'item',
            url: '',
            icon: icons.IconToolsKitchen2,
            breadcrumbs: true
        },
        {
            id: 'shop-management',
            title: 'Shop Management',
            type: 'item',
            url: '',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'remittance',
            title: 'Remittance',
            type: 'item',
            url: '',
            icon: icons.IconCreditCard,
            breadcrumbs: true
        },
        {
            id: 'reports',
            title: 'Reports',
            type: 'item',
            url: '',
            icon: icons.IconFileAnalytics,
            breadcrumbs: true
        },
        {
            id: 'settings',
            title: 'Settings',
            type: 'item',
            url: '',
            icon: icons.IconSettings,
            breadcrumbs: true
        },
        {
            id: 'wallet',
            title: 'Wallet',
            type: 'item',
            url: '',
            icon: icons.IconWallet,
            breadcrumbs: true
        },
        {
            id: 'promotion',
            title: 'Promotion',
            type: 'item',
            url: '',
            icon: icons.IconSpeakerphone,
            breadcrumbs: true
        },
        {
            id: 'accounts',
            title: 'Accounts',
            type: 'item',
            url: '',
            icon: icons.IconUsers,
            breadcrumbs: true
        }
    ]
};

export default Dashboard;
