import { useState } from "react"
import { Formik, Form, Field, ErrorMessage, useField  } from "formik"
import * as Yup from "yup"
import ReCAPTCHA from "react-google-recaptcha"

import { useRouter } from "next/router"
import Head from "next/head"
import Link from "next/link"

import Arrow from "../../public/arrow.svg"

import PageWrapper from "@components/pageWrapper"
import Section from "@components/section"
import Title from "@components/title"
import Subtitle from "@components/subtitle"
import Prose from "@components/prose"
import OpenNewTabButton from "@components/openNewTabButton"

import Footer from "@components/footer"

export default function Sitoumus() {
  return (
    <PageWrapper>
    <Head>
      <title>Osakentisitoumus - Evon Capital</title>
    </Head>
      <Section>
        <Link href="/osakeanti#content" passHref>
          <button className="flex items-center text-indigo-500 hover:text-indigo-700 transition my-5 text-lg tracking-wider">
            <Arrow className="fill-current transform rotate-180"/>
            Takaisin
          </button>
        </Link>
        <Title>
          Sitova osakeantisitoumus
        </Title>
        <Prose large>
          Täytä oheinen lomake erittäin huolellisesti. Täyttämällä lomakkeen suostut 
          {" "} <Link href="/tietosuojaseloste.pdf" passHref>
            <a target="_blank" className="transition text-indigo-500 hover:text-indigo-700">
              {"tietosuojaselosteemme"}
            </a>
          </Link> {" "}
          mukaiseen tietojesi käsittelyyn. Täyttämällä lomakkeen myös vakuutat tietojesi olevan oikein ja ajantasaisia.
        </Prose>

        <FormComponent />

      </Section>
      <Footer />
    </PageWrapper>
  )
}

function FormComponent() {
  const router = useRouter();
  const phoneRegex = /^(\+\d{3})?[\s.-]?\(?\d{2,3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return (
    <div className="mt-12">
      <Formik
        initialValues={{ name: "", email: "", phone: "", streetaddress: "", postalcode: "", city: "", stock: "", acceptedterms: false, captcha: null,}}

        onSubmit={async (values, { setSubmitting }) => {
          const response = await fetch("/api/submitform", {
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
          })

          if (response.status === 200) {
            router.push("/osakeanti/success");
          } else {
            router.push("/osakeanti/error")
          }

        }}
        
        validationSchema={Yup.object({
          name: Yup.string()
            .min(8, "Kirjoita koko nimesi")
            .required("Pakollinen"),
          email: Yup.string()
            .email("Virheellinen sähköposti")
            .required("Pakollinen"),
          phone: Yup.string()
            .matches(phoneRegex, "Virheellinen puhelinnumero")
            .required("Pakollinen"),
          acceptedterms: Yup.boolean()
            .oneOf([true], "Ehdot on hyväksyttävä")
            .required("Pakollinen"),
          streetaddress: Yup.string()
            .required("Pakollinen"),
          postalcode: Yup.string()
            .required("Pakollinen"),
          city: Yup.string()
            .required("Pakollinen"),
          stock: Yup.number()
            .typeError("Lukumäärän tulee olla numero")
            .min(1, "Osakkeita tulee merkitä vähintään yksi")
            .max(100000, "Jos haluat merkitä yli 100 000 osaketta, ota yhteyttä")
            .required("Pakollinen"),
          captcha: Yup.string()
            .typeError("Pakollinen")
            .required("Pakollinen")
        })}
      >
        {({ isSubmitting, setFieldValue, errors }) => (
          <Form>
            <InputFieldWithFeedback label="Koko nimesi" id="name" name="name" placeholder="Matti Mikko Meikäläinen" helpText="Muodossa kaikki etunimet sukunimi" type="text" autoFocus/>
            <InputFieldWithFeedback label="Sähköposti" id="email" name="email" placeholder="matti@meikäläinen.fi" helpText="" type="email" />
            <InputFieldWithFeedback label="Puhelinnumero" id="phone" name="phone" placeholder="0XX 1234567" helpText="Puhelinnumero ilman maakoodia, muotoa 0XX 1234567" type="tel" />   

            <AddressInputElement />

            <StockSelectionElement />

            <AcceptTermsElement />

            <CaptchaElement setFieldValue={setFieldValue}/>

            <SubmitResetButtons isSubmitting={isSubmitting} errors={errors}/>
          </Form>
        )}
      </Formik>
    </div>
  )
}

function CaptchaElement({ setFieldValue }) {
  return (
    <div className="flex flex-wrap items-center gap-5">
      <ReCAPTCHA sitekey="6LddGPwbAAAAAOIcVYk9XtQ3APmdEeU7eAOfl30q" onChange={(value) => { setFieldValue("captcha", value) }} theme="dark" className="mb-5"/>
      <ErrorMessage name="captcha" component="p" className="text-red-700 text-lg tracking-wider" />
    </div>
  )
}

function AddressInputElement() {
  return (
    <div className="my-12">
      <InputFieldWithFeedback noGap label="Lähiosoite" id="street-address" name="streetaddress" type="text"/>
      <span className="flex flex-wrap justify-between my-4 gap-4 md:gap-10">
        <InputFieldWithFeedback number noGap fill label="Postinumero" id="postal-code" name="postalcode" type="number" />
        <InputFieldWithFeedback noGap fill label="Kaupunki" id="city" name="city" type="text" autoComplete="home city"/>
      </span>
    </div> 
  )
}

function StockSelectionElement() {
  return (
    <div className="flex flex-wrap gap-5 items-center border-2 border-gray-700 rounded px-4 md:px-10 py-3 md:py-5">
      <div>
        <Subtitle>Osakeanti</Subtitle>
        <Prose large>
          Kuinka monta osaketta olet merkitsemässä? Osakkeita on merkittävä vähintään yksi (1) kappale. 
          Osakkeiden merkintähinta on yhtiökokouksen päätöksen mukaisesti 0,30 EUR kappale. Osakkeita tarjotaan merkittäväksi yhteensä miljoona (1 000 000) kappaletta.
        </Prose>
        <Prose large>
        Tällä lomakkeella voi merkitä maksimissaan 100 000 osaketta. Jos haluat merkitä enemmän, <Link href="/contact" passHref><a className="text-indigo-500 hover:text-indigo-700 transition">ota suoraan yhteyttä.</a></Link>
        </Prose>
        <Prose large>Päätös merkitä osakkeita on sitova. Tutustu riskeihin ennen sijoittamista.</Prose>
      </div>
      <div className="flex-grow whitespace-nowrap">
        <InputFieldWithFeedback number label="Osakkeiden lukumäärä" id="stock" name="stock" type="number"/>
      </div>
    </div>
  )
}

function AcceptTermsElement() {
  return (
    <div className="grid items-center my-12">
      <span className="flex items-center gap-4 mb-4 md:mb-0">
        <Field name="acceptedterms" type="checkbox" className="mx-4 md:mx-0"/>
        <span className="grid md:flex items-center gap-3">
          <p className="tracking-wider text-white text-opacity-80 text-sm md:text-base">Olen lukenut, ymmärtänyt ja hyväksyn </p>
          <OpenNewTabButton href="/osakeannin_ehdot.pdf">Osakeannin ehdot</OpenNewTabButton>
        </span>
      </span>
      <ErrorMessage name="acceptedterms" component="p" className="text-red-700 tracking-wider"/>
    </div>
  )
}

function InputFieldWithFeedback({ label, helpText, noGap, fill, number,  ...props }) {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const handleNumberType = Number ? (!!didFocus) : (!!didFocus && field.value.trim().length > 2);
  const showFeedback = handleNumberType || meta.touched;

  return (
    <div className={`${noGap ? "" : "my-6"} ${fill ? "flex-grow" : ""}`}>
      <div className="grid">
        <div className="flex flex-wrap justify-between items-center">
          <label className="text-lg tracking-wider">{label}</label>
          <p className={`transition text-lg tracking-wider whitespace-normal ${meta.error ? "text-red-700" : "text-green-500 text-2xl"}`}>{ showFeedback ? (meta.error ? meta.error : "✓") : null }</p>
        </div>
        <input {...props} {...field} onFocus={handleFocus} className={`py-2 px-3 my-1 rounded bg-gray-800 shadow tracking-wider outline-none ring ring-transparent focus:ring-blue-500 ${showFeedback ? (meta.error ? "ring-red-700" : "ring-green-500") : null}`}/>
        <p className="text-white text-sm text-opacity-80">{helpText}</p>
      </div>
    </div>
  )
}

function SubmitResetButtons({ isSubmitting, errors }) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start items-center gap-7 md:gap-10 mt-5">
      <button type="submit" disabled={isSubmitting} className={`
        py-3 px-7 transition rounded tracking-wider text-lg text-center flex-grow
        ${isSubmitting || !(Object.keys(errors).length === 0) ? "bg-gray-500 cursor-not-allowed" : "group bg-indigo-500 hover:bg-indigo-700"} 
      `}>
        <span className="flex items-center justify-center">
          Lähetä lomake
          <Arrow className="transition transform group-hover:translate-x-1"/>
        </span>
      </button>
      <button type="reset" className="py-2 px-5 bg-gray-800 hover:bg-gray-700 transition rounded tracking-wider border-2 border-gray-700">
        Nollaa lomake
      </button>
    </div>
  )
}