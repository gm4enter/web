import { ConversationDetailMessageType } from "./conversationDetailMessage.type";
export interface ConversationDetailType {
  _id: string;
  title: string;
  thumbnail: string[];
  topic: "TYPE_1" | "TYPE_2" | "TYPE_3";
  description: string;
  creator: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    firebaseId: string;
    isActive: boolean;
    isGoogleUser: boolean;
    inactivePermanent: boolean;
    blocked: boolean;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
  messages: ConversationDetailMessageType[];
  createdAt: string;
  updatedAt: string;
}
