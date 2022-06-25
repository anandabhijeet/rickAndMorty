import { actionTypes } from "../Constants/ActionTypes";

export const setAllCharacters = (characters)=>{
    return{
        type: actionTypes.SET_ALL_CHARACTERS,
        payload: characters
    }
}

export const incPageNumber = ()=>{
    return{
        type: actionTypes.INC_PAGE_NUMBER,
    }
}

export const decPageNummber = () => {
    return {
        type: actionTypes.DEC_PAGE_NUMBER
    }
}

export const searchedCharacters = (searchedCharacter) => {
    return {
        type: actionTypes.SEARCHED_CHARACTER,
        payload: searchedCharacter
    }
}

export const setStatus = (status) => {
    return {
        type: actionTypes.SET_STATUS,
        payload: status
    }
}

export const setType = (type) => {
    return {
        type: actionTypes.SET_TYPE,
        payload: type
    }
}

export const setGender = (gender) => {
    return {
        type: actionTypes.SET_GENDER,
        payload: gender
    }
}

export const setSpecies = (species) =>{
    return {
        type: actionTypes.SET_SPECIES,
        payload: species
    }
}

export const addToFav = (data) => {
    return {
        type: actionTypes.ADD_TO_FAV,
        payload: data
    }
}

export const removeFromFav = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_FAV,
        payload: id
    }
}