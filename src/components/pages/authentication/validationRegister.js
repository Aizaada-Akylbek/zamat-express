import * as yup from 'yup';

const schema = yup.object().shape({
	username: yup.string().trim().required(),
	email: yup.string().trim().email().required(),
	password: yup.string().trim().min(6).required(),
	password2: yup.string().trim().min(6).required(),
});

export default schema;
