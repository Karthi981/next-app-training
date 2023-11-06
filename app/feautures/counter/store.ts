import { atom } from "jotai"

export const countAtom=atom(0);

export const email = atom<string>("");



// store.subscribe(() => console.log(store.getState()))


// store.dispatch({ type: 'counter/incremented' })

// store.dispatch({ type: 'counter/incremented' })

// store.dispatch({ type: 'counter/decremented' })
