export const square = (size="10",round="500")=>(`
    min-width:${size}px;
    min-height:${size}px;
    max-width:${size}px;
    max-height:${size}px;
    border-radius:${round}px;
  `)
export const size = (size=10)=>(`
    min-width:${size}px;
    min-height:${size}px;
    max-width:${size}px;
    max-height:${size}px;
  `)
export const flex = ({display="flex",x="center",y="center"})=>(`
      display:${display};
      justify-content:${x};
      align-items:${y};
  `)


export const pxToEm = (val,fs)=>  val / fs;
export const lineHeight = (val,fs)=>  val / fs;