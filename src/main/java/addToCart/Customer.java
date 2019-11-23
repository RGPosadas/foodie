package addToCart;

public class Customer {

    private long id;
    private String name;
    private String location;
    private String username;
    private String password;
    private String email;

    public Customer(long id, String name, String location, String username, String password, String email) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}