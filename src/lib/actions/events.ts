"use server"
import { revalidatePath } from "next/cache";
import { serverDelete, serverMutation } from "../core/server";


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

export const deleteEvent = async (eventId:string ) => {
    revalidatePath('/dashboard/manage-events')
    return serverDelete(`/api/events/${eventId}`);
}