import { makeStyles } from '@mui/styles'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/netBackground.png'
import { ROUTE } from '../../router/routes'
import { Input } from '../../components/base/input/Input'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';
import { Button, MenuItem, TextField, Checkbox } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAppDispatch } from '../../app/hooks'
import { snackBarActions } from '../../components/snackbar/snackbarSlice'

//Mobile: width < 768px
//Tablet: 768px < width < 1024px
//Desktop: width >=1024px

const useStyles = makeStyles({
  home_container: {
    // height: 'calc(100vh - 124px - 88px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '16px 180px 64px 180px',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '32px',
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        '&>p': {
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#A1A1AA',
          margin: '0',
          padding: '0',
        },
        '&>div': {
          width: '100%',
          height: '1px',
          backgroundColor: '#18181B',
        },
      },
    },
    '&>div:nth-of-type(2)': {
      display: 'flex',
      gap: '44px',
      '&>div:nth-of-type(1)': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        '&>div': {
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          '&>p': {
            margin: '0',
            padding: '0',
            color: '#18181B',
          },
          '&>p:nth-of-type(1)': {
            fontSize: '20px',
            fontWeight: 'bold',
          },
          '&>p:nth-of-type(2)': {
            fontSize: '18px',
            fontWeight: '400',
          },
          '&>div': {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            '&>p': {
              margin: '0',
              padding: '0',
              color: '#000',
              fontSize: '16px',
              fontWeight: '400',
              textDecoration: 'underline',
              cursor: 'pointer',
            },
          }
        },
      },
      '&>div:nth-of-type(2)': {
        flex: 2,
      },
    },
    '&>div:nth-of-type(3)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '12px',
      gap: '32px',
      '&>div:nth-of-type(1)': {
        height: '1px',
        width: '80%',
        backgroundColor: '#18181B',
      },
      '&>div:nth-of-type(2)': {
        width: '50%',

        '&>div:nth-of-type(1)': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '32px',
          '&>p': {
            margin: '0',
            padding: '0',
          },
          '&>p:nth-of-type(1)': {
            fontSize: '32px',
            fontWeight: '700',
            color: '#000',
          },
          '&>p:nth-of-type(2)': {
            fontSize: '14px',
            fontWeight: '400',
            color: '#3F3F46',
            textAlign: 'center',
          },
        },
        '&>div:nth-of-type(2)': {
          '&>form': {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            '&>div': {
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              '&>label': {
                margin: '0',
                padding: '0',
                color: '#000',
                fontSize: '16px',
                fontWeight: '700',
                '&>span': {
                  color: '#FF0000',
                },
              },
            }
          },
        },
      },
    },
  },
});

const validationSchema = yup.object().shape({
  inquiryType: yup
    .string()
    .required('Required'),
  name: yup
    .string()
    .required('Required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Required'),
  content: yup
    .string()
    .required('Required'),
  // password: yup
  //   .string()
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
});

const Contact = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleClickAbout = () => {
    navigate(ROUTE.ABOUT)
  }

  const handleClickContact = () => {
    navigate(ROUTE.CONTACT)
  }

  const formik = useFormik({
    initialValues: {
      inquiryType: '',
      name: '',
      contact: '',
      email: '',
      content: '',
      policy: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log('values', values);
      dispatch(snackBarActions.setStateSnackBar({
        content: '성공',
        type: 'success',
      }))
      // setTimeout(() => {
      //   navigate(ROUTE.HOME)
      // }, 2000)
    },
  });

  return (
    <div className={classes.home_container}>
      <div>
        <div onClick={handleClickAbout}>
          <p>About</p>
          <div style={{ opacity: 0 }} />
        </div>
        <div onClick={handleClickContact}>
          <p style={{ color: '#18181B', }}>Contact</p>
          <div />
        </div>
      </div>

      <div>
        <div>
          <div>
            <p>Chat to sale</p>
            <p>saleadmingrenapp@naver.com</p>
          </div>

          <div>
            <p>Visit us</p>
            <p>205, Gangdong daero, Gangdong-gu, Seoul, Republic of Korea</p>
          </div>

          <div>
            <p>Call us</p>
            <p>0123.456.789</p>
          </div>

          <div>
            <p>Socical</p>
            <div>
              <p onClick={() => { window.open('https://www.instagram.com/', '_blank') }}>Instagram</p>
              <p onClick={() => { window.open('https://www.youtube.com/', '_blank') }}>Youtube</p>
              <p onClick={() => { window.open('https://www.twitter.com/', '_blank') }}>Twitter</p>
              <p onClick={() => { window.open('https://www.facebook.com/', '_blank') }}>Facebook</p>
            </div>
          </div>

        </div>

        <div>
          <iframe
            width="100%"
            height="100%"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=G1 Greenbay&t=&z=12&ie=UTF8&iwloc=&output=embed"
            frameBorder='0'
            scrolling='no'
            marginHeight={0}
            marginWidth={0}
          />
        </div>
      </div>

      <div>
        <div />
        <div>
          <div>
            <p>Let’s Talk</p>
            <p>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help</p>
          </div>

          <div>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label>Inquiry type <span>*</span></label>
                <TextField
                  fullWidth
                  id="inquiryType"
                  name="inquiryType"
                  variant="filled"
                  select
                  value={formik.values.inquiryType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.inquiryType && Boolean(formik.errors.inquiryType)}
                  helperText={formik.touched.inquiryType && formik.errors.inquiryType}
                >
                  <MenuItem key={1} value={1}> 1 </MenuItem>
                  <MenuItem key={2} value={2}> 2 </MenuItem>
                </TextField>
              </div>

              <div>
                <label>Name <span>*</span></label>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  variant="filled"
                  placeholder='Please enter your name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>

              <div>
                <label>Contact</label>
                <TextField
                  fullWidth
                  id="contact"
                  name="contact"
                  variant="filled"
                  placeholder='Please enter your contact information'
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.contact && Boolean(formik.errors.contact)}
                  helperText={formik.touched.contact && formik.errors.contact}
                />
              </div>

              <div>
                <label>Email <span>*</span></label>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <div
                          style={{ padding: '8px 16px', backgroundColor: '#fff', boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.08)', cursor: 'pointer' }}
                          onClick={() => { console.log('verify email') }}
                        >
                          Verify
                        </div>
                      </InputAdornment>
                    ),
                  }}
                  variant="filled"
                  placeholder='Please enter your email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>

              <div>
                <label>Content <span>*</span></label>
                <TextField
                  fullWidth
                  id="content"
                  name="content"
                  variant="filled"
                  placeholder='Please enter your content'
                  multiline
                  rows={5}
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.content && Boolean(formik.errors.content)}
                  helperText={formik.touched.content && formik.errors.content}
                />
              </div>

              <div>
                <label>Privary Policy <span>*</span></label>
                <TextField
                  fullWidth
                  id="content"
                  name="content"
                  variant="outlined"
                  placeholder='Please enter your content'
                  multiline
                  rows={7}
                  value='1. Collected Personal Information
                  We collect the following personal information for the use of the Website, provision of services, response to inquiries and reports, etc.
                  1) Collected information: Name, contact, E-mail, cookies, IP information.
                  2) Method: Online collection through the Website.
                  
                  2. Purpose of Collecting and Using Personal Information
                  We use the collected personal information for the following purposes.
                  - Individual identification and response to service inquiries.
                  
                  3. Period of Retention and Use of Personal Information
                  In principle, the Company destroys all personal information immediately after attaining the purpose of collecting and using such personal information. However, the Company retains certain personal information, including those specified below, during the period of retention and
                  use consented by the users or for a certain amount of time as obligated by applicable law.
                  1) Service proposals, inquiries, reports: 12 months
                  2) Website log-in and access records: 3 months (Protection of Communications Secrets Act)
                  3) Website log-in and access records: 3 months (Protection of Communications Secrets Act)
                  
                  4. Destruction of Personal Information
                  The Company immediately destroys personal information upon achieving the purpose of the information’s collection and use. The destruction
                  procedure and methods are as follows.
                  1) Destruction Procedure
                  After attaining the personal information’s purpose , the personal information is retained by the Company for a certain amount of time in accordance with the personal information protection grounds under the Company’s internal policy and applicable laws (refer to Period of
                  Retention and Use) and thereafter destroyed. Any personal information transferred to a database will not be used for other purposes unless
                  otherwise provided by law.
                  2) Destruction Method
                  Personal information stored electronically is deleted through a technical method that prevents the restoration of any records.'
                />
              </div>

              <div style={{ flexDirection: 'row', marginBottom: '12px' }}>
                <Checkbox
                  id="policy"
                  name="policy"
                  sx={{
                    padding: 0,
                    '&.Mui-checked': {
                      color: '#000',
                    }
                  }}
                  value={formik.values.policy}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span>Please consent to the privacy policy.</span>
              </div>

              <Button
                disabled={!formik.values.policy}
                variant="contained"
                fullWidth type="submit"
                style={(!formik.values.policy) ? { backgroundColor: '#E4E4E7', color: '#fff' } : { backgroundColor: '#000', color: '#fff' }}
              >
                Submit
              </Button>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Contact
