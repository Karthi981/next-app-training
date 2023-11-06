"use client";
import { Provider as JotaiProvider, createStore } from "jotai";
import { countAtom } from "./feautures/counter/store";

const myStore = createStore();
myStore.set(countAtom, 1);

const unsub = myStore.sub(countAtom, () => {
  console.log("countAtom value is changed to", myStore.get(countAtom));
});
const JotaiProviders = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider store={myStore}>{children}</JotaiProvider>;
};

export default JotaiProviders;
