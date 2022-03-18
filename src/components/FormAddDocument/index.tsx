import styles from './styles.module.scss'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validation } from '../../tools/validation'

export function FormAddDocument() {
    return (
        <div className={styles.wrapper}>
            <h4>Adicionar documentos ao pedido</h4>
            <div className={styles.formContent}>
            
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '' }}
                validationSchema={ validation }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    }, 400);
                }}
                >
                <Form>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" className={styles.formControl} />
                        <ErrorMessage name="firstName" />
                    </div>
            
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" className={styles.formControl} />
                        <ErrorMessage name="lastName" />
                    </div>
            
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <Field name="email" type="email" className={styles.formControl} />
                        <ErrorMessage name="email" />
                    </div>
            
                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            </div>
        </div>
    )
}