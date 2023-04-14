import Home from '../pages/home'
import DepositAndHistory from '../pages/depositAndHistory'
import MyRouteProp from './MyRouteProp'
import SiteCreation from '../pages/sitecreation'
import SiteListAndExpiredList from '../pages/sitelistandexpiredlist'
import CustomerCenter from '../pages/customercenter'
import InfoWebsite from '../pages/infoWebsite'
import RegisterAndModifyGooglePlay from '../pages/registerAndModifyGooglePlay'
import RegisterAndModifyAppleStore from '../pages/registerAndModifyAppleStore'
import CustomerCenterItem from '../layouts/customerCenterItem'

export const ROUTE = {
  HOME: '/',
  DEPOSITANDHISTORY: '/depositandhistory',
  SITECREATION: '/sitecreation',
  SITELISTANDEXPIREDLIST: '/sitelistandexpiredlist',
  INFOWEBSITE: '/sitelistandexpiredlist/infowebsite',
  REGISTERANDMODIFYGOOGLEPLAY:
    '/sitelistandexpiredlist/registerandmodifygoogleplay',
  REGISTERANDMODIFYAPPLESTORE:
    '/sitelistandexpiredlist/registerandmodifyapplestore',
  CUSTOMERCENTER: '/customercenter',
  CUSTOMERCENTER_ITEM: '/customercenter/:id',
  ABOUT: '/about',
  SOLUTION: '/solution',
  PRICE: '/price',
  CONTACT: '/contact',
}

const routes: Array<MyRouteProp> = [
  {path: ROUTE.HOME, element: <Home />},
  {path: ROUTE.ABOUT, element: <Home />},
  {path: ROUTE.SOLUTION, element: <Home />},
  {path: ROUTE.PRICE, element: <Home />},
  {path: ROUTE.CONTACT, element: <Home />},
  {path: ROUTE.DEPOSITANDHISTORY, element: <DepositAndHistory />},
  {path: ROUTE.SITECREATION, element: <SiteCreation />},
  {path: ROUTE.SITELISTANDEXPIREDLIST, element: <SiteListAndExpiredList />},
  {path: ROUTE.INFOWEBSITE, element: <InfoWebsite />},
  {
    path: ROUTE.REGISTERANDMODIFYGOOGLEPLAY,
    element: <RegisterAndModifyGooglePlay />,
  },
  {
    path: ROUTE.REGISTERANDMODIFYAPPLESTORE,
    element: <RegisterAndModifyAppleStore />,
  },
  {path: ROUTE.CUSTOMERCENTER, element: <CustomerCenter />},
  {path: ROUTE.CUSTOMERCENTER_ITEM, element: <CustomerCenterItem />},
]
export default routes
