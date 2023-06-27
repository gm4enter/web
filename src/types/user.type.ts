export interface UserType{
    blocked: boolean
    email: string
    firstName: string
    lastName: string
    role: {
        accessFor: string
        createdAt: string
        isActive: boolean
        name: string
        permissions: string[]
        updatedAt: string
        _id: string
    }
    photo: string
    createdAt: string
    updatedAt: string
    firebaseId: string
    inactivePermanent: boolean
    isActive: boolean
    isGoogleUser: boolean
    signUpDate: string
    mobileNumber?: string
    _id: string
    wallet: {
        balance: number
        createdAt: string
        isActive: boolean
        updatedAt: string
        _id: string
    }    
}