

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
  messages: {
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
  }[];
  createdAt: string;
  updatedAt: string;
}
