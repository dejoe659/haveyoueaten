const restaurants = [
  { name: "Mama Nkechi's Kitchen", cuisine: "Nigerian · Rice bowls", time: "20–30 min", price: "₦₦", color: "terracotta", featured: true },
  { name: "The Green Bowl", cuisine: "Healthy · Smoothies", time: "15–25 min", price: "₦₦", color: "sage", featured: false },
  { name: "Campus Shawarma", cuisine: "Fast food · Wraps", time: "10–20 min", price: "₦", color: "sun", featured: false },
];

import { CheckoutButtons } from "@/app/components/checkout-buttons";

const categories = ["All meals", "Rice & bowls", "Swallow", "Fast food", "Drinks"];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Have You Eaten home"><span className="brand-mark">HY</span> Have You Eaten</a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#restaurants">Restaurants</a>
          <a href="#how-it-works">How it works</a>
          <a className="admin-link" href="/admin">Admin dashboard <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="pulse-dot" /> Now serving UNN campus</p>
          <h1 id="hero-title">Good food is always <em>worth sharing.</em></h1>
          <p className="hero-text">Order from your favourite local vendors and get a hot, delicious meal delivered right to your lecture hall or hostel.</p>
          <div className="hero-actions"><a className="button button-dark" href="#restaurants">Find a meal <span aria-hidden="true">→</span></a><a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-art" aria-label="A bowl of jollof rice with plantain and egg" role="img">
          <div className="sun-shape" /><div className="plate"><div className="rice" /><div className="plantain" /><div className="egg" /></div><span className="art-label label-one">Made fresh<br /><strong>every day</strong></span><span className="art-label label-two">From ₦1,500<br /><strong>per meal</strong></span>
        </div>
      </section>

      <section className="order-section" id="restaurants" aria-labelledby="restaurants-title">
        <div className="section-heading"><div><p className="eyebrow eyebrow-dark">Your next meal</p><h2 id="restaurants-title">What are you craving?</h2></div><a className="text-link" href="#restaurants">View all <span aria-hidden="true">→</span></a></div>
        <div className="category-row" aria-label="Meal categories">{categories.map((category, index) => <button className={index === 0 ? "category active" : "category"} key={category}>{category}</button>)}</div>
        <div className="restaurant-grid">{restaurants.map((restaurant) => <article className="restaurant-card" key={restaurant.name}><div className={`restaurant-image ${restaurant.color}`}><span className="image-initials">{restaurant.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>{restaurant.featured && <span className="featured-badge">Popular</span>}</div><div className="restaurant-info"><div><h3>{restaurant.name}</h3><p>{restaurant.cuisine}</p></div><span className="price">{restaurant.price}</span></div><div className="restaurant-meta"><span>{restaurant.time}</span><span className="open-status"><i /> Open now</span></div></article>)}</div>
      </section>

      <section className="payment-section" aria-label="Meal pass payment"><CheckoutButtons /></section>

      <section className="steps-section" id="how-it-works" aria-labelledby="steps-title"><div className="steps-intro"><p className="eyebrow eyebrow-dark">Simple by design</p><h2 id="steps-title">From hungry to happy in three steps.</h2></div><div className="steps-grid"><div className="step"><span>01</span><h3>Pick a meal</h3><p>Browse meals from vendors you already love around campus.</p></div><div className="step"><span>02</span><h3>Place your order</h3><p>Tell us where you are and we will handle the rest.</p></div><div className="step"><span>03</span><h3>Eat happy</h3><p>Track your rider and enjoy food that arrives fresh.</p></div></div></section>

      <footer className="site-footer"><a className="brand" href="/"><span className="brand-mark">HY</span> Have You Eaten</a><p>Made for campus life in Nigeria.</p><a href="/admin">Vendor admin <span aria-hidden="true">↗</span></a></footer>
    </main>
  );
}
