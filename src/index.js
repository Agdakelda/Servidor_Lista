const express =require('express');
    const app = express();



        const usuarios=[          
              {id: 11,nome: 'João', idade: 23 },
              {id: 11,nome: 'Ana', idade: 25 },
              {id: 11,nome: 'Luffy', idade: 24 },
              {id: 11,nome: 'Nami', idade: 26 }       
            ];
            app.get('/usuario', (req,res)=>{
                res.send(usuarios);});

        
        app.listen(3000);
