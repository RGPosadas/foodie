package addToCart;

public class Menu{

    private final long id = 4;//Needed or not ?
    //private final String restaurant_ID;
    private String name;

    public Menu(long id, String name) {
        //this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }

}
