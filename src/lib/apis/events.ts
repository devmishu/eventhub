import { serverFetch } from "../core/server";

export interface EventData {
  _id?: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  date: string;
  priority: string;
  imageUrl: string;
}

export const getEvents = async ():Promise<EventData[]> => {
    return serverFetch<EventData[]>(`/api/events`);
} 
export const getFeaturedEvents = async ():Promise<EventData[]> => {
    return serverFetch<EventData[]>(`/api/events/featured`);
} 