import React, { MouseEventHandler } from 'react';
import { fontSizeTypes, allColors, typoTypes } from '../../enums/presets';
import './Typography.scss'
import classNames from 'classnames'

//improving note
//settup package to accept import type from other files
export interface TypographyProps {
    children: React.ReactNode,
    variant: typoTypes,
    text?: string,
    color: allColors,
    size: fontSizeTypes,
}

interface componentVariant{
    children?: React.ReactNode,
    className?: string
}

const Typography: React.FC<TypographyProps> = ({variant, size, color, text, children, ...props}) => {
    
    var typoClassname = classNames({
        typography: true,

        'orange': color === 'orange',
        'purple': color === 'purple',
        'white': color === 'white',
        'darkGray90': color === 'darkGray90',
        'gray80': color === 'gray80',
        'mediumGray70': color === 'mediumGray70',
        'lightGray50': color === 'lightGray50',
        'subGray30': color === 'subGray30',
        'lineGray10': color === 'lineGray10',

        'font-10': size ===  10,
        'font-12': size ===  12,
        'font-14': size ===  14,
        'font-16': size ===  16,
        'font-18': size ===  18,
        'font-20': size ===  20,
        'font-22': size ===  22,
        'font-24': size ===  24,
        'font-28': size ===  28,
        'font-32': size ===  32,
        'font-36': size ===  36,
        'font-64': size ===  64,
        'font-75': size ===  75,
    });

    const position = Object.keys(typoTypes).indexOf(variant)
    const variantArr: any = Object.keys(typoTypes)[position]

    const Component: React.FC<componentVariant> = variant ? variantArr  : "p";

    return (
        <Component className={typoClassname} {...props}>
            {children || text}
        </Component>
    )
} 

export default Typography