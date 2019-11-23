package addToCart;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc

@RestController
public class MenuController {

    @GetMapping(path="/MenuAll")
    public @ResponseBody Iterable<Menu> getAllMenus(){
        return menuRepository.findAll();
    }
}
