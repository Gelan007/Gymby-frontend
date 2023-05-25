import React from 'react';
import s from './Textarea.module.scss'

const TextareaGrey = (props) => {
    return (
        <textarea className={s.textareaGrey} {...props}>

        </textarea>
    );
};

export default TextareaGrey;