package test.java;

import org.junit.jupiter.api.Test;

import addToCart.impl.Customer;

import static org.junit.jupiter.api.Assertions.assertEquals;
 
class CustomerTest {
 
    @Test
    void setLocation() {
        Customer customer = new Customer(1, "John Smith", "1000", "john1", "password", "john@gmail.com");
        customer.setLocation("2000");
        assertEquals(customer.getLocation(), "2000");
    }
}