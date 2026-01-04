import React, { useEffect } from 'react';

const ShopSection: React.FC = () => {
  useEffect(() => {
    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const loadScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    };

    const ShopifyBuyInit = () => {
      // @ts-ignore
      const client = window.ShopifyBuy.buildClient({
        domain: '00ty0p-cj.myshopify.com',
        storefrontAccessToken: '1e2844b703973fc3a1bd57a40434496f',
      });
      // @ts-ignore
      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: '10183525957816',
          node: document.getElementById('product-component-1767504989972'),
          moneyFormat: 'Rs.%20%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                },
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "font-weight": "bold",
                  "color": "#27e917",
                  ":hover": {
                    "color": "#27e917",
                    "background-color": "#463d49"
                  },
                  "background-color": "#29242b",
                  ":focus": {
                    "background-color": "#463d49"
                  },
                  "border-radius": "24px",
                  "padding-left": "25px",
                  "padding-right": "25px"
                }
              },
              "text": {
                "button": "Add to cart"
              },
              "googleFonts": [
                "Quantico"
              ]
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
                  "font-family": "Quantico, sans-serif",
                  "font-weight": "bold",
                  "color": "#27e917",
                  ":hover": {
                    "color": "#27e917",
                    "background-color": "#463d49"
                  },
                  "background-color": "#29242b",
                  ":focus": {
                    "background-color": "#463d49"
                  },
                  "border-radius": "24px",
                  "padding-left": "25px",
                  "padding-right": "25px"
                }
              },
              "googleFonts": [
                "Quantico"
              ],
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "styles": {
                "button": {
                  "font-family": "Quantico, sans-serif",
                  "font-weight": "bold",
                  "color": "#27e917",
                  ":hover": {
                    "color": "#27e917",
                    "background-color": "#463d49"
                  },
                  "background-color": "#29242b",
                  ":focus": {
                    "background-color": "#463d49"
                  },
                  "border-radius": "24px"
                }
              },
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "googleFonts": [
                "Quantico"
              ]
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "font-family": "Quantico, sans-serif",
                  "font-weight": "bold",
                  "background-color": "#29242b",
                  ":hover": {
                    "background-color": "#463d49"
                  },
                  ":focus": {
                    "background-color": "#463d49"
                  }
                },
                "count": {
                  "color": "#27e917",
                  ":hover": {
                    "color": "#27e917"
                  }
                },
                "iconPath": {
                  "fill": "#27e917"
                }
              },
              "googleFonts": [
                "Quantico"
              ]
            }
          },
        });
      });
    };

    // @ts-ignore
    if (window.ShopifyBuy) {
      // @ts-ignore
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
  }, []);

  return (
    <section id="shop" className="py-32 px-6 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">The AI Toolkit Store</h2>
        <p className="text-blue-200/60 mb-16">Supercharge your workflow with premium prompts and assets.</p>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 inline-block min-w-[300px]">
          <div id='product-component-1767504989972'></div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;