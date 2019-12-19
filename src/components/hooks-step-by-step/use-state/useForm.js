 import { useState } from "react";

// this hooks has non ui associate with it  is juste the logical 
// we can export it for use it in evry other component
export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    }
  ];
};
