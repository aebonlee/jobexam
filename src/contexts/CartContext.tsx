import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { PLANS } from '../config/site';

interface CartItem {
  id: string;
  label: string;
  price: number;
  days: number | null;
}

interface CartContextType {
  items: CartItem[];
  addItem: (planId: string) => void;
  removeItem: (planId: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const STORAGE_KEY = 'jobexam_cart';
const CartContext = createContext<CartContextType | null>(null);

function loadCart(): CartItem[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (planId: string) => {
    // 이미 같은 플랜이 있으면 추가하지 않음
    if (items.find(i => i.id === planId)) return;
    const plan = PLANS.find(p => p.id === planId);
    if (!plan) return;
    setItems(prev => [...prev, { id: plan.id, label: plan.label, price: plan.price, days: plan.days ?? null }]);
  };

  const removeItem = (planId: string) => {
    setItems(prev => prev.filter(i => i.id !== planId));
  };

  const clearCart = () => {
    setItems([]);
    sessionStorage.removeItem(STORAGE_KEY);
  };

  const cartTotal = items.reduce((sum, i) => sum + i.price, 0);
  const cartCount = items.length;

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
