const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    return graphql(`
    query AllGamesQuery {
        allGames {
            edges {
                node {
                id
                platform
                released
                title
                }
            }
        }
    }
   `).then( (result) => {
        if(result.errors) throw result.errors;

        result.data.allGames.edges.forEach( game => {
            createPage({
                path: `/game/${game.node.id}`,
                component: path.resolve('src/templates/gameTemplate.js'),
                context: {gameId: game.node.id}
            })
        })
    })
}