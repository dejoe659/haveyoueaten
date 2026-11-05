export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card" aria-labelledby="hero-title">
        <p className="eyebrow">Have You Eaten</p>
        <h1 id="hero-title">Your campus. Your food. Delivered.</h1>
        <p className="intro">
          Discover trusted food vendors around Nigerian university campuses and get your next meal delivered.
        </p>
        <div className="status-row" role="status">
          <span className="status-dot" aria-hidden="true" />
          Launching at UNN
        </div>
        <nav className="admin-nav" aria-label="Admin navigation">
          <a href="/admin">Admin dashboard</a>
        </nav>
      </section>
    </main>
  );
}
