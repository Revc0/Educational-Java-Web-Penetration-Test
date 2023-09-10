# Java Web Penetration Testing Project 🔰

This project showcases a purposely vulnerable web application, designed to illustrate common security flaws found in web applications. The project provides practical experience in identifying, exploiting, and mitigating these vulnerabilities.

## Table of Contents

- [Introduction](#introduction)
- [Vulnerabilities Tested](#vulnerabilities-tested-)
- [Setup and Installation](#setup-and-installation-)
- [Usage](#usage-)

## Introduction

This project was developed with the aim to understand web security from a hands-on perspective. The website contains intentional security flaws, allowing users to practice penetration testing techniques in a controlled environment.

## Vulnerabilities Tested 🚪

The following vulnerabilities have been introduced and can be tested against:

- **SQL Injection (SQLi)**: Flaws in the login & registration system that allow for unauthorized data access or even database control.
- **Cross-Site Scripting (XSS)**: Vulnerable comment sections allow for script injection, which can be used for a variety of attacks, including stealing session cookies.
- **Flawed File Upload**: Poorly implemented file upload functionality may allow for malicious files to be uploaded and executed.
- **Cross-Site Request Forgery (CSRF)**: Implemented features can be manipulated to trick end users into performing actions without their explicit consent.
- **Insecure Session Management**: Sessions can be hijacked or manipulated due to flaws in the session handling process.

## Setup and Installation 📚

### Prerequisites

- Virtualization Software: Install a virtualization platform such as VirtualBox or VMware Workstation.
- Guest OS Image: A preferred operating system image, e.g., Ubuntu Server.
- Web Server Environment: Depending on your OS choice, this could be LAMP (Linux, Apache, MySQL, PHP) for    Linux or XAMPP/MAMP for Windows/Mac respectively.
- Git: To clone the repository.

### Steps

1. **Create & Setup the Virtual Machine:**
- Launch your virtualization software.
- Set up a new virtual machine.
- Install your chosen operating system.

   
2. **Install the Web Environment:**
- Based on your OS, set up the appropriate web environment. For instance, on Ubuntu, you might install a    LAMP stack.
    ```bash
   git clone [https://github.com/Revc0/Java-Penetration-Test]
    
3. **Install Additional Tools:**
    ```bash
    sudo apt update
    sudo apt install git

4. **Clone the Repository:**
- Open a terminal in the VM.
    ```bash
   git clone [https://github.com/Revc0/Java-Penetration-Test]

5. **Navigate to the Web Root Directory:`**
- The directory would depend on your setup. For LAMP on Ubuntu, it might be /var/www/html.
    ```bash
   sudo mv [directory_name] /var/www/html/

6. **Set Up the Database:**
- If using LAMP, access phpMyAdmin or your database interface.
- Import the SQL file provided in the repository.
- Update any configuration files in the project to match the VM's database settings.

7. **Access the Web Application:**
- Determine the VM's IP address (using ip a for Linux).
- On your host machine, access the website by entering the VM's IP in a browser, followed by the project    directory if placed in a specific folder.

Note: Ensure that your VM's network settings (like in VirtualBox or VMware) are configured to allow easy access from the host machine. Typically, settings like "Bridged Adapter" or "NAT" would be suitable. Also, adjust firewall settings in the VM if necessary.

### Usage 🐒
1. **Exploration**
- Navigate through the website using your VM's IP address, familiarize yourself with its features.
- Register an account, post comments, and interact with all available features to understand their workings.

2. **Penetration Testing**
- Ensure your VM's network settings are isolated to prevent unintentional breaches outside the virtual       environment.
- Use tools or manual techniques to exploit the intentionally introduced vulnerabilities. This includes       SQL injections, XSS attacks, and more.
- Document any successful attacks for later reporting.
- Always remember to act responsibly. Only test on systems you have permission to, and ensure the VM          doesn't accidentally have access to critical networks.
  
3. **Mitigation:**
- Once you've identified vulnerabilities within the VM environment, attempt to fix them using secure          coding practices.
- This experience provides an understanding from both identifying vulnerabilities to the process of           patching them, all within a controlled and safe environment.

