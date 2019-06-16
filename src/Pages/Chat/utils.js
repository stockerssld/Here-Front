
export default {
    Personas: [{
        nombre: "luis antonio padre garcia",
        avatar:`https://gravatar.com/avatar/${Math.floor(Math.random() * (100000000000 - 1) + 1)}?s${Math.floor(Math.random() * (100000000000 - 1) + 1)}}&d=retro`,
        mensajes: [
            {
                ID: '4456894',
                visto:true,
                mensaje:"Como esta mi estimado cuanto cuesta esta captacia?",
                img:""
              },
              { ID: '4456894',
              visto:true,
              mensaje:"Como esta mi estimado cuanto cuesta esta captacia?",
              img:""
            }
            
          
        ]
    },
    {
        nombre: "jose antonio padre garcia",
        avatar:`https://gravatar.com/avatar/${Math.floor(Math.random() * (100000000000 - 1) + 1)}?s${Math.floor(Math.random() * (100000000000 - 1) + 1)}}&d=retro`,
        mensajes: [
            { ID: '4456894',
              visto:true,
              mensaje:"Como esta mi estimado cuanto cuesta esta captacia?",
              img:""
            },{
              ID: '4456894',
              visto:false,
              mensaje:"Me puede dar precio de mayoreo quiero comprar 5 captacias",
              img:""
            }
        ]
    }]
}