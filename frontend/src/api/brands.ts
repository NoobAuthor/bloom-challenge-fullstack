import { Brand } from "../types/brand";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }
  return response.json();
}

export const BrandsApi = {
  async list(): Promise<Brand[]> {
    const response = await fetch(`${API_URL}/brands`);
    return handleResponse<Brand[]>(response);
  },

  async getById(id: string): Promise<Brand> {
    const response = await fetch(`${API_URL}/brands/${id}`);
    return handleResponse<Brand>(response);
  },
};
