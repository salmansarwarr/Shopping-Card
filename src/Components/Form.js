import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { setDiscount } from '../Redux/actionCreator';
import Error from './Error';

function Form() {
    const state = useSelector(state => state)
    const { promoValue } = state
    const dispatch = useDispatch()

    const validationSchema = Yup.object().shape({
        promoCode: Yup.string()
            .min(8, "Must have atleast 8 characters")
            .max(8, "Must have atmost 8 characters")
            .required("Must be filled"),
    })

    return (
        <Formik
            initialValues={{ promoCode: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(false)
                if (values.promoCode.toLowerCase() == promoValue) {
                    dispatch(setDiscount(50))
                    setSubmitting(true)
                }
            }}
        >
            {({ values, errors, handleChange, touched, handleSubmit, handleBlur, isSubmitting }) => (
                <form onSubmit={handleSubmit} autoComplete="off">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="enter promo code"
                        id='promoCode'
                        onChange={handleChange}
                        value={values.promoCode}
                        onBlur={handleBlur}
                    />
                    <Error touched={touched.promoCode} message={errors.promoCode}/>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                    >
                        Apply
                    </button>
                </form>
            )}
        </Formik>
    )
}

export default Form