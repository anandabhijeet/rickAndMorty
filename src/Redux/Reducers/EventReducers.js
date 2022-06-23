import {actionTypes} from "../Constants/ActionTypes";

const initialState = {
    characters: []
}

export const charactersReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case actionTypes.SET_ALL_CHARACTERS:
            return {...state, characters: payload};
        default:
            return state;
    }
}

export const changePageNumber = (state = 1, {type}) =>{
     switch(type){
        case actionTypes.INC_PAGE_NUMBER:
            return state === 42?state:state+1;
        case actionTypes.DEC_PAGE_NUMBER:
            return state === 1?state:state-1;
        default:
            return state;
     }  
}

const initialSearch = "";

export const search_Characters = (state = initialSearch, {type, payload})=>{
    switch(type){
        case actionTypes.SEARCHED_CHARACTER:
            return {...state, text_search: payload};
        default:
            return state;
    }
}

export const filter_status = (state="", {type, payload}) =>{
    switch (type) {
        case actionTypes.SET_STATUS:
            return {...state, status: payload};
    
        default:
            return state;
    }
} 

export const filter_species = (state = "", {type, payload}) => {
    switch (type) {
        case actionTypes.SET_SPECIES:
            return {...state, species: payload};
    
        default:
            return state;
    }
} 

export const filter_gender = (state = "", {type, payload}) => {
    switch (type) {
        case actionTypes.SET_GENDER:
            return {...state, gender: payload};
    
        default:
            return state;
    }
}  

export const filter_type = (state = "", {type, payload})=>{
    switch (type) {
        case actionTypes.SET_TYPE:
            return {...state, type: payload}   
        default:
            return state;
    }
}
   

