
import { combineReducers } from "redux";

import changeTheNumber from "./upDown";

const rootReducer = combineReducers ({
    changeTheNumber,
    //otherReducers
})


export default rootReducer;