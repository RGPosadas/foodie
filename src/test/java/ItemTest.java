package test.java;

import org.junit.jupiter.api.Test;

import addToCart.impl.Item;

import static org.junit.jupiter.api.Assertions.assertEquals;
 
class ItemTest {
 
    @Test
    void getItems() {
        Item i1 = new Item(300, "Hamburger", 5.99, "Bun and Patty");
        Item i2 = new Item(301, "Fries", 3.99, "Comes in different formats");
        Item[] items = new Item[]{i1,i2};
        assertEquals(i1.getId(), 300);
        assertEquals(i1.getName(), "Hamburger");
        assertEquals(i1.getPrice(), 5.99);
        assertEquals(i1.getDescription(), "Bun and Patty");
        assertEquals(items.length, 2);
    }
}