package hello;

public class Restaurant{

    private final long id;//Needed or not ?
    private String name;
    private String address;

    public Restaurant(long id, String name, String address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    public long getId() {
        return id;
    }

    public String getName(){
        return name;
    }

    public String getAddress(){
        return address;
    }

}
