import { Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react'
import { Link } from '~components/Core'
import { anchors } from '../data'
import { OffCanvasMenu } from '../style'
import { OffCanvasStyle } from './style'
import {useState} from "react"
export default function Offcanvas({ isOpen, onClose }) {
  const [activeSection , setActiveSection] = useState();
  return (
    <Drawer placement={"left"} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent >
        <OffCanvasStyle>
          <DrawerBody id='drawer-body'>
            <div className="offcanvas-menu">
              <OffCanvasMenu>
                  <ul>
                    {anchors.map((item,index) => {
                      return(
                        <li className={`nav-item ${activeSection === item.anchor.toLowerCase() ?"active" :""}`} key={index}>
                          <Link to={"#" + item.anchor} className="link" onClick={() => onClose()}>{item.item}</Link>
                        </li>
                      )
                    })}
                  </ul>
              </OffCanvasMenu>
            </div>
          </DrawerBody>
        </OffCanvasStyle>
      </DrawerContent>
    </Drawer>
  )
}