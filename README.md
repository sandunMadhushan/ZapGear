<div align="center">

# 🌐 ZapGear 

> A modern e-commerce platform built for seamless online shopping

[![PHP Version][php-image]][php-url]
[![License: MIT][license-image]][license-url]

</div>
ZapGear is a streamlined e-commerce solution that offers a smooth shopping experience with essential features for both customers and administrators. Built with modern web technologies, it provides a responsive and user-friendly interface for online retail.


## ✨ Key Features

- **User Authentication & Accounts**
  - Secure registration and login system
  - Personal profile management
  - Order history tracking

- **Product Management**
  - Dynamic product catalog
  - Category-based browsing
  - Advanced search functionality
  - Detailed product pages with images and descriptions

- **Shopping Experience**
  - Intuitive shopping cart
  - Wishlist functionality
  - Real-time stock updates
  - Secure checkout process

- **Payment Integration**
  - Multiple payment method support
  - Secure transaction processing
  - Order confirmation system

- **Responsive Design**
  - Mobile-first approach
  - Cross-browser compatibility
  - Optimized user interface

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript
- PHP
- MySQL
- Component-based architecture using PHP includes

## 🚀 Getting Started

### Prerequisites

- PHP 7.4 or higher
- MySQL 5.7 or higher
- Web server (Apache/Nginx)

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/sandunMadhushan/ZapGear.git
    ```

2. Set up the database
    ```bash
    mysql -u root -p < database/zapgear.sql
    ```

3. Configure database connection
    ```bash
    cp config/database.example.php config/database.php
    # Edit database.php with your credentials
    ```

4. Start the server
    ```bash
    php -S localhost:8000
    ```

5. Visit `http://localhost:8000` in your browser

## 🎯 Code Specialties

### Component Reusability
The project implements a modular structure using PHP includes for efficient code reuse:

```php
// Example of component inclusion
<?php 
include '.partials/header.php';
include '.partials/nav.php';
?>
```

### Secure User Authentication
  ```php
  // Example of secure password hashing
  $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
  ```

### Dynamic Product Loading
```php
// Example of product fetching
$query = "SELECT * FROM products WHERE category = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $category);
```

## 🙌 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🔮 Future Improvements

- [ ] Advanced search filters
- [ ] Customer review system
- [ ] Admin dashboard
- [ ] Real-time inventory tracking
- [ ] Email notification system


<!-- MARKDOWN LINKS & IMAGES -->
[php-image]: https://img.shields.io/badge/PHP-7.4%2B-blue.svg
[php-url]: https://php.net/
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://opensource.org/licenses/MIT
