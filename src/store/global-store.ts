import { reactive } from "vue";
import { type Product } from "../types/types.ts";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: Map<string, CartItem>;
}

export const store = reactive<CartState>({
  items: new Map(),
});

export const addProduct = (product: Product) => {
  const item = store.items.get(product.slug);

  if (item) {
    item.quantity += 1;
  } else {
    store.items.set(product.slug, {
      product,
      quantity: 1,
    });
  }
};

export const increaseQuantity = (id: string) => {
  const item = store.items.get(id);

  if (item) {
    item.quantity += 1;
  }
};

export const decreaseQuantity = (id: string) => {
  const item = store.items.get(id);

  if (item) {
    item.quantity -= 1;

    if (item.quantity <= 0) {
      store.items.delete(id);
    }
  }
};
