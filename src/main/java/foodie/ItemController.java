package foodie;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ItemController {

    // @RequestMapping("/items")
    // public Greeting greeting(@RequestParam(value="restaurant_id") String name) {
    //     return new Greeting(counter.incrementAndGet(), String.format(template, name));
    // }

    // @RequestMapping(value = "/items", method = RequestMethod.GET)
    // @ResponseBody
    // public String getRestaurentMenuItems() {
    //     //get items by menu_id (a parameter of the URL)
    //     Item[] items = jdbcTemplate.queryForObject("SELECT * FROM Restaurant WHERE id == " + @RequestParam(value="restaurant_id"), Integer.class);
    //     return items;
    // }
}
