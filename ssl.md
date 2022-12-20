# SSL

## Install SSL certificate on your hosting/VPS

You need to install an SSL certificate on your hosting/VPS first. You can purchase an SSL certificate or use free SSL,
for example **Let's Encrypt**.

## Redirect http to https

- Step 1: Change the following code in `.env` file:

```
APP_URL=http://domain.com // [!code --]
APP_URL=https://domain.com // [!code ++]
```

- Step 2:
  - Option 1: Add `ENABLE_HTTPS_SUPPORT=true` to `.env` file
  - Option 2: Add to `.env` file following code:
    ```
    FORCE_SCHEMA=https
    FORCE_ROOT_URL=https://domain.com
    ENABLE_HTTPS_SUPPORT=false
    ```
  - Option 3: If you are using hosting and Cpanel, you can Force HTTPS Redirection for your domains. Check this [article](https://blog.cpanel.com/force-https-redirection/).

:::warning
If it doesn't work, you have to config it in `.htaccess` or Nginx config.
:::