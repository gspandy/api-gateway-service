package api.gateway;

import java.io.IOException;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.cloud.netflix.sidecar.EnableSidecar;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.ContextLifecycleFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.filters.FilterRegistry;
import com.netflix.zuul.http.ZuulServlet;
import com.netflix.zuul.monitoring.MonitoringHelper;


@SpringBootApplication
@EnableSidecar
public class ApiGatewayApplication {
    public static void main( String[] args ) {
        new SpringApplicationBuilder(ApiGatewayApplication.class).web(true).run(args);
    }
    
    @Component
    public static class MyCommandLineRunner implements CommandLineRunner {
        @Override
        public void run(String... args) throws Exception {
            MonitoringHelper.initMocks();
            initJavaFilters();
        }

        /**
         * 
    	 *	filterOrder:filter执行顺序，通过数字指定
    	 *	shouldFilter:filter是否需要执行 true执行 false 不执行
    	 *	run : filter具体逻辑
    	 *	filterType :filter类型,分为以下几种
         *		pre:请求执行之前filter
         *		route: 处理请求，进行路由
         *		post: 请求处理完成后执行的filter
         *		error:出现错误时执行的filter
         */
        private void initJavaFilters() {
            final FilterRegistry r = FilterRegistry.instance();
            
           // pre:请求执行之前filter 
            r.put("javaPreFilter", new ZuulFilter() {
                @Override
                public int filterOrder() {
                    return 50000;
                }

                @Override
                public String filterType() {
                    return "pre";
                }

                @Override
                public boolean shouldFilter() {
                    return true;
                }

                @Override
                public Object run() {
                    System.out.println("running javaPreFilter");
                    RequestContext.getCurrentContext().set("name", "zhouwei");
                    return null;
                }
            });

            r.put("javaRoutingFilter", new ZuulFilter() {
                @Override
                public int filterOrder() {
                    return 50000;
                }

                @Override
                public String filterType() {
                    return "route";
                }

                @Override
                public boolean shouldFilter() {
                    return true;
                }

                @Override
                public Object run() {
                    System.out.println("running javaRoutingFilter");
                    try {
                        RequestContext.getCurrentContext().getResponse().sendRedirect("https://github.com/771287929");
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    return null;
                }
            });

            r.put("javaPostFilter", new ZuulFilter() {
                @Override
                public int filterOrder() {
                    return 50000;
                }

                @Override
                public String filterType() {
                    return "post";
                }

                @Override
                public boolean shouldFilter() {
                    return true;
                }

                @Override
                public Object run() {
                    System.out.println("running javaPostFilter");
                    System.out.println(RequestContext.getCurrentContext().get("name").toString());
                    return null;
                }

            });

        }

    }

    @Bean
    public ServletRegistrationBean zuulServlet() {
        ServletRegistrationBean servlet = new ServletRegistrationBean(new ZuulServlet());
        servlet.addUrlMappings("/test");
        return servlet;
    }

    @Bean
    public FilterRegistrationBean contextLifecycleFilter() {
        FilterRegistrationBean filter = new FilterRegistrationBean(new ContextLifecycleFilter());
        filter.addUrlPatterns("/*");
        return filter;
    }
}
