import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AnalyticsStateType } from '../types/AnalyticsStateType';
import { AnalyticsProjectType } from '../types/AnalyticsProjectType';

const initialState: AnalyticsStateType = {
  AnalyticsProjectsToDo: [],
};

export const analyticsSlice = createSlice({
  name: 'Analytics',
  initialState,
  reducers: {
    CreateAnalyticsProjectToDo: (state, action) => ({
      ...state,
      AnalyticsProjectsToDo: [...state.AnalyticsProjectsToDo, action.payload],
    }),
    DeleteAnalyticsProjectToDos: (state) => ({
      ...state,
      AnalyticsProjectsToDo: [],
    }),
    SortAnalyticsProjectToDoData: (state, action) => {
      const projectOfConcern = state.AnalyticsProjectsToDo.find((project) => project.spreadsheet === action.payload["spreadsheet"]);
      // const otherProjects = state.AnalyticsProjectsToDo.filter((project) => project.spreadsheet !== action.payload["spreadsheet"]);
      if (projectOfConcern) {
        const primaryAttribute = projectOfConcern.primaryAttribute;
        if (primaryAttribute) {
          switch (projectOfConcern.headers[primaryAttribute].datatype) {
            case "Date":
              switch (action.payload["sorting"]) {
                case "Ascending":
                  projectOfConcern.data.sort(
                    (dataPointA, dataPointB) => {
                      if (Date.parse(dataPointA[primaryAttribute] as string) < Date.parse(dataPointB[primaryAttribute] as string)) {
                        return (-1);
                      } else if (Date.parse(dataPointA[primaryAttribute] as string) === Date.parse(dataPointB[primaryAttribute] as string)) {
                        return 0;
                      } else {
                        return 1;
                      }
                    }
                  );
                  break;
                case "Descending":
                  projectOfConcern.data.sort(
                    (dataPointA, dataPointB) => {
                      if (Date.parse(dataPointA[primaryAttribute] as string) > Date.parse(dataPointB[primaryAttribute] as string)) {
                        return (-1);
                      } else if (Date.parse(dataPointA[primaryAttribute] as string) === Date.parse(dataPointB[primaryAttribute] as string)) {
                        return 0;
                      } else {
                        return 1;
                      }
                    }
                  );
                  break;
              }
              break;
            case "DateTime":
              projectOfConcern.data.sort((dataPointA, dataPointB) => Date.parse(dataPointA[primaryAttribute] as string) - Date.parse(dataPointB[primaryAttribute] as string));
              break;
            default:
              projectOfConcern.data.sort();
              break;
          }
        }
        // return {
        //   ...state,
        //   AnalyticsProjectsToDo: [...otherProjects, updatedProject],
        // };
      }
      // return {
      //   ...state,
      // };
    },
    UpdateAnalyticsProjectToDoHeaders: (state, action) => {
      const projectOfConcern = state.AnalyticsProjectsToDo.find((project) => project.spreadsheet === action.payload["spreadsheet"]);
      const otherProjects = state.AnalyticsProjectsToDo.filter((project) => project.spreadsheet !== action.payload["spreadsheet"]);
      if (projectOfConcern) {
        const headersOfConcern = projectOfConcern?.headers;
        const updatedHeaders = {
          ...headersOfConcern,
          [action.payload["header"]]: {
            ...headersOfConcern[action.payload["header"]],
            datatype: action.payload["datatype"] === undefined ? headersOfConcern[action.payload["header"]]["datatype"] : action.payload["datatype"],
            sorting: action.payload["sorting"] === undefined ? headersOfConcern[action.payload["header"]]["sorting"] : action.payload["sorting"],
          },
        };
        const updatedProject: AnalyticsProjectType = {
          ...projectOfConcern,
          headers: updatedHeaders,
        };
        return {
          ...state,
          AnalyticsProjectsToDo: [...otherProjects, updatedProject],
        };
      } else {
        return {
          ...state,
        };
      }
    },
    UpdateAnalyticsProjectToDoPrimaryAttribute: (state, action) => {
      const projectOfConcern = state.AnalyticsProjectsToDo.find((project) => project.spreadsheet === action.payload["spreadsheet"]);
      const otherProjects = state.AnalyticsProjectsToDo.filter((project) => project.spreadsheet !== action.payload["spreadsheet"]);
      if (projectOfConcern) {
        const updatedProject: AnalyticsProjectType = {
          ...projectOfConcern,
          primaryAttribute: action.payload["primaryAttribute"],
        }
        return {
          ...state,
          AnalyticsProjectsToDo: [...otherProjects, updatedProject],
        };
      } else {
        return {
          ...state,
        };
      }
    },
  },
});

export default analyticsSlice;
