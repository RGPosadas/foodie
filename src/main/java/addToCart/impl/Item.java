package addToCart.impl;

public class Item {

    private  int id;
    private  String name;
    private  double price;
    private  String description;
    //menu_id

    public Item(int id, String name, double price, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
