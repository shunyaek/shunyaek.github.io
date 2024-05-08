import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  showHeader: boolean;
  showFooter: boolean;
  showNavigationBar: boolean;
  showAsideBar: boolean;
  applicationShellPadding: "xs" | "sm" | "md" | "lg" | "xl" | 0;
  asideState: {
    title: string | undefined;
    data: [],
  },
} = {
  showHeader: true,
  showFooter: false,
  showNavigationBar: false,
  showAsideBar: false,
  applicationShellPadding: "xs",
  asideState: {
    title: undefined,
    data: [],
  }
};

export const clientSlice = createSlice({
  name: 'Client',
  initialState,
  reducers: {
    ControlApplicationShellComponents: (state, action) => ({
      ...state,
      showAsideBar: action.payload.showAsideBar,
      showFooter: action.payload.showFooter,
      showHeader: action.payload.showHeader,
      showNavigationBar: action.payload.showNavigationBar,
      asideState: {
        title: action.payload.asideState?.title,
        data: action.payload.asideState?.data,
      }
    }),
    UpdateApplicationShellPadding: (state, action) => ({
      ...state,
      applicationShellPadding: action.payload.applicationShellPadding,
    }),
  },
});

export default clientSlice;
