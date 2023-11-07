import { atom } from "jotai";

const initialProfileData ={
    firstName:"",
    lastName:"",
    email:"",
    bio:""
}


export const profileData = atom(initialProfileData);