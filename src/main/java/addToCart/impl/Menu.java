package addToCart.impl;

public class Menu{

    private int id;
    private String name;
    private int restaurantId;

    public Menu(int id, String name, int restaurantId) {
        this.id = id;
        this.name = name;
        this.restaurantId = restaurantId;
    }

    public int getId() {
        return id;
    }

    public String getName(){
        return name;
    }

    public int getRestaurantId(){
        return restaurantId;
    }
}
