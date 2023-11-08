import { atom, createStore, useAtom } from "jotai";


export type initialProfileData ={
    firstName:"",
    lastName:"",
    email:"",
    bio:""
}

export const myStore = createStore();

export const profileDataAtom = atom({firstName:"",
lastName:"",
email:"",
bio:""});

export const detailsAtom = atom((get)=>get(profileDataAtom))



