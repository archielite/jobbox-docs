# Upgrade Guide

## Option 1 (Auto update):

Go to `Admin` -> `Platform Administration` -> `System Updater`.

In the **System Updater** page, click to the **Download & Install Update** button and it will update automatically.

## Option 2 (Manual update):

Download the latest source code from codecanyon and override the following folders:

- `app`
- `bootstrap`
- `database`
- `config`
- `public/index.php`
- `public/themes`
- `public/vendor`
- `platform`
- `vendor`
- `composer.json`
- `composer.lock`

After overwriting the source code successfully:

- Go to `Admin` -> `Platform Administration` -> `Cache management` then click to **Clear all CMS cache** button.
- Go to `Admin` -> `Plugins` click to **Deactivate** to all plugins and **Activate** them again.
- Go to `Admin` -> `Translations` -> `Other translations` and click to **Import group** button to update translations.
