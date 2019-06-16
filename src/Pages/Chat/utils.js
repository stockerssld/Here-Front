
export default {
    Personas: [{
        nombre: "luis antonio padre garcia",
        avatar:`https://gravatar.com/avatar/${Math.floor(Math.random() * (100000000000 - 1) + 1)}?s${Math.floor(Math.random() * (100000000000 - 1) + 1)}}&d=retro`,
        mensajes: [
            {
                ID: '4456894',
                visto:false,
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
              img:`{https://gravatar.com/avatar/${Math.floor(Math.random() * (100000000000 - 1) + 1)}?s${Math.floor(Math.random() * (100000000000 - 1) + 1)}}&d=retro}`
            },{
              ID: '4456894',
              visto:true,
              mensaje:"Me puede dar precio de mayoreo quiero comprar 5 captacias",
              img:""
            },
            {
              ID: '1',
              visto:false,
              mensaje:"Claro",
              img:`https://gravatar.com/avatar/${Math.floor(Math.random() * (100000000000 - 1) + 1)}?s${Math.floor(Math.random() * (100000000000 - 1) + 1)}}&d=retro`
            },{
              ID: '1',
              visto:true,
              mensaje:"El Precio ess 200 lucas ;D ",
              img:""
            }
        ]
    }]
}