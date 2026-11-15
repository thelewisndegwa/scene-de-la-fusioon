import { FormEvent, useState } from "react";
import { contact, serviceOptions, whatsappLink } from "../content";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  service: "",
  details: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Please enter a phone number we can reach.";
  }
  if (!values.service) {
    errors.service = "Please choose a service.";
  }
  if (values.details.trim().length < 12) {
    errors.details = "Please share a little about the event or campaign.";
  }
  return errors;
}

function enquiryWhatsapp(values: Fields) {
  const message = [
    "Hello Scène de la Fusion, I would like to enquire.",
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Service: ${values.service}`,
    "",
    values.details.trim(),
  ].join("\n");
  return whatsappLink(message);
}

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "whatsapp">("idle");
  const [bot, setBot] = useState("");

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = (Object.keys(nextErrors) as (keyof Fields)[])[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      setStatus("idle");
      return;
    }
    if (bot.trim()) return;

    const url = enquiryWhatsapp(values);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) window.location.href = url;
    setStatus("whatsapp");
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__orb contact__orb--a" aria-hidden="true" />
      <div className="contact__orb contact__orb--b" aria-hidden="true" />
      <div className="wrap contact__inner">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Planning something unforgettable?</h2>
        <p className="contact__sub">Let's create it together.</p>

        <dl className="channels">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={contact.mailto}>{contact.email}</a>
            </dd>
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                {contact.instagramHandle}
              </a>
            </dd>
          </div>
          <div>
            <dt>WhatsApp</dt>
            <dd>
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                {contact.phoneDisplay}
              </a>
            </dd>
          </div>
        </dl>

        <div className="contact__actions">
          <a className="btn btn--solid" href={contact.mailto}>
            Send an email
          </a>
          <a
            className="btn btn--line"
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a
            className="btn btn--line"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <form className="enquiry" noValidate onSubmit={onSubmit}>
          <p className="enquiry__trap">
            <label>
              Do not fill this in
              <input
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
                value={bot}
                onChange={(event) => setBot(event.target.value)}
              />
            </label>
          </p>

          <div className="enquiry__head">
            <h3>Send an enquiry</h3>
            <p>
              Tell us what you are planning. This opens WhatsApp with your note for{" "}
              {contact.phoneDisplay}.
            </p>
          </div>

          <div className="enquiry__grid">
            <Field
              id="name"
              label="Full name"
              error={errors.name}
              value={values.name}
              autoComplete="name"
              onChange={(value) => update("name", value)}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              error={errors.email}
              value={values.email}
              autoComplete="email"
              onChange={(value) => update("email", value)}
            />
            <Field
              id="phone"
              label="Phone"
              type="tel"
              error={errors.phone}
              value={values.phone}
              autoComplete="tel"
              onChange={(value) => update("phone", value)}
            />
            <div className={`field${errors.service ? " is-invalid" : ""}`}>
              <label htmlFor="service">Service required</label>
              <select
                id="service"
                name="service"
                value={values.service}
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? "service-error" : undefined}
                onChange={(event) => update("service", event.target.value)}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.service ? (
                <p id="service-error" className="field__error">
                  {errors.service}
                </p>
              ) : null}
            </div>
            <div className="field field--wide">
              <label htmlFor="details">Event details</label>
              <textarea
                id="details"
                name="details"
                rows={5}
                value={values.details}
                aria-invalid={Boolean(errors.details)}
                aria-describedby={errors.details ? "details-error" : undefined}
                onChange={(event) => update("details", event.target.value)}
              />
              {errors.details ? (
                <p id="details-error" className="field__error">
                  {errors.details}
                </p>
              ) : null}
            </div>
          </div>

          <div className="enquiry__foot">
            <button className="btn btn--solid" type="submit">
              Send on WhatsApp
            </button>
            <p role="status" className="enquiry__status">
              {status === "whatsapp"
                ? `WhatsApp should open with this enquiry for ${contact.phoneDisplay}. Send the message there to reach us.`
                : null}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: keyof Fields;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className={`field${error ? " is-invalid" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? (
        <p id={`${id}-error`} className="field__error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
