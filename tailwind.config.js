/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'gramado-fundo-celular':"url('../img/phots/Photos-celular/Banda_Gramado.jpeg')",
        'quarto-fundo-pc':"url('../img/phots/photo-pc/QuartoV1.jpeg')",
        'andre-anderson':"url('../img/phots/photo-pc/Andre_Anderson.1080png.png')",
        'fundo-linhas':"url('../img/phots/Backup/pngwing.com.png')",
        'fundo-ondas':"url('../PSD/Prancheta 1.png')"
      },

      screens:{
 
        'celular':{'max': '440px'},
        'celularM':{'max': '1380px'},
        'tabletM':{'max':'770px'},
        'celular2':'200px',
        'tablet':'720px',
        'pc':'800px',
        'pc-telas-menores':'1000px'


      },
      keyframes:{
        paracima:{
          '0%, 75%':{display: 'none'},
          '0%, 10%':{transform:'translateY(1000%)'},


          
          '95%':{transform:'translateY(0%)'},
          
        },

      },
      animation:{
        paracima:'paracima 3s ease-in-out '
      },

      fontFamily:{
        "Roboto-slab":['Roboto-Slab' ],
        Raleway:['Raleway'],
      },
      colors:{
        "Azul-Claro":'#0388A6',
        Azul:'#1AC6D9',
        Verde:'#8EF229',
        Laranja:'#F29829',
        Amarelo:'#FDAC27',
        "Branco-Gelo":'#F2F2F2',
        Grafite:' #3F3D40',
        Preto:'#022601',
      }

    },
  
  },
  plugins:[],
}


