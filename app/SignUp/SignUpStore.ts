import { atom} from 'jotai';

// Define the initial form data
const initialFormData = {
  email: '',
  password: '',
  confirmPassword: '',
  phoneNumber:''
};

// Create a Jotai atom for the form data
export const formDataAtom = atom(initialFormData);
