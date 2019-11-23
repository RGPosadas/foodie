package addToCart;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc

@RestController
public class RestaurantController {

    @GetMapping(path="/RestaurantsAll")
    public @ResponseBody Iterable<Menu> getAllRestaurants(){
        return restaurantsRepository.findAll();
    }
}
