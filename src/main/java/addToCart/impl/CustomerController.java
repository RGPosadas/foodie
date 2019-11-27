package addToCart.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/set-location", method = RequestMethod.PUT)
    @ResponseBody
    public String getRestaurantMenuItems(@RequestParam(name = "location") int new_location) {
        int globalUserID = 5;
        jdbcTemplate.update("UPDATE customer SET location = " + new_location + " WHERE id = " + globalUserID);
        return "update successful";
    }
}

