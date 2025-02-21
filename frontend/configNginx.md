server {
listen 80;
server_name 1ppc.ru www.1ppc.ru;
location / {
proxy_pass http://localhost:3000;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}

location /foto.php {
return 301 /catalog?id=1;  
}

location /pechati.php {
return 301 /catalog?id=3;
}
location /kontakti.php {
return 301 /contacts;
}
location /kopir.php {
return 301 /catalog/kopi;
}
location /vizitki.php {
return 301 /catalog?id=2;
}
location /pechat_foto.php {
return 301 /catalog/pechat_foto;
}
location /pereplet.php {
return 301 /catalog?id=8;
}
location /shirokoformatnaya_pechat.php {
return 301 /catalog/shirokoformatnaya_pechat;
}
location /foto_na_dokumenti.php {
return 301 /catalog/foto_na_dokumenti;
}
location /foto_na_visu.php {
return 301 /catalog/foto_na_visu;
}
location /foto_na_pasport.php {
return 301 /catalog/foto_na_pasport;
}
location /tablichki.php {
return 301 /catalog?id=9;
}
location /pechat_novaya.php {
return 301 /catalog/novaya_pechat;
}
location /pechat_ottisku.php {
return 301 /catalog/po-ottisku;
}
location /pechat_srochno.php {
return 301 /catalog/srochnaya_pechat;
}
location /shtamp_noviy.php {
return 301 /catalog/shtamp_noviy;
}
location /shtamp_faksimilye.php {
return 301 /catalog/shtamp_faksimilye;
}
location /shtamp_ottisku.php {
return 301 /catalog/shtemp-ottisk;
}
location /vizitki_sifrovaya.php {
return 301 /catalog/vizitki_sifrovaya;
}
location /vizitki_ofsetnaya.php {
return 301 /catalog/vizitki_ofsetnaya;
}
location /vizitki_shelkografiya.php {
return 301 /catalog/vizitki_shelkografiya;
}
location /vizitki_tisneniya.php {
return 301 /catalog/vizitki_tisneniya;
}
location /vizitki_uf_pechat.php {
return 301 /catalog/vizitki_uf_pechat;
}
location /listovki.php {
return 301 /catalog?id=10;
}
location /laminir.php {
return 301 /catalog/lampaketnoe;
}

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/1ppc.ru/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/1ppc.ru/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
listen 80 default_server;
listen [::]:80 default_server;
server_name api.1ppc.ru;

    # Proxy Config
    location / {
        proxy_pass http://localhost:1337;

proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection 'upgrade';
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/1ppc.ru/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/1ppc.ru/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
