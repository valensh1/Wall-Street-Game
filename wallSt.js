//-----------------------------JQuery DOM ELEMENTS and Variable Declarations---------------------------------------
const $startGameButton = $('#start-game');   
const $closeStartModalButton = $('#close-button'); 
const $p1HedgeButton = $('#p1-hedge');
const $p2HedgeButton = $('#p2-hedge');
const $modalBox = $('.modal-instructions');
const $stockSymbolsSection = $('.stock-symbol-section');
const $stockSymbols = $('.stock-symbols');
const $facebookImage = $('#facebook');
const $amazonImage = $('#amazon');
const $appleImage = $('#apple');
const $appleImages = 'Apple stock is the best';
const $netflixImage = $('#netflix');
const $googleImage = $('#google');
const $starbucksImage = $('#starbucks');
const $player1Money = $('#p1-money')
const $player2Money = $('#p2-money')
let $modalMessage = $('#modal-message');
let $keepTradingButtonP1 = $('#keep-trading');
let $keepTradingButtonP2 = $('#keep-tradingP2');
const $modalPictureSpot = $('#modal-picture');
let $modalPictureMessage = $('#modal-picture-message');
let $moneyChangeMessage = $('#money-change-message');
const $moneyChangeContainer = $('#money-change-container');
const $leftArrow = $('#action-buttons');
const $instructions = $('#instructions');
const instructionsGuide = `This is a 2 player game in which the objective is to see which Wall Street trader can reach the goal of hitting $1M first without losing all their money. Click on the Trade Stocks button to start each trading day but don't be too greedy. Each trading day is a game of chance whether you will be successful for the day or encounter a stock market crash or some life event that causes you to pull some money from your account to pay for some expenses. At any point you can take the day off from trading and hedge your positions which will keep your portfolio value intact and let the other player start trading. ARE YOU MADE FOR WALL STREET? GOOD LUCK TRADING!`
let marketMove;
let eventMover;
let StartingMoney = 100000;
let TargetWinGoal = 1000000;
let $targetMoneyUserInput = $('#target-money');
let playerTurn = 'p1';
let fullPlayerSpelling;


//---------------------------------Modal Section images and GIF's----------------------------------
    
    // MAKING MONEY/ DOING GOOD MODAL PICS & GIF's
    const jMaguireShowMeMoneyGif = $('<img>').attr('id','picture-modal').attr('src',"https://media.tenor.com/images/c540b38e374734bca5d2bc3ae2586631/tenor.gif");
    const jMaguireShowMeMoneyGifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Jerry Maguire Show Me The Money.gif");
    const wolfofWallStreetBossGif = $('<img>').attr('id','picture-modal').attr('src',"https://media1.tenor.com/images/0401da829e281f6b8a7a91cb6b206059/tenor.gif?itemid=11991694");
    const wolfofWallStreetBossGifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Wolf of Wall Street Boss Feeling It.gif");
    const wolfofWallStreetLeonardoDanceGif = $('<img>').attr('id','picture-modal').attr('src',"https://media2.giphy.com/media/EJMyMO22UxP68/200.gif");
    const wolfofWallStreetLeonardoDanceGifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Wolf of Wall Street Leonardo Dance.gif");
    const gordonGeckkoGif = $('<img>').attr('id','picture-modal').attr('src',"https://i.imgur.com/erLX2DQ.gif");
    const gordonGeckkoGifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Gordon Gekko.gif");
    const pDiddy = $('<img>').attr('id','picture-modal').attr('src',"https://external-preview.redd.it/27Ux5UNLdcQui0zEYzCVubSdhN_m7govbW4CPnCCwgY.gif?s=24e32600c4d12adf72c4c45b71070eca28bc13e7");
    const pDiddyLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/P Diddy.gif");
    const jimCramerGif = $('<img>').attr('id','picture-modal').attr('src',"https://media0.giphy.com/media/AgHBbekqDik0g/200.gif");
    const jimCramerGifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Jim Cramer.gif");
    const wolfofWallStreetFlexingLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Wolf of Wall Street Flexing.gif");
    
    // LOSING MONEY / DOING BAD MODAL PICS & GIF's
    const stockCrash1Gif = $('<img>').attr('id','picture-modal').attr('src',"https://thumbs.gfycat.com/HorribleForkedGeese-size_restricted.gif");
    const stockCrash1GifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/StockCrash1.gif");
    const stockCrash2Gif = $('<img>').attr('id','picture-modal').attr('src',"https://imagesvc.meredithcorp.io/v3/mm/gif?q=85&c=sc&poi=face&w=500&h=333&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2016%2F02%2F27%2Fgif-of-leonardo-dicaprio-crying-in-the-departed-gif.gif");
    const stockCrash2GifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Wolf of Wall Street Leonardo Worried2.gif");
    const stockCrash3Gif = $('<img>').attr('id','picture-modal').attr('src',"https://media1.tenor.com/images/c3f4c3d9cb4241d4a695fe28f81438af/tenor.gif?itemid=3572004");
    const stockCrash3GifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Wolf of Wall Street Leonardo Worried3.gif");
    const workerStrikePic = $('<img>').attr('id','picture-modal').attr('src',"https://cdn.abcotvs.com/dip/images/3440823_050718-kgo-strike-picket-line-img_Image_00-00-04,03.jpg?w=800&r=16%3A9");
    const workerStrikePicLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Worker Strike.jpg");
    const collegePic = $('<img>').attr('id','picture-modal').attr('src',"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKChkZGiYbGycnJyMtLTMnLSYtJyUqJygrKicnKiotJSclJyUnJyclLSUlLSclIiUnJyolJyUlJyUlJSUlJSUBCQYHExMTFhMTExcXFhgZGBcVGRcYFxcYGBgeGhcaHR0dGBcXHRcdFx0dGB0XJRUdHR8iIiIVFSctJyArHSIiIf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgMEBwACAQj/xAA9EAABAgQEAwYEBQMDBAMAAAABAhEAAwQhBRIxQQZRYSJxgZGxwROh0fAUIzJC4VJiciSC8RUzkrIlosL/xAAaAQADAQEBAQAAAAAAAAAAAAADBAUCAQAG/8QANhEAAQMCAwUHAwMEAwEAAAAAAQACEQMhBBIxBUFRYXETIjKBkaGxwdHwBhQjQmLh8VJygiT/2gAMAwEAAhEDEQA/ANG/Eu7HSKgrEAawFwmYQtaNbPCnNQpM8jrpEl9BpGkJgVdOZTwtaFamJ6abLe5hQKVfFAi0qWzwtQpdmbXWcTVAtzWgfFlt2SIpDEEuzwmolqO5bvi2iiLOLg7w6cU+JyWQmuncYRabWynIePEusAU+0LH4YgxDjVcqTJzJ1JA7ngtDEOcdwQ6dUGyY5uMoSohxfZxHsY9LAzbCM1wUrqp2RQOX9xbTx2MNeLYJLlSlKkm24Jfy6iGawtqjtbaYTHN4rkAODHK4kQAFc++Mka8NFYhpCFd0LuzCAEEVZlPEniRMw5Ugv3QaweeVZgrm/nGccMpzTSIv8TY0qUn4cpQCyWJBuB7RynOeTuTNIyxaiFjSF/HwlKM28ZbJwmrlpE+VNvrrGjU6jUUiZi/1FN+/Qx3HEOaRY/RdZRIN7JURNLg7RZVXZZgUkR9/6cuUtlfpNwYhUAFxK7IBPUmWgpnoKwTFuIrVskLWQfu0C6WqEuZ0PrByXT5nXoesbFxC7lgz5KrNITIIFiBAHCatZp2ZyolvExPjQISowRw+SgS5SRtc+A+sebSsZ1n2Wd/kVJPlfDSkfuFzF6kxFM4htN4H1dMqYtRBtpFnh7DcsxSjo1u94YwovG4oWIeAjlYlCkE7QnqrPhljodIYsT7MwNoRcQpYhKJIIuAY5izLo4WW8MIaDxVk1xWl1ft+/lAWsxX4rHaLFXQLXKJR5QHoaUhBSoXgdOiCMx6L2IrAODR1Q2vX2ujQMw7/ALgfR3hirqBWQlPKFOWpobYLQlmG56qUHNNUrrD7w1VqC/hv2TdoQqCUS8OnD6WnJjFfgjUSmuVN+HVFr5hEExajK+I1wogjq7R6qkEVKSDuIIz5MwJUkN+rN8wYFUZYdFrDVNeqil06mFo+wVM7mI+Rjswj5iqGBIHxV9w94A4jJArOkNWDymmEt+33gdW0x/E5mtDpb3R5qKHaf9vqhdQj84d0KdfiC0zFJHONCqpGaYkpEKs/AZqqjOwyuDHqLRvC5iGkuPVEaGoS6U6ltN4vrmgEFOYAnKQQfPpAKjplS5sxZ2Uw6CGeUlUwkpLhvnG8liFREZfJUxk5iBuLy0qlKysSO0B1Tf2iVPCswqJKzcvF6TgHwtVE84JRpyYAuo9GgWuk2CE0tNJmdtiCoAkOQdOjRJXzJcmUrIkE7E3YmxtzaPdTLy30bQxdo6MVCAZnO0a7B0kQbahVa1YZd19OqzCVJJVDfXyT+DT4esOaOGZWsXzgyCjIdI46eCnsom+l1kMifNlAplAlaw1tQBqemrQNTgs0gqWlfWxP/PfD5XlEiepaUKISyGHO5J7i4i8nHZYlCYcwBszRwVOSdw+Ghok338EhYGsiYJKsxSrQXDK+hjYaujMumyp/an5wi12ScULlWv8AqZtvvxh+oa1JQELL2Z9X747Tw5eHGNLIWNxjabmsLhJkj2QejqlzqcKWm+kDp1IH8IM4vUZVJkSiEkjMo65U9OqtujmFmrwqfJJmSphVvlVvzDwlVwut4hO0KpgWlQqlq15Xh3Sn4gBSbNA/BzLqpQmos9inkoaiD9JTfDgbKJm+i7UrjjdJtVJBSpKnd4pUtTlBMzsjmbWg5jU5MnPMXoA7c+Q8TGWyaCsqyZrWVo5YNsw5eEEp0A4mbBZdVOouU+y8WlHsylAuPtobcFnBQbpGB1dDNkTMq3ChcEaeBjauF6kLQmZzSx7wbxttHK8EGyFUu0yLhW8Wl5pgHSKMmXLykFSQepEUeOK74Ut0lirs215lvkPGFDDKGSEH4zFZ3KtBHX0ASS4wiUXGBC0ihRLQlnB6i4gPWUJKsw0hCp6hdFUJCS8tZ08fbnD7U1uRJUssIE8RYXG5dNMF0nXeuRSWjJqiR+apI5mHeo4mCLAecK83HQVOlh4Rum13BZ7NoMyj+EUDU0xRF7jyiDAllM5B6tHrD8ZSQ3PVtPEfSDtLQyZRE2Y5Sz20B6kF4wxpLoRnNgSmeZRpWrMqLNPdTHnGRcVVpRNSqQo5FBwylajXU6wawHiKbNSd1pZ+o598Fq0i0AzIGqXa4SREFaVMpg5joGpxAEOTHQHtW8kwJ4phpk3MVpqbmLNJMCnIgfOqLmG31GwLpFouVHJUACTtCVO4qmzllFIhwLZ2+d7AeZ6R74uxIy6VQFishPgbn5CIuG1pkykpYuQ5ukXOtiXLdBGqJET6ImSSVWmYhWST/qUJKTuCPb3hzwcpy5k3CmI6RSxBXxSZKhZQb9JPi+gbzgNwhiKk56aZ+qWSAeYf784aw0F1xdBxYIbY23rQ1ThFZac2sD/jEAn5R7lVYIB2h5mHi4CQc+dVRqMNzF1HoOQHdE1BQmUSxdJu3XmO/lF1ZjkqaDF5IWYVkTim339iL0qaFB4W6qoIvtueUeaSsKpSpj5ATlSVbNYqIfmCw0s8JbQDWtBJAJIA6n8lFw74KixuaZUzMgOVByNdLFhva7QJGI9hlo330W/9IbU/KAFdWlNUpYVnAIGtjbtDzJ8YtDGEkH4SCFcybDm32Im1LEhWMO6WiUcSlCzYMB+3+IlmqCE2tAWmKkLQhWswjL0Lb9417xBCrQtAKVhjqO7oYr7Ka1rQJAce84Tf0XxH6vqvNRzoOUDKxwFhyniSl2Sr4tXOdeUskA9ALiGhMlCspCyMoY6HN984yg1qvxeZPNvDSH1FQVSlAAJLEW7oj7RPeMb19jscfxMB1DRPovfA1aEzJ8kENmzp5NoW7rRos2aRH55wSpNLUIWpw1j3HWN1kzRPYpIKfWJ20mvDu7JBEheB/wApe4vlZ5aUnRS0hR6ZgTHUsuekkAoKQLX/APHQBh3v3xb4sARTqKtLebiFjDkqmJExBLH9QCmAPWxdJ1b2hvDOJF0aiqXE4mqlJmTE5Sks9mL8mJt1gnwZXj4ZSdi/gRClxRXskSQrMXctoOg+kWOCZyfiKQrcOO8fxHcTIbmAnkuPdqEd46nApkq2BU/y+kRyK+SoOEpchld3TrDBxZTSJtNldiCC/JtvGEObhipTEBTNtvaN1GkAZhBOnss4OsHE5SDGvLVRY5UylTZSEWCT66ekXsZqVT5qJKSws/r7WhbpkPUjMLk6ch06hoZfwCZk4BSmLWLb8veB1GQW9Ci035gTzQjFabKvKH+kB1yWMNVdh8zOVapG5b57vCxO1174JScVyuwawo6YlJjUMLxDNLcs7MQfv2jLhd+8Qy0MwMU+HnA8S6LhawvBUeKK0TJgSAABygzwFIzVBDOMp9RCdiSCF37oZeC8T/D1aXuFAo82b5iGWDuidN6UrO7xK2r/AKYn+mOi1/1VMfID2lHi32WO0KBy56k6Fo+Zjzj5aPhUmJr280AnmkzjZBMhJ5LHoYsYNiEv4IWUgrAy5mdttrtE/E+U0yn5hu94znBKuZKmFKTY7bP/ADFHBA9n0JTGCqQeq2WVWTWG762AAHmTGWmvbEipBYZsp67GHeiqps1OUgITuwuYSa/huoTPVMlozJzFQYjm+lrwfDVRmTGMZ3bDqtdkS7dICy5RStSRo9hyEGKGYpmUGLff2IgKfzFHuj6Ki/Xoob2q0hJMfameEJJ5bc4mTYQn8R4l8OYgN2WJP35wLUrzzAJXjE8YWKV2D5ruOpgLP4iV+GEkJDhJGd+YO3O+r+EXMdr0miOU/qWO+zO/8wt4BIE6cAr9KRmU+ltB4n5CFMfhmVDlcyQDIHP83LuFd3QSd19yOUaadVMgg9oBlgapV1EC5tRKcoSSWFyBpb1hgq8LkuZsshKm2IyqG4I+/lE1Nw7K+ESHGY8+vUbtG34JshxmZ9VuljzlLREbv9obw5WrXPkyZhBCCSlW5ZJYF9+R6Q949VISZYWQASrx7B9yIzDF6IU8xGQnQ9o8w2jconwlRq6lKZqioAEly/QerwnicD/O2oHQ1to37/uvMdmYQQDOvCylwjhp5ipmYKD27j5XH8w80+HpTtAvCFJkzVSSdeZ3H1EMylMYJicC3NN41C8dpVGNy267wkfiyiyyioJF1J7wf5gXR16qSWFILr/ck3TrZuo6Q3cULBpieo9Yy2fO7B7or7N2XTqU3ueLAEAbrCUj+7qAgNOplx3lHcVxRVQAmaoObBO1+nuYrypChYOPcQsUsgLMPfDle7SJwc/tV/8Ak+0J7QwJfRFSnTDQ2RbeABJPOVT2fXyvLHvkmNbQZ+Er4tRsxZhp4xWw5WRYIs8M3FFQFTRKSLJ9dTC2JRCfKJtbChvZgnxAE8pJj2unqdWS8gWaSBzgXTrLnGaCkcrpMR0VUqWlUiZcN2Tyfb6QBpaopJUId8FrgqV8QpSolRYkOQzRV27hWUiP+MAwPv1UbZeJque9rQJN8xPsWhJ1Hh5XMWUAnKLd+0XaulWyVzOzsxBcndmvD8muWRqEjkkCEzF54m1CBM0BDvd0ltDzTqfGJ/ZCpBIIBkgmFQp1TTaRIMQLDefwoXWVaUDKFO/7RpbwHzvzhYUXN7HlByioQZq0TjlQFMSx7JdgoHYE2Lu4UO8UKzDlBZBaxZ9rb+O0Juw5aRvnQpx+IkEmwF/z7IaVOeRhswSlBLnb7+WsAqSlClZCWa9+QuXhuwWXZnsdfn62gVem42A0uei1h6zYzTY6IPxVJFm1DOdg/LpB3hOip5yAsp/NR59DHzH6RCadRV+o+xdu87mIuFHSkzAGs33zgmHAcwRobjosVqkOO9ammalr6x0BPx5FjHQA0m/8vZaB/tXp482jsscA1ztCVMFxA4qWAUscR0S1yTNUSlKQ4QA5JfVR0FtrmF/hjCTOUZn7RZ3vmttrpDrjc56ea/8AQfMW+kIHCuMinmss9hVj0Ox9j07ou9jDMoTVIwQtVk0RDRZr/wAuStSdQkkd4DiJUzgzwucVYoJdMpL9pfZA79T4D5tC1KmJTVWoYlG6WuC0JWNFJCvMRHOLKzXY2I94T+Ea0qkKQdUH/wCp08i8ODuOVtYoMqlpkf7SfZhyuu4hYxSklTphCtgw5h9WhhlzuzfXfaFCskJVMVMLhzqOlo27aTRFisVdlvcCAWzzmPZLnEGHJk04OZ7gAW5nXfSLGDpEqkzjVWp77DygXxGtcwoQCSh28QPYQbwNMtdMUc7s+h0I+T+MEw1aXZoMbpSuJwvcyO3awfrZVqmYkpymzwYrpuQS0JUbDR+6Bi6HMUpBu+/JxBPEqEldiLARSdXBIUmns3KxwBIvx5oBjy1KlJUS+U78jb6RBwjJmqmqVLGzZuTnrvbwgxV4QTTzVqUzBub727yBFHgKvyqWg9D15Qhj3jPNojyT2xqThRAMkknmYKv02DzhWFSiP1K3Ow8Y0FWgfugBUmYmaZoy5XdnLsfSD6QSkEkDeBvrNd4XAwLxuXcfRcACWkTMTvSrxMnJIZ3dQA+Zv5Rl9ceyfvSNI4yzFEsnTMbeFozevDp8Ys4Ef/M//wBfZL4XxtUuGyzlfnBaUspUCLHUHqIoUq2AHhBWRIMwsCByKjlB6Amz9Ir4LJTotaSIAvPug1y91QwDJNo15KhNlKLqdzqTzJ1gzT0TS0qmgMR2UksVNuwvlJ0Nn2hhpMOEtKBOQguVqffsozAEgsUnfuaBtdPJUFr/AKr92jcmGwFmj5j9Rup1HNLLZQbiIIBtEefqrGyC9gIfv3HUcUsoDlobMKnBEljYA7DdWg8YVUBIWQ+hbytBqnrpaf8AtqJSNS1/GNfqi7aA1zAA+yzsURUqu4AwN8mUYnzikE66/WB1VQfiJCSksvUH29ItTZqFIUxBDdxBvsbjWJ8OUBLCeVo92YPSCPj7IXaQDxJB+fug03FPgzMoTqgBSSXuHALFiXHIqiwJ6fgqU2dZ1IAAT0BL6DRhrvCliOIKmTVKBs7DQ2Fgz6c7RJg9WROSFFwS17hzYfOJXYSQ0k5QbXv+dFRNXuzHePi4H7ndcq/S061TCSnKFAjLflbW/nrygnha7EdW+UHpoSGO8BKOWQtQ3KnDcjpFJuHAcCOBB9kma0tI5gj3Xnii8lPU6dXeGLDJRlykoazP1BN/KOqMPBlj4lljtIQzq01UP2p778ou4ShU0gDx6RIxADCQNOSdoHMJKJLwMr7TqDgaFhpHQ6oYAAR0Tzg5v2nwjfuTwSLGfY1iNXJmlGfsm4snTbbbTwjRQRCLxLKE1yP1J0HMfXpHtlM7xO76pSkxDKKqqKlM2US7yy1hq4YWb9TNADEsJm0qgmazkOCLjqO8bw58IoKJalm2Y25sPsx540rEqkJSf1ZgU9zF3/nWH24nvxuTbsP3JOqUqPG58kNLWW5G48AXbwijU1i5qs0xRUeZ9uQ6CBoeOYwxbWEtJ4p54OnkTZgG6D8iG9Y02SXQmM04GlOuYroE+bn2EaRT6NyMccUSmq8oKWO0Wbbu57x6+Chcm42hYrOJQJy5TZTmy3u72s3PaGkLAkv0hGqCIlUKbgRI5JOnFMudIRokJmTDu5UFM/cAIqTMIKJaFyXOe5D6HQt5QDXVKVOzbAEeBUWhioq1X4Yj+lVh0Jf6xcw9KwI1mPQBfPYuvDjItGo5koQqXUS5qbLF+T7+MX6zE5yZygTyZxtbuidWLLE1JGhbv3grMxSXMZSv1J1BD23g+U5tEt+4bk8SHLq5k+RMSOTsByEJmETly56UJHacg9XZvK8aLVyVLkkUwJJLcg3Xwj3gmBJpiZsxjMPLRI5A9dzCG2HjfrwVDYFIkCJjiidTLUJXa1iemnMAxGmnZ9i/nAHF8UR+kkB94JyKunV+lQP+4H+flCezGeI7jC1+qn+AA3Ek+yHcV1WZKEs4cl2Oo/5hBqKcLSrKbpAI1v2gLv32jVpUxCpgAOYMXu/KFHiCZkmFAAysCediW8N4q4TajyRhg1oBIl151kn0S+GwQbSFcuJMG26bgJUUMir6H1hm4fxBQmfCUXSxISQFJJ7jp3i8BezMTHrDpP5lzdIJF2fQN5Exd2xhc1ItBsfCeB/PqlNn4rK8OIuPEOIWpypskpyjKkcgAGfVmhVr8NCyyZieW/g3WBn4cleUkuSoC9+yhSj0O3PaBGJ00xDdphe277n0j5BuGqMfkBBJvxCvHFU3tzFpj0K8VFKlJvqLONXHrFzBKhlql5XBvyP084XETFMwPiY9NMllKnsdwfOLO08SHhnd8F3xxt7f4UrD0y0nvG8hs8CnvFkoMs2LtvYi2nI/OKwquwSn+kkeWsdS4pKWjJM7XNzr99IsSpdKQEh25ZomHa7ZPdIVBuynQO8CsyE4xZowtcxKUB1Ehu940ORg1C7ZSf8Aco+kW04dTSyVU47TEOFg5Hs+VZB8riFG4wc0d2BdG4+aiqcfTJWUIloWRYqVmLq3YAgMNBFWZxTUr/SUo2dCQD/5Fz84D1uGrlKA/UDoQCX6dDBCmwRShmmWH9P1+kYqY0m5cYUmjgqr3FsFvHcAmTCHQXU5KtVFQJL+Lw40aGDi0IOBzEioMkF0gZh0PLu3EPqFWyiC40hze6IGVPUaWSWk3Flb+IecdA9zHR852q92hQ7OIoqqBlULZrh28IkCopVlKV3SQO+H9nVw0kExPyhYeqAbpPqMXUlKspZQex2Ol+7bq0LUiozOmYSQrUm7HZX+069CRvDJxBSrTJzKZyQDb1Op8TCOExVo04TNeoSpinKWO1ukfXj40fRBkFaLwQn8uYf7h8hD7L1MIXBZ/Kmf5ewh5mi2/hHCis0WbYnQBc2onD9ikkeYJ+UN+I1WWjzDcN52iimUFU9Qdcyll+bD2aIsTH/x4I2y+ohYuzVIO5wHlZdwbyG1Okj3QUYexWpYZykIS7nKEm48SILVuF/ClpKTyBHf9DA2Xh82onIVLVmSADrlKdyDrofOLmNmokNmdSTdj7KH/MWmHhxlTnARfhCEU6FiehLFwbW74d6HA5PxCtZzKb9I/T/Pm0KVDiaVzUlyFMzEONNT3QamYxLlqylWn7mN7ancnYJ/SOsA2jVqf0THEIuzMPSjvxO6dE4Tp6UDKkN0AjN8bxWeUlQskFiNxffvGh0g1IxdHxcyplmsMp+3MLWJ4gJs6Z8NHYYBT2d2Hg+28K/soHfEuKZG0A6zDDBbh+BCK6QUTGJzAgKSeaVBx/PWBVQki8H8Xnyz8NKElOUNcghtgN7F9doBzg4hhg7kEQRuS9WM9jI4pu4GV+YruHvEuMzgqqIPJh1YmJ+GqMyaxcvZgR3G4gBj0wqJOmVah1cnboG84W2bislcVAM0AH1CbxVLPQyzEz8qRcjKXSPoe/2iKegKDiPNFWZxlV+r1/mLCksX2OsfeUHsqMzNu12o4H6L5Z4c10O8Q0PEKCkqFypiZn6mcMTsoEH1iebNVMVmVr6DkO6K82aAUjmYkeBUcLTD3OEZhAPK0+6NVrPLQNxuEHqUqSSB+nWPvxCqWUNuG9PnEdZU5iw0Hzi1hErNNSnmpP8A7CPlNqVwKjywyL/FwOW5VcPSlrcwvr+c1UoqRZnfCu4JBHUW9YI1lAUhQBJKQSeQ6d/pDz/00S6qdN5kEeIc/MxDiNKESZvPKSfrGMFhw6nnI1Ej0Xa2JIcAPNZ9hVbMSsJCmD3c2HjYjwMHZnEag7XOxVkUbHmU5vAnxhUUiPGWEX0AU4KzhYOj3+U0DiueAyWizJrJtQHzG1226gwryqdR0BMHMPzU6wpQ7JLHo8EwmGZmEgLmIxL8viKM4PJ+DUJIOp3OxB1PT2jSZWKSSvKlQKjsL+cI+JU4yhQ+wfv5xZ4Tp+2tfKw7zDG1GBrHO4C3XclMPVMgJ5aPkeisR0fHZeacyBL4ETDSIUmPalWMPYBmZ4CUoNkr5iGBCrlCWVFIHacB31Z/OEOu4GqEHsFKx3sfI+xjXqMxfVKBF/SLwTD9V+aKmgmyi0xCk94Pv9Yqx+k5iQkMdPMeWo9IqS8OkquUI/8AFP0jsLKzPgyb2ZieqT6iNBqVlKSoNYPfpHrEKJKMpQAHLMAANRyAiCsU6Fjo3nAcS+AmMMyYQ2mlD8CRpmQpR6ZnPyeLWFyUKpEylsykgX37O3XeKWNJyUSgP6APQQu4ZiomSUy1LCFJUFJJ0dOym/aob7GFMMCcz/7iuYNwuDvCs8NYiinWUrs9gWtYnfbxhlOIonPmDPsdGhSqqb85eViHcab35s19opTTMldpN+advk7eEfUUqQIzHUgaahQca54JDCLEiHaHz3I0MElmpBS6RyGmh0eIK/BM0whBO2oEL8jiEomZl5gH0F7eYi9P4pC1Epz92nvAQ5pPjA9VqXhgHZknkRHqnPCeHJKSSsZi2pNvaBtbSylSZypQH6jp/Ywt01gArE50wakA9TfvLekMmCSv9OUlrlXztCO3+4wPB/rb571vZ7jEOEG++VmNTNJF9ojJ7MXaqmbMNw4PhFBK+zB3XvuIkJhpt0K1+lYrlTh+5IB8A49TCTxlQmXMd3CiVJHJ7kNprvreGvD5oRTSVEEsB8xaBXGMwTJar3StJA3CVo9yIg4E3PUj3VZl6cdfus6CItJxOYmymUOuvnEMuIpiIs0MS+ndji3pp6aJCrSa7xAFSVNbnazNHTqxSwxsOURVtKZUxUs7FoiEcdj6jsxLz3ozRaY00Xm0GiIGmm+F6Uks+zt4wx8KIKqlLDTtE9BAyqllNPK/uK1f+qfaGTgZP56lck+pH0hDE1IpuPIj6IjinXEDnBPP0gdWrC6UqOpGU97sfSLvENemQEKKXCiQW2tyhanVCVSezdJXp4PpFHB4xjqQLbANiN9rJQ0TmE8dUufg0jb5vHS0oFm35RfmJDWT6QKE9RUUpDe3tCZTqvpSo20Hf9PrBGRTOMpa4Z4pyZQGtzzN/vwEMGGywVgdY6x+Ug8Nei49sghfaKfmplS12Ui1+lxB7hdDSSeavSEiWc2YK/U5fvjQOHW/DpG9/WNbef8Aw20JCXwg73qjdo6PLR0fKQn0thUSJU/l7xCDFhDAWips4Q/yKTwwumTDFumDSSIVMNmsQk7pfyN/UQ1ytIs7kV+qC4wSnKoc2PcR/ET0+kV8eDJT/l7GOpV2jq4q2NTGCP8AMesVZ1OlclXMu/kw8g0eMWW8yWORzeQgBS1qgSAq61ghIYsAka6gFg5ELY7RNYQwCSvnEiyKQj/ERlYXZhGn8YzWp76qUPleMylpc9ekF2M3uHmTdIV9U64fJRlQpO6QfG4PpBqplAoL8ooppDITKSrUpc9+Z/eCy0unwi3gHgsBBnUe6n4od4rPJtApYVlDt6CKdBJcxomB07qmeHzhPoqcCYoDZRHzhWZrubHhDT6iUVr/AOMHijMunISIZMPltLDdfWBBSwhlw9hLSDq3reE/1Yf42ji74B+61s5kk9EiYvSK+MrKCyr/AFhPToY3EgPeMaxGR8OctHJR8jcQpsvG5gGH+kQDxCaqUok8Vq+HpCpCAzgpHpCfxUn4ZCClwR2VucwY/pLWUnkDcc4bsAL00vuirxXh3xKcqGqO14bxNwrslU3tmI90dsgWWVSTFqnS8xI/uHqIooN4uS15VA8iD5GLbxYhDCI8XystUTzAPt7QtiHHjkD4yCN0e5hNSIVwR7jei1CZ8ckZZFN/gfmQfeC/Ap/NmD+0esW+LKNqZB/oIHgQ3sIG8EKaeoc0e4gOYOoO8/mVwtuE08XSXkBX9Kh83H0jPqc7xpfFJekX0Y+ShGaSUERnZPg8ytEIgpdo+TKPKlEyzLfbQpLejRA8Ma0BVCk7pWR5kuPmIZrPIy8zB9/qvBDpSYYMJQ8xPn5QAkCGPBT+YB0N45i/A7oV1iXsdlmRUqA0V2vPX5vB/heqJCkeMUuNJPalr70+/wBY+cJh1qPT3jZdnwhnh7gwlcsVAngkx8jikx0fN9mnIQYJMcLaR6IMeUpG0PzlIISxsQpPj5FylbZik9yrerQ/yDaM5nodLci8P9Et0A8wIs0XyJR6nFU8dQ8sf5D3inTaQVxj/t+I9YDBwgnpBAsBDKhWaYpWw7I9TAijkBGU75i3eQfpFiTUZkt1v4n58omrKd0htlBXqPeF68EE8iiusEs8Wr/LS7nte0JEiaUkEBmLiHniGmmTUAJDsX+UCaPBw35oV9I9s7EtbTAJjWyXdTJO7zTLi060pfN/mAYsCZ2fCBvEBKESwFAgHl0+TRCcQBQ28Uth1B2YGlzHSUljm3kIphCxnWH1Y+A/5hWlpy1ExP8AcfmXhi4fS6FKOpPpAPFJRlVYVssA+3tC9PEj92/mAPQBaFL+MDqUXq0kIJ6Qwo/SG5D0gJNZSCnflBOiDykkvpGP1YyWMPAn3H+F7Z5iVYM3eMx4kltUFWymPsY0opDQGrsD+OpKlkgAEMNX7zoIh7LrZHydIunwC6y+8N1v+nSD+0keEHps9KgQdD6QFosOMpOQEqSDYs1uUWVrvv5QLGGXuI0JkQugkW8lmWKUHwZpSNNR3GKo0hq4qlulCyLuz/OE+LWDrFzQTroVmExcUTs4kK3MsP5wtyAMwfRx6wcxxK/hyCWbIzjnq3gG+cApSmIPIiM4fw+vyV2VseOyTMploTckWHcRaM64bnlFSkNr2T4xoYLnW28esO4doUnOoqUsF3Ja+ughPZbszXtJEdeS4+pooOJZr0swdB6iMzp1uA8aXUSUzfyiWSbE9HiDiLh+llSfiSeypLOHJzDTwPUQTZbYY4E6OXTUkpKMNlJMzUSwWsfodIU5Re335wyUKimRNHR/kXguM0H/AGB91pqoyVdIZsFPb8D7Qn09QPCGTCpqfiEX0ducdxp7h6LzFZ4sSDI7lCKPCf7j3e8X8XpTOl5Eu7g+G8dhOHGnBCiHLb7QCjWaMM9pNybDzCy6kc4dFhqjS9dTHRwXHRJRsqHaxGidry9Y+pUDHlUks40aHSEm4FfRNh9w+WyE2uwc29y8Z7Kklw8alIDBod2W8kEcFqm4xCoYmrsMxv3X7r6wNkLBGXbkQQfF7eRMT4tdSU+Me6ZIGw+/GHQVsJUm0qSS3M90dLpwP+bR7WllnvPrH1Mt936PaIr3G4my6uMvkfvrEmQEsPP79YrzPsRYks1vHnGV5rdyEcQUrySrcEH294SZXXlGk4gv8hYOhSddozGTOvFrYrrQePyg4tkJ04eV+UbuX8YF8UuFSi2x79RE2FVolLCGssBiOYJDRHxUppssF2A9T/EY/bEYqToZIPKIWARkVuXNzywVBw1ljUdFDW0EsJLyg92JDwuSJnw7bGDuCKypV/lD36hb/CTwI+31QMH4kdKCHiZEwgR5EyOzJOsfKgqm0KMqdyTEHxDo8TzSB9IiU5HT71jJK9l5pP4tUVSkE/1exhHaNE4lRmpj/aQfmx9YzxMWNkOlnQlYcE0cUTAaeQAzM4b/ABEJkoXHfBzGJ2aTIHJKrf7m9oFUEvNNQnmoD5iNUBDfN3yV5bN+GLAC/jHlcnLs8WFzw77d0e1L3F9oiBqIKYVJCli7eW3nFTEUASpilAqGU23+x7QY+KCbx4mgKSruPzEaY646rxprI5UxWhD9Hhw4elpXLmaszNrZjCoCWbaGfhnVabCzm9iOnvFXG+C3L5WQkuWbw6YBLuVPYDTkSYTUDteMaHw/JaWSf6m8h/Mcxp7hWmhGMpPdE6W5W7o+GQrXnHJSR3d8SsqI0KQoTHRUZW/rHR2AiT/aqoSGj4J4NhtHR0Nu3+SUcvCFETB3j1jT5Jjo6GtlaO6hDagOIq/1CR/b7xYzsknkH+UdHQ0zR3U/C6EoSXvm/wCd49y1F2EdHREcthSKmauIspRooW6R8joKURg1VeplOgoNwq3W/LlGUzJKkqKdWLR0dFDYty4HhKDjbQjWDmYpg3ZCtXFt++CXEDKKc3LXx/mOjoYoVS7EgG4DSB6IFZsUzHIoRKmkoAO0H8CqmzvfT1aOjoe2xei7p9Ql8L4wmNSCzgx9y6B4+x0fIuVVetS3393jkLSXb75x8joy5eBVDFKb4klaRYlJ+Vx6Rk6THR0VNj6HqFmso6lJs/K3c593glw9KeoRfTteUdHQxXd3XdCsgLUkywzGJkqDENYFo6OiIAmAF9TlVqIkSp7eHl96x0dGmNRC1ZVUgJnLQNMxbpfSD+BJCJiyvTIX7rR8joqv8HkPolW6pRlJdTbRrGCpEuQkav2vE7eDNHR0A2k6GjqtUiiqhv8AYj3d2jo6ECN6YauUhz/EfY6OjyJC/9k=");
    const collegePicLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/College.jpeg");
    const dentalPic = $('<img>').attr('id','picture-modal').attr('src',"https://media1.tenor.com/images/a93d613a9e2777d7560d10ad3df43bb1/tenor.gif?itemid=10187331");
    const dentalPicLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images//Gifs/Dental.gif");
    const brokePic = $('<img>').attr('id','picture-modal').attr('src',"https://media4.giphy.com/media/ZGH8VtTZMmnwzsYYMf/200.gif");
    const brokePicLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Broke.gif");
    const jimCramerSellGif = $('<img>').attr('id','picture-modal').attr('src',"https://media1.tenor.com/images/c303a3365b830959e1e9a5fa3a57bffd/tenor.gif?itemid=10102725");
    const jimCramerSellGifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Jim Cramer Sell.gif");
    const angryWifeGif = $('<img>').attr('id','picture-modal').attr('src',"https://i.pinimg.com/originals/70/81/0f/70810f656b0c1839b54fb6e120256afb.gif");
    const angryWifeGifLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Angry Wife.gif");
    const hospitalLocal = $('<img>').attr('id','picture-modal').attr('src',"./Images/Gifs/Hospital.gif");

    const makingMoneyModalPics = [jMaguireShowMeMoneyGifLocal,wolfofWallStreetBossGifLocal,wolfofWallStreetLeonardoDanceGifLocal,gordonGeckkoGifLocal,pDiddyLocal,jimCramerGifLocal,wolfofWallStreetFlexingLocal];
    const makingMoneyPicMessages = [`Show ME THE MONEY!`,`Money ain't a thang!`, `PARTY TIME!`,`Gettin' Greedy`,`Making so much money you don't know what to do with it`,`Even Jim Cramer loves the stock your trading`, `Feeling good!`]
    const losingMoneyModalPics = [stockCrash1GifLocal,stockCrash2GifLocal,stockCrash3GifLocal,workerStrikePicLocal,collegePicLocal,dentalPicLocal,brokePicLocal,jimCramerSellGifLocal,angryWifeGifLocal,hospitalLocal];
    const losingMoneyPicMessages = [`Stock market crash coming! Get out now!`,`Stressed about how much money you lost today??!`, `I dont't think you are made to work on Wall Street!`,`Your stock tanks due to company strike`,`Portfolio takes hit due to pulling money for kids college expenses`,`Portfolio takes hit due to pulling money out to fix your ugly teeth`,`Keep losing money and you are going to have pockets that look like this`,`Jim Cramer thinks a stock market crash is coming BETTER SELL OR HEDGE POSITIONS NOW!`,`What is your wife's reaction going to be when she sees how much money you lost today???`,`Lost money due to having to go to hospital but you are still in rather good spirits`];
    


//-----------------------------GENERAL FUNCTIONS-----------------------------------------
const marketPercentageMove = () => {
    let random4OverallMarketMove = Math.ceil(Math.random() * 101);
    console.log(random4OverallMarketMove);
    switch (true) {
        case random4OverallMarketMove === 1: marketMove = -1;
        break;
        case random4OverallMarketMove === 2: marketMove = -.75;
        break;
        case random4OverallMarketMove === 3: marketMove = -.50;
        break;
        case random4OverallMarketMove === 4: marketMove = -.25;
        break;
        case random4OverallMarketMove === 5:  marketMove = -.20;
        break;
        case random4OverallMarketMove >= 6 && random4OverallMarketMove <= 10:  marketMove = -.18;
        break;
        case random4OverallMarketMove >= 11 && random4OverallMarketMove <= 15:  marketMove = -.15;
        break;
        case random4OverallMarketMove >= 16 && random4OverallMarketMove <= 20:  marketMove = -.10;
        break;
        case random4OverallMarketMove >= 21 && random4OverallMarketMove <= 25:  marketMove = -.02;
        break;
        case random4OverallMarketMove >= 26 && random4OverallMarketMove <= 80:  marketMove = .10;
        break;
        case random4OverallMarketMove >= 80 && random4OverallMarketMove <= 90:  marketMove = .25;
        break;
        case random4OverallMarketMove >= 90 && random4OverallMarketMove <= 95:  marketMove = .50;
        break;
        case random4OverallMarketMove >= 96 && random4OverallMarketMove <= 100:  marketMove = .75;
        break;
    }
    return marketMove;
}

 const stopTradingFunction = () => {
    return playerTurn === 'p1' ? playerTurn = 'p2' : playerTurn = 'p1';
}

const timeDelay = () => {
    $modalBox.show();
}

const timeDelayHide = () => {
    $modalBox.hide();
}

let commaNum = (number) => {
    let modNum = number.toFixed(2); // takes number and makes it a string e.g. 23000 and converts it to '23000'
    let numSplit = modNum.split('.'); //splits string into an array e.g. [23000, 00] 2 00's in index 1 of array is any decimals/cents in number
    let int = numSplit[0]; // takes 0 index of array above [23000]
    if (int.length > 3 && int.length <=6) { //uses substr method where you specify index and how many index spots over to take. E.g. 23000 it is starting at index 0 and going over to index 1 and placing commma after index 1. Follow code for bigger numbers that have 6 or more digits
        int = `${int.substr(0, int.length - 3)},${int.substr(int.length - 3,3)}`
    }
    else {
        int = `${int.substr(0, int.length - 6)},${int.substr(int.length - 6,3)},${int.substr(int.length - 3,3)}`
    }
    return int;
    }

let leftArrowAnimationFuction = () => {
    const $leftArrowActionAnimation = $('<img>').attr('id','left-arrow').attr('src','./Images/Left Arrow.png');
    $leftArrow.prepend($leftArrowActionAnimation);
    $leftArrow.append($('<p>').attr('id','arrow-message').text('Click here to start trading'));
}

//----------------------------------CLASSES----------------------------------------------  
class Stocks {
    constructor(name, symbol, beta, stockPrice){
        this.name = name;
        this.symbol =symbol;
        this.beta = beta;
        this.price = stockPrice;
    }
    stockMoveWithMarket() {
        let stockMoveWithMarket = this.price * (this.beta * marketPercentageMove());
        console.log(stockMoveWithMarket);
        return stockMoveWithMarket;
    } 
}

class Player extends Stocks {
    constructor(name,symbol,beta,stockPrice,){
        super(name,symbol,beta,stockPrice);
        this.money = StartingMoney;
        this.stockChoice = '';
        this.finalPortfolioValue = StartingMoney;

    }
    sharesOwned() {
        let sharesOwned = this.money / (eval(this.stockChoice).price)
        return sharesOwned;
    }
   
    portfolioValue() {
        let previousBalance = this.finalPortfolioValue;
        this.beginningBalance4modalPic = this.finalPortfolioValue
        let portfolioPercentageMove = marketPercentageMove();
        let balanceChange = previousBalance * portfolioPercentageMove
        let message = `${this.name} made $${balanceChange.toFixed(0)*1}`
        console.log(message);
        let newPortfolioValueAfterGeneralMarketMove = (previousBalance *= (1+portfolioPercentageMove)).toFixed(0)*1;
        return this.portfolioValueB4LifeEvent = newPortfolioValueAfterGeneralMarketMove;
    }
  
    greedyProbability() {
        
    }
    eventMove() {
        let randomEventMove = Math.ceil(Math.random() * 101);
        console.log(randomEventMove);
        switch (true) {
            case randomEventMove === 1: eventMover = -100000;
                break;
            case randomEventMove === 2: eventMover = -50000;
                break;
            case randomEventMove === 3: eventMover = -25000;
                break;
            case randomEventMove === 4: eventMover = -20000;
                break;
            case randomEventMove === 5:  eventMover = -10000;
                break;
            case randomEventMove >= 6 && randomEventMove <= 30:  eventMover = -2000;
                break;
            case randomEventMove >= 31 && randomEventMove <= 100:  eventMover = 0;
                break;
        }
        return this.eventMover = eventMover;
    }
    totalPortfolioMove() {
        this.portfolioValue();
        this.eventMove();
        console.log(this.portfolioValueB4LifeEvent);
        console.log(this.eventMover);
        console.log(1 + this.eventMover);
        console.log((this.portfolioValueB4LifeEvent * (1+this.eventMover).toFixed(0)*1));
        //let totalPortfolioValuePercentChange = (1 + this.eventMover);
        //let finalPortfolioValue = (this.portfolioValueB4LifeEvent *= (totalPortfolioValuePercentChange)).toFixed(2)*1;
        let finalPortfolioValue = (this.portfolioValueB4LifeEvent +this.eventMover).toFixed(2)*1;
        console.log(finalPortfolioValue);
        let finalNumforDOM = commaNum(finalPortfolioValue);
        playerTurn === 'p1' ? $player1Money.text(`$`+ finalNumforDOM) : $player2Money.text(`$`+ finalNumforDOM);
        //playerTurn === 'p1' ? $player1Money.text(`$`+ finalPortfolioValue) : $player2Money.text(`$`+ finalPortfolioValue);
        this.winOrLoseGameCheck(); //might need to separate this into just an event handler
        return this.finalPortfolioValue = finalPortfolioValue;
    }
    winOrLoseGameCheck() {
        if (this.finalPortfolioValue >= TargetWinGoal) { 
        $modalBox.show();
        $($modalMessage).text(`${fullPlayerSpelling} has made it on Wall Street!`).css({
            fontSize: 50
        })
        } else if (this.finalPortfolioValue <= 0) {
        $modalBox.show();
        $($modalMessage).text(`${fullPlayerSpelling} Wall Street is just not for you.`).css({
            fontSize: 50
            })
        }
    }
    winorLoseModalPic() {
        this.portfolioDollarChange = (this.finalPortfolioValue - this.beginningBalance4modalPic);
        console.log(this.finalPortfolioValue - this.beginningBalance4modalPic);
        console.log(makingMoneyModalPics.length);
        const randomMakingMoneyModalPic = Math.floor(Math.random() * makingMoneyModalPics.length);
        const randomLosingMoneyModalPic = Math.floor(Math.random() * losingMoneyModalPics.length);
        console.log(randomMakingMoneyModalPic);
        console.log(randomLosingMoneyModalPic);
        if (this.portfolioDollarChange > 0){
            $modalPictureSpot.prepend(makingMoneyModalPics[randomMakingMoneyModalPic])
            this.portfolioChangeMessage(randomMakingMoneyModalPic, 'win')
        } else {
            $modalPictureSpot.prepend(losingMoneyModalPics[randomLosingMoneyModalPic])
            this.portfolioChangeMessage(randomLosingMoneyModalPic, 'lose') 
        }
        //this.portfolioDollarChange > 0 ? $modalPictureSpot.prepend(makingMoneyModalPics[randomMakingMoneyModalPic]) : $modalPictureSpot.prepend(losingMoneyModalPics[randomLosingMoneyModalPic])
    }
    portfolioChangeMessage(randomNum,winLose) {
        let message = winLose === 'win' ? makingMoneyPicMessages[randomNum] : losingMoneyPicMessages [randomNum];
        $modalPictureMessage.text(message);
        $modalPictureMessage.show().css({
            visibility: 'visible'
        });
        console.log(this.portfolioDollarChange);
        let portfolioDollarChangewithCommas = commaNum(this.portfolioDollarChange)
        this.portfolioDollarChange > 0 ? $moneyChangeMessage.text(`Your portfolio increased $${portfolioDollarChangewithCommas}`) 
        : $moneyChangeMessage.text(`Your portfolio decreased $${portfolioDollarChangewithCommas}`);
    }
}


const facebook = new Stocks ('facebook','FB',1.19,285.58);
const apple = new Stocks ('apple','AAPL',1.28,153.68);
const amazon = new Stocks ('amazon','AMZN',1.2,3158.00);
const netflix = new Stocks ('netflix','NFLX',.93,515.78);
const google = new Stocks ('google','GOOGL',1.0,1819.48);
const starbucks = new Stocks ('starbucks','SBUX',.81,101.41);
let player1 = new Player();
let player2 = new Player();







$(()=>{
    
    //------------------------EVENT HANDLERS-------------------------------------------------
    
    
        $startGameButton.on('click',() => {
            $modalBox.show();
            $stockSymbolsSection.css({
                opacity: '.2'
            })
            $($modalMessage).text('Player 1 Choose Your Stock').css({
                fontSize: 50
            })
            setTimeout(() => {
            $modalBox.hide();
            $stockSymbols.removeClass('not-active');
            $stockSymbolsSection.css({
                opacity: '.9'
            })
        },2000)
    })
        
        $closeStartModalButton.on('click',() => {
            $modalBox.hide();
            setTimeout(() => {
                $modalBox.show();
                $($modalMessage).text('Player 1 Choose Your Stock').css({
                    fontSize: 50,
                    textAlign: 'center'
                })
            }, 1500);
            setTimeout(() => {
                $modalBox.hide();
                $stockSymbols.removeClass('not-active');
                $stockSymbolsSection.css({
                    opacity: '.9'
                })
            },3500);
        })

        
        $instructions.on('click',() => {
            $modalBox.show();
            $($modalMessage).text(instructionsGuide).css({
                fontSize: 20,
                color: 'red',
                textAlign: 'left', 
            }).attr('id','instructions-modal')
        })
        

        $facebookImage.on('click',() => {
            console.log('You clicked on facebook');
            if (playerTurn === 'p1'){
                player1 = new Player ('facebook', 'FB',1.19,285.58);
                player1.stockChoice = 'facebook';
                playerTurn = 'p2';
                setTimeout(timeDelay, 750);
                $(event.target).css({
                    opacity: .3
                });
                $($modalMessage).text('Player 2 Choose Your Stock').css({
                    fontSize: 50
                })
                setTimeout(() => {$modalBox.hide()},2000);
            } else if (playerTurn === 'p2') {
                player2.stockChoice = 'facebook';
                player2 = new Player ('facebook', 'FB',1.19,285.58);
                $('.stock-symbols').addClass('not-active');
                $('#facebook').removeClass('not-active').addClass('p2-remaining').attr('id','p2-remaining');
                let p1StockChoice = (player1.stockChoice);
                eval(`$${p1StockChoice}Image`).removeClass('not-active').addClass('p1-remaining').css({
                    opacity: .9
                }).attr('id','p1-remaining');
                $('#vs').css({
                    visibility: 'visible'
                })
                playerTurn = 'p1';
                leftArrowAnimationFuction(); 
            } else {
                return;
            }
        })

        $appleImage.on('click',() => {
            console.log('You clicked on apple');
            if (playerTurn === 'p1'){
                player1 = new Player ('apple', 'AAPL',1.28,153.68);
                player1.stockChoice = 'apple';
                playerTurn = 'p2';
                setTimeout(timeDelay, 750);
                $(event.target).css({
                    opacity: .3
                });
                $($modalMessage).text('Player 2 Choose Your Stock').css({
                    fontSize: 50
                })
                setTimeout(() => {$modalBox.hide()},2000);
            } else if (playerTurn === 'p2') {
                player2.stockChoice = 'apple';
                player2 = new Player ('apple', 'AAPL',1.28,153.68);
                $('.stock-symbols').addClass('not-active');
                $('#apple').removeClass('not-active').addClass('p2-remaining').attr('id','p2-remaining');
                let p1StockChoice = (player1.stockChoice);
                eval(`$${p1StockChoice}Image`).removeClass('not-active').addClass('p1-remaining').css({
                    opacity: .9
                }).attr('id','p1-remaining');
                $('#vs').css({
                    visibility: 'visible'
                })
                playerTurn = 'p1';
                leftArrowAnimationFuction(); 
            } else {
                return;
            }
        })

        $amazonImage.on('click',() => {
            console.log('You clicked on amazon');
            if (playerTurn === 'p1'){
                player1 = new Player ('amazon', 'AMZN',1.2,3158.00);
                player1.stockChoice = 'amazon';
                playerTurn = 'p2';
                setTimeout(timeDelay, 750);
                $(event.target).css({
                    opacity: .3
                });
                $($modalMessage).text('Player 2 Choose Your Stock').css({
                    fontSize: 50
                })
                setTimeout(() => {$modalBox.hide()},2000);
            } else if (playerTurn === 'p2') {
                player2.stockChoice = 'amazon'
                player2 = new Player ('amazon', 'AMZN',1.2,3158.00);
                $('.stock-symbols').addClass('not-active');
                $('#amazon').removeClass('not-active').addClass('p2-remaining').attr('id','p2-remaining');
                let p1StockChoice = (player1.stockChoice);
                eval(`$${p1StockChoice}Image`).removeClass('not-active').addClass('p1-remaining').css({
                    opacity: .9
                }).attr('id','p1-remaining');
                $('#vs').css({
                    visibility: 'visible'
                })
                playerTurn = 'p1';
                leftArrowAnimationFuction(); 
            } else {
                return;
            }
        })

        $netflixImage.on('click',() => {
            console.log('You clicked on netflix');
            if (playerTurn === 'p1'){
                player1 = new Player ('netflix','NFLX',.93,515.78);
                player1.stockChoice = 'netflix';
                playerTurn = 'p2';
                setTimeout(timeDelay, 750);
                $(event.target).css({
                    opacity: .3
                });
                $($modalMessage).text('Player 2 Choose Your Stock').css({
                    fontSize: 50
                })
                setTimeout(() => {$modalBox.hide()},2000);
            } else if (playerTurn === 'p2') {
                player2.stockChoice = 'netflix';
                player2 = new Player ('netflix','NFLX',.93,515.78);
                $('.stock-symbols').addClass('not-active');
                $('#netflix').removeClass('not-active').addClass('p2-remaining').attr('id','p2-remaining');
                let p1StockChoice = (player1.stockChoice);
                eval(`$${p1StockChoice}Image`).removeClass('not-active').addClass('p1-remaining').css({
                    opacity: .9
                }).attr('id','p1-remaining');
                $('#vs').css({
                    visibility: 'visible'
                })
                playerTurn = 'p1';
                leftArrowAnimationFuction(); 
            } else {
                return;
            }
        })

        $googleImage.on('click',() => {
            console.log('You clicked on google');
            if (playerTurn === 'p1'){
                player1 = new Player ('google','GOOGL',1.0,1819.48);
                player1.stockChoice = 'google';
                playerTurn = 'p2';
                setTimeout(timeDelay, 750);
                $(event.target).css({
                    opacity: .3
                });
                $($modalMessage).text('Player 2 Choose Your Stock').css({
                    fontSize: 50
                })
                setTimeout(() => {$modalBox.hide()},2000);
            } else if (playerTurn === 'p2') {
                player2.stockChoice = 'google';
                player2 = new Player ('google','GOOGL',1.0,1819.48);
                $('.stock-symbols').addClass('not-active');
                $('#google').removeClass('not-active').addClass('p2-remaining').attr('id','p2-remaining');
                let p1StockChoice = (player1.stockChoice);
                eval(`$${p1StockChoice}Image`).removeClass('not-active').addClass('p1-remaining').css({
                    opacity: .9
                }).attr('id','p1-remaining');
                $('#vs').css({
                    visibility: 'visible'
                })
                playerTurn = 'p1';
                leftArrowAnimationFuction(); 
            } else {
                return;
            }
        })

        $starbucksImage.on('click',() => {
            console.log('You clicked on Starbucks');
            if (playerTurn === 'p1'){
                player1 = new Player ('starbucks','SBUX',.81,101.41);
                player1.stockChoice = 'starbucks';
                playerTurn = 'p2';
                setTimeout(timeDelay, 750);
                $($modalMessage).text('Player 2 Choose Your Stock').css({
                    fontSize: 50
                })
                setTimeout(() => {$modalBox.hide()},2000);
                $(event.target).css({
                    opacity: .3
                });
            } else if (playerTurn === 'p2') {
                player2.stockChoice = 'starbucks';
                player2 = new Player ('starbucks','SBUX',.81,101.41);
                $('.stock-symbols').addClass('not-active');
                $('#starbucks').removeClass('not-active').addClass('p2-remaining').attr('id','p2-remaining');
                let p1StockChoice = (player1.stockChoice);
                eval(`$${p1StockChoice}Image`).removeClass('not-active').addClass('p1-remaining').css({
                    opacity: .9
                }).attr('id','p1-remaining');
                $('#vs').css({
                    visibility: 'visible'
                })
                playerTurn = 'p1';
                leftArrowAnimationFuction(); 
            } else {
                return;
            }
        })

        $keepTradingButtonP1.on('click',() => {
            if (playerTurn ==='p2'){
                return
            } else {
            $('#vs').css({
                visibility: 'hidden'
            })
            $('#left-arrow').hide();
            $('#arrow-message').hide();
            $modalPictureSpot.show();
            $moneyChangeContainer.show();
            console.log('You clicked the keep trading button');
            if (playerTurn == 'p1') {
                fullPlayerSpelling = 'player1';
            } else {
                fullPlayerSpelling = 'player2';
            }
            eval(fullPlayerSpelling).totalPortfolioMove();
            eval(fullPlayerSpelling).winOrLoseGameCheck();
            eval(fullPlayerSpelling).winorLoseModalPic();
            
            setTimeout(() => {
                $modalPictureSpot.hide();
                $modalPictureSpot.children().eq(0).remove();
                $('#vs').css({
                    visibility: 'visible'
                })
            },5000);
            setTimeout(() => {
                $moneyChangeContainer.hide(); 
            },5000);
            }
        })

        $keepTradingButtonP2.on('click',() => {
            if (playerTurn ==='p1'){
                return
            } else {
            $('#vs').css({
                    visibility: 'hidden'
                })
            $modalPictureSpot.show();
            $moneyChangeContainer.show();
            console.log('You clicked the keep trading button');
            if (playerTurn == 'p1') {
                fullPlayerSpelling = 'player1';
            } else {
                fullPlayerSpelling = 'player2';
            }
            eval(fullPlayerSpelling).totalPortfolioMove();
            eval(fullPlayerSpelling).winOrLoseGameCheck(); 
            eval(fullPlayerSpelling).winorLoseModalPic();
            
            setTimeout(() => {
                $modalPictureSpot.hide();
                $modalPictureSpot.children().eq(0).remove();
                $('#vs').css({
                    visibility: 'visible'
                })
            },5000);
            setTimeout(() => {
                $moneyChangeContainer.hide(); 
            },5000);
            }
        })

        $p1HedgeButton.on('click',() => {
            console.log('You are hedged Player 1');
            stopTradingFunction();
            $modalBox.show();
            $($modalMessage).text(`Player 2 start trading but don't be too greedy!`).css({
                fontSize: 40
            })
            setTimeout(() => {$modalBox.hide()},3000);

        })

        $p2HedgeButton.on('click',() => {
            console.log('You are hedged Player 2');
            stopTradingFunction();
            $modalBox.show();
            $($modalMessage).text(`Player 1 start trading but don't be too greedy!`).css({
                fontSize: 40
            })
            setTimeout(() => {$modalBox.hide()},3000);

        })

       
      
    



        
        












        })