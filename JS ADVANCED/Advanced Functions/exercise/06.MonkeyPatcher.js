function solution(args) {
    let res = [];
    let upvote = this.upvotes;
    let downvote = this.downvotes;

    switch (args) {
        case 'upvote':
            this.upvotes++;
            break;
        case 'downvote':
            this.downvotes++;
            break;
        case 'score':
            if ((upvote + downvote) > 50) {
                let inflated = upvote >= downvote ? Math.ceil(upvote * 0.25) : Math.ceil(downvote * 0.25);
                upvote += inflated;
                downvote += inflated;
            }
            let sum = upvote + downvote;

            if ((upvote / sum * 100) > 66 &&
             sum > 10) {
                res = [upvote, downvote, upvote - downvote, 'hot'];
            } else if ((upvote - downvote) >= 0 &&
                (upvote + downvote) >= 100) {
                res = [upvote, downvote, upvote - downvote, 'controversial'];
            } else if ((upvote - downvote) < 0) {
                res = [upvote, downvote, upvote - downvote, 'unpopular'];
            } else {
                res = [upvote, downvote, upvote - downvote, 'new'];
            }
            return res;
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 0,
    downvotes: 0
};

solution.call(post, 'upvote');
let res = solution.call(post, "score");
