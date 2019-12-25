import MenuItem from "./MenuItem";
import icon from "../icon/icon";
   
export default class AddCircle extends MenuItem {
  getIconString() {
    return icon.circle
  }
  getTitle() {
    return this.props.title || "Circle";
  }


  isHideTitle() {
    return true; 
  }  

  clickButton(e) {

    this.emit('add.type', 'circle');    

  }

}
