import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    places: [],
    distances: [],
    list: [
      {
        short: 'Loja 1',
        local: 'Shopping Light - Rua Coronel Xavier de Toledo 23 Lojas 23 a 27 e 42 - Centro Histórico de São Paulo, São Paulo - SP, 01048-100',
        details: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
        available: 'Disponível em 4 dias úteis',
        cordinates: [-23.546344371769024, -46.63900070077106]
      },
      {
        short: 'Loja 2',
        local: 'Avenida Higienópolis, 618 - 127 a 129 - Higienópolis, São Paulo - SP, 01238-000',
        details: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
        available: 'Disponível em 4 dias úteis',
        cordinates: [-23.54533125157312, -46.638810378147696]
      },
      {
        short: 'Loja 3',
        local: 'AR. Palestra Itália, 500 - 116 - Perdizes, São Paulo - SP, 05005-030',
        details: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
        available: 'Disponível em 4 dias úteis',
        cordinates: [-23.525546200931146, -46.68045519048246]
      },
      {
        short: 'Loja 4',
        local: 'R. Oscar Freire, 969 - Jardim Paulista, São Paulo - SP, 01426-001',
        details: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
        available: 'Disponível em 4 dias úteis',
        cordinates: [-23.561540863473706, -46.66919593441319]
      },
    ]
  },
  mutations: {
    places (state, payload) {
      state.places = payload
    },
    list (state, payload) {
      state.list = payload
    }
  },
  actions: {
    searchPlaces ({commit,state}, payload) {
      let cordinates = payload.split(' ')
      let distances = []
      state.list.forEach((element, index) => { 
        let calc = (
          Math.sqrt(
            Math.pow((element.cordinates[0] - cordinates[0]),2)
            + 
            Math.pow((element.cordinates[0] - cordinates[1]),2))
          )
          distances.push({calc,index})
            
       })
       console.log(distances)
       let sorted = []
       distances.sort((a, b) => {
          return a.calc - b.calc;
      }).forEach((element) => {
        sorted.push(state.list[element.index])
      })
      commit('places',sorted)
    },
  },
  getters: {
    places: state => {
      return state.places
    },
    list: state => {
      return state.list
    }
  }
})

export default store