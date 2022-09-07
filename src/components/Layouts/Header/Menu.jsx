import GlobalContext from "../../../context/GlobalContext";
import { useContext } from "react";
import { anchors } from "./data";


export default function Menu() {
  const {activeSection} = useContext(GlobalContext);
  // new fullpage('#fullpage', {
  //   anchors: ['page1', 'page2', 'page3', 'page4'],
  //   sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
  // });
  // console.log(activeSection)

  const moveSectionDown = (arg)=> {
    const value = arg.toLowerCase();
    fullpage_api.moveTo(value,0);
  }
  return (
      <ul>
          {anchors.map((item,index) => {
            return(
              <li className={`nav-item ${activeSection === item.anchor.toLowerCase() ?"active" :""}`} key={index}>
                <button onClick={() => moveSectionDown(item.anchor)} className="link" >{item.item}</button>
              </li>
            )
          })}
      </ul>
  )
}