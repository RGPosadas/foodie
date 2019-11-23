package foodie;

public class Item {

    private  long id;
    private  String name;
    private  double price;
    private  String description;
    //menu_id

    public Item(long id, String name, double price, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
}
