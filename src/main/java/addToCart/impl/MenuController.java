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
public class MenuController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/menus", method = RequestMethod.GET)
    @ResponseBody
    public List<Menu> getRestaurentMenuItems(@RequestParam(name = "restaurant_id") int restaurant_id) {
        return jdbcTemplate.query(
                    "SELECT * FROM foodie.menu WHERE restaurant_id = " + restaurant_id, 
                    (rs, rowNum) ->
                        new Menu(
                            rs.getInt("id"),
                            rs.getString("name"),
                            rs.getInt("restaurant_id")
                        )
            );
    }
}
