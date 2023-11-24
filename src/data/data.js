import React from 'react';
import cnnPhoto from '../images/tweet-profile-photo.png';
import verified from '../images/Verified.png';
import replies from '../images/Tweet-Replies.png';
import retweet from '../images/Tweet-Replies-retweet.png';
import likes from '../images/Tweet-Likes.png';
import shares from '../images/Tweet-Shares.png';

const fakeTweets = [
    {
        photoProfile : cnnPhoto,
        userDetails :[
            {
                name : "CNN",
                statusUser : verified,
                userName : "@CNN",
                separator : ".",
                timeToPublish : "7m"
            }
        ],

        textTweet : 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
        photoTweet : null,
        tweetActions : [
            {
                tweetActionsReplies : replies,
                tweetActionNumberReplies : 57,
                tweetActionsRetweet : retweet,
                tweetActionNumberRetweet : 144,
                tweetActionLikes : likes,
                tweetActionsNumberLikes : 180,
                tweetActionsShares : shares
                
            },
        ],

        photoProfile : nyPhoto,
        userDetails :[
            {
                name : "The New York Times",
                statusUser : verified,
                userName : "@nytimes",
                separator : ".",
                timeToPublish : "2h"
            }
        ],

        textTweet : 'Gardening boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land.',
        photoTweet : null,
        tweetActions : [
            {

                tweetActionsReplies : replies,
                tweetActionNumberReplies : 19,
                tweetActionsRetweet : retweet,
                tweetActionNumberRetweet : 48,
                tweetActionLikes : likes,
                tweetActionsLikes : 482,
                tweetActionsShares : shares
                
            },
        ],

    }
]

