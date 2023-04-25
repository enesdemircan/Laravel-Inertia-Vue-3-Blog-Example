laravel: 10.8
php: 8.1
inertiajs/vue3: 1.0.0

1 stage (mysql databse configure)
    mysql new database please
    dbname : laravel_blog
    user : root
    password : root

2 stage (laravel and mysql fake datas)
    composer install
    php artisan migrate
    php artisan db:seed
    php artisan optimize
    php arisan serve

3 stage (vue and js)
    yarn install
    yarn run build and yarn run dev


