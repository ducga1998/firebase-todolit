import styled from 'styled-components'
import * as React from 'react'
const StyledButton = styled.button`
	display: ${p => p.fitContainer ? 'block' : 'inline-block'};
	width: ${p => p.fitContainer ? '100%' : null};
	position: relative;
	font-weight: 500;
	font-size: ${p => p.size === 'small' ? '12px' : '14px'};
	height: ${p => p.size === 'small' ? '24px' : '32px'};
	line-height: 0;
	transition: all .3s;
	cursor: ${p => p.loading ? 'not-allowed' : 'pointer'};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	${p => p.active ? 'z-index: 1' : null};
	&&&[disabled] {
		border: 1px solid ${p => p.theme.N100};
		background: ${p => p.theme.N20};
		color: ${p => p.theme.N100};
		cursor: not-allowed;
		path {
			fill: ${p => p.theme.N100};
		}
		&:hover {
			background: ${p => p.theme.N20};
			color: ${p => p.theme.N100};
		}
    }
    
`
export const PrimaryButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />)) `
	background: ${p => p.active ? p.theme.P200 : p.theme.P100};
	border: 1px solid ${p => p.active ? p.theme.P200 : p.theme.P100};
	&& path {
		fill: #fff;
	}
`
export const SuccessButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />))`
	background: ${p => p.active ? p.theme.G100 : p.theme.G90};
	border: 1px solid ${p => p.active ? p.theme.G100 : p.theme.G90};
	&& path {
		fill: #fff;
    }
    border-radius : 2px;
`
export const DangerButton = styled(React.forwardRef((p, ref) => <StyledButton ref={ref} {...p} />))`
	background: ${p => p.active ? p.theme.R100 : p.theme.R90};
	border: 1px solid ${p => p.active ? p.theme.R100 : p.theme.R90};
	&& path {
		fill: #fff;
    }
    border-radius : 2px;
`

