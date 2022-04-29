class ErrorPage {
    constructor() {
        
    }

    createErrorPage() {
        // JE CREER UN FONCTION POUR LA REDIRECTION AVEC UN SetTimeOut à 2 secondes
        function redirectFunction() { 
            document.location.href="http://127.0.0.1:5500/index.html";
        }

        const modalError = document.createElement('div');
        modalError.setAttribute("class", "wrapper-error-modal");

        const h1Error = document.createElement('h1');
        h1Error.innerHTML = "sorry the page does not exist !";
        const h2Error = document.createElement('h2');
        h2Error.innerHTML = "you will be redirected in 3 seconds";
        
        modalError.appendChild(h1Error);
        modalError.appendChild(h2Error);

        setTimeout(redirectFunction, 3000);
        return modalError
    }
}