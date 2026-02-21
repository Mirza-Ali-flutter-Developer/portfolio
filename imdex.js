function sendMail(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let subject = "Portfolio Contact from " + name;
    let body = "Name: " + name + "%0D%0AEmail: " + email + "%0D%0AMessage: " + message;

    window.location.href = `mailto:yourgmail@gmail.com?subject=${subject}&body=${body}`;
}