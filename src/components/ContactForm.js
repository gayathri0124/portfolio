"use client";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:gayathrireddykalthireddy@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="cf-name" className="form-label">Name</label>
        <input
          id="cf-name"
          type="text"
          name="name"
          className="form-input"
          placeholder="Your name"
          autoComplete="name"
        />
      </div>

      <div className="form-field">
        <label htmlFor="cf-email" className="form-label">Email</label>
        <input
          id="cf-email"
          type="email"
          name="email"
          className="form-input"
          placeholder="you@email.com"
          autoComplete="email"
        />
      </div>

      <div className="form-field">
        <label htmlFor="cf-message" className="form-label">Message</label>
        <textarea
          id="cf-message"
          name="message"
          className="form-input form-textarea"
          rows="5"
          placeholder="Tell me about your project..."
        />
      </div>

      <button type="submit" className="submit-btn">
        Send Message →
      </button>
    </form>
  );
}
