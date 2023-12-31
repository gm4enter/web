import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import reportWebVitals from './reportWebVitals'
import './index.css'
import Router from './router'
import BaseAdminLayout from './layouts/admin'
import { createTheme, ThemeProvider } from '@mui/material'
import Loading from './components/loading'
import CustomizedSnackbars from './components/snackbar'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import useLang, { LANG } from './hooks/useLang';


const container = document.getElementById('root')!
const root = createRoot(container)

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans KR'].join(','),
  },
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider theme={theme}>
            <BaseAdminLayout>
              <Loading />
              <CustomizedSnackbars />
              <Router />
            </BaseAdminLayout>
          </ThemeProvider>
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
