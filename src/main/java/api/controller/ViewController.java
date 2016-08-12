package api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by pc on 2016/8/10.
 */
@Controller
@RequestMapping("/getway/")
public class ViewController {

    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("list")
    public String toView(){
        return "list";
    }

}
