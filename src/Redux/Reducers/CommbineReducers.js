import { combineReducers } from "redux";
import { charactersReducer, changePageNumber, search_Characters, filter_status, filter_type, filter_species, filter_gender, favourites } from "./EventReducers";

const rootReducer = combineReducers({
    allCharacter: charactersReducer,
    pageNumber: changePageNumber,
    searchingChar: search_Characters,
    filterSta: filter_status,
    filterTyp: filter_type,
    filterSpe: filter_species,
    filterGen: filter_gender,
    favourites: favourites
})

export default rootReducer;