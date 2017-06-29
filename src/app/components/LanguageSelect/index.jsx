import React from 'react'
import { Select } from 'antd';

import './style.css';

const LanguageSelect = (props) => {

    const handleChange = value => props.choiceLanguage(value);

    return (
        <div className="language">
            <Select
                value={props.language}
                onChange={handleChange}
                style={{ width: 120 }}>
                <Select.Option value="en">English</Select.Option>
                <Select.Option value="ru">Русский</Select.Option>
            </Select>
        </div>
    )
};

export default LanguageSelect
