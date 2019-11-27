package test.java;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

import addToCart.impl.Menu;
 
class MenuTest {
 
    @Test
    void getMenus() {
        Menu m1 = new Menu(200, "breakfast", 124);
        Menu m2 = new Menu(201, "lunch", 124);
        Menu[] menus = new Menu[]{m1,m2};
        assertEquals(m1.getName(), "breakfast");
        assertEquals(m1.getId(), 200);
        assertEquals(m1.getRestaurantId(), 124);
        assertEquals(menus.length, 2);
    }
}