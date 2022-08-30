export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  document: string;
  birthDate: Date;
  interestArea: string;
  typePerson: number;
  educationLevel?: string,
  course?: string,
  educationalInstitution?: string
}

export interface UpdateUserBody {
  id: string;
  name: string;
  birthDate: string;
  email: string;
  document: string;
  educationLevel?: string;
  educationalInstitution?: string;
  course?: string;
  typePerson: number;
}
