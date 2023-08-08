import { cva } from "styled-system/css";
export const textarea =  cva({
  base: {
    width: '100%',
    height: '100%',
    resize: 'none',
    borderRadius: '0.5rem',
    background: 'black',
    color: 'white',
    padding: '0.5rem 1rem',
  }
})
  