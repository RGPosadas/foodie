package addToCart.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestaurantController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/restaurant", method = RequestMethod.GET)
    @ResponseBody
    public List<Restaurant> getRestaurentMenuItems() {
        return jdbcTemplate.query(
                "SELECT * FROM foodie.Restaurant ",
                (rs, rowNum) ->
                        new Restaurant(
                                rs.getInt("id"),
                                rs.getString("name"),
                                rs.getString("address")
                        )
        );
    }
}
