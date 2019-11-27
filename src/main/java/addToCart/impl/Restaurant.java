package addToCart.impl;

public class Restaurant{

    private final int id;//Needed or not ?
    private String name;
    private String address;

    public Restaurant(int id, String name, String address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    public int getId() {
        return id;
    }

    public String getName(){
        return name;
    }

    public String getAddress(){
        return address;
    }

}
