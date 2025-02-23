<header>
    <div class="logo">
        <a href="index.php"><img src="./images/logo.png" alt="Logo"></a>
    </div>
    <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search" />
    </div>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="shop.php">Shop</a></li>
            <li><a href="about.php">About</a></li>
            <li><a href="contact.php">Contact</a></li>
        </ul>
    </nav>
    <div class="header-button">
        <a href="#" id="show-login">SIGN IN</a>
    </div>
</header>

<style>
header {
    left: 0;
    right: 0;
    width: 100%;
    height: 80px;
    background-color: rgba(244, 67, 54, 0.8);
    padding: 2.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 1000;
    overflow: hidden;
    top: 0;
    position: fixed;
}

header .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
}

header .logo img {
    width: 130px;
}

header nav {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
}

header nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
}

header nav ul li {
    position: relative;
    text-transform: uppercase;
}

header nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: color 0.5s ease;
}

header nav ul li::after {
    content: "";
    width: 0%;
    height: 2px;
    background: #ffffff;
    display: block;
    margin: auto;
    transition: width 0.5s ease;
}

header nav ul li:hover::after {
    width: 100%;
}

header .search-bar input {
    border-radius: 30px;
    width: 250px;
    border: 1px solid #e0e0e0;
    padding: 8px;
}

header .header-button a {
    background-color: #333;
    color: rgb(255, 255, 255);
    padding: 0.5rem 1rem;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

header .header-button a:hover {
    background-color: #555;
    transition: background-color 0.3s ease;
}

header .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 5px 10px;
    background-color: #f9f9f9;
    flex-grow: 1;
    max-width: 250px;
    position: relative;
    /* For icon positioning */
}

header .search-bar i {
    color: #555;
    font-size: 16px;
    position: absolute;
    left: 15px;
    /* Position icon inside the bar */
}

header .search-bar input {
    border: none;
    outline: none;
    padding: 5px 20px 5px 30px;
    /* Add padding to leave space for the icon */
    flex-grow: 1;
    background: transparent;
    border-radius: 25px;
    /* Matches the parent for consistency */
}
</style>