import React, { MouseEventHandler } from 'react';
import { sizes, colors } from '../../enums/presets';
import './Button.scss'
import classNames from 'classnames'

//improving note
//settup package to accept import type from other files
export interface ButtonProps {
    children: React.ReactNode,
    text?: string,
    color: colors,
    disabled?: boolean,
    size?: sizes,
    onClick?: MouseEventHandler<HTMLButtonElement>
}


const Button: React.FC<ButtonProps> = ({size, color, disabled, onClick, text, children, ...props}) => {
    
    var btnClass = classNames({
        btn: true,
        'small': size === 'small',
        'medium': size === 'medium',
        'large': size === 'large',

        'orange': color === 'orange',
        'purple': color === 'purple',
        'transparent': color === 'transparent',

        'disabled': disabled
      });

    return (
        <button className={btnClass} disabled={disabled} onClick={onClick} type="button">
            {children || text} 
        </button>
    )
} 

export default Button