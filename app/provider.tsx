"use client";
import { Provider as JotaiProvider, createStore, useAtom } from "jotai";
import { myStore } from "./feautures/coursesity/store";

const JotaiProviders = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider store={myStore}>{children}</JotaiProvider>;
};

export default JotaiProviders;
