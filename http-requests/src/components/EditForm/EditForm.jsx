import React from "react";
import { Formik, Form, Field } from "formik";

// import styles from "./EditForm.module.css";

const EditForm = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div>
      <h2>Введите задачу</h2>
      <Formik
        initialValues={{
          title: "",
          link: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <Field type="text" name="title" />
              <Field type="text" name="link" />
              <button type="submit" disabled={isSubmitting}>
                Отправить
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditForm;
