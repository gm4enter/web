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
import RemittanceHistory from '../pages/depositAndHistory/remittanceHistory'
import CreateConversationMb from '../pages/customercenter/createConversationMb'
import Price from '../pages/price'
import About from '../pages/about'
import Contact from '../pages/contact'
import Audition from '../pages/audition'
import Audition2 from '../pages/audition/step2'
import Audition3 from '../pages/audition/step3'
import Audition4 from '../pages/audition/step4'
import Audition5 from '../pages/audition/step5'
import Artist from '../pages/artist'
import ArtistDetail from '../pages/artistDetail'

export const ROUTE = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  ARTIST: '/artist',
  ARTISTDETAIL: '/artistdetail',
  ARTISTDETAIL_ID: '/artistdetail/:id',
  AUDITION: '/audititon',

  AUDITION2: '/audititon/step2',
  AUDITION3: '/audititon/step3',
  AUDITION4: '/audititon/step4',
  AUDITION5: '/audititon/step5',


  DEPOSITANDHISTORY: '/depositandhistory',
  SITECREATION: '/sitecreation',
  SITELISTANDEXPIREDLIST: '/sitelistandexpiredlist',
  INFOWEBSITE: '/sitelistandexpiredlist/infowebsite',
  INFOWEBSITE_ID: '/sitelistandexpiredlist/infowebsite/:id',
  REGISTERANDMODIFYGOOGLEPLAY:
    '/sitelistandexpiredlist/registerandmodifygoogleplay',
  REGISTERANDMODIFYGOOGLEPLAY_ID:
    '/sitelistandexpiredlist/registerandmodifygoogleplay/:id',
  REGISTERANDMODIFYAPPLESTORE:
    '/sitelistandexpiredlist/registerandmodifyapplestore',
  REGISTERANDMODIFYAPPLESTORE_ID:
    '/sitelistandexpiredlist/registerandmodifyapplestore/:id',
  CUSTOMERCENTER: '/customercenter',
  CUSTOMERCENTER_ITEM: '/customercenter/:id',
  CREATECONVERSATION_ITEM: '/customercentermb',
  PRICE: '/price',
  REMITTANCEHISTORY: '/depositandhistory/remittancehistory',
}

const routes: Array<MyRouteProp> = [
  { path: ROUTE.HOME, element: <Home /> },
  { path: ROUTE.ABOUT, element: <About /> },
  { path: ROUTE.CONTACT, element: <Contact /> },
  { path: ROUTE.ARTIST, element: <Artist /> },
  { path: ROUTE.ARTISTDETAIL, element: <ArtistDetail /> },
  { path: ROUTE.AUDITION, element: <Audition /> },

  { path: ROUTE.AUDITION2, element: <Audition2 /> },
  { path: ROUTE.AUDITION3, element: <Audition3 /> },
  { path: ROUTE.AUDITION4, element: <Audition4 /> },
  { path: ROUTE.AUDITION5, element: <Audition5 /> },



  { path: ROUTE.PRICE, element: <Price /> },
  { path: ROUTE.DEPOSITANDHISTORY, element: <DepositAndHistory />, private: true },
  { path: ROUTE.SITECREATION, element: <SiteCreation />, private: true },
  { path: ROUTE.SITELISTANDEXPIREDLIST, element: <SiteListAndExpiredList />, private: true },
  { path: ROUTE.INFOWEBSITE_ID, element: <InfoWebsite />, private: true },
  {
    path: ROUTE.REGISTERANDMODIFYGOOGLEPLAY_ID,
    element: <RegisterAndModifyGooglePlay />,
    private: true
  },
  {
    path: ROUTE.REGISTERANDMODIFYAPPLESTORE_ID,
    element: <RegisterAndModifyAppleStore />,
    private: true
  },
  { path: ROUTE.CUSTOMERCENTER, element: <CustomerCenter />, private: true },
  { path: ROUTE.CUSTOMERCENTER_ITEM, element: <CustomerCenterItem />, private: true },
  { path: ROUTE.CREATECONVERSATION_ITEM, element: <CreateConversationMb />, private: true },
  { path: ROUTE.REMITTANCEHISTORY, element: <RemittanceHistory />, private: true },

]
export default routes
