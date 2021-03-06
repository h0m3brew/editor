import "./scss/index.scss";

import Util from "./core/index";
import ColorPicker from "./colorpicker/index";
import CSSEditor from "./csseditor/index";

function startEditor() {
  var editor = new CSSEditor.createCSSEditor();

  return editor;
}

export default {
  version: '@@VERSION@@',
  ...Util,
  ...ColorPicker,
  ...CSSEditor,
  startEditor
};

window.editor = startEditor();
