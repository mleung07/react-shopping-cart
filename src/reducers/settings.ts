import { AnyAction } from "redux";
import type { RootState } from "../store";

// actions
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SHOW_DRAWER = "SHOW_DRAWER";
export const HIDE_DRAWER = "HIDE_DRAWER";
export const SHOW_LOGIN = "SHOW_LOGIN";
export const HIDE_LOGIN = "HIDE_LOGIN";

interface SettingState {
  authed: boolean;
  name: string;
  showDrawer: boolean;
  showLogin: boolean;
}

const initialState: SettingState = {
  authed: false,
  name: "",
  showDrawer: false,
  showLogin: false,
};

const settings = (state: SettingState = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        authed: true,
        name: action.payload,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        authed: false,
        name: "",
      });
    case SHOW_DRAWER:
      return Object.assign({}, state, {
        showDrawer: true,
      });
    case HIDE_DRAWER:
      return Object.assign({}, state, {
        showDrawer: false,
      });
    case SHOW_LOGIN:
      return Object.assign({}, state, {
        showLogin: true,
      });
    case HIDE_LOGIN:
      return Object.assign({}, state, {
        showLogin: false,
      });
    default:
      return state;
  }
};

// Selector
export const selectSetting = (state: RootState) => state;

export default settings;
