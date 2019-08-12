import React from 'react'
import styled from 'styled-components'
const UIIcon = React.forwardRef(({ icon, style, size, className , onClick }, ref) => {
    const wh = SIZES[size] || '24px'
    return <div onClick ={onClick}><SVGIcon  className={className} style={style} ref={ref} viewBox="0 0 24 24" width={wh} height={wh}>{ICONS[icon]}</SVGIcon></div>
})
const SVGIcon = styled.svg`
	display: inline-block;
    vertical-align: middle;
    path {
         fill: ${p => p.theme.D100};
    }
`
export default UIIcon

const SIZES = {
    large: '24px',
    medium: '20px',
    small: '16px',
    tiny: '12px'
}

export const ICONS = {
    binCompact: <path d="M15.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H8.25V3.75C8.25 3.55109 8.32902 3.36032 8.46967 3.21967C8.61032 3.07902 8.80109 3 9 3H15C15.1989 3 15.3897 3.07902 15.5303 3.21967C15.671 3.36032 15.75 3.55109 15.75 3.75V6ZM14.25 4.5H9.75V6H14.25V4.5ZM5.25 18.75V9H18.75V18.75C18.75 19.3467 18.5129 19.919 18.091 20.341C17.669 20.7629 17.0967 21 16.5 21H7.5C6.90326 21 6.33097 20.7629 5.90901 20.341C5.48705 19.919 5.25 19.3467 5.25 18.75ZM8.25 12V17.25H9.75V12H8.25ZM11.25 17.25H12.75V12H11.25V17.25ZM14.25 12V17.25H15.75V12H14.25Z" />,
    clock: <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M19,13h-8V5h2v6h6V13z" />,
}
