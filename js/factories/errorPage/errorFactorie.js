export class ErrorPage {
    constructor() {
        
    }

    createErrorPage() {
        // JE CREER UN FONCTION POUR LA REDIRECTION AVEC UN SetTimeOut à 2 secondes
        function redirectFunction() { 
            document.location.href="http://127.0.0.1:5500/index.html";
        }

        const modalError = document.createElement('div');
        modalError.setAttribute("class", "wrapper-error-modal");

        const errorTemplate = `
            <h1>sorry the page does not exist !</h1>
            <h2>you will be redirected in 3 seconds</h2>
        `
        modalError.innerHTML = errorTemplate;

        setTimeout(redirectFunction, 3000);
        return modalError
    }
}