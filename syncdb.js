const Guild = require('./models/guild')
const Infraction = require('./models/infraction')

// Guild.sync({alter: true});
Infraction.sync({force: true});