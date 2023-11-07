"use client";
import { Provider as JotaiProvider, createStore } from "jotai";
import { countAtom } from "./feautures/counter/store";
import { formDataAtom } from "./SignUp/SignUpStore";

export const myStore = createStore();
myStore.set(countAtom, 1);

const unsub = myStore.sub(formDataAtom, () => {
  console.log("countAtom value is changed to", myStore.get(countAtom));
  console.log(myStore.get(formDataAtom));
});
const JotaiProviders = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider store={myStore}>{children}</JotaiProvider>;
};

export default JotaiProviders;
