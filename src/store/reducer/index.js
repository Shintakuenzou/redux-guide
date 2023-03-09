//Serve muito bem qunado temos vários reducers (várias funcionalidades)
import { combineReducers } from "redux";

import course from "./course";

export default combineReducers({
  course,
});

/**
 * A única difrença que vai ocorrer é:
 * Antes de usar o combineReducer:
 * {modules: [], activeLesson: {}, activeModule: {} }
 * Quando usa combineReducer:
 * {
 *  course: { modules: [], activeLesson: {}, activeModule: {} }
 * }
 */
