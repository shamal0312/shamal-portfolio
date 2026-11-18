
"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || data.message || "Something went wrong."
        );
      }

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="contact-page">
      <div className="contact-wrapper">

        {/* HEADING */}
        <div className="contact-heading">
          <p className="section-label">CONTACT</p>

          <h1>Let's work together.</h1>

          <p className="contact-intro">
            I'm open to internships, junior developer opportunities,
            freelance work, and collaborations. Feel free to get in touch.
          </p>
        </div>

        <div className="contact-grid">

          {/* LEFT SIDE - CONTACT INFORMATION */}
          <div className="contact-info">

            <div className="contact-item">
              <span>NAME</span>
              <p>Shamal Kawya</p>
            </div>

            <div className="contact-item">
              <span>EMAIL</span>

              <a href="mailto:shamal.kawya2004@gmail.com">
                shamal.kawya2004@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>PHONE</span>

              <a href="tel:+94767924381">
                +94 76 792 4381
              </a>
            </div>

            <div className="contact-item">
              <span>LOCATION</span>
              <p>Kadawatha, Sri Lanka</p>
            </div>

            <div className="contact-item">
              <span>LINKEDIN</span>

              <a
                href="https://www.linkedin.com/in/shamal-kawya-339107305/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn Profile ↗
              </a>
            </div>

            <div className="contact-item">
              <span>GITHUB</span>

              <a
                href="https://github.com/shamal0312"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile ↗
              </a>
            </div>

            <div className="contact-item">
              <span>AVAILABILITY</span>

              <p className="contact-available">
                ● Open to Opportunities
              </p>
            </div>

            <div className="contact-item">
              <span>CV</span>

              <a
                href="/Shamal-Kawya-CV.pdf"
                download
                className="cv-download"
              >
                Download My CV ↓
              </a>
            </div>

          </div>

          {/* RIGHT SIDE - CONTACT FORM */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <h2>Send me a message.</h2>

            <p className="form-intro">
              Have an opportunity or want to discuss a project? Send me a
              message.
            </p>

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="send-button"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="form-status" role="status">
                {status}
              </p>
            )}

          </form>

        </div>
      </div>
    </main>
  );
}