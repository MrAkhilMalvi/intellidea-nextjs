"use client";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col pt-20">
      {/* Main Content Section */}
      <main className="grow">
        <section id="serve" className="bg-white py-12 px-6 md:px-20">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C466D]">
              Cookie Policy
            </h1>
          </div>

          <div className="max-w-5xl mx-auto text-gray-800 text-base leading-relaxed space-y-6">
            <p>
              This Cookie Policy applies to all websites, applications, and
              branded pages on third-party platforms (such as Facebook and
              YouTube) that are operated by or on behalf of Intellidea. By using
              Intellidea’s sites, you agree to our use of cookies as outlined in
              this policy. If you do not consent, you can adjust your browser
              settings to disable cookies. However, doing so may affect the
              functionality and user experience of our website.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your computer, smartphone,
              or tablet when you visit a website. They typically contain:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The name of the website they originate from</li>
              <li>Their duration (how long they stay on your device)</li>
              <li>A unique identifier for tracking purposes</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              Why Do We Use Cookies?
            </h2>
            <p>At Intellidea, we use cookies to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Improve website functionality and user experience</li>
              <li>Personalize content based on user preferences</li>
              <li>Analyze traffic and optimize website performance</li>
              <li>Enable social media sharing features</li>
            </ul>
            <p>We do not use cookies to personally identify users.</p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              Types of Cookies We Use
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Session Cookies</strong> – Active only while you browse
                our website and deleted when you close your browser.
              </li>
              <li>
                <strong>Persistent Cookies</strong> – Stored on your device for
                a set period to remember preferences and enhance future visits.
              </li>
            </ul>
            <p>
              You can manage or disable cookies through your browser settings,
              but this may limit certain website features.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              Google Analytics & Performance Tracking
            </h2>
            <p>
              We use Google Analytics to monitor website traffic and improve
              usability. These cookies help us analyze user behavior in an
              anonymous manner. Google’s privacy policy can be found at:{" "}
              <a
                href="https://www.google.com/privacy_policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C466D] underline hover:text-[#16304a]"
              >
                www.google.com/privacy_policy.html
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
