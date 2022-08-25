import React, { ChangeEventHandler, useState } from 'react';
import './Input.scss'
import classNames from 'classnames'
import { inputTypes } from '../../enums/presets';
import { eyesClosed, eyesOpen } from '../../icons'

//improving note
//settup package to accept import type from other files
export interface InputProps {
    id?: string,
    label?: string,
    error?:boolean,
    message?: string,
    disabled?: boolean,
    autoComplete?: boolean,
    isPassword?: boolean,
    types: inputTypes,
    onChange?: ChangeEventHandler<HTMLInputElement>
}


const Input: React.FC<InputProps> = ({id, disabled, label, message, error, onChange, autoComplete, isPassword, types, ...props}) => {
    const [isView, setIsView] = useState(false)
    
    const classNameInput = classNames({
        form__input : true,
        'error': error,
        'font-16': true,
    });

    const type = isPassword ? isView ? 'text' : 'password'  : types 

    return (
        <div className='form'>
            <input onChange={onChange} className={classNameInput} type={type} id={id || 'ipt'} autoComplete={autoComplete ?'' : 'off'}  placeholder=" "/>
            <label className='form__label' >{label}</label>
            {isPassword && <img className='icon' src={isView ? eyesClosed : eyesOpen} onClick={() => setIsView(e => !e)}/>}
            {error && <span className='message'>{message}</span>}
        </div>
    )
} 

export default Input