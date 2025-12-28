import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/api";

export const getSignature = createAsyncThunk("file/getSignature",
    async (data) => {        
        const response = await api.post("/file/upload/signature", {
            url : "",
        });
        return response.data;
    }
);

