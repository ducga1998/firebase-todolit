import React from 'react'
import { InputWrapper } from './styled'
// import { InputProps } from './types'


const UIInput = React.forwardRef((props, ref) => {
    const {
        size,
        variant,
        style,
        type,
        prefix,
        suffix,
        placeholder,
        value,
        parse,
        onChange,
        small,
        disabled,
        defaultValue,
        onClearInput,
        className,
	    forceUpdate,
        ...passProps
    } = props

	const inputRef = React.useRef(null)
	React.useEffect(() => {
		if (forceUpdate || (inputRef.current && !inputRef.current.matches(':focus'))) {
			inputRef.current.value = typeof value !== 'undefined' ? value : ''
		}
	})

    return <InputWrapper
        size={size}
        ref={ref}
        variant={variant}
        style={style}
        disabled={disabled}
        className={className}
    >
        {prefix}
        <input
	        ref={inputRef}
            defaultValue={defaultValue}
            type={type || 'text'}
            disabled={!!disabled}
            placeholder={placeholder}
            onChange={onChange ? (e => onChange(e.target.value)) : undefined}
            {...passProps}
        />

        {suffix}
    </InputWrapper>
})

export default UIInput