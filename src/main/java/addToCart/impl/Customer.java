package addToCart.impl;

public class Customer {

    private int id;
    private String name;
    private String location;
    private String username;
    private String password;
    private String email;

    public Customer(int id, String name, String location, String username, String password, String email) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public String getLocation(){
        return location;
    }

    public void setLocation(String newLocation) {
        location = newLocation;
    }
}
//HELLOOOOOO