import { Menu, MenuItem } from "@szhsin/react-menu";
import { useState } from "react";

export default function Select({options=[],className,defaultValue="",triggerBefore,triggrAfter,caret,caretImage="/images/icons/icon-caret-down.png"}){
  const [value,setValue] = useState(defaultValue);
  const handleSystemClick = e => {
    setValue(e.value);
  };
  return(
    <div className={`cus-select-box ${className?" " +className:""}`}>
      <input type="text" value={value} className="sr-only" onChange={()=>{}}/>
      <Menu menuButton={<span className="select-trigger">
        {triggerBefore ?triggerBefore:null}{value}
        {triggrAfter ? triggrAfter: caret?<img src={caretImage} className="select-caret"/>:null}
        </span>}>
        {options.map((item,index)=> (
          <MenuItem value={item.value} onClick={handleSystemClick} key={index+item.label}>{item.label}</MenuItem>
        ))}
      </Menu>
    </div>
  )
}