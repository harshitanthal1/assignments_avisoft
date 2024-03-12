import React from 'react';

const MainContent = () => {
  return (
    <main>
      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </section>
      <section id="pricing">
        <h2>Pricing</h2>
        <p>Starting from $X per month</p>
        <button>Buy Now</button>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button>Submit</button>
        </form>
      </section>
    </main>
  );
};

export default MainContent;
