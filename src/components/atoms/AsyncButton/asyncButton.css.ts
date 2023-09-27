import { cva } from 'styled-system/css';

export const button = cva({
    base: {
        fontFamily: ['Nunito Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        fontWeight: '700',
        border: '0',
        borderRadius: '3em',
        cursor: 'pointer',
        display: 'inline-block',
        lineHeight: '1',
    },
    variants: {
        type: {
            primary: {
                color: 'white',
                backgroundColor: '#1ea7fd',
            },
            secondary: {
                color: '#333',
                backgroundColor: 'transparent',
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
            },
        },
        size: {
            small: {
                fontSize: '12px',
                padding: '10px 16px',
              },
            medium: {
                fontSize: '14px',
                padding: '11px 20px',
            },
            large: {
                fontSize: '16px',
                padding: '12px 24px',
            },
        }
    },
    defaultVariants: {
        type: 'primary',
        size: 'medium'
    }
})