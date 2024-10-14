/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'gramado-fundo-celular':"url('../Misterio-Renden-o/src/img/phots/Photos-celular/Banda_Gramado.jpeg')",
        'quarto-fundo-pc':"url('../Misterio-Renden-o/src/img/phots/photo-pc/QuartoV1.jpeg')",
      },
      screens:{
 
        'celular':{'max': '430px'},
        'celularM':{'max': '500px'},
        'tabletM':{'max':'820'},
        'celular':'200px',
        'tablet':'650px',

      },

    },
  
  },
  plugins:[],
}


