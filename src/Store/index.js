import create from "zustand";
import Reducer, {initialState} from "./reducer";

export const useStore = create(set => ({
    user: initialState,
    dispatch: args => set(state => Reducer(state, args))
}));

export const dispatch = useStore(state => state.dispatch);