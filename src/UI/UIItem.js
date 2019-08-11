import styled ,{ css } from 'styled-components'

const sharedListCss = css`
    list-style: none;
    width: 100%;
    //max-height: 100%;
    margin: 0;
    overflow-y: auto;
    ::-webkit-scrollbar-track {
			box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
			background: #f8f8f8;
		}
		::-webkit-scrollbar {
			width: 6px;
			height: 6px;
			background: #f8f8f8;
		}
		::-webkit-scrollbar-thumb {
			background: #e4e4e4;
			border-radius: 6px;
		}
`
const activeItemCss = hasBorder => css`
    position: relative;
    z-index: 2;
    background: ${p => p.theme.P20};
    ${p => hasBorder && `border: 1px solid ${p.theme.P40}`};
    color: ${p => p.theme.P100};
    div {
        color: ${p => p.theme.P100};
    }
`
export const StyledListTitle = styled.h3`
    background: ${p => p.theme.N10};
    margin: 0;
    padding: 4px 4px 4px 8px;
    border-bottom: 1px solid ${p => p.theme.D20};
    border-top: 1px solid ${p => p.theme.D20};
    color: ${p => p.theme.D50};
    font-size: 12px;
    text-transform: uppercase;
`
export const StyledList = styled.ul`
${sharedListCss}
    ${p => p.padded ? 'padding: 8px' : 'padding: 0'};
    ${p => p.relaxed && relaxedCss};
    > li {
        padding: 4px 4px 4px 8px;
        button.drag-selector, button.drag-handler {
        	cursor: grab;
        	&:focus, &:focus-within, &:active {
        		cursor: grabbing;
        	}
        }
    }

    && .placeholder {
        background: ${p => p.theme.D20};
        border: 1px solid transparent;

        > * {
            visibility: hidden;
        }
    }

    .chosen, .fallback {
        ${activeItemCss(false)};
        border-color: ${p => p.theme.P40};
    }
`
const relaxedCss = css`
    > li {
        margin-bottom: 4px;
    }
`
