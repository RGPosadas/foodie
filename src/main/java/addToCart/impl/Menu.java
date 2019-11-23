package addToCart.impl;

public class Menu{

    private long id;
    private String name;
    private long restaurantId;

    public Menu(long id, String name, long restaurantId) {
        this.id = id;
        this.name = name;
        this.restaurantId = restaurantId;
    }
}
