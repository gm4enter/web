import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box, Modal, Typography } from '@mui/material';
import closeIcon from '../../asset/images/cancel.png'
import avatarDemoCustomer from '../../asset/images/avatarDemoCustomer.png'


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
    border: 'none',
    // padding: '4px',
};

const dataImg = [
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
    avatarDemoCustomer,
]
const SiteCreation = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div style={{ padding: "24px" }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '10px 12px' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, }}>생성할 사이트 선택</p>
                <div onClick={handleOpen} style={{ backgroundColor: 'rgba(235, 243, 255, 0.24)', border: '1px solid rgba(112, 119, 127, 0.2)', borderRadius: '4px', padding: '10px 24px', cursor: 'pointer' }}>
                    <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 }}>눌러서 선택해주세요.</p>
                </div>

            </div>

            <div style={{ display: 'flex', padding: '10px 12px', marginTop: '16px' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, marginRight: '77px' }}>개설 구분</p>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="2" control={<Radio />} label="일반(2년) - 개설비용이 발생하며 모든 기능을 정상적으로 사용할 수 있습니다. 판매용 사이트는 이 항목을 선택하세요." />
                    <FormControlLabel value="1" control={<Radio />} label="일반(1년) - 개설비용이 발생하며 모든 기능을 정상적으로 사용할 수 있습니다. 판매용 사이트는 이 항목을 선택하세요." />
                    <FormControlLabel value="3" control={<Radio />} label="일반(3개월) - 개설비용이 발생하며 모든 기능을 정상적으로 사용할 수 있습니다. 판매용 사이트는 이 항목을 선택하세요." />
                </RadioGroup>
            </div>

            <div style={{ display: 'flex', gap: '81px', padding: '10px 12px', marginTop: '16px' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, }}>개설 비용</p>
                <div style={{}}>
                    <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 400, marginBottom: '8px' }}>1년 (5,500,000원) - VAT 포함</p>
                    <p style={{ padding: 0, margin: 0, fontSize: '14px', fontWeight: 400, color: '#70777F' }}>부가세 포함</p>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '63px', padding: '10px 12px', marginTop: '16px' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, }}>예치금 잔액</p>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500 }}>196,982 원</p>
            </div>

            <div style={{ marginTop: '22px', display: 'flex', justifyContent: 'center' }}>
                <button style={{ border: 'none', backgroundColor: '#2B83FE', padding: '8px 24px' }}>
                    <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, textAlign: 'center', color: '#fff' }}>사이트 생성하기</p>
                </button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                disableAutoFocus
            >
                <div style={style}>
                    <div style={{ display: 'flex', padding: '16px 24px 16px 32px', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EDEDED', textAlign: 'center', }}>
                        <p style={{ padding: 0, margin: 0, fontSize: '20px', fontWeight: 500, textAlign: 'center', }}>테마 선택</p>
                        <img src={closeIcon} alt="close" style={{ cursor: 'pointer', height: '24px', width: '24px' }} onClick={handleClose} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '16px 14px 0px 22px', height: '546px', gap: '16px', overflow: 'auto', }}>
                        <div style={{ width: '800px' }}>
                            {dataImg.map((item, index) => {
                                return (
                                    <img src={item} alt="close" style={{ cursor: 'pointer', height: '255px', width: '180px', margin: '0px 10px 16px 10px' }} onClick={() => { }} />
                                )
                            })}
                        </div>
                    </div>
                    <div style={{ display: 'flex', padding: '16px 44px 24px 24px', justifyContent: 'flex-end', alignItems: 'center', borderTop: '1px solid #EDEDED', textAlign: 'center', gap: '16px' }}>
                        <button onClick={handleClose} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #D0D5DD', borderRadius: '8px', backgroundColor: '#fff', padding: '10px 24px', textAlign: 'center' }}>
                            <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#272B30' }}>완료</p>
                        </button>
                        <button onClick={handleClose} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', borderRadius: '8px', backgroundColor: '#2B83FE', padding: '10px 24px', textAlign: 'center',  }}>
                            <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, color: '#fff' }}>완료</p>
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SiteCreation