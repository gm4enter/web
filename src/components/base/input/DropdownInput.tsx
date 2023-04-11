
import { MenuItem, Select } from '@mui/material'
import React from 'react'

interface DropDownInputProps {
    value?: string
    onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void
    options?: { value: string, label: string }[]

}
export const DropDownInput = () => {
    return (
        <div style={{ flex: 1 }}>
            <p style={{ padding: 0, margin: '0 0 8px 0', fontSize: '14px', fontWeight: 500, }}>예치금 잔액</p>
            <select style={{ width: '100%', border: '1px solid #D0D5DD', borderRadius: '8px', padding: '10px 16px', fontSize: '16px', fontWeight: 500, lineHeight: '24px' }} >
                <option value="신용카드">신용카드</option>
                <option value="신용카드">신용카드</option>
                <option value="신용카드">신용카드</option>
            </select>
        </div>
    )
}
