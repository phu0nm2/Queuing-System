import Home from '../pages/Home';
// import SignIn from '../pages/SignIn';
import { RoleManagement, AccountManagement, LogUser } from '../pages/Setting';
import Report from '../pages/Report';
import GiveNumber from '../pages/GiveNumber';
import Service from '../pages/Service';
import AddDevice from '../pages/Devices/AddDevice';
import Detail from '../pages/Devices/Detail';
import Devices from '../pages/Devices';
import UpdateDevice from '../pages/Devices/UpdateDevice';

const publicRoutes = [
  // { path: '/signin', component: <SignIn />, layout: null },
  { path: '/', component: <Home /> },
  { path: '/thietbi', component: <Devices /> },
  { path: '/thietbi/add', component: <AddDevice /> },
  { path: '/thietbi/detail', component: <Detail /> },
  { path: '/thietbi/update', component: <UpdateDevice /> },
  { path: '/service', component: <Service /> },
  { path: '/givenumber', component: <GiveNumber /> },
  { path: '/report', component: <Report /> },
  { path: '/setting/role', component: <RoleManagement /> },
  { path: '/setting/account', component: <AccountManagement /> },
  { path: '/setting/user', component: <LogUser /> },
];

export { publicRoutes };
