import { atom } from "jotai";

const initialProfileData ={
    firstName:"",
    lastName:"",
    email:"",
    bio:""
}


export const profileDataAtom = atom({firstName:"",
lastName:"",
email:"",
bio:""});