import { cva } from 'styled-system/css';

export const dndNode = cva({
    base: {
        height: '20px',
        padding: '4px',
        border: '1px solid #1a192b',
        borderRadius: '2px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'grab'
    },
    variants: {
        type: {
            input: {
                borderColor: '#0041d0'
            },
            output: {
                borderColor: '#ff0072'
            },
            default: {
                borderColor: 'gray'
            },
        }
    }
})