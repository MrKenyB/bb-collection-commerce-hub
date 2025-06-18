
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
  color?: string;
}

export class CartManager {
  private static instance: CartManager;
  private cart: CartItem[] = [];
  private listeners: ((cart: CartItem[]) => void)[] = [];

  static getInstance(): CartManager {
    if (!CartManager.instance) {
      CartManager.instance = new CartManager();
    }
    return CartManager.instance;
  }

  addItem(item: Omit<CartItem, 'quantity'>, quantity: number = 1): void {
    const existingItem = this.cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ ...item, quantity });
    }
    this.notifyListeners();
    console.log(`Added ${item.name} to cart. Total items: ${this.getTotalItems()}`);
  }

  removeItem(id: number): void {
    this.cart = this.cart.filter(item => item.id !== id);
    this.notifyListeners();
  }

  updateQuantity(id: number, quantity: number): void {
    const item = this.cart.find(i => i.id === id);
    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        this.removeItem(id);
      } else {
        this.notifyListeners();
      }
    }
  }

  getCart(): CartItem[] {
    return [...this.cart];
  }

  getTotalItems(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  clearCart(): void {
    this.cart = [];
    this.notifyListeners();
  }

  subscribe(listener: (cart: CartItem[]) => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    this.listeners.forEach(listener => listener(this.cart));
  }
}
