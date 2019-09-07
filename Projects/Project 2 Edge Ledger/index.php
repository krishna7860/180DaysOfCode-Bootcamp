<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" media="screen and (max-width:768px)" href="css/mobile.css">
    <link rel="stylesheet" media="screen and (min-width: 1100px)" href="css/widescreen.css">
    
    <title>EdgeLedger Financial | Accounting</title>
</head>
<body id="home">
    <!-- Navbar -->
    <nav id="navbar">
        <h1 class="logo">
            <span class="text-primary">
                    <i class="fas fa-book-open"></i> Edge
            </span>Ledger
        </h1>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#what">What</a></li>
            <li><a href="#who">Who</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <!-- Header Showcase -->
    <header id="showcase">
        <div class="showcase-content">     
            <h1 class="l-heading">
            The Sky Is The Limit
            </h1>
        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolores rerum nostrum illo dolore magni, deleniti mollitia at quaerat sed.</p>
        <a href="#what" class="btn">Read More</a>
        </div>
    </header>
    <section id="what" class="bg-light py-1">
        <div class="container ">
            <h2 class="m-heading text-center">
                <span class="text-primary">What</span> We Do
            </h2>
            <div class="items">
            <div class="item">
              <i class="fas fa-university fa-2x"></i>  
              <div>
                  <h3>Investment Banking</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, dolorum.</p>
                  
              </div>
            </div>
            <div class="item">
                <i class="fas fa-book-reader fa-2x"></i>  
                <div>
                    <h3>Portfolio Management</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, dolorum.</p>
                    
                </div>
            </div>
            <div class="item">
                <i class="fas fa-pencil-alt fa-2x"></i>  
                <div>
                    <h3>Tax & Custodial</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, dolorum.</p>
                    
                </div>
            </div>
        </div>
        </div>
    </section>
    <!-- Who We Are -->
    <section id="who">
        <div class="who-img"></div>
        <div class="who-text bg-dark p-2">
            <h2 class="m-heading"><span class="text-primary">Who</span> We Are</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit error voluptatum, placeat sunt doloremque omnis molestias repellendus, repudiandae numquam magni voluptate esse illo ea quasi perferendis necessitatibus nisi cumque. Eveniet.</p>
            <h3>Our Team</h3>
            <ul class="list">
                <li>Mark Smith : CEO</li>
                <li>Shannon Johnson : CFO</li>
                <li>John Corbit: Lead Accountant</li>
                <li>Jannet William : Investment Manager</li>
                <li>Kara Jackson : Artist</li>
            </ul>
        </div>
    </section>
    <!-- Clients -->
    <section id="client" class="py-1">
    <div class="container">
        <h2 class="m-heading text-center">
            <span class="text-primary">
                Our
            </span> Clients
        </h2>
        <div class="items py-1">
            <div class="item">
                <img src="./img/logos/logo1.png" alt="Client">
            </div>
            <div class="item">
                <img src="./img/logos/logo2.png" alt="Client">
            </div>
            <div class="item">
                <img src="./img/logos/logo3.png" alt="Client">
            </div>
            <div class="item">
                <img src="./img/logos/logo4.png" alt="Client">
            </div>
            <div class="item">
                <img src="./img/logos/logo5.png" alt="Client">
            </div>
        </div>
    </div>
    </section>

    <!-- Section : Contact -->
    <section id="contact">
        <div class="contact-form bg-primary p-2">
            <h2 class="m-heading">
                Contact Us
            </h2>
            <p>Please use the form below to contact us</p>
            <form action="">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="number">Number</label>
                    <input type="text" name="number" id="number" placeholder="Enter number">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea type="text" name="message" id="message" placeholder="Enter message"></textarea>
                </div>
                <input type="submit" value="Send" class="btn btn-dark">
            </form>
        </div>
        <div class="map">

        </div> 
    </section>
    <footer id="main-footer" class="bg-dark py-1 text-center">
        <div class="container">
        <p>Copyright &copy; 2019, EdgeLedger, All Right Reserved</p>
    </div>
    </footer>

  <!-- JQuery CDN -->
  <script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>

  <!-- Local JS File -->
  <script src="js/main.js"></script>

  <!-- Google Maps -->
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBn0YPca0Ghf1nSqwMu64mgjVHhaKTqIfg&callback=initMap"
  async defer></script>

  <!-- Font  -->
  <script src="https://kit.fontawesome.com/8985a3179d.js"></script>
</body>
</html>
<!--  -->