package addToCart;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestaurantController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // @RequestMapping("/items")
    // public Greeting greeting(@RequestParam(value="restaurant_id") String name) {
    //     return new Greeting(counter.incrementAndGet(), String.format(template, name));
    // }

    @RequestMapping(value = "/restaurant", method = RequestMethod.GET)
    @ResponseBody
    public List<Item> getRestaurentMenuItems() {
        //get items by menu_id (a parameter of the URL)
        return jdbcTemplate.query(
                "SELECT * FROM Restaurant ",
                (rs, rowNum) ->
                        new Item(
                                rs.getLong("id"),
                                rs.getString("name"),
                                rs.getString("address")
                        )
        );
    }
}
