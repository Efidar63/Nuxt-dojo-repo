<template>
    <main class="home-container">
      <div class="hero">
        <h2>Welcome to Our Store</h2>
        <p class="description">
          Your one-stop destination for everything you love, delivered straight to your door.
        </p>
        <NuxtLink to="/products" class="shop-button">Shop Now</NuxtLink>
      </div>
    </main>
  </template>

  <script setup>
  </script>

  <style scoped>
  .home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Ensure full viewport height */
    background-color: #f8f8f8; /* Light background */
  }

  .hero {
    text-align: center;
    max-width: 800px;
    padding: 40px;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 48px;
    color: #333;
  }

  .description {
    margin: 20px 0 30px;
    font-size: 18px;
    line-height: 1.6;
    color: #666;
  }

  .shop-button {
    padding: 12px 24px;
    font-size: 16px;
    background-color: #328909; /* Example button color */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .shop-button:hover {
    background-color: #74ad7d;
  }
  </style>
