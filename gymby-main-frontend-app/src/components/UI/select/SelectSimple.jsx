import React from 'react';
import s from './SelectSimple.module.scss'

const SelectSimple = ({defaultName, options, value, onChange, fontSize = 22, fontSizeParams = 20}) => {
    return (
        <select
            className={s.select}
            value={value}
            onChange={event => onChange(event.target.value)}
            style={{fontSize: `${fontSize}px`}}
        >

            <option disabled value='popular' className={`${s.defaultValue} ${s.option}`}
                    style={{fontSize: `${fontSizeParams}px`}}>{defaultName}
            </option>

            {options.map((option) =>
                <option value={option.value} key={option.value} className={s.option}
                        style={{fontSize: `${fontSizeParams}px`}}>{option.name}
                </option>
            )}
        </select>
    );
};

export default SelectSimple;