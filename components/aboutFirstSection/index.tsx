import image from "../../public/abuotBack.jpg";

function AboutFistSection() {
  return (
    <section
      className=" min-h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/71/1b/3e/711b3edbd2d17734549705a2a54a7d50.jpg')",
      }}
    >
      <div
        className="px-4 flex flex-col justify-center items-center text-center min-h-screen w-full"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0,0, 0, 0.8),  rgba(0,0, 0, 0.7))",
        }}
      >
        <div
          className="max-w-6xl p-10 mx-auto text-center rounded-3xl"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
        >
          <h1 className="text-5xl font-bold mb-8">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Welcome to <span className="text-yellow-400">SipSpot</span>, where
            every cup tells a story and every sip is a discovery.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            It&apos;s a place where flavor meets friendship.
            <span className="text-yellow-400">SipSpot</span>, founded on March
            15, 2024, by Gayane Harutyunyan and Hovhannes Khachatryan, is the
            creation of two enthusiasts in search of something extraordinary. As
            we like to say, &quot;Good days start with great coffee,&quot; and
            here at
            <span className="text-yellow-400"> SipSpot</span>, we&apos;re
            dedicated to making every moment count.
          </p>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Find your new favorite spot to connect. Whether you`&apos;re
            catching up with friends or diving into a good book, our cozy
            corners and aromatic brews await you.
          </p>
          <p>
            We believe
            <span className="text-yellow-400"> SipSpot</span> will warmly find
            its way into the hearts of coffee enthusiasts everywhere.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutFistSection;
