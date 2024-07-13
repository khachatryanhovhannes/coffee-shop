function AboutSectionSection() {
  return (
    <section className="py-16   min-h-screen px-4 flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch with Us</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Have a question, suggestion, or just want to say hello? We`&apos;d
          love to hear from you! Reach out to us:
        </p>
        <div className="text-lg space-y-4">
          <div>
            <h3 className="text-2xl font-bold">Call Us</h3>
            <p>
              Our friendly staff are ready to assist you with any inquiries or
              reservations.
            </p>
            <p>
              Phone number:
              <a href="tel:+37499123456" className="text-yellow-400">
                +374 99 123456
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Email Us</h3>
            <p>
              Whether it`&apos;s feedback or a partnership opportunity,
              we`&apos;re here to respond promptly.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:info@sipspot.com" className="text-yellow-400">
                info@sipspot.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionSection;
