// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Neonacho",
  description:
    "Privacy policy for Neonacho. We explain what we collect, how we use it, and your choices.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 prose prose-neutral">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: August 8, 2025</em></p>

      <p>
        Neonacho (“we”, “us”, “our”) respects your privacy. This policy explains
        what we collect, how we use it, and the choices you have.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Account and contact information you provide.</li>
        <li>
          Operational data required to post to social platforms that you
          explicitly connect (e.g., Instagram account ID/tokens).
        </li>
        <li>Basic analytics (aggregated usage). We do not sell your data.</li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>To operate the site and provide requested features.</li>
        <li>To post content you authorize to connected services.</li>
        <li>To improve reliability, security, and performance.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell personal data. We may share with service providers who
        help us run the site (e.g., hosting/CI) under confidentiality agreements,
        or when required by law.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain data only as long as necessary for the purposes above or as
        required by law. You can request deletion at any time.
      </p>

      <h2>Your Choices</h2>
      <ul>
        <li>Contact us to access, update, or delete your data.</li>
        <li>Disconnect third-party integrations you no longer use.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        Questions? Email: <a href="mailto:admin@neonacho.com">admin@neonacho.com</a>
      </p>
    </main>
  );
}
