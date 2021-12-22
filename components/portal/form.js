import { useState } from "react";
import { Formik, Form, useField } from "formik";
import Arrow from "../../public/arrow.svg";
import { Title, Subtitle, Prose } from "@components/text";
import Section from "@components/section";

export default function FormComponent({ content, fields, submitCode }) {
  return (
    <Section>
      <FormElement content={content} fields={fields} submitCode={submitCode} />
    </Section>
  );
}

function FormElement({ content, fields, submitCode }) {
  const [status, setStatus] = useState(null);

  let initialValues = {};

  Object.keys(fields).forEach((key) => {
    initialValues[key] = fields[key].default;
  });

  if (status !== null) {
    return status ? (
      <div className="border-2 border-gray-800 shadow rounded px-10 py-10 text-center text-lg tracking-wider text-white text-opacity-80">
        Lomake lähetetty onnistuneesti!
      </div>
    ) : (
      <div className="border-2 border-gray-800 shadow rounded px-10 py-10 text-center text-lg tracking-wider text-white text-opacity-80">
        Lomakkeen lähetys epäonnistui! Lataa sivu uudelleen ja kokeile
        uudestaan. Jos ongelma ei ratkea, ota yhteyttä!
      </div>
    );
  }

  return (
    <div className="border-2 border-gray-800 shadow rounded p-14">
      <div className="mb-12">
        <Subtitle>{content.subtitle}</Subtitle>
        <Title>{content.title}</Title>
        <Prose whitespacepreline>{`${content.content}`}</Prose>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          for (let key in values) {
            if (values[key] === "") return;
          }

          const response = await fetch(`/api/submit/${submitCode}`, {
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });

          if (response.status === 200) {
            setStatus(true);
          } else {
            setStatus(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {Object.keys(fields).map((key) => (
              <InputElement
                key={key}
                name={key}
                id={key}
                label={key}
                placeholder={fields[key].placeholder}
                help={fields[key].help}
                type={fields[key].type}
              />
            ))}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`py-3 px-7 transition rounded tracking-wider text-lg text-center flex-grow 
                    ${
                      isSubmitting
                        ? "bg-gray-500 cursor-not-allowed"
                        : "group bg-indigo-500 hover:bg-indigo-700"
                    } 
                `}
              >
                <span className="flex items-center justify-center">
                  Lähetä lomake
                  <Arrow className="transition transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </Form>
        )}
        {}
      </Formik>
    </div>
  );
}

function InputElement({ label, help, ...props }) {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocused] = useState(false);
  const handleFocus = () => setDidFocused(true);
  if (field.value.length < 1) {
    meta.error = true;
  }
  return (
    <div className="grid my-6">
      <div className="flex justify-between">
        <label className="text-lg tracking-wider">{label}</label>
        {didFocus &&
          (field.value.length > 0 ? (
            <p className="text-green-500">✓</p>
          ) : (
            <p className="text-red-700">Pakollinen</p>
          ))}
      </div>
      <input
        {...props}
        {...field}
        onFocus={handleFocus}
        className={`py-2 px-3 my-1 rounded bg-gray-800 shadow tracking-wider outline-none transition ring-0 focus:ring-blue-500 ${
          didFocus
            ? field.value.length > 0
              ? "ring-2 ring-green-500"
              : "ring-2 ring-red-700"
            : ""
        }`}
      />
      {help && <p className="text-white text-sm text-opacity-80">{help}</p>}
    </div>
  );
}
