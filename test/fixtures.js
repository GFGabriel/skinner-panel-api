const gameStates = [
    { id: 1,
    playerName: 'Geohen',
    gasLevel: 100,
    ventAmount: 0.01,
    resources: 0,
    filterCost: 10,
    filtersOwned: 0,
    autoOwned: 0,
    autoCost: 50,
    increasedBy: 0,
    secondGame: false,
    thirdGame: false,
    fourthGame: false },
    { id: 2,
        playerName: 'MXC Romano',
        gasLevel: 100,
        ventAmount: 0.03,
        resources: 0,
        filterCost: 10,
        filtersOwned: 2,
        autoOwned: 0,
        autoCost: 50,
        increasedBy: 0,
        secondGame: false,
        thirdGame: false,
        fourthGame: false } ]

const gameState = {
    "id": 3,
    "playerName": "Trap Fozz",
    "gasLevel": 100,
    "ventAmount": 0.01,
    "resources": 0,
    "filterCost": 10,
    "filtersOwned": 0,
    "autoOwned": 0,
    "autoCost": 50,
    "increasedBy": 0,
    "secondGame": false,
    "thirdGame": false,
    "fourthGame": false
}
module.exports = {
    gameStates,
    gameState
};