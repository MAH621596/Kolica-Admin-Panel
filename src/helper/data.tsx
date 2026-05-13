import {
  Dashboard, 
  Listings, 
  Users,
  Categories, 
  Filters, 
  Transactions, 
  Reports, 
  Promotions, 
  Messages, 
  Settings,
  Listing, 
  ActiveListing ,
  PendingApproval, 
  TotalUsers, 
  Dealers, 
  Revenue, 
  FeaturedAds, 
  Sales
} from "@/assets";
import type { DashboardAdminData, ListingAdminData, UsersListData } from "@/components/types";

export const navbarLinks = [
  {
    icon: <Dashboard className="stroke-current" />,
    link_text: "Dashboard",
    href: "/",
  },
  {
    icon: <Listings className="stroke-current" />,
    link_text: "Listings",
    href: "/listings",
  },
  {
    icon: <Users className="stroke-current" />,
    link_text: "Users",
    href: "/users",
  },
  {
    icon: <Users className="stroke-current" />,
    link_text: "⁠Merchants",
    href: "/merchants",
  },
  {
    icon: <Users className="stroke-current" />,
    link_text: "Premium Merchants",
    href: "/premium-Merchants",
  },
  {
    icon: <Categories className="stroke-current" />,
    link_text: "Categories",
    href: "/categories",
  },
  {
    icon: <Filters className="stroke-current" />,
    link_text: "Filters",
    href: "/filters",
  },
  {
    icon: <Transactions className="stroke-current" />,
    link_text: "Transactions",
    href: "/transactions",
  },
  {
    icon: <Reports className="stroke-current" />,
    link_text: "Reports",
    href: "/reports"
  },
  {
    icon: <Promotions className="stroke-current" />,
    link_text: "Promotions",
    href: "/promotions",
  },
  {
    icon: <Messages className="stroke-current" />,
    link_text: "Messages",
    href: "/messages",
  },
  {
    icon: <Settings className="stroke-current" />,
    link_text: "Settings",
    href: "/settings",
  },
];

export const barChartContent = [
  {
    id: 1,
    point: "daily (total) statistics of views of ALL merchant ads for a particular day, for the past 7 days, are displayed."
  },
  {
    id: 2,
    point: " we only count an ad VIEW when a visitor views your ad IN DETAIL."
  },
  {
    id: 3,
    point: "ad views among search results (i.e. when a visitor sees your ad but does not click on it) are NOT counted."
  },
];

export const dashboardAdminData: DashboardAdminData[] = [
  {
    id: 1,
    revenue: 12.4,
    icon: <Listing className="stroke-current" />,
    title: "Total Listings",
    count: "16,672",
    variant: "info"
  },
  {
    id: 2,
    revenue: 8.1,
    icon: <ActiveListing className="stroke-current" />,
    title: "Active Listings",
    count: "14,208",
    variant: "success"
  },
  {
    id: 3,
    revenue: 18,
    icon: <PendingApproval className="stroke-current" />,
    title: "Pending Approval",
    count: "248",
    variant: "warning"
  },
  {
    id: 4,
    revenue: 5.2,
    icon: <TotalUsers className="stroke-current" />,
    title: "Total Users",
    count: "32,418",
    variant: "info"
  },
  {
    id: 5,
    revenue: 3.8,
    icon: <Dealers className="stroke-current" />,
    title: "Dealers / Individuals",
    count: "1,284 / 31,134",
    variant: "info"
  },
  {
    id: 6,
    revenue: 22.6,
    icon: <Revenue className="stroke-current" />,
    title: "Revenue (Month)",
    count: "€48,920",
    variant: "success"  
  },
  {
    id: 7,
    revenue: 14,
    icon: <FeaturedAds className="stroke-current" />,
    title: "Featured Ads Live",
    count: "186",
    variant: "warning"
  },
  {
    id: 8,
    revenue: 9.7,
    icon: <Sales className="stroke-current" />,
    title: "Sales / Leads",
    count: "2,481",
    variant: "success"
  },
];

export const dashboardListingData: DashboardAdminData[] = [
  {
    id: 1,
    title: "BMW 320d Touring",
    subtitle: "Overview of your vehicle marketplace",
    count: "€18,900", 
    badgeLabel: "Active",
    variant: "success",
  },
  {
    id: 2,
    title: "Audi A4 Avant 2.0 TDI",
    subtitle: "Marko Novak · Maribor",
    count: "€21,500", 
    badgeLabel: "Pending",
    variant: "warning",
  },
  {
    id: 3,
    title: "Volkswagen Golf 7 GTI",
    subtitle: "CarPro d.o.o. · Celje",
    count: "€15,400", 
    badgeLabel: "Active",
    variant: "success",
  },
  {
    id: 4,
    title: "Mercedes-Benz C220d",
    subtitle: "Janez Kovač · Koper",
    count: "€24,900", 
    badgeLabel: "Rejected",
    variant: "success",
  },
  {
    id: 5,
    title: "Škoda Octavia Combi",
    subtitle: "AutoCenter Kranj · Kranj",
    count: "€12,800", 
    badgeLabel: "featured",
    variant: "info",
  },
];

export const dashboardRegUsersData: DashboardAdminData[] = [
  {
    id: 1,
    title: "Marko Novak",
    subtitle: "marko@gmail.com",
    count: "Individual", 
    badgeLabel: "Active",
    variant: "success",
  },
  {
    id: 2,
    title: "AutoHaus Berlin",
    subtitle: "info@autohaus.de",
    count: "Dealer", 
    badgeLabel: "Active",
    variant: "success",
  },
  {
    id: 3,
    title: "Ana Horvat",
    subtitle: "ana.h@gmail.com",
    count: "Individual", 
    badgeLabel: "Active",
    variant: "success",
  },
  {
    id: 4,
    title: "CarPro d.o.o.",
    subtitle: "sales@carpro.si",
    count: "Dealer", 
    badgeLabel: "Active",
    variant: "success",
  },
  {
    id: 5,
    title: "Janez Kovač",
    subtitle: "janez.k@gmail.com",
    count: "Individual", 
    badgeLabel: "Suspended",
    variant: "danger",
  },
];

export const ListingsTableHeaderData = [
  {
    id: 1,
    tableHeader: "ID",
  },
  {
    id: 2,
    tableHeader: "Title",
  },
  {
    id: 3,
    tableHeader: "Price",
  },
  {
    id: 4,
    tableHeader: "Seller",
  },
  {
    id: 5,
    tableHeader: "Location",
  },
  {
    id: 6,
    tableHeader: "Status",
  },
  {
    id: 7,
    tableHeader: "Posted",
  },
  {
    id: 8,
    tableHeader: "",
  },
];

export const ListingsTableBodyData: ListingAdminData[] = [
  {
    id: "L-1042",
    title: "BMW 320d Touring",
    price: "€18,900",
    seller: "AutoHaus Berlin",
    type: "user",
    location: "Ljubljana",
    status: "Pending",
    posted: "2026-04-28",
    variant: "danger"
  },
  {
    id: "L-1041",
    title: "Audi A4 Avant 2.0 TDI",
    price: "€18,900",
    seller: "Marko Polo",
    type: "business",
    location: "Ljubljana",
    status: "Pending",
    posted: "2026-04-28",
    variant: "danger"
  },
  {
    id: "L-1040",
    title: "BMW 320d Touring",
    price: "€18,900",
    seller: "AutoHaus Berlin",
    type: "user",
    location: "Ljubljana",
    status: "Active",
    posted: "2026-04-28",
    variant: "success"
  },
  {
    id: "L-1039",
    title: "BMW 320d Touring",
    price: "€18,900",
    seller: "AutoHaus Berlin",
    type: "business",
    location: "Ljubljana",
    status: "Active",
    posted: "2026-04-28",
    variant: "success"
  },
  {
    id: "L-1038",
    title: "Peugeot 3008 GT Line",
    price: "€19,400",
    seller: "Velenje",
    type: "user",
    location: "Ljubljana",
    status: "Sold",
    posted: "2026-04-28",
    variant: "secondary"
  },
  {
    id: "L-1039",
    title: "BMW 320d Touring",
    price: "€18,900",
    seller: "AutoHaus Berlin",
    type: "business",
    location: "Ljubljana",
    status: "Active",
    posted: "2026-04-28",
    variant: "success"
  },
  {
    id: "L-1038",
    title: "BMW 320d Touring",
    price: "€18,900",
    seller: "AutoHaus Berlin",
    type: "user",
    location: "Ljubljana",
    status: "Pending",
    posted: "2026-04-28",
    variant: "danger"
  },
  {
    id: "L-1037",
    title: "Audi A4 Avant 2.0 TDI",
    price: "€18,900",
    seller: "Marko Polo",
    type: "business",
    location: "Ljubljana",
    status: "Pending",
    posted: "2026-04-28",
    variant: "danger"
  },
  {
    id: "L-1036",
    title: "BMW 320d Touring",
    price: "€18,900",
    seller: "AutoHaus Berlin",
    type: "user",
    location: "Ljubljana",
    status: "Active",
    posted: "2026-04-28",
    variant: "success"
  },
  {
    id: "L-1035",
    title: "BMW 320d Touring",
    price: "€18,900",
    seller: "AutoHaus Berlin",
    type: "business",
    location: "Ljubljana",
    status: "Active",
    posted: "2026-04-28",
    variant: "success"
  },
  {
    id: "L-1034",
    title: "Peugeot 3008 GT Line",
    price: "€19,400",
    seller: "Velenje",
    type: "user",
    location: "Ljubljana",
    status: "Sold",
    posted: "2026-04-28",
    variant: "secondary"
  },
  {
    id: "L-1033",
    title: "BMW 320d Touring",
    price: "€18,900",
    seller: "AutoHaus Berlin",
    type: "business",
    location: "Ljubljana",
    status: "Active",
    posted: "2026-04-28",
    variant: "success"
  },
];

export const ListingsTabData = [
  {
    id: 1,
    tab: "All",
    active: true,
  },
  {
    id: 2,
    tab: "Pending",
    active: false,
  },
  {
    id: 3,
    tab: "Active",
    active: false,
  },
  {
    id: 4,
    tab: "Rejected",
    active: false,
  },
  {
    id: 5,
    tab: "Featured",
    active: false,
  },
];

export const UsersTableHeaderData = [
  {
    id: 1,
    tableHeader: "User",
  },
  {
    id: 2,
    tableHeader: "Email",
  },
  {
    id: 3,
    tableHeader: "Type",
  },
  {
    id: 4,
    tableHeader: "Listings",
  },
  {
    id: 5,
    tableHeader: "Status",
  },
  {
    id: 6,
    tableHeader: "",
  },
];

export const UsersTableBodyData: UsersListData[] = [
  {
    id: 1,
    username: "Marko Novak",
    email : "marko@gmail.com",
    type: "Individual",
    listings : 3,
    status: "Active",
    variant: "success"
  },
  {
    id: 2,
    username: "Marko Novak",
    email : "marko@gmail.com",
    type: "Dealer",
    listings : 143,
    status: "Suspended",
    variant: "danger"
  },
  {
    id: 3,
    username: "Marko Novak",
    email : "marko@gmail.com",
    type: "Individual",
    listings : 13,
    status: "Pending",
    variant: "warning"
  },
  {
    id: 4,
    username: "Marko Novak",
    email : "marko@gmail.com",
    type: "Dealer",
    listings : 3,
    status: "Active",
    variant: "success"
  },
  {
    id: 5,
    username: "Marko Novak",
    email : "marko@gmail.com",
    type: "Dealer",
    listings : 3,
    status: "Active",
    variant: "success"
  },
  {
    id: 6,
    username: "Marko Novak",
    email : "marko@gmail.com",
    type: "Dealer",
    listings : 3,
    status: "Active",
    variant: "success"
  },
];

export const MerchantsTableHeaderData = [
  {
    id: 1,
    tableHeader: "ID",
  },
  {
    id: 2,
    tableHeader: "Business",
  },
  {
    id: 3,
    tableHeader: "Owner",
  },
  {
    id: 4,
    tableHeader: "Email",
  },
  {
    id: 5,
    tableHeader: "Listings",
  },
  {
    id: 6,
    tableHeader: "Status",
  },
  {
    id: 7,
    tableHeader: "Posted",
  },
  {
    id: 8,
    tableHeader: "",
  },
];

export const MerchantTableBodyData: UsersListData[] = [
  {
    id: "MR-1024",
    title: "Auto Dealer X",
    username: "John Smith",
    email: "john@autodealerx.com",
    listings: 23,
    status: "Active",
    variant: "success",
    posted: "2026-04-28",
  },
  {
    id: "MR-1023",
    title: "Auto Dealer X",
    username: "John Smith",
    email: "john@autodealerx.com",
    listings: 23,
    status: "Active",
    variant: "success",
    posted: "2026-04-28",
  },
  {
    id: "MR-1022",
    title: "Auto Dealer X",
    username: "John Smith",
    email: "john@autodealerx.com",
    listings: 23,
    status: "Suspended",
    variant: "danger",
    posted: "2026-04-28",
  },
  {
    id: "MR-1021",
    title: "Auto Dealer X",
    username: "John Smith",
    email: "john@autodealerx.com",
    listings: 23,
    status: "Active",
    variant: "success",
    posted: "2026-04-28",
  },
  {
    id: "MR-1020",
    title: "Auto Dealer X",
    username: "John Smith",
    email: "john@autodealerx.com",
    listings: 23,
    status: "Active",
    variant: "success",
    posted: "2026-04-28",
  },
];

export const PermMerchantsTableHeaderData = [
  {
    id: 1,
    tableHeader: "ID",
  },
  {
    id: 2,
    tableHeader: "Company",
  },
  {
    id: 3,
    tableHeader: "Owner",
  },
  {
    id: 4,
    tableHeader: "Listings",
  },
  {
    id: 5,
    tableHeader: "Featured",
  },
  {
    id: 6,
    tableHeader: "Verification",
  },
  {
    id: 7,
    tableHeader: "Posted",
  },
  {
    id: 8,
    tableHeader: "",
  },
];

export const PremMerchantTableBodyData: UsersListData[] = [
  {
    id: "PM-2201",
    title: "Elite Motors",
    username: "Michael Lee",
    email: "john@autodealerx.com",
    listings: "Unlimited",
    status: "Featured",
    statusVerify: "Verified",
    variant: "warning",
    statusVerifyVariant: "success",
    posted: "2026-04-28",
  },
  {
    id: "PM-2202",
    title: "Elite Motors",
    username: "Michael Lee",
    email: "john@autodealerx.com",
    listings: "Unlimited",
    status: "Featured",
    statusVerify: "Verified",
    variant: "warning",
    statusVerifyVariant: "success",
    posted: "2026-04-28",
  },
  {
    id: "PM-2203",
    title: "Elite Motors",
    username: "Michael Lee",
    email: "john@autodealerx.com",
    listings: "Unlimited",
    status: "Featured",
    statusVerify: "Verified",
    variant: "warning",
    statusVerifyVariant: "success",
    posted: "2026-04-28",
  },
  {
    id: "PM-2204",
    title: "Elite Motors",
    username: "Michael Lee",
    email: "john@autodealerx.com",
    listings: "Unlimited",
    status: "Featured",
    statusVerify: "Verified",
    variant: "warning",
    statusVerifyVariant: "success",
    posted: "2026-04-28",
  },
];

export const FiltersTableHeaderData = [
  {
    id: 1,
    tableHeader: "Filter Name",
  },
  {
    id: 2,
    tableHeader: "Type",
  },
  {
    id: 3,
    tableHeader: "Options",
  },
  {
    id: 4,
    tableHeader: "Assigned To",
  },
  {
    id: 5,
    tableHeader: "",
  },
];

export const FilersTableBodyData = [
  {
    id: 1,
    name: "Elite Motors",
    type: "Select",
    options: 42,
    assigned: "Cars",
  },
  {
    id: 2,
    name: "Elite Motors",
    type: "Select",
    options: 72,
    assigned: "All",
  },
  {
    name: "Elite Motors",
    type: "Select",
    options: 14,
    assigned: "Cars",
  },
  {
    id: 4,
    name: "Elite Motors",
    type: "Select",
    options: 63,
    assigned: "All",
  },
];

export const TransTableHeaderData = [
  {
    id: 1,
    tableHeader: "ID",
  },
  {
    id: 2,
    tableHeader: "User",
  },
  {
    id: 3,
    tableHeader: "Listing / Item",
  },
  {
    id: 4,
    tableHeader: "Featured",
  },
  {
    id: 5,
    tableHeader: "Status",
  },
  {
    id: 6,
    tableHeader: "Posted",
  },
  {
    id: 7,
    tableHeader: "",
  },
];

export const TransTableBodyData: ListingAdminData[] = [
  {
    id: "T-9821",
    title: "AutoHaus Berlin",
    type: "BMW 320d Touring",
    price: "€49",
    status: "Paid",
    variant: "success",
    posted: "2026-04-28", 
  },
  {
    id: "T-9822",
    title: "AutoHaus Berlin",
    type: "BMW 320d Touring",
    price: "€120",
    status: "Pending",
    variant: "success",
    posted: "2026-04-28", 
  },
  {
    id: "T-9823",
    title: "AutoHaus Berlin",
    type: "BMW 320d Touring",
    price: "€149",
    status: "Refunded",
    variant: "success",
    posted: "2026-04-28", 
  },
  {
    id: "T-9824",
    title: "AutoHaus Berlin",
    type: "BMW 320d Touring",
    price: "€149",
    status: "Refunded",
    variant: "success",
    posted: "2026-04-28", 
  },
  {
    id: "T-9825",
    title: "AutoHaus Berlin",
    type: "BMW 320d Touring",
    price: "€149",
    status: "Refunded",
    variant: "success",
    posted: "2026-04-28", 
  },
];

export const TransCardsData = [
  {
    id: 1,
    title: "Revenue (period)",
    count: "€488",
  },
  {
    id: 2,
    title: "Pending",
    count: "€19",
  },
  {
    id: 3,
    title: "Refunded",
    count: "€120",
  },
];