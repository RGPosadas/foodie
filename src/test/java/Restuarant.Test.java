package test.java;

import org.junit.jupiter.api.Test;

import addToCart.impl.Restaurant;

import static org.junit.jupiter.api.Assertions.assertEquals;
 
class RestaurantTest {
 
    @Test
    void getRestaurants() {
        Restaurant r1 = new Restaurant(123, "A&W", "1000");
        Restaurant r2 = new Restaurant(124, "Subway", "1001");
        Restaurant[] restaurants = new Restaurant[]{r1,r2};
        assertEquals(r1.getName(), "A&W");
        assertEquals(r1.getId(), 123);
        assertEquals(r1.getAddress(), "1000");
        assertEquals(restaurants.length, 2);
    }
}