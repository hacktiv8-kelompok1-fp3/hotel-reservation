import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const hotelsApi = createApi({
  reducerPath: "hotelApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://booking-com.p.rapidapi.com/v1/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "1d5d921ef5mshda17a1e4b15a025p11409bjsnbf4f9cf29488"
      );
      headers.set("X-RapidAPI-Host", "booking-com.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllHotels: builder.query({
      query: (queryParam) => `static/hotels?country=${queryParam?.country}`,
    }),
    getDescriptionHotel: builder.query({
      query: (queryParam) => {
        const { hotel_id } = queryParam;
        return {
          url: "hotels/description",
          params: {
            hotel_id,
            locale: "id",
          },
        };
      },
    }),
    getAllCities: builder.query({
      query: (queryParam) => `static/cities?country=${queryParam?.country}`,
    }),
    getSearchAllHotel: builder.query({
      query: (queryParam) => {
        const {
          checkin_date,
          checkout_date,
          adults_number,
          children_number,
          room_number,
          dest_id,
        } = queryParam;
        return {
          url: "hotels/search",
          params: {
            checkin_date,
            dest_type: "city",
            units: "metric",
            checkout_date,
            adults_number,
            order_by: "popularity",
            dest_id,
            filter_by_currency: "IDR",
            locale: "id",
            room_number,
            children_number,
          },
        };
      },
    }),
  }),
});

// destype bali = -2701757
// destype yogyakarta = -2703546

export const {
  useGetAllHotelsQuery,
  useGetAllCitiesQuery,
  useGetSearchAllHotelQuery,
  useGetDescriptionHotelQuery,
} = hotelsApi;
