import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CART_STORAGE_KEY = 'vish_collection_cart_v1';
const ORDER_STORAGE_KEY = 'vish_collection_last_order_v1';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [lastOrder, setLastOrder] = useState(() => {
    try {
      const saved = localStorage.getItem(ORDER_STORAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cartItems]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast((prev) => (prev && Date.now() - prev.id >= 2700 ? null : prev));
    }, 2800);
  };

  const getCartItemKey = (productId, selectedVariations = {}) => {
    const varString = Object.entries(selectedVariations)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}:${v}`)
      .join('|');
    return varString ? `${productId}__${varString}` : productId;
  };

  const addToCart = (product, quantity = 1, selectedVariations = {}, openDrawer = true) => {
    const defaultVars = {};
    if (product.variations && product.variations.length > 0) {
      product.variations.forEach((v) => {
        defaultVars[v.name] = selectedVariations[v.name] || v.options[0];
      });
    }
    const finalVariations = Object.keys(selectedVariations).length > 0 ? selectedVariations : defaultVars;
    const cartItemKey = getCartItemKey(product.id, finalVariations);

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartItemKey === cartItemKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }
      return [
        ...prev,
        {
          cartItemKey,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          quantity,
          selectedVariations: finalVariations,
        },
      ];
    });

    showToast(`Added "${product.name}" to your bag`);
    if (openDrawer) {
      setIsCartDrawerOpen(true);
    }
  };

  const removeFromCart = (cartItemKey) => {
    setCartItems((prev) => prev.filter((item) => item.cartItemKey !== cartItemKey));
    showToast('Item removed from your bag', 'info');
  };

  const updateQuantity = (cartItemKey, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(cartItemKey);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemKey === cartItemKey ? { ...item, quantity: Math.min(99, newQuantity) } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const saveOrder = (orderDetails) => {
    setLastOrder(orderDetails);
    try {
      localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orderDetails));
    } catch (e) {
      console.error('Failed to save order:', e);
    }
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // Placeholder shipping calculation (editable business rule placeholder)
  const shippingPlaceholder = subtotal === 0 ? 0 : subtotal >= 10000 ? 0 : 650;
  const totalPrice = subtotal + shippingPlaceholder;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        shippingPlaceholder,
        totalPrice,
        isCartDrawerOpen,
        openCartDrawer: () => setIsCartDrawerOpen(true),
        closeCartDrawer: () => setIsCartDrawerOpen(false),
        quickViewProduct,
        openQuickView: (product) => setQuickViewProduct(product),
        closeQuickView: () => setQuickViewProduct(null),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        toast,
        showToast,
        lastOrder,
        saveOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

