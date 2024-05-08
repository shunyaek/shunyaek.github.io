import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GeoLocationStateType } from './types';
import { readGeoLocationData } from './geoLocationAPI';

const initialState: GeoLocationStateType = {
  ip: "",
  hostname: "",
  city: "",
  region: "",
  country: "",
  loc: "",
  org: "",
  postal: "",
  timezone: "",
};

export const readGeoLocationDataThunk = createAsyncThunk(
  'GeoLocation/ReadGeoLocation',
  async () => {
    const response = await readGeoLocationData();
    return response;
  }
)

export const geoLocationSlice = createSlice({
  name: 'GeoLocation',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(readGeoLocationDataThunk.pending, state => ({
        ...state,
      }))
      .addCase(readGeoLocationDataThunk.fulfilled, (state, action) => ({
        ...state,
        ip: action.payload.ip,
        hostname: action.payload.hostname,
        city: action.payload.city,
        region: action.payload.region,
        country: action.payload.country,
        loc: action.payload.loc,
        org: action.payload.org,
        postal: action.payload.postal,
        timezone: action.payload.timezone,
      }))
  }
});

export default geoLocationSlice;
