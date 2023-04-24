export interface ConversationType {
  _id: string
  title: string
  description: string
  topic: 'TYPE_1' | 'TYPE_2' | 'TYPE_3'
  thumbnail: string
  createdAt: string
  updatedAt: string
  creator: string
  messages: string[]
  
}
