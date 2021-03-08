var ghpages = require('gh-pages');
ghpages.publish('__sapper__/export', 
    {
        message: 'Auto-generated commit',
        user: {
            name: 'kr512-bot',
            email: 'sob@kakao.com'
        },
        push: true,
        history: true
    },
    function(err) {
        console.error(err);
    }
);