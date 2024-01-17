import React, { useEffect, useRef } from 'react';

const ShopifyBuyButton = () => {
  const scriptLoaded = useRef(false);
  const scriptLoading = useRef(false);

  useEffect(() => {
    if (!scriptLoaded.current && !scriptLoading.current) {
      scriptLoading.current = true;

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

      script.onload = () => {
        scriptLoaded.current = true;
        scriptLoading.current = false;

        const client = window.ShopifyBuy.buildClient({
          domain: '7f61b6.myshopify.com',
          storefrontAccessToken: '28f535975af81818e8db378aae7568e3',
        });

        if (!document.getElementById('product-component-1705415773325').hasChildNodes()) {
          const ui = window.ShopifyBuy.UI;
          ui.onReady(client).then((ui) => {
            //ui.clear();
            ui.createComponent('product', {
              id: '8937192685880',
              node: document.getElementById('product-component-1705415773325'),
              moneyFormat: '%24%7B%7Bamount%7D%7D',
              options: {
                "product": {
                  "styles": {
                    "product": {
                      "": {
                        "max-width": "100%",
                        "margin-left": "0",
                        "margin-bottom": "50px",
                        "overflow": "scroll"
                      },
                      "text-align": "left"
                    },
                    "title": {
                      "font-size": "26px",
                      "color": "white"
                    },
                    "button": {
                      "border-radius": "4px"
                    },
                    "price": {
                      "font-size": "18px"
                    },
                    "compareAt": {
                      "font-size": "15.299999999999999px"
                    },
                    "unitPrice": {
                      "font-size": "15.299999999999999px"
                    },

                    "img": {
                      "max-width": "100%", // Adjust the width as needed
                      "max-height": "400px", // Adjust the height as needed
                    },

                    "description": {
                      "background-color": "#ffffff", // White background color
                     // Add padding as needed
                      "border": "1px solid #e0e0e0", // Add border as needed
                      "border-radius": "4px", // Add border-radius as needed
                      "overflow":"auto"
                      
                    }
                  },
                  "layout": "horizontal",
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "description": true
                  },
                  "width": "100%",
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true,
                    "button": false,
                    "buttonWithQuantity": true
                  },
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    "button": {
                      "border-radius": "4px"
                    },
                    "title": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "bold",
                      "font-size": "26px",
                      "color": "#4c4c4c"
                    },
                    "price": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "18px",
                      "color": "#4c4c4c"
                    },
                    "compareAt": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "15.299999999999999px",
                      "color": "#4c4c4c"
                    },
                    "unitPrice": {
                      "font-family": "Helvetica Neue, sans-serif",
                      "font-weight": "normal",
                      "font-size": "15.299999999999999px",
                      "color": "#4c4c4c"
                    }
                  },
                  "text": {
                    "button": "Add to cart"
                  }
                },
                "option": {},
                "cart": {
                  "styles": {
                    "button": {
                      "border-radius": "4px"
                    }
                  },
                  "text": {
                    "total": "Subtotal",
                    "button": "Checkout"
                  }
                },
                "toggle": {}
              }
            });
          });
        }
      };

      document.head.appendChild(script);

      return () => {
        // Cleanup when the component is unmounted
        document.head.removeChild(script);
      };
    }
  }, []);

  return <div id='product-component-1705415773325'></div>;
};

export default ShopifyBuyButton;
