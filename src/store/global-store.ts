import { reactive } from "vue";
import { type Product } from "../types/types.ts";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: Map<string, CartItem>;
}

// Definowanie reactywnego stora do przechowywania produktow w koszyku

export const store = reactive<CartState>({
  items: new Map(),
});

// Funkcja do dodawania produktow

export const addProduct = (product: Product) => {
  store.items.set(product.slug, {
    product,
    quantity: 1,
  });
};

// Funkcja do zwiększenia liczby produktow

export const increaseQuantity = (id: string) => {
  const item = store.items.get(id);

  if (item) {
    item.quantity += 1;
  }
};

// Funkcja do zmniejszenia  liczby produktow lub do całkowitego usunięcia

export const decreaseQuantity = (id: string) => {
  const item = store.items.get(id);

  if (item) {
    item.quantity -= 1;

    if (item.quantity <= 0) {
      store.items.delete(id);
    }
  }
};
