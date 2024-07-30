import { lazy } from "react";

// project imports
import MainLayout from "../layout/MainLayout";
import Loadable from "../ui-component/Loadable";
import { element } from "prop-types";

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import("../views/dashboard")));
const Produk = Loadable(lazy(() => import("../views/manajemen/produk")));
const Sales = Loadable(lazy(() => import("../views/manajemen/sales")));
const Pelanggan = Loadable(lazy(() => import("../views/manajemen/pelanggan")));
const Pesanan = Loadable(lazy(() => import("../views/menu/pesanan")));
const Customer = Loadable(lazy(() => import("../views/menu/customer")));
const Transaksi = Loadable(lazy(() => import("../views/other/transaksi")));
const Laporan = Loadable(lazy(() => import("../views/other/laporan")));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "menu",
      children: [
        {
          path: "pesanan",
          element: <Pesanan />,
        },
      ],
    },
    {
      path: "menu",
      children: [
        {
          path: "pelanggan",
          element: <Customer />,
        },
      ],
    },
  ],
};

export default MainRoutes;
