import Highlight from "./Highlight";
import {HIGHLIGHT_COLOR} from "../constanst/colors";

const NumberedHighlight = ({number}) => {
  return <Highlight color={HIGHLIGHT_COLOR}>{number}</Highlight>;
}

export default NumberedHighlight;