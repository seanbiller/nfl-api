'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    return queryInterface.bulkInsert('teams',
    [
      { id: 1, location: 'Buffalo', mascot: 'Bills', abbreviation: 'BUF', conference: 'AFC', division: 'East' },
      { id: 2, location: 'Miami', mascot: 'Dolphins', abbreviation: 'MIA', conference: 'AFC', division: 'East' },
      { id: 3, location: 'New England', mascot: 'Patriots', abbreviation: 'NE', conference: 'AFC', division: 'East' },
      { id: 4, location: 'New York', mascot: 'Jets', abbreviation: 'NYJ', conference: 'AFC', division: 'East' },
      { id: 5, location: 'Baltimore', mascot: 'Ravens', abbreviation: 'BAL', conference: 'AFC', division: 'North' },
      { id: 6, location: 'Cincinnati', mascot: 'Bengals', abbreviation: 'CIN', conference: 'AFC', division: 'North' },
      { id: 7, location: 'Cleveland', mascot: 'Browns', abbreviation: 'CLE', conference: 'AFC', division: 'North' },
      { id: 8, location: 'Pittsburgh', mascot: 'Steelers', abbreviation: 'PIT', conference: 'AFC', division: 'North' },
      { id: 9, location: 'Houston', mascot: 'Texans', abbreviation: 'HOU', conference: 'AFC', division: 'South' },
      { id: 10, location: 'Indianapolis', mascot: 'Colts', abbreviation: 'IND', conference: 'AFC', division: 'North' },
      { id: 11, location: 'Jacksonville', mascot: 'Jaguars', abbreviation: 'JAX', conference: 'AFC', division: 'North' },
      { id: 12, location: 'Tennessee', mascot: 'Titans', abbreviation: 'TEN', conference: 'AFC', division: 'North' },
      { id: 13, location: 'Denver', mascot: 'Broncos', abbreviation: 'DEN', conference: 'AFC', division: 'West' },
      { id: 14, location: 'Kansas City', mascot: 'Chiefs', abbreviation: 'KC', conference: 'AFC', division: 'West' },
      { id: 15, location: 'Los Angeles', mascot: 'Chargers', abbreviation: 'LAC', conference: 'AFC', division: 'West' },
      { id: 16, location: 'Oakland', mascot: 'Raiders', abbreviation: 'OAK', conference: 'AFC', division: 'West' },
      { id: 17, location: 'Dallas', mascot: 'Cowboys', abbreviation: 'DAL', conference: 'NFC', division: 'East' },
      { id: 18, location: 'New York', mascot: 'Giants', abbreviation: 'NYG', conference: 'NFC', division: 'East' },
      { id: 19, location: 'Philadelphia', mascot: 'Eagles', abbreviation: 'PHI', conference: 'NFC', division: 'East' },
      { id: 20, location: 'Washington', mascot: 'Redskins', abbreviation: 'WSH', conference: 'NFC', division: 'East' },
      { id: 21, location: 'Chicago', mascot: 'Bears', abbreviation: 'CHI', conference: 'NFC', division: 'North' },
      { id: 22, location: 'Detriot', mascot: 'Lions', abbreviation: 'DET', conference: 'NFC', division: 'North' },
      { id: 23, location: 'Green Bay', mascot: 'Packers', abbreviation: 'GB', conference: 'NFC', division: 'North' },
      { id: 24, location: 'Minnesota', mascot: 'Vikings', abbreviation: 'MIN', conference: 'NFC', division: 'North' },
      { id: 25, location: 'Atlanta', mascot: 'Falcons', abbreviation: 'ATL', conference: 'NFC', division: 'South' },
      { id: 26, location: 'Carolina', mascot: 'Panthers', abbreviation: 'CAR', conference: 'NFC', division: 'South' },
      { id: 27, location: 'New Orleans', mascot: 'Saints', abbreviation: 'NO', conference: 'NFC', division: 'South' },
      { id: 28, location: 'Tampa Bay', mascot: 'Buccaneers', abbreviation: 'TB', conference: 'NFC', division: 'South' },
      { id: 29, location: 'Arizona', mascot: 'Cardinals', abbreviation: 'ARI', conference: 'NFC', division: 'West' },
      { id: 30, location: 'Los Angeles', mascot: 'Rams', abbreviation: 'LAR', conference: 'NFC', division: 'West' },
      { id: 31, location: 'San Francisco', mascot: '49ers', abbreviation: 'SF', conference: 'NFC', division: 'West' },
      { id: 32, location: 'Seattle', mascot: 'Seahawks', abbreviation: 'SEA', conference: 'NFC', division: 'West' }
    ]   
    )
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.bulkDelete('teams', null, {})
  }
};
