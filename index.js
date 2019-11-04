const express = require('express')
const teams = require('./teams.json')
const app = express()

app.listen(1337, () => { console.log("Listening on 1337..")})


app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:filter/', (request, response) => {
    let result = teams.filter((team) => {
        let filter = request.params.filter
        return team.id == filter || team.abbreviation === filter
    })
    response.send(result)
})

// app.get('/teams/:id/:abbreviation/', (request, response) => {
//     let teamsByAbbreviation = teams.filter((team)=> {
//         return team.abbreviation == request.params.abbreviation
//     })
//     response.send(teamsByAbbreviation)
// })

app.all('*', (request, response) => {
    response.sendStatus(404)
})