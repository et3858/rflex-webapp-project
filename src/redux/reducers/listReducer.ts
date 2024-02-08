import { DollarType } from "../../types";
import { ReduxActionType } from "../../enums/redux-enums";

interface IState {
    dollars: DollarType[]
}

const initialState: IState = {
    dollars: [],
};

interface IAction {
    type: ReduxActionType,
    payload?: any,
    dollar_id?: number,
}

export const listReducer = (state = initialState, action: IAction) => {
    let index: number;

    switch (action.type) {
        case ReduxActionType.FILL_LIST:
            return { dollars: [ ...action.payload ] };
        case ReduxActionType.CLEAR_LIST:
            return { dollars: [] };
        case ReduxActionType.UPDATE_ELEMENT:
            index = state.dollars.findIndex(e => e.id === action.dollar_id);
            state.dollars[index] = { ...state.dollars[index], ...action.payload };

            return { dollars: [ ...state.dollars] };
        case ReduxActionType.REMOVE_ELEMENT:
            index = state.dollars.findIndex(e => e.id === action.dollar_id);
            state.dollars.splice(index, 1);

            return { dollars: [ ...state.dollars ] };
        default:
            return state;
    }
};
