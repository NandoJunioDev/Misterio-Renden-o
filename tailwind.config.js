/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'gramado-fundo-celular':"url('../img/phots/Photos-celular/Banda_Gramado.jpeg')",
        'quarto-fundo-pc':"url('../img/phots/photo-pc/QuartoV1.jpeg')",
        'andre-anderson':"url('../img/phots/photo-pc/Andre_Anderson.1080png.png')",
      },
      screens:{
 
        'celular':{'max': '430px'},
        'celularM':{'max': '500px'},
        'tabletM':{'max':'820'},
        'celular':'200px',
        'tablet':'720px',
        'pc':'1020px',

      },
      keyframes:{
        paracima:{
          '0%, 50%':{transform:'translateY(1000%)'},
          
          '95%':{transform:'translateY(0%)'}
          
        },

      },
      animation:{
        paracima:'paracima 6s ease-in-out '
      },

    },
  
  },
  plugins:[],
}


