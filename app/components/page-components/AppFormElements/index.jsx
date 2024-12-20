import { Form, Formik } from "formik";
import React from "react";
import AppVstack from "@components/material-components/AppVstack";
import AppAutoComplete from "@components/material-components/AppAutoComplete";
import AppInput from "@components/material-components/AppInput";
import AppHstack from "@components/material-components/AppHstack";
import AppButton from "@components/material-components/AppButton";
import { onChangeHandler } from "@utils/form";
import AppLink from "../AppLink";

const AppFormElements = ({
  initialValues,
  validationSchema,
  handleSubmit,
  formKeys,
  isFormLoading = false,
  meta = {},
  cancelLink = "/",
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched, setFieldValue, values, setValues }) => (
        <Form>
          <AppVstack gap="20px">
            {formKeys.map((_, index) => {
              if (_.inputType === "autoComplete") {
                return (
                  <AppAutoComplete
                    disableClearable
                    key={index}
                    label={_.label}
                    disabled={isFormLoading || _.disabled}
                    error={errors[_.name] && touched[_.name]}
                    helperText={errors[_.name]}
                    options={meta?.[_.name] || []}
                    value={
                      meta?.[_.name]?.find(
                        (item) => item?.id === values[_.name]
                      ) || {}
                    }
                    name={_.name}
                    changeHandler={(e, dropDownValue) =>
                      onChangeHandler(
                        e,
                        _?.inputType,
                        _.name,
                        setFieldValue,
                        dropDownValue
                      )
                    }
                  />
                );
              } else if (_.inputType === "textArea") {
                return (
                  <AppInput
                    error={errors[_.name] && touched[_.name]}
                    helperText={errors[_.name]}
                    type={_.type}
                    name={_.name}
                    key={index}
                    disabled={isFormLoading}
                    label={_.label}
                    value={values[_.name] || ""}
                    multiline={true}
                    minRows={6}
                    changeHandler={(e) =>
                      onChangeHandler(e, _?.inputType, _.name, setFieldValue)
                    }
                  />
                );
              } else {
                return (
                  <AppInput
                    error={errors[_.name] && touched[_.name]}
                    helperText={errors[_.name]}
                    type={_.type}
                    name={_.name}
                    key={index}
                    disabled={isFormLoading}
                    label={_.label}
                    value={values[_.name] || ""}
                    slotProps={{
                      input: {
                        inputProps: {
                          min: 0,
                          step: 0.01,
                        },
                      },
                    }}
                    changeHandler={(e) =>
                      onChangeHandler(e, _?.inputType, _.name, setFieldValue)
                    }
                  />
                );
              }
            })}

            <AppHstack gap="10px" justifyContent="end">
              <AppLink href={cancelLink}>
                <AppButton color="error">Cancel</AppButton>
              </AppLink>
              <AppButton
                isLoading={isFormLoading}
                color="teritiary"
                type="submit"
              >
                {isFormLoading ? "Submitting..." : "Submit"}
              </AppButton>
            </AppHstack>
          </AppVstack>
        </Form>
      )}
    </Formik>
  );
};

export default AppFormElements;
