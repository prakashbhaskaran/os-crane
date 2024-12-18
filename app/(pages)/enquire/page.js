"use client";
import AppBox from "@components/material-components/AppBox";
import AppButton from "@components/material-components/AppButton";
import AppText from "@components/material-components/AppText";
import AppContainer from "@components/page-components/AppContainer";
import AppFormElements from "@components/page-components/AppFormElements";
import AppHeader from "@components/page-components/AppHeader";
import AppLink from "@components/page-components/AppLink";
import {
  businessFormValues,
  businessKeys,
  businessSchema,
} from "@constants/businessEnquiry";
import { Alert } from "@mui/material";
import { makePostRequest } from "@utils/api";
import React, { useState } from "react";
import { useMutation } from "react-query";

const BusinessForm = () => {
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    ...businessFormValues,
  });
  const [meta, setMeta] = useState({});
  const { mutate: productForm, isLoading } = useMutation(
    "businessForm",
    (_) => makePostRequest("/api/businessForm", _),

    {
      onSuccess: (res) => {
        setVisible(true);
      },
      onError: (res) => {
        toast.error(
          res.response.data.message
            ? res.response.data.message
            : "Something went wrong. Check your email address"
        );
      },
    }
  );

  const handleSubmit = (values) => {
    productForm(values);
  };
  return (
    <AppContainer>
      <AppBox>
        <AppHeader heading={"BUSINESS ENQUIRY"} />
        <AppBox mt="20px">
          {visible ? (
            <AppBox>
              <Alert sx={{ fontSize: "1rem" }} severity="success">
                Thanks for contacting us. We have received your email. We will
                contact through email in few hours.
              </Alert>
              <AppLink
                href="/services"
                sx={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <AppButton variant="outlined" color="success">
                  Explore Services
                </AppButton>
              </AppLink>
            </AppBox>
          ) : (
            <AppFormElements
              initialValues={formValues}
              validationSchema={businessSchema}
              handleSubmit={handleSubmit}
              formKeys={businessKeys}
              meta={meta}
              cancelLink="/"
              isFormLoading={isLoading}
            />
          )}
        </AppBox>
      </AppBox>
    </AppContainer>
  );
};

export default BusinessForm;
