import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as UserManageIcon } from "../../assets/icons/user-manage.svg";
import { ReactComponent as OrdersIcon } from "../../assets/icons/orders.svg";
import { ReactComponent as PaymentsIcon } from "../../assets/icons/payments.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";

export const menuItems = [
  {
    title: "Dashboard",
    link: "/admin/dashboard",
    icon: DashboardIcon,
    hasSubMenu: false,
  },
  {
  title: "User Manage",
  icon: UserManageIcon,
  hasSubMenu: true,
  subMenu: [
    { title: "All Users", link: "/admin/users/all" },
    { title: "Company Users", link: "/admin/users/company" },
    { title: "Referral Users", link: "/admin/users/referral" },
    { title: "Verify Users", link: "/admin/users/verify" },
  ],
},
  {
    title: "Orders",
    icon: OrdersIcon,
    hasSubMenu: true,
    badge: "",
    subMenu: [
      { title: "All Orders", link: "/admin/orders/all", badge: "" },
      { title: "Completed Orders", link: "/admin/orders/completed" },
      { title: "Revision Orders", link: "/admin/orders/revision" },
      { title: "In Progress Orders", link: "/admin/orders/progress" },
      { title: "Subscription Based", link: "/admin/orders/subscription" },
    ],
  },
  {
    title: "Payments",
    link: "/admin/payments",
    icon: PaymentsIcon,
    hasSubMenu: false,
  },
  {
    title: "Settings",
    icon: SettingsIcon,
    hasSubMenu: true,
    subMenu: [
      { title: "Platform Settings", link: "/admin/settings/platform" },
      { title: "Notifications", link: "/admin/settings/notifications" },
      { title: "Change Theme", link: "/admin/settings/theme" },
    ],
  },
];
