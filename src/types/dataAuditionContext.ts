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
    name: string;
    email: string;
    mobileNumber: string;
    password: string;
    passwordConfirm: string;
  };
}
