import { NextApiRequest } from "next";

export interface AuthenticatedRequest extends NextApiRequest {
  user?: {
    id: number;
    email: string;
    role?: string;
  };
}
