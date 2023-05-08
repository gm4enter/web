export interface ConversationDetailMessageType {
  _id: string;
  content: string;
  conversation: string;
  sender: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    email: string;
    isActive: boolean;
    isGoogleUser: boolean;
    inactivePermanent: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
    photo: string;
  };
  recipient: string;
  createdAt: string;
  updatedAt: string;
}
