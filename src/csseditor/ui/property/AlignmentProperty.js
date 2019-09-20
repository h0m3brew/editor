import BaseProperty from "./BaseProperty";
import LeftAlign from "../menu-items/LeftAlign";
import RightAlign from "../menu-items/RightAlign";
import TopAlign from "../menu-items/TopAlign";
import BottomAlign from "../menu-items/BottomAlign";
import CenterAlign from "../menu-items/CenterAlign";
import MiddleAlign from "../menu-items/MiddleAlign";
import { EVENT } from "../../../util/UIElement";
import { DEBOUNCE } from "../../../util/Event";
import SameHeight from "../menu-items/SameHeight";
import SameWidth from "../menu-items/SameWidth";


export default class AlignmentProperty extends BaseProperty {
  components() {
    return {
      LeftAlign,
      RightAlign,
      TopAlign,
      BottomAlign,
      CenterAlign,
      MiddleAlign,
      SameHeight,
      SameWidth      
    }
  }

  [EVENT('refreshSelection') + DEBOUNCE(100)] () {
    this.refreshShow('layer');
    this.refreshShow('svg-path');
    
  }

  isHideHeader() {
    return true; 
  }

  getTitle() {
    return "Alignment";
  }

  getBody() {
    return /*html*/`
      <div class="alignment-item" ref="$positionItem">
        <LeftAlign />
        <CenterAlign />
        <RightAlign />

        <TopAlign />
        <MiddleAlign />
        <BottomAlign />

        <div class='split'></div>        

        <SameWidth />
        <SameHeight />
        <CopyItem />
      </div>
    `;
  }
}
