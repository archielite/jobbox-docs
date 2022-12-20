# Installation

## Requirement

- Apache, nginx, or another compatible web server.
- PHP >= 8.0 >> Higher
- MySQL Database server
- `BCMath` PHP Extension
- `Ctype` PHP Extension
- `Fileinfo` PHP extension
- `JSON` PHP Extension
- `Mbstring` PHP Extension
- `OpenSSL` PHP Extension
- `PDO` PHP Extension
- `GD` PHP Extension
- `Tokenizer` PHP Extension
- `XML` PHP Extension
- `exif` PHP Extension
- `rewrite` module server

## PHP Configuration

Open your PHP configuration file `php.ini` and change the following settings:

```ini
memory_limit = 64M
max_execution_time = 300
```

If you are using cPanel, you can follow this article to change your PHP memory limit:
https://chemicloud.com/kb/article/how-to-increase-the-php-memory-limit-in-cpanel/

::: tip
On this project, we're using the latest Laravel version (currently 9.x).
Please go to [Laravel documentation](https://laravel.com/docs) page for more information.
:::

## Installation

### Install on hosting

:::tip
If you're a Laravel developer, and you want to customize our source code in `platform/core` and `platform/packages`,
you need to delete folder `vendor` then run command `composer install` to reinstall PHP dependencies.
:::

JobBox is based on Botble CMS, checkout the video for the installation.

<iframe width="100%" height="360" src="https://www.youtube.com/embed/ahBhKGv-g9U" title="Install Botble CMS in a subfolder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- Upload all files into the root folder of your hosting (normally, it's `public_html`).

- Create a database and import data from `database.sql` (it's located in source code).

![](../images/directory-and-database.png)

- Update your database credentials and `APP_URL` in `.env`.

![](../images/env-example.png)

- Go to `/admin` to access to admin panel.
- The default admin account is `admin` - `12345678`.

### Config to work on sub-folder

It’s based on Laravel framework, the root folder for it is `/public` so if you install it in a sub-folder,
you need to access `your-domain.com/sub-folder/public`. To remove `/public`, check below video.

<iframe width="100%" height="360" src="https://www.youtube.com/embed/XdAYETd04iA" title="Install Botble CMS in a subfolder" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Setup cron job

Cronjob is used to send emails abandoned carts notification automatically every week. You can ignore this step if you
don't need that feature.

```shell
* * * * * cd /path-to-your-project && php artisan schedule:run >> /dev/null 2>&1
```

You can learn more about setup cron job in cPanel at [here](https://help.fasthosts.co.uk/app/answers/detail/a_id/2198/~/setting-up-cron-jobs-in-cpanel).