const express = require('express');

const monkey = express();
const PORT = process.env.PORT || 3001;

monkey.use(express.json());
monkey.use(express.urlencoded({ extended: true }));
monkey.use(express.static('../client/dist'));

require('./routes/html-route')(monkey);

monkey.listen(PORT, () => console.log(`

==================================================
************** ARID JUNGLE's BACK END ************
==================================================

                         __,,,,_
          _ __..-;'''--/'/ /.',-'-.
      ('/' ' |  l l ;' / / / / .-'/',_
     /''l l   |  ; | ;| // // / -.,/_,'-,
    /<7' ;  l l  | ; ||/ /| | ;;    |'-/,/-.,_,/')
   /  _.-, ',-l,__|  _-| / l l/|_/  |    '-/.;.''
   '-'  f/ ;      / __/ l__ '/ |__/ |
        '-'      |  -| =|,_  ;  |-' |
              __/   /_..-' '  ),'  //
          fL ((__.-'((___..-'' ;__.'


         ===========================
            Welcome to ARID JUNGLE 
           EASY TO USE TEXT EDITOR
         ===========================

        start your text editor:
        http://localhost:${PORT}
`));