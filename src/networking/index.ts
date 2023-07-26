import axios from "axios";

export const apiClient = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGFubmVsX2lkIjoiODEiLCJzY29wZXMiOlsidHJhbnNhY3Rpb25fcmVhZCIsInRyYW5zYWN0aW9uX3dyaXRlIiwiZXZlbnRfcmVhZCIsInBlcmZvcm1hbmNlX3JlYWQiLCJjdXN0b21lcl93cml0ZSIsInZlbnVlX3BsYW5fcmVhZCJdLCJhbXIiOlsibWZhIl0sInR5cGUiOiJ0cmFuc2FjdGlvbiIsInN1YiI6IjMwIiwiZXhwIjoxNzIwNjE5MjY5fQ.c-NlT0ApvKfxLYCNsIVHhTcQ4GVvyFmAuZkE_DUAlT8",
    },
    baseURL: process.env.REACT_APP_LINE_UP_BASE_URL,
  });
};
