import * as Yup from 'yup'

export const contactSchema = Yup.object().shape({
  name: Yup.string().required('the name is required').max(20, 'Too long Max is 20 char'),
  email: Yup.string().email('Invalid email').required('email is required'),
  subject: Yup.string().required('subject is required').max(50, 'To long max is 50'),
  message: Yup.string().required('No Message to Send').max(150, 'To long max is 150 char')
})