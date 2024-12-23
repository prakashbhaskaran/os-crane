import * as Yup from "yup";
const businessKeys = [
  {
    label: "Enter your name",
    name: "name",
    type: "text",
    inputType: "text",
  },
  {
    label: "Enter your email address",
    name: "email",
    type: "text",
    inputType: "text",
  },
  {
    label: "Enter WhatsApp Number",
    name: "wnumber",
    type: "tel",
    inputType: "text",
  },
  {
    label: "Enter your queries",
    name: "description",
    type: "text",
    inputType: "textArea",
  },
];
const businessSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  description: Yup.string().required(),
  wnumber: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      "Invalid Phone Number"
    )
    .required(),
});
const businessFormValues = {
  email: "",
  description: "",
  name: "",
  wnumber: "",
};
export { businessSchema, businessKeys, businessFormValues };
