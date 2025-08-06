import React from 'react';

const About = () => {
  return (
    <section className="about-section" style={{ padding: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1>About Us</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
        Welcome to <strong>AK & Cocktails</strong> – your go-to destination for discovering delicious and refreshing cocktail recipes!
        Whether you're a seasoned mixologist or just getting started, we've got something for everyone.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
        Our mission is to make cocktail-making fun, accessible, and inspiring. Browse classic recipes, uncover hidden gems, or try your hand
        at something new. From bold flavors to smooth sips, every drink tells a story — and we're here to help you pour yours.
      </p>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
        Cheers, and happy mixing! 🍸
      </p>
       <img
        src="https://images.unsplash.com/photo-1607622750671-6cd9a99eabd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvY2t0YWlsfGVufDB8fDB8fHww"
        alt="Cocktail glass"
        style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          borderRadius: '12px',
          margin: '20px 0',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}
      />
    </section>
  );
};

export default About;
