import Link from 'next/link';

export default function Privacy() {
  return (
    <main style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1>🇬🇧 Privacy Policy – 1GooodNews</h1>
      <p><strong>Last updated:</strong> December 20, 2025</p>

      <p>
        The 1GooodNews app – 1 Good News a Day – was designed to provide a simple, positive experience while respecting your privacy.
      </p>

      <h2>📱 Data Collected</h2>
      <p>
        The app does not collect any personally identifiable information (name, email, phone number, etc.).
      </p>

      <h2>🌍 Technical Data</h2>
      <p>
        Some anonymous technical data may be processed automatically to ensure the proper functioning of the app (content loading, displaying good news).
      </p>
      <p>This data can never be used to identify a user.</p>

      <h2>🔔 Notifications</h2>
      <p>
        If the user chooses to enable notifications, they are only used to show one good news story per day.
      </p>
      <p>No personal data is used for advertising purposes.</p>

      <h2>☁️ Third-party Services</h2>
      <p>
        The app uses Supabase as a backend service to store and distribute content (good news stories, images).
      </p>
      <p>Supabase follows current security and privacy standards.</p>

      <h2>🚫 Advertising and Tracking</h2>
      <p>
        The app contains no ads and uses no advertising tracking tools.
      </p>

      <h2>🔄 Changes</h2>
      <p>
        This privacy policy may be updated as needed. Any changes will be published on this page.
      </p>

      <h2>📩 Contact</h2>
      <p>
        For any questions regarding privacy, you can contact us at:
      </p>
      <p><strong>1gooodnews@gmail.com</strong></p>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link
          href="/en"
          style={{
            display: 'inline-block',
            backgroundColor: '#1F6E44',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
