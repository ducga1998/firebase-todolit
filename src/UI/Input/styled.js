import styled, { css } from 'styled-components'

export const InputWrapper = styled.div`
	border-radius: 2px;
	transition: all .3s;
	display: flex;
	min-width: 0;
	&:focus-within {
		border-color: ${p => p.theme.P100};
		box-shadow: 0 0 0 1px ${p => p.theme.P100};
		z-index: 5;
	}
	&[disabled] {
		background: ${p => p.theme.N20};
		input {
			background: ${p => p.theme.N20};
			cursor: not-allowed;
		}
		path {
			fill: ${p => p.theme.N100};
		}
	}
	input {
		background: transparent;
		min-width: 0;
		max-height: 100%;
		border: 0;
		padding: 0;
		line-height: 30px;
		flex: 1;
		font-size: 14px;
		color: ${p => p.theme.D70};
		&::placeholder {
			color: ${p => p.theme.N100};
		}
		&[type=number]::-webkit-inner-spin-button, 
		&[type=number]::-webkit-outer-spin-button { 
			-webkit-appearance: none; 
			margin: 0; 
		}
		&[type=number] {
			-moz-appearance:textfield;
		}
	}
	
	> * {
		margin: auto 0 auto 8px;
		&:last-child {
			margin-right: 8px;
		}
		max-height: 100%;
	}
	path {
		fill: ${p => p.theme.D70};
	}
	${props => !props.variant && InputDefault}
	${props => props.variant === 'warning' && InputWarning}
	${props => props.variant === 'danger' && InputDanger}
	${props => adjustInputSize(props.size)}
`

const InputDefault = css`
	border: 1px solid ${p => p.theme.N100};
	&:focus-within {
		border-color: ${p => p.theme.P100};
		box-shadow: 0 0 0 1px ${p => p.theme.P100};
	}
`

const InputDanger = css`
	border: 1px solid ${p => p.theme.R100};
	&:focus-within {
		border-color: ${p => p.theme.R100};
		box-shadow: 0 0 0 1px ${p => p.theme.R100};
	}
`

const InputWarning = css`
	border: 1px solid ${p => p.theme.Y100};
	&:focus-within {
		border-color: ${p => p.theme.Y100};
		box-shadow: 0 0 0 1px ${p => p.theme.Y100};
	}
`

const adjustInputSize = size => css`
	${size === 'medium' ? 'height: 24px;' : 'height: 32px;'}
`