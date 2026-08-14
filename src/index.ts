// @ts-ignore
import { loadAsAdopted } from "@fest-lib/dom";

// @ts-ignore
import styles from "./index.scss?inline";

//
export const initialize = ()=>{
    loadAsAdopted(styles, "veela-lib");
}

//
export default initialize;
