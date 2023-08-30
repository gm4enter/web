export interface DataAuditionContextType {
  step: number;
  curentStepSave: number;
  dataStep1?: {
    isConfirm: string | undefined;
  };
  dataStep2?: {
    gender: string;
    name: string;
    dob: string;
    countries: string[];
    phoneNumber: string;
    email: string;
  };
  dataStep3?: {
    supportType: string[];
    height: string;
    weight: string;
    postalCode: string;
    address: string;
    job: string;
    bloodGroup: string;
    language: string;
    hobby: string;
  };
  dataStep4?: {
    image: File | null;
    imageOptional?: File | null;
    video: File | null;
    videoOptional?: File | null;
  };
}

export interface DataApplyArtist {
  name: string;
  gender: string;
  birthday: string | Date;
  national: string;
  phone_number: string;
  email: string;
  support_field: string;
  height: number;
  weight: number;
  postal_code: string;
  address: string;
  career: string;
  blood_group: string;
  languages: string;
  hobby: string;
  profile_files?: string[];
  files?: string[];
  weight_files?: string[];
}
