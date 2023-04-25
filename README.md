laravel: 10.8 <br />
php: 8.1 <br />
inertiajs/vue3: 1.0.0 <br />

1 stage (mysql databse configure) <br />
    mysql new database please <br />
    dbname : laravel_blog <br />
    user : root <br />
    password : root <br />

2 stage (laravel and mysql fake datas) <br />
    composer install <br />
    php artisan key:generate <br />
    php artisan migrate <br />
    php artisan db:seed (if you get an error. php artisan migrate:refresh and php artisan db:seed) <br />
    php artisan optimize <br />
    php arisan serve <br />

3 stage (vue and js) <br />
    yarn install <br />
    yarn run build and yarn run dev <br />


