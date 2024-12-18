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
});
const businessFormValues = {
  email: "",
  description: "",
  name: "",
};
export { businessSchema, businessKeys, businessFormValues };
