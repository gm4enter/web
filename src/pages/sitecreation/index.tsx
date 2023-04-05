import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const SiteCreation = () => {
    return (
        <div style={{ padding: "24px" }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '10px 12px' }}>
                <p style={{ padding: 0, margin: 0, fontSize: '16px', fontWeight: 500, }}>생성할 사이트 선택</p>
                <div style={{ backgroundColor: 'rgba(235, 243, 255, 0.24)', border: '1px solid rgba(112, 119, 127, 0.2)', borderRadius: '4px', padding: '10px 24px' }}>
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
        </div>
    )
}

export default SiteCreation