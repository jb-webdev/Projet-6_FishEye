export class ModalContact {
    
    createModalContact() {
        const modalContact = document.createElement('div')
        modalContact.setAttribute('class', 'modal')

        modalContact.innerHTML(`
                <header>
                    <div class="wrapper-btn-modal">
                        <button id="closeModal"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <h2>Contactez-moi</h2>
                </header>
        
        
                <form method="post">
                    <div>
                        <label for="prenom">Prénom</label>
                        <input type="text" name="prenom" size="20" maxlength="40" value="prenom" id="prenom" />
                        <label for="nom">Nom</label>
                        <input type="text" name="nom" size="20" maxlength="40" value="nom" id="nom" />
        
                        <label for="email">Email</label>
                        <input type="email" name="email" size="20" maxlength="40" value="email" id="email" />
                        <label for="confirmEmail">Email</label>
                        <input type="email" name="confirmEmail" size="20" maxlength="40" value="confirmEmail" id="confirmEmail" />

                        <label for="message">Vos commentaires :</label>
                        <textarea name="message" id="message" cols="20" rows="4"></textarea>
                    </div>
                    <button class="contact_button">Envoyer</button>
                </form>
                
            `
        )

        return modalContact;
    }
}