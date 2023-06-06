import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hotelsApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://booking-com.p.rapidapi.com/v1/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "cdcada9048msh3b9d11a13206dcbp175087jsn42d586bfae30"
      );
      headers.set("X-RapidAPI-Host", "booking-com.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllHotels: builder.query({
      query: (queryParam) => `static/hotels?country=${queryParam?.country}`,
    }),
    getAllCities: builder.query({
      query: (queryParam) => `static/cities?country=${queryParam?.country}`,
    }),
    // getSearch: builder.
  }),
});

export const { useGetAllHotelsQuery, useGetAllCitiesQuery } = hotelsApi;
