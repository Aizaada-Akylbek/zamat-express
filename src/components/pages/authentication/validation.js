import * as yup from 'yup';

const schema = yup.object().shape({
	email: yup.string().email().trim().required(),
	password: yup.string().min(6).required(),
});

export default schema;
