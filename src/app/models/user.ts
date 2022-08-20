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
