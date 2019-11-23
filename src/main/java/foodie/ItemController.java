package foodie;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ItemController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // @RequestMapping("/items")
    // public Greeting greeting(@RequestParam(value="restaurant_id") String name) {
    //     return new Greeting(counter.incrementAndGet(), String.format(template, name));
    // }

    @RequestMapping(value = "/items", method = RequestMethod.GET)
    @ResponseBody
    public List<Item> getRestaurentMenuItems() {
        //get items by menu_id (a parameter of the URL)
        int menu_id = 5; //@RequestParam(value="restaurant_id");
        return jdbcTemplate.query(
                    "SELECT * FROM Restaurant WHERE id = " + menu_id, 
                    (rs, rowNum) ->
                        new Item(
                            rs.getLong("id"),
                            rs.getString("name"),
                            rs.getDouble("price"),
                            rs.getString("description")
                        )
            );
    }
}

