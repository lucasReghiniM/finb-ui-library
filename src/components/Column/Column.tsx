import React, { MouseEventHandler } from 'react';
import { sizes, colors } from '../../enums/presets';
import './Column.scss'
import classNames from 'classnames'

//improving note
//settup package to accept import type from other files
export interface ColumnProps {
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
    width: string,
    isReverse?: boolean
}


const Column: React.FC<ColumnProps> = ({ m, mt, mr, mb, ml, p, pt, pr, pb, pl, align, justify, width, height, children, fWrap, isReverse, ...props}) => {
    
    var rowClass = classNames({
        column: true,
        'wrap': fWrap === 'wrap',
        'nowrap': fWrap === 'nowrap',
        'reverse': fWrap === 'reverse',
        'isReverse': isReverse
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
        
        width: width,
        height: height,
        
        ...props
    }

    return (
        <div className={rowClass} style={customStyle}>
            {children}
        </div>
    )
} 

export default Column