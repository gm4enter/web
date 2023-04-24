export interface PayerType {
  _id: string
  firstName: string
  lastName: string
  email: string
  firebaseId: string
  role: string
  wallet: string
  passwordAttempt: number
  signUpDate: string
  isActive: boolean
  isGoogleUser: boolean
  inactivePermanent: boolean
  blocked: boolean
  photo: string
  createdAt: string
  updatedAt: string
}
