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
import { Button, MenuItem, TextField } from '@mui/material'

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
      },
    },
  },
});

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Required'),
  // password: yup
  //   .string()
  //   .min(8, 'Password should be of minimum 8 characters length')
  //   .required('Password is required'),
});

const Contact = () => {
  const classes = useStyles()
  const navigate = useNavigate()

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
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
              <label>Inquiry type *</label>
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
              <label>Name *</label>
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

              <label>Email *</label>
              <TextField
                fullWidth
                id="email"
                name="email"
                variant="filled"
                placeholder='Please enter your email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <label>Content *</label>
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

              <label>Privary Policy *</label>


              <Button color="info" variant="contained" fullWidth type="submit">
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
