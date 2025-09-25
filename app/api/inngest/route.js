import { Server } from "inngest/next";
import { Inngest } from "inngest";
import { syncUserCreation, syncUserDeletion, syncUserUpdate } from "@/inngest/functions";

export const  { GET  , POST , PUT } = Server({
    client : Inngest,
    function: [
        syncUserCreation,
        syncUserUpdate,
        syncUserDeletion
    ],
});