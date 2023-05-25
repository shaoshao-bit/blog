```nginx
location / {
        add_header 'Access-Control-Allow-Origin' *;
        add_header 'Access-Control-Allow-Credentials' true;
        add_header 'Access-Control-Allow-Headers' *;
        add_header 'Access-Control-Allow-Methods' *;
        add_header 'Access-Control-Expose-Headers' *; 
        
        proxy_pass 后端地址;
    }
```