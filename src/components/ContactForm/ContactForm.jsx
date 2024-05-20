import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';


export default function ContactForm ({ addContact }) {
    const initialValues = { name: '', number: '' };
    const validationSchema = Yup.object({
        name: Yup.string().min(3, 'Minimum 3 characters').max(50, 'Maximum 50 characters').required('Required'),
        number: Yup.string().required('Required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        addContact({ id: nanoid(), ...values });
        resetForm();
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form >
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="div"  />
                <label htmlFor="number">Number</label>
                <Field name="number" type="text" />
                <ErrorMessage name="number" component="div"  />
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};
