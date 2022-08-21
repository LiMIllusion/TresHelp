const vm = new Vue ({
  el: "#app",
  
  data: {
    FirstTeam: "First Team",
    firstTeamPoints: 0,
    firstTeamPartials: 0,
    SecondTeam: "Second Team",
    secondTeamPoints: 0,
    secondTeamPartials: 0,
    addMode: true,
  },
  methods:{
    addFirstTeamInt(n){
      this.firstTeamPoints += n
    },
    addFirstTeamPar(){
      this.firstTeamPartials += 1      
    },
    addSecondTeamInt(n){
      this.secondTeamPoints += n
    },
    addSecondTeamPar(){
      this.secondTeamPartials += 1      
    },
  },
  computed:{
    initialFirst(){
      const TeamWords = this.FirstTeam.split(" ")
      let teamInitial = ''
      for (let i = 0; i < TeamWords.length; i++)
        teamInitial +=TeamWords[i][0] ? TeamWords[i][0] : ''
      return teamInitial
    },
    firstPoints(){
      return `${this.firstTeamPoints}${this.firstTeamPartials>0?  '+'+this.firstTeamPartials + "/3" : ""}`
    },
    initialSecond(){
      const TeamWords = this.SecondTeam.split(" ")
      let teamInitial = ''
      for (let i = 0; i < TeamWords.length; i++)
        teamInitial +=TeamWords[i][0] ? TeamWords[i][0] : ''
      return teamInitial
    },
    secondPoints(){
    return `${this.secondTeamPoints}${this.secondTeamPartials>0?  '+'+this.secondTeamPartials + "/3" : ""}`
    },
  },
  watch:{
    firstTeamPartials(newValue, oldValue){
      console.log(newValue)
      if (newValue === 3){
        console.log("A")
        this.firstTeamPartials = 0
        this.firstTeamPoints += 1
      }
    },
   secondTeamPartials(newValue, oldValue){
      console.log(newValue)
      if (newValue === 3){
        console.log("A")
        this.secondTeamPartials = 0
        this.secondTeamPoints += 1
      }
    }
  }
  
})
