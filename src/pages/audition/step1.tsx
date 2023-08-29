import { makeStyles } from '@mui/styles'
import React, { useLayoutEffect, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import arowIconLandingPage from '../../asset/images/arowIconLandingPage.png'
import businessGlobalLandingPage from '../../asset/images/businessGlobalLandingPage.png'
import gmaLogoLandingPage from '../../asset/images/gmaLogoLandingPage.png'
import background from '../../asset/images/Audition.png'
import lineStep from '../../asset/images/lineStep.png'
import { ROUTE } from '../../router/routes'
import { Input } from '../../components/base/input/Input'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import * as yup from 'yup';
import { Button, MenuItem, TextField, Checkbox, Radio, FormLabel, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { dataSteps } from '../../constants'
import { useAuditionContext } from '../../context/auditionContext'
//Mobile: width < 768px
//Tablet: 768px < width < 1024px
//Desktop: width >=1024px

const useStyles = makeStyles({
  home_container: {
    minHeight: 'calc(100vh - 124px - 88px - 44px - 0px)',
    padding: '44px 80px 80px 80px',
    backgroundColor: '#f8f8f8',
    '&>div:nth-of-type(1)': {
      display: 'flex',
      gap: '23px',
      '&>div:nth-of-type(1)': {
        '&>div:nth-of-type(1)': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          height: '219px',
          backgroundImage: `url("${background}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          '&>p': {
            margin: '0',
            padding: '0',
            marginTop: '60px',
            color: '#18181B',
            fontSize: '36px',
            fontWeight: 'bold',

          },
        },
        '&>div:nth-of-type(2)': {
          display: 'flex',
          flexDirection: 'column',
          '&>div': {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            '&>p': {
              margin: '0',
              padding: '0',
              color: '#18181B',
              fontSize: '20px',
              fontWeight: 'bold',
            },
          },
          '&>img': {
            width: '24px',
          },
        },
      },
      '&>div:nth-of-type(2)': {
        flex: 1,
        background: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '32px',
        '&>div': {
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          '&>label': {
            margin: '0',
            padding: '0',
            color: '#18181B',
            fontSize: '20px',
            fontWeight: 'bold',
            '&>span': {
              color: '#FF0000',
            },
          },
        },
        '&>div:nth-of-type(1)': {
          borderBottom: '1px solid #000',
          padding: '10px 0 12px 0',
        },
        '&>div:nth-of-type(2)': {
          '&>div:nth-of-type(1)': {
            height: '350px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            border: ' 1px solid #a1a1a9',
            padding: '16px',
            gap: '16px',
            '&>div': {
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              '&>p': {
                margin: '0',
                padding: '0',
                color: '#27272A',
              },
              '&>p:nth-of-type(1)': {
                fontSize: '16px',
                fontWeight: 'bold',
              },
              '&>p:nth-of-type(2)': {
                fontSize: '18px',
                fontWeight: '400',
                color: '#3F3F46'
              },
            },
          },
        },

        '&>div:nth-of-type(3)': {
          '&>div:nth-of-type(1)': {
            height: '350px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'auto',
            border: ' 1px solid #a1a1a9',
            padding: '16px',
            gap: '16px',
            '&>div': {
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              '&>p': {
                margin: '0',
                padding: '0',
                color: '#27272A',
              },
              '&>p:nth-of-type(1)': {
                fontSize: '16px',
                fontWeight: 'bold',
              },
              '&>p:nth-of-type(2)': {
                fontSize: '18px',
                fontWeight: '400',
                color: '#3F3F46'
              },
            },
            '&>table': {
              flex: 1,
              background: '#A1A1AA',
              '&>tr': {
                fontSize: '14px',
                color: '#18181B',
                background: '#fff',
                '&>td:nth-of-type(1)': {
                  width: '30%',
                  padding: '16px',

                },
                '&>td:nth-of-type(2)': {
                  padding: '16px',
                  '&>ul': {
                    margin: '0',
                    padding: '0 0 0 16px',
                    '&>li:nth-of-type(1)': {
                      marginBottom: '8px',
                    },
                  }
                },
              }
            },
          },
        },

        '&>div:nth-of-type(4)': {
          '&>div': {
            '&>label': {
              margin: '0',
              padding: '0',
              color: '#18181B',
              fontSize: '20px',
              fontWeight: 'bold',
            },
          },

        },
        '&>div:nth-of-type(5)': {
          marginLeft: 'auto',
        },
      },
    },
  },
});

export const AuditionStep1 = () => {

  const { data, setData } = useAuditionContext();

  console.log('dataContext child 1', data);

  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  const [value, setValue] = React.useState('');

  const handleClickNext = () => {
    console.log('handleClickNext');
    setData({
      ...data, 
      step: 2, 
      curentStepSave: 2,
      dataStep1: {
        isConfirm: value
      }
    })
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useLayoutEffect(() => {
    setValue(data.dataStep1?.isConfirm || '')
  }, [])

  return (
    <div className={classes.home_container}>
      <div>
        <div>
          <div>
            <p>Apply for an audition</p>
          </div>

          <div>
            {dataSteps.map((item, index) => (
              <>
                <div>
                  <Checkbox
                    id="policy"
                    name="policy"
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon />}
                    sx={{
                      padding: 0,
                      '&.Mui-checked': {
                        color: '#0063F7',
                      }
                    }}
                    defaultChecked={index === 0 ? true : false}
                    disabled
                  />
                  <label htmlFor="policy" style={index === 0 ? { color: '#0063F7', fontSize: '20px', fontWeight: 'bold' } : {}}>{item.title}</label>
                </div>
                <img src={lineStep} alt='' />
              </>
            ))}
            <div>
              <Checkbox
                id="policy"
                name="policy"
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon />}
                sx={{
                  padding: 0,
                  '&.Mui-checked': {
                    color: '#0063F7',
                  }
                }}
                defaultChecked={false}
                disabled
              />
              <label htmlFor="policy">지원서 확인</label>
            </div>
          </div>

        </div>

        <div>

          <div>
            <label>이용 약관 <span>*</span></label>
          </div>
          <div>
            <label>사이트 이용약관 (필수) </label>
            <div>
              <div>
                <p>
                  사이트 이용악관
                </p>
              </div>

              <div>
                <p>
                  환영합니다. YG는 지원자 여러분들의 개인정보를 소중히 보호하고 있습니다.
                </p>
                <p>
                  [총 직]
                </p>
              </div>

              <div>
                <p>
                  제 1 조 목적
                </p>
                <p>
                  본 약관은[주] Y 엔터테인먼트 (이하 "회사”라한다고) 가 운영하는 YG 오디션페이지를 이용함에있어 회사와 이용자의 권리, 의무 및 척임사항을
                  규정 함을 목적 으로합니다. ]
                </p>
              </div>

              <div>
                <p>
                  제 2 조 용어의 정의
                </p>
                <p>
                  1. 본 약관에서 사용하는 용어의 점의는 다음과 같습니다.
                  (1) '일반회원(회원) 이란 회사에 개인정보를 제공하여 회원 등록을 한자로서, 회원 아이디를 부여받은자를 의미합니다.
                </p>
              </div>

              <div>
                <p>
                  제 3 조 용어의 정의
                </p>
                <p>
                  1. 본 약관에서 사용하는 용어의 점의는 다음과 같습니다.
                  (1) '일반회원(회원) 이란 회사에 개인정보를 제공하여 회원 등록을 한자로서, 회원 아이디를 부여받은자를 의미합니다.
                </p>
              </div>
            </div>
          </div>

          <div>
            <label>개인정보 수집 및 이용 동의 (필수) </label>
            <div>
              <div>
                <p>
                  본인은[Y] YG 엔터테인먼트 (이하'회사’) 가본인이 YG AUDITION회원 가입을 통해 제공하는 개인정보를 아래와 같이 수집 및 이용함에 대하여
                </p>
              </div>

              <table>
                <tr>
                  <td>수집 및 이용 목적</td>
                  <td>오디션 지원자 식별 및 오디션 결과 통보.</td>
                </tr>
                <tr>
                  <td>수집항목</td>
                  <td>
                    <ul>
                      <li>(필수 정보)이름 성별 생년월일, E-MAIL ,국적, 연락처</li>
                      <li>휴대폰 본인인증하는 경우에는 나이스 평가정보에서 인증받은 휴대폰 번호를 사용합니다</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>보유및 이용약관</td>
                  <td>
                    <ul>
                      <li>YG AUDITION 사이트 회원 가입일부터 서비스 종료일까지</li>
                      <li>YG AUDITION 사이트 회원 가임자가 개인정보의 파기를 요청할 경우,회사는 지제없이 해당 개인정보를파기합니다. 단, 다른 법령에따라 특정기간 동안 해당 개인정보를 보존해야할 경우, 회사는 동 기간 동안 해당개인정보를 안전하게 보유할 수 있습니다</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>동의를 거부할 권리 및동의 거할 경우의불이익</td>
                  <td>
                    <ul>
                      <li>YG AUDITION 사이트 회원 가임자는 필수 개인정보의 수집 및 이용에 대한 동의를 거부활 수있는 권리가있다. 단,이와 같이 동의를 거부활 경우 사트 이용에 제한이 있습니다.</li>
                    </ul>
                  </td>
                </tr>
              </table>

              <div>
                <p>
                  제 1 조 목적
                </p>
                <p>
                  본 약관은[주] Y 엔터테인먼트 (이하 "회사”라한다고) 가 운영하는 YG 오디션페이지를 이용함에있어 회사와 이용자의 권리, 의무 및 척임사항을
                  규정 함을 목적 으로합니다. ]
                </p>
              </div>

              <div>
                <p>
                  제 2 조 용어의 정의
                </p>
                <p>
                  1. 본 약관에서 사용하는 용어의 점의는 다음과 같습니다.
                  (1) '일반회원(회원) 이란 회사에 개인정보를 제공하여 회원 등록을 한자로서, 회원 아이디를 부여받은자를 의미합니다.
                </p>
              </div>

              <div>
                <p>
                  제 3 조 용어의 정의
                </p>
                <p>
                  1. 본 약관에서 사용하는 용어의 점의는 다음과 같습니다.
                  (1) '일반회원(회원) 이란 회사에 개인정보를 제공하여 회원 등록을 한자로서, 회원 아이디를 부여받은자를 의미합니다.
                </p>
              </div>
            </div>
          </div>

          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              sx={{ flex: 1, justifyContent: 'space-between', alignItem: 'center' }}
              value={value}
              onChange={handleChange}
            >
              <label>모든 약관 및 정책에 동의</label>
              <FormControlLabel value={'1'} control={<Radio />} label="동의합니다" />
              <FormControlLabel value={'2'} control={<Radio />} label="동의하지 않습 LI 다" />
            </RadioGroup>
          </FormControl>

          <div>
            <Button
              disabled={!(value === '1')}
              variant="contained"
              type="submit"
              color="primary"
              sx={{ padding: '12px 60px', backgroundColor: '#0063F7', color: '#fff', marginTop: '12px', }}
              onClick={handleClickNext}
            >
              다음 단계
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
