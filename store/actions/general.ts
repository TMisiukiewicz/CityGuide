import { DefaultReducerAction } from "types";

export function setCurrentHomeScreenTab(currentHomeScreenTab: string): DefaultReducerAction {
    return {
        type: 'SET_CURRENT_HOMESCREEN_TAB',
        currentHomeScreenTab
    }
}