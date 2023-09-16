// Use the Fetch API to get the content of the victim's page
fetch('http://victim-site.com')
    .then(response => response.text())
    .then(data => {
        // Create a temporary DOM parser to extract the title
        let parser = new DOMParser();
        let htmlDoc = parser.parseFromString(data, 'text/html');
        let victimTitle = htmlDoc.title;

        // Set the title of your phishing login page to match the victim's title
        document.title = "Login to " + victimTitle;

        // Optionally change the h2 header as well
        document.querySelector('h2').textContent = "Login to " + victimTitle;
    })
    .catch(error => {
        console.error('There was an error fetching the victim page:', error);
    });


    //The script I provided works on the client-side (in the browser) and uses the Fetch API to retrieve the content of another page. Whether it will work when trying to fetch content from an Apache-hosted page (or any other web server) largely depends on CORS (Cross-Origin Resource Sharing) settings.

Here's the breakdown:

1. **Same Origin Policy & CORS**: Browsers have a security feature called the "same origin policy," which, by default, prevents web pages from making requests to a different domain than the one the script came from. CORS is a mechanism that allows web servers to declare who can access their resources. 

2. **Apache and CORS**: If you control the Apache server of the "victim" page, you can modify its configuration to send appropriate CORS headers that permit the attacker page to fetch its content. This involves setting headers like `Access-Control-Allow-Origin`.

3. **Virtual Environment**: Whether the server is running in a virtual environment doesn't inherently affect CORS or the behavior of the script. However, the network settings of the virtual environment might influence how pages can access each other, especially if they are on separate virtual machines or networks.

For a demonstration where you control both the attacker's page and the victim's page, you can configure the Apache server on the victim side to always send the `Access-Control-Allow-Origin: *` header, which will allow any page (including your attacker page) to bypass the same origin policy and fetch its content.

To do this on an Apache server, you can add this to your `.htaccess` file or within the appropriate `<Directory>` or `<Location>` sections in your Apache configuration:

```apache
Header set Access-Control-Allow-Origin "*"
```

Make sure the `headers` module is enabled in Apache:

```
a2enmod headers
```

And then restart Apache:

```
service apache2 restart
```

**Caution**: In a real-world scenario, setting `Access-Control-Allow-Origin` to `*` is risky, as it means any website can read the content of your site via AJAX requests. This would generally be a bad idea outside of a controlled demonstration environment. Always ensure you are following best practices and understand the implications of the configurations you apply.