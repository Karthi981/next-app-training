"use client";
import { Provider as JotaiProvider, createStore } from "jotai";
import { profileDataAtom } from "./feautures/coursesity/store";

export const myStore = createStore();

const unsub = myStore.sub(profileDataAtom, () => {
  console.log(myStore.get(profileDataAtom));
});
const JotaiProviders = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider store={myStore}>{children}</JotaiProvider>;
};

export default JotaiProviders;
