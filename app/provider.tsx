"use client";
import { Provider as JotaiProvider, createStore, useAtom } from "jotai";
import { myStore } from "./Store";

const JotaiProviders = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider store={myStore}>{children}</JotaiProvider>;
};

export default JotaiProviders;
