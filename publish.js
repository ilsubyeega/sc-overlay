const build_prefix = '__sapper__/export';

const fs = require('fs');

fs.writeFile(build_prefix + '/CNAME', 'sc-overlays.ilsubyeega.com ', function (err) {
    if (err) throw err;
    console.log('Saved CNAME.');
});
fs.writeFile(build_prefix + '/404.md', '---\npermalink: /index.html\n---', function (err) {
    if (err) throw err;
    console.log('Saved 404 Fallback.');
});

const ghpages = require('gh-pages');
ghpages.publish(build_prefix, {
        message: 'Auto-generated commit',
        user: {
            name: 'kr512-bot',
            email: 'sob@kakao.com'
        },
        push: true,
        history: true
    },
    function (err) {
        console.error(err);
    }
);