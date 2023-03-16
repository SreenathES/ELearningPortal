import * as yup from 'yup';

// Schema to validate login credentials
export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email')
        .required('Email is required')
        .matches(
            /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g,
            'Invalid email'
        ),
    password: yup.string().required('Password is required')
});

// Schema to validate student registration credentials
export const studentRegistrationSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required('Name field cannot be empty*'),
    lastName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required('Name field cannot be empty*'),
    email: yup
        .string()
        .required('Email is required*')
        .matches(
            /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g,
            'Email must be valid'
        ),
    phone: yup
        .string()
        .required('Phone is required*')
        .min(10, 'Phone number must be 10 digits')
        .max(10, 'Phone number must be 10 digits')
        .matches(
            /^[6-9]\d{9}$/,
            'Enter valid phone number'
        ),
    password: yup
        .string()
        .required('Password cannot be empty*')
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#.!]).{8,}$/,
            'Minimum eight characters, at least one letter, one number, and a special character'
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], "Passwords doesn't match")
        .required('Confirm password cannot be empty*')
});

// Schema to validate instructor registration credentials
export const instructorRegistrationSchema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required('Name field cannot be empty*'),
    lastName: yup
        .string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
        .required('Name field cannot be empty*'),
    email: yup
        .string()
        .required('Email is required*')
        .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g, 'Email must be valid'),
    phone: yup
        .string()
        .required('Phone is required*')
        .min(10, 'Phone number must be 10 digits')
        .max(10, 'Phone number must be 10 digits')
        .matches(
            /^[6-9]\d{9}$/,
            'Enter valid phone number'
        ),
    yearOfExperience: yup.number()
        .positive()
        .integer('Enter valid year of experience')
        .min(0, 'Enter valid year of experience')
        .required('Year of experience cannot be empty*')
        .typeError('Enter a valid experience')
        .test('is-number', 'Enter a valid number', (value) => !isNaN(value)),
    education: yup.string().required('Field required*'),
    dateOfBirth: yup.date().required('Field required*').transform((value, inputDate) => {
        if (inputDate.length === 0) {
            return null;
        }
        return value;
    }).test("Age must be between 18 and 100", function (value) {
        const today = new Date();
        const age = today.getFullYear() - value.getFullYear();
        value.setFullYear(today.getFullYear());
        if (age >= 18 && age <= 100) {
            return true;
        }
    }),
    areaOfExpertise: yup.string().required('Field required*'),
    password: yup
        .string()
        .required('Password cannot be empty*')
        .matches(
            /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#.!]).{8,}$/,
            'Minimum eight characters, at least one letter, one number, and a special character'
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], "Passwords doesn't match")
        .required('Confirm password cannot be empty*')
});