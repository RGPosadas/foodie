package hello;

public class Item{

    private final long id;//Needed or not ?
    private final String menu_ID;
    private String name;

    public Item(long id, String menuID, String name) {
        this.id = id;
        this.name = name;
        this.menu_ID = menuID;
    }

    public long getId() {
        return id;
    }

    public String getName(){
        return name;
    }

    public String getMenu_ID(){
        return menu_ID;
    }

    public void setName(String name){
        this.name = name;
    }

}
