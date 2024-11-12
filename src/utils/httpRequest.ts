import {RequestParams} from "@/types/payload/requestParams";
import {Response} from "@/types/payload/response";

const updateOptions = (options: RequestInit): RequestInit => {
    const updatedOptions = {...options};
    const token = localStorage.getItem("token");
    if (token) {
        updatedOptions.headers = {
            ...updatedOptions.headers,
            Authorization: `Bearer ${token}`,
        };
    }
    return updatedOptions;
};

const sendRequest = async <T>(
    {
        url,
        method,
        body,
    }: RequestParams
): Promise<Response<T>> => {
    const options: RequestInit = {
        method,
        headers: {},
    };

    if (body instanceof FormData) {
        options.body = body;
    } else {
        options.headers = {
            ...options.headers,
            "Content-Type": "application/json",
        };
        options.body = body ? JSON.stringify(body) : undefined;
    }

    const response = await fetch(url, updateOptions(options));

    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(
            errorResponse.message || response.statusText,
        );
    }

    if (method === "DELETE") {
        return {
            message: response.statusText,
            code: response.status,
        };
    }

    const {data, message} = (await response.json())

    return {
        data: data as T,
        message,
        code: response.status,
    };
};

const httpRequest = {
    post: <T>(params: RequestParams): Promise<Response<T>> =>
        sendRequest<T>({...params, method: "POST"}),
    get: <T>(params: RequestParams): Promise<Response<T>> =>
        sendRequest<T>({...params, method: "GET"}),
    put: <T>(params: RequestParams): Promise<Response<T>> =>
        sendRequest<T>({...params, method: "PUT"}),
    delete: <T>(params: RequestParams): Promise<Response<T>> =>
        sendRequest<T>({...params, method: "DELETE"}),
};

export default httpRequest;
