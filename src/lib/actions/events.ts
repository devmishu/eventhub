import { serverMutation } from "../core/server";


export interface EventData {
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  date: string;
  priority: string;
  imageUrl: string;
}

export const createEvent = async (newEvent:EventData) => {
    return serverMutation('/api/events', newEvent, 'POST');
}