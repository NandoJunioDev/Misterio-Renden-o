/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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


