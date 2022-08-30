import React, { MouseEventHandler } from 'react';
import {  allColors } from '../../enums/presets';
import './Box.scss'
import classNames from 'classnames'

//improving note
//settup package to accept import type from other files
export interface RowProps {
    children: React.ReactNode,
    justify?: string,
    align?: string,
    m?: string
    mt?: string
    mr?: string
    mb?: string
    ml?: string
    p?: string
    pt?: string
    pr?: string
    pb?: string
    pl?: string
    fWrap?: 'wrap' | 'nowrap' | 'reverse'
    height: string
    width: string
    isReverse?: boolean
    bg: allColors,
    radius?: 0 | 15 |  20 | 25 | 50,
    position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed'
}


const Box: React.FC<RowProps> = ({ m, mt, mr, mb, ml, p, pt, pr, pb, pl, align, justify, width, height, children, fWrap, isReverse, position, radius, bg, ...props}) => {
    
    var rowClass = classNames({
        box: true,
        'wrap': fWrap === 'wrap',
        'nowrap': fWrap === 'nowrap',
        'reverse': fWrap === 'reverse',
        'isReverse': isReverse,

        'orange': bg === 'orange',
        'purple': bg === 'purple',
        'blue': bg === 'blue',
        'white': bg === 'white',
        'darkGray90': bg === 'darkGray90',
        'gray80': bg === 'gray80',
        'mediumGray70': bg === 'mediumGray70',
        'lightGray50': bg === 'lightGray50',
        'subGray30': bg === 'subGray30',
        'lineGray10': bg === 'lineGray10',
      });

    var customStyle: React.CSSProperties  = {
        margin: m,
        marginTop: mt,
        marginRight: mr,
        marginBottom: mb,
        marginLeft: ml,

        padding: p,
        paddingTop: pt,
        paddingRight: pr,
        paddingBottom: pb,
        paddingLeft: pl,

        alignItems: align,
        justifyContent: justify,
        position: position,
        
        width: width,
        height: height,
        borderRadius: radius,
        
        ...props
    }

    return (
        <div className={rowClass} style={customStyle}>
            {children}
        </div>
    )
} 

export default Box