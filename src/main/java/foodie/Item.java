package foodie;

public class Item {

    private final long id;
    private final String name;
    private final double price;
    private final String description;
    //menu_id

    public Item() {
        this.id = 4;
        this.name = "hi";
        this.price = 0.1;
        this.description = "test description";
    }

    public long getId() {
        return id;
    }
}
