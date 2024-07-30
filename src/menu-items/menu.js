// assets
import { IconHammer, IconUsersGroup } from "@tabler/icons-react";

// constant
const icons = { IconHammer, IconUsersGroup };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const menu = {
  id: "menu",
  title: "Menu",
  type: "group",
  children: [
    {
      id: "pesanan",
      title: "Pesanan",
      type: "item",
      url: "/menu/pesanan",
      icon: icons.IconHammer,
      breadcrumbs: false,
    },
    {
      id: "pelanggan",
      title: "Pelanggan",
      type: "item",
      url: "/menu/pelanggan",
      icon: icons.IconUsersGroup,
      breadcrumbs: false,
    },
  ],
};

export default menu;
