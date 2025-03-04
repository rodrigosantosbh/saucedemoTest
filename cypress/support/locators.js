const locators = {
  
    HOME: 
    {
      userNameImput: '[data-test="username"]', 
      passwordImput: '[data-test="password"]',
      loginButton: '[data-test="login-button"]',
      sideMenuButton: '#react-burger-menu-btn',
      logoutButton: '[data-test="logout-sidebar-link"]'
    },

    PRODUTOS:
    {
      notificationIcon: '[data-test="shopping-cart-badge"]',
      cart: '[data-test="shopping-cart-link"]',
      checkoutButton: '[data-test="checkout"]',
      firstNameImput: '[data-test="firstName"]',
      lastNameImput: '[data-test="lastName"]',
      zipCodeImput: '[data-test="postalCode"]',
      continueButton: '[data-test="continue"]',
      finishCheckout: '[data-test="finish"]',
      
    },
  };
  
  export default locators;
  