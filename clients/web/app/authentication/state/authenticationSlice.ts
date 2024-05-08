import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signInWithEMail } from './authenticationAPI';
import { AuthenticationStateType } from '../types';

const initialState: AuthenticationStateType = {
  user: undefined,
  metadata: {
    authenticationTokens: {
      access_token: undefined,
      refresh_token: undefined,
    },
    status: "unauthenticated",
  }
};

export const signOutThunk = createAsyncThunk(
  "Authentication/SignOut",
  async () => {
    window.sessionStorage.removeItem("authentication.shunyaek.se");
    return {
      user: undefined,
      metadata: {
        authenticationTokens: {
          access_token: undefined,
          refresh_token: undefined,
        },
        status: "unauthenticated",
      }
    }
  },
);

export const signInWithEMailThunk = createAsyncThunk(
  'Authentication/SignInWithEMail',
  async ({ email, password }: { email: string, password: string }) => {
    if (email !== undefined && password !== undefined) {
      const response = await signInWithEMail(email, password);
      return response;
    } else {
      return {
        user: undefined,
        metadata: {
          authenticationTokens: undefined,
          status: "unauthenticated",
        },
      };
    }
  }
)

export const authenticationSlice = createSlice({
  name: 'Authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInWithEMailThunk.pending, state => ({
        ...state,
        metadata: {
          ...state.metadata,
          status: "authenticating",
        }
      }))
      .addCase(signInWithEMailThunk.fulfilled, (state, action) => ({
        ...state,
        user: action.payload.user,
        metadata: {
          status: action.payload.metadata.status === "unauthenticated" ? "unauthenticated" : "authenticated",
          authenticationTokens: {
            access_token: action.payload.metadata.authenticationTokens?.access_token,
            refresh_token: action.payload.metadata.authenticationTokens?.refresh_token,
          }
        }
      }))
      .addCase(signOutThunk.pending, state => ({
        user: undefined,
        metadata: {
          authenticationTokens: {
            access_token: undefined,
            refresh_token: undefined,
          },
          status: "unauthenticated",
        }
      }))
      .addCase(signOutThunk.fulfilled, (state, action) => ({
        user: action.payload.user,
        metadata: {
          authenticationTokens: {
            access_token: action.payload.metadata.authenticationTokens.access_token,
            refresh_token: action.payload.metadata.authenticationTokens.refresh_token,
          },
          status: "unauthenticated",
        }
      }))
  },
});

export default authenticationSlice;
