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
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="you@email.com" />
      </label>
      <label>
        Message
        <textarea name="message" rows="4" placeholder="Tell me about your project..." />
      </label>
      <button type="submit" className="button primary">Send message</button>
    </form>
  );
}
