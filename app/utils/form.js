const onChangeHandler = (e, inputType, name, setValues, dropDownValue) => {
  if (inputType === "text") {
    setValues(name, e.target.value);
  } else if (inputType === "autoComplete") {
    setValues(name, dropDownValue?.id);
  } else {
    setValues(name, e.target.value);
  }
};

export { onChangeHandler };
