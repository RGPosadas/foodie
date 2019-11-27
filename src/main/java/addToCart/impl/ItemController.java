package addToCart.impl;

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

    @RequestMapping(value = "/item",params ="menu_id", method = RequestMethod.GET)
    @ResponseBody
    public List<Item> getRestaurentMenuItems(@RequestParam(name = "menu_id") int menu_id) {
        return jdbcTemplate.query(
                    "SELECT * FROM foodie.Item WHERE menu_id = " + menu_id, 
                    (rs, rowNum) ->
                        new Item(
                            rs.getInt("id"),
                            rs.getString("name"),
                            rs.getDouble("price"),
                            rs.getString("description")
                        )
            );
    }
}

