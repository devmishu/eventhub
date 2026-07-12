import { protectedFetch, serverFetch } from "../core/server";

export interface EventData {
  _id?: string;
  title: string;
  imageUrl: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  priority: string;
  price: number;
  category: string;
  location: string;
  userId: string;
}

export const getEvents = async ():Promise<EventData[]> => {
    return serverFetch<EventData[]>(`/api/events`);
} 
export const getFeaturedEvents = async ():Promise<EventData[]> => {
    return serverFetch<EventData[]>(`/api/events/featured`);
} 

export const getMyEvents = async (userId:string | null | undefined):Promise<EventData[]> => {
    return protectedFetch<EventData[]>(`/api/events/user/${userId}`);
} 

