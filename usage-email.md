# Email

## Setup Email

Need to config mail in `Admin` -> `Settings` -> `Email`.

Support **Mailgun**, **SendGrid**, **SES**, **Gmail**, **Sendmail**... and other SMTP mail services. We suggest use **Mailgun** to send mail.

Make sure that you have saved settings (**Save settings** button at the bottom of page) before sending a test email.

![](../images/mail-1.jpg)

### Using Gmail

You can learn more about Gmail SMTP at https://support.google.com/mail/answer/185833?hl=en-GB

Example:

![](../images/mail-2.jpg)

- Mail Driver: `SMTP`
- Mail Host: `smtp.gmail.com`
- Mail Port: `587`
- Mail Encryption: `tls`
- Mail Username: `[your-gmail]`
- Mail Password: `[password-app]`

### Using Mailgun

Example:

![](../images/mail-3.jpg)

The secret key must have a prefix `key-`. Ex: `key-xxxxx`.

### Using SendGrid

Example:

![](../images/mail-4.jpg)

- Mail Host: `smtp.sendgrid.net`
- Mail Port: `587`
- Username must be `apikey`.

### Using Yandex

![](../images/mail-5.jpg)

## Edit Email template

- Email template using HTML & and click **Variables** dropdown to insert available `variable`. You need to know HTML and Twig template.

![](../images/mail-6.jpg)

![](../images/mail-7.png)