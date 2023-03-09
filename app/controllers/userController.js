
const bcrypt = require('bcrypt');
//const { password } = require('pg/lib/defaults');

const { User } = require("../models");
const userController = {
    // afficher le formulaire d'inscription
    showSignUp(req, res) {
        
        res.render('signup');
    },
    // traiter le formulaire d'inscription,
    async doSignUp (req, res) {
        
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const passwordConfirm = req.body.passwordConfirm;

        // Create a new user
// const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
// console.log("Jane's auto-generated ID:", jane.id);

const newUser = await User.create({firstname: firstname, lastname: lastname, email : email, password: hashedPassword })
if(newUser){
    res.redirect('/login')
}
    },
    // d'afficher le formulaire de connexion
    showLogin(req, res) {
        // ça ne sert à rien d'afficher le login si on est déjà connecté
        if (req.session.user) {
            return res.redirect('/');
        }

        res.render('login');
    },
    // se connecter 
    async doLogin(req, res) {
        if (req.session.user) {
            return res.redirect('/');
        }
        
        // ETAPE 1 : Tenter de récupérer l'utilisateur en fonction de l'email donnée 

        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        // DEUX Possibilités

        // ETAPE 2: USER TROUVE
        if (user) {
            //      -> VERIF MDP
            const match = await bcrypt.compare(req.body.password, user.password);

            if (match) {
                //              SI MDP OK
                //                 ON STOCK LE USER DANS LA SESSION
                req.session.user = user;
                delete req.session.user.password;

                res.redirect('/');
                
            } else {//              SINON -> ON RENVOIT SE BALADER
                res.redirect('/login?error=wrongUserOrPwd');
            }
        } else {
            // USER PAS TROUVE
            //      -> ON RENVOIT BALADER
            res.redirect('/login?error=wrongUserOrPwd');
        }
        
    }

}

module.exports = userController;