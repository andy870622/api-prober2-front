// var recommandData = {
//     "similaritys": [],
//     "mashups": [
//         {
//             "targetOperation": "get",
//             "score": 1.158,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "get",
//             "compareOASId": 68846,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentencepiece-bpe-tweet/get",
//             "compareOASName": "SentencePiece APIs (tweet)"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.3275000000000001,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "get",
//             "compareOASId": 121924,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentence-separate/heuristics",
//             "compareOASName": "Sentence separator APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.3275000000000001,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "post",
//             "compareOASId": 125031,
//             "category": "Similar Input",
//             "compareEndpoint": "/cosine-similarity/vec-word",
//             "compareOASName": "Cosine Similarity"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.3275000000000001,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "post",
//             "compareOASId": 208627,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentence-similarity/eval",
//             "compareOASName": "Sentence Similarity"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.158,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "post",
//             "compareOASId": 294562,
//             "category": "Similar Input",
//             "compareEndpoint": "/kuromoji-ipadic/tokenize",
//             "compareOASName": "Kuromoji APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.158,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "get",
//             "compareOASId": 294562,
//             "category": "Similar Input",
//             "compareEndpoint": "/kuromoji-ipadic/tokenize",
//             "compareOASName": "Kuromoji APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.158,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "post",
//             "compareOASId": 294562,
//             "category": "Similar Input",
//             "compareEndpoint": "/kuromoji-ipadic-neologd/tokenize",
//             "compareOASName": "Kuromoji APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.158,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "get",
//             "compareOASId": 294562,
//             "category": "Similar Input",
//             "compareEndpoint": "/kuromoji-ipadic-neologd/tokenize",
//             "compareOASName": "Kuromoji APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.158,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "get",
//             "compareOASId": 305092,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentencepiece-bpe-wiki/get",
//             "compareOASName": "SentencePiece APIs (wikipedia)"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.158,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "get",
//             "compareOASId": 305092,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentencepiece-unigram-wiki/get",
//             "compareOASName": "SentencePiece APIs (wikipedia)"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.158,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "post",
//             "compareOASId": 314941,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentiments/predict",
//             "compareOASName": "Sentiment APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.3071428571428572,
//             "targetEndpoint": "/langdetect/get",
//             "compareOperation": "get",
//             "compareOASId": 319432,
//             "category": "Similar Output",
//             "compareEndpoint": "/twitter-summarize/get",
//             "compareOASName": "Tweet summarization APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.066,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "get",
//             "compareOASId": 68846,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentencepiece-bpe-tweet/get",
//             "compareOASName": "SentencePiece APIs (tweet)"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.197,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "get",
//             "compareOASId": 121924,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentence-separate/heuristics",
//             "compareOASName": "Sentence separator APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.197,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "post",
//             "compareOASId": 208627,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentence-similarity/eval",
//             "compareOASName": "Sentence Similarity"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.066,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "post",
//             "compareOASId": 294562,
//             "category": "Similar Input",
//             "compareEndpoint": "/kuromoji-ipadic/tokenize",
//             "compareOASName": "Kuromoji APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.066,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "get",
//             "compareOASId": 294562,
//             "category": "Similar Input",
//             "compareEndpoint": "/kuromoji-ipadic/tokenize",
//             "compareOASName": "Kuromoji APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.066,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "post",
//             "compareOASId": 294562,
//             "category": "Similar Input",
//             "compareEndpoint": "/kuromoji-ipadic-neologd/tokenize",
//             "compareOASName": "Kuromoji APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.066,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "get",
//             "compareOASId": 294562,
//             "category": "Similar Input",
//             "compareEndpoint": "/kuromoji-ipadic-neologd/tokenize",
//             "compareOASName": "Kuromoji APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.066,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "get",
//             "compareOASId": 305092,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentencepiece-bpe-wiki/get",
//             "compareOASName": "SentencePiece APIs (wikipedia)"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.066,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "get",
//             "compareOASId": 305092,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentencepiece-unigram-wiki/get",
//             "compareOASName": "SentencePiece APIs (wikipedia)"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.066,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "post",
//             "compareOASId": 314941,
//             "category": "Similar Input",
//             "compareEndpoint": "/sentiments/predict",
//             "compareOASName": "Sentiment APIs"
//         },
//         {
//             "targetOperation": "get",
//             "score": 1.307142857142857,
//             "targetEndpoint": "/langdetect/short/get",
//             "compareOperation": "get",
//             "compareOASId": 319432,
//             "category": "Similar Output",
//             "compareEndpoint": "/twitter-summarize/get",
//             "compareOASName": "Tweet summarization APIs"
//         }
//     ]
// };

var storeServiceRecommend;
let similarityLoading = document.getElementById("SimilarityLoading");
let similarityBody = document.getElementById("SimilarityBody");
let mashupLoading = document.getElementById("MashupLoading");
let mashupBody = document.getElementById("MashupBody");
var resourceId = document.getElementById("OASId").textContent;

$.ajax({
    url: proberPath.proberBackEndPath + "/getOASRecommendation/" + resourceId,
    type: "GET",
    crossDomain: true,
    async: true,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    // jsonpCallback: "myJsonMethod",
    success: function (json) {
        storeServiceRecommend = json;
        parseSimilarityData(storeServiceRecommend);
        parseMashupData(storeServiceRecommend, "Similar Input");
    },
    error: function (e) {
        console.log(e);
    },
    complete: function () {
        similarityLoading.setAttribute("style", "display:none");
        similarityBody.setAttribute("style", "");
        mashupLoading.setAttribute("style", "display:none");
        mashupBody.setAttribute("style", "");
    }
});

// parseSimilarityData(recommandData);

function chooseCategory(categoryText) {
    parseMashupData(storeServiceRecommend, categoryText);
    console.log(categoryText);
    console.log(storeServiceRecommend);
}

function parseSimilarityData(recommandData) {
    let rankNumber = 1;
    var similarityData = recommandData.similaritys;

    let similarityBody = document.getElementById("SimilarityBody");
    if (similarityData.length > 0) {
        similarityBody.innerHTML = "";
    }
    // ????????????
    let carouselIndicatorsBody = document.createElement("div");
    carouselIndicatorsBody.setAttribute("id", "carouselIndicatorsSimilarity");
    carouselIndicatorsBody.setAttribute("class", "carousel slide");
    carouselIndicatorsBody.setAttribute("data-ride", "carousel");

    // ????????????
    let carouselInner = document.createElement("div");
    carouselInner.setAttribute("class", "carousel-inner");

    // // ???????????????
    // var itemNumber = 0;
    // if (similarityData.length % 3 != 0) {
    //     itemNumber = (similarityData.length / 3) + 1;
    // } else if (similarityData.length % 3 == 0) {
    //     itemNumber = similarityData.length / 3;
    // }

    // ?????????
    var count = 0;
    let carouselItem = document.createElement("div");
    carouselItem.setAttribute("class", "carousel-item active");
    let carouselItemRow = document.createElement("div");
    carouselItemRow.setAttribute("class", "row");

    // ?????? Similarity ??????
    for (x in similarityData) {

        let carouselItemCol = document.createElement("div");
        carouselItemCol.setAttribute("class", "col-md-4");

        let carouselItemCard = document.createElement("div");
        carouselItemCard.setAttribute("class", "card");

        // ????????????
        let carouselItemCardHeader = document.createElement("div");
        carouselItemCardHeader.setAttribute("class", "card-header");
        // similarityData[x].score
        carouselItemCardHeader.appendChild(document.createTextNode("No."+rankNumber));
        rankNumber += 1;

        // ????????????????????????
        let carouselItemCardBody = document.createElement("div");
        carouselItemCardBody.setAttribute("class", "card-body");

        let carouselItemCardBodyRow1 = document.createElement("div");
        carouselItemCardBodyRow1.setAttribute("class", "row-md-12 d-flex justify-content-center my-2");

        let carouselItemCardBodyRow1A = document.createElement("a");
        carouselItemCardBodyRow1A.setAttribute("href", "#" + similarityData[x].targetEndpoint);
        carouselItemCardBodyRow1A.setAttribute("class", "btn btn-secondary text-truncate active");
        carouselItemCardBodyRow1A.setAttribute("role", "button");
        carouselItemCardBodyRow1A.setAttribute("aria-pressed", "true");

        let carouselItemCardBodyRow1ASpan = document.createElement("span");
        carouselItemCardBodyRow1ASpan.setAttribute("class", "badge badge-light mx-2");
        carouselItemCardBodyRow1ASpan.appendChild(document.createTextNode(similarityData[x].targetOperation));
        carouselItemCardBodyRow1A.appendChild(carouselItemCardBodyRow1ASpan);
        carouselItemCardBodyRow1A.appendChild(document.createTextNode(similarityData[x].targetEndpoint));

        //?????????????????????????????????Body???
        carouselItemCardBodyRow1.appendChild(carouselItemCardBodyRow1A);
        carouselItemCardBody.appendChild(carouselItemCardBodyRow1);

        // ????????????
        let carouselItemCardBodyRow2 = document.createElement("div");
        carouselItemCardBodyRow2.setAttribute("class", "row-md-12 d-flex justify-content-center my-3");

        let carouselItemCardBodyRow2Icon = document.createElement("i");
        carouselItemCardBodyRow2Icon.setAttribute("class", "fas fa-arrows-alt-v fa-2x");

        //?????????????????????????????????Body???
        carouselItemCardBodyRow2.appendChild(carouselItemCardBodyRow2Icon);
        carouselItemCardBody.appendChild(carouselItemCardBodyRow2);

        //????????????????????????
        let carouselItemCardBodyRow3 = document.createElement("div");
        carouselItemCardBodyRow3.setAttribute("class", "row-md-12 d-flex justify-content-center my-2");

        let carouselItemCardBodyRow3Card = document.createElement("div");
        carouselItemCardBodyRow3Card.setAttribute("class", "card");

        let carouselItemCardBodyRow3CardHeader = document.createElement("div");
        carouselItemCardBodyRow3CardHeader.setAttribute("class", "card-header");
        carouselItemCardBodyRow3CardHeader.appendChild(document.createTextNode(similarityData[x].compareOASId + "-" + similarityData[x].compareOASName));
        carouselItemCardBodyRow3Card.appendChild(carouselItemCardBodyRow3CardHeader);

        let carouselItemCardBodyRow3CardBody = document.createElement("div");
        carouselItemCardBodyRow3CardBody.setAttribute("class", "card-body");

        let carouselItemCardBodyRow3_3 = document.createElement("div");
        carouselItemCardBodyRow3_3.setAttribute("class", "row-md-12 d-flex justify-content-center my-2");

        let carouselItemCardBodyRow3_3A = document.createElement("a");
        carouselItemCardBodyRow3_3A.setAttribute("href", "/"+similarityData[x].compareOASId+"/OAS#"+similarityData[x].compareEndpoint);
        carouselItemCardBodyRow3_3A.setAttribute("class", "btn btn-secondary text-truncate active");
        carouselItemCardBodyRow3_3A.setAttribute("role", "button");
        carouselItemCardBodyRow3_3A.setAttribute("aria-pressed", "true");

        let carouselItemCardBodyRow3_3ASpan = document.createElement("span");
        carouselItemCardBodyRow3_3ASpan.setAttribute("class", "badge badge-light mx-2");
        carouselItemCardBodyRow3_3ASpan.appendChild(document.createTextNode(similarityData[x].compareOperation));
        carouselItemCardBodyRow3_3A.appendChild(carouselItemCardBodyRow3_3ASpan);
        carouselItemCardBodyRow3_3A.appendChild(document.createTextNode(similarityData[x].compareEndpoint));
        carouselItemCardBodyRow3_3.appendChild(carouselItemCardBodyRow3_3A);
        carouselItemCardBodyRow3CardBody.appendChild(carouselItemCardBodyRow3_3);
        carouselItemCardBodyRow3Card.appendChild(carouselItemCardBodyRow3CardBody);

        //?????????????????????????????????Body???
        carouselItemCardBodyRow3.appendChild(carouselItemCardBodyRow3Card);
        carouselItemCardBody.appendChild(carouselItemCardBodyRow3);

        // ???????????????????????????
        carouselItemCard.appendChild(carouselItemCardHeader);
        carouselItemCard.appendChild(carouselItemCardBody);
        carouselItemCol.appendChild(carouselItemCard);
        carouselItemRow.appendChild(carouselItemCol);

        console.log("similarityData.length:" + similarityData.length);
        console.log("count:" + count);
        console.log("x:" + x);
        if (count == 2 && x != (similarityData.length - 1)) {
            carouselItem.appendChild(carouselItemRow);
            carouselInner.appendChild(carouselItem);
            carouselItem = document.createElement("div");
            carouselItem.setAttribute("class", "carousel-item");
            carouselItemRow = document.createElement("div");
            carouselItemRow.setAttribute("class", "row");
            count = 0;
            continue;
        } else if (x == similarityData.length - 1) {
            carouselItem.appendChild(carouselItemRow);
            carouselInner.appendChild(carouselItem);
        }
        count += 1;
    }

    // ????????????
    let carouselControlPrev = document.createElement("a");
    carouselControlPrev.setAttribute("class", "carousel-control-prev");
    carouselControlPrev.setAttribute("href", "#carouselIndicatorsSimilarity");
    carouselControlPrev.setAttribute("role", "button");
    carouselControlPrev.setAttribute("data-slide", "prev");

    let carouselControlPrevSpan = document.createElement("span");
    carouselControlPrevSpan.setAttribute("class", "sr-only");
    carouselControlPrevSpan.appendChild(document.createTextNode("Previous"));
    carouselControlPrev.appendChild(carouselControlPrevSpan);

    // ????????????
    let carouselControlNext = document.createElement("a");
    carouselControlNext.setAttribute("class", "carousel-control-next");
    carouselControlNext.setAttribute("href", "#carouselIndicatorsSimilarity");
    carouselControlNext.setAttribute("role", "button");
    carouselControlNext.setAttribute("data-slide", "next");

    let carouselControlNextSpan = document.createElement("span");
    carouselControlNextSpan.setAttribute("class", "sr-only");
    carouselControlNextSpan.appendChild(document.createTextNode("Next"));
    carouselControlNext.appendChild(carouselControlNextSpan);

    //????????????
    carouselIndicatorsBody.appendChild(carouselInner);
    carouselIndicatorsBody.appendChild(carouselControlPrev);
    carouselIndicatorsBody.appendChild(carouselControlNext);
    similarityBody.appendChild(carouselIndicatorsBody);

}

function parseMashupData(recommandData, categoryText) {
    let rankNumber = 1;

    var mashupData = recommandData.mashups;

    let mashupBody = document.getElementById("MashupBody");

    if (mashupData.length > 0) {
        mashupBody.innerHTML = "<h4>Not Found</h4>";
    }

    // ????????????
    let carouselIndicatorsBody = document.createElement("div");
    carouselIndicatorsBody.setAttribute("id", "carouselIndicatorsMashup");
    carouselIndicatorsBody.setAttribute("class", "carousel slide");
    carouselIndicatorsBody.setAttribute("data-ride", "carousel");

    // ????????????
    let carouselInner = document.createElement("div");
    carouselInner.setAttribute("class", "carousel-inner");

    // ?????????
    var count = 0;
    let carouselItem = document.createElement("div");
    carouselItem.setAttribute("class", "carousel-item active");
    let carouselItemRow = document.createElement("div");
    carouselItemRow.setAttribute("class", "row");

    // ?????? Mashup ??????
    for (x in mashupData) {

        // ?????????????????????
        if (mashupData[x].category == categoryText) {

            // ?????????????????? ?????? Not Found ??????
            if (mashupData.length > 0) {
                mashupBody.innerHTML = "";
            }

            let carouselItemCol = document.createElement("div");
            carouselItemCol.setAttribute("class", "col-md-4");

            let carouselItemCard = document.createElement("div");
            carouselItemCard.setAttribute("class", "card");

            // ????????????
            let carouselItemCardHeader = document.createElement("div");
            carouselItemCardHeader.setAttribute("class", "card-header");
            // mashupData[x].score
            carouselItemCardHeader.appendChild(document.createTextNode("No."+rankNumber));
            rankNumber += 1;


            // ????????????????????????
            let carouselItemCardBody = document.createElement("div");
            carouselItemCardBody.setAttribute("class", "card-body");

            let carouselItemCardBodyRow1 = document.createElement("div");
            carouselItemCardBodyRow1.setAttribute("class", "row-md-12 d-flex justify-content-center my-2");

            let carouselItemCardBodyRow1A = document.createElement("a");
            carouselItemCardBodyRow1A.setAttribute("href", "#" + mashupData[x].targetEndpoint);
            carouselItemCardBodyRow1A.setAttribute("class", "btn btn-secondary text-truncate active");
            carouselItemCardBodyRow1A.setAttribute("role", "button");
            carouselItemCardBodyRow1A.setAttribute("aria-pressed", "true");

            let carouselItemCardBodyRow1ASpan = document.createElement("span");
            carouselItemCardBodyRow1ASpan.setAttribute("class", "badge badge-light mx-2");
            carouselItemCardBodyRow1ASpan.appendChild(document.createTextNode(mashupData[x].targetOperation));
            carouselItemCardBodyRow1A.appendChild(carouselItemCardBodyRow1ASpan);
            carouselItemCardBodyRow1A.appendChild(document.createTextNode(mashupData[x].targetEndpoint));

            //?????????????????????????????????Body???
            carouselItemCardBodyRow1.appendChild(carouselItemCardBodyRow1A);
            carouselItemCardBody.appendChild(carouselItemCardBodyRow1);

            // ????????????
            let carouselItemCardBodyRow2 = document.createElement("div");
            carouselItemCardBodyRow2.setAttribute("class", "row-md-12 d-flex justify-content-center my-3");
            let carouselItemCardBodyRow2Icon = document.createElement("i");

            if (mashupData[x].category == "Similar Input") {
                let iconTag = document.createElement("h6");
                carouselItemCardBodyRow2Icon.setAttribute("class", "fas fa-arrows-alt-v fa-2x");
                iconTag.appendChild(carouselItemCardBodyRow2Icon);
                iconTag.appendChild(document.createTextNode("Similar Input"));
                //?????????????????????????????????Body???
                carouselItemCardBodyRow2.appendChild(iconTag);
                carouselItemCardBody.appendChild(carouselItemCardBodyRow2);
            } else if (mashupData[x].category == "Similar Output") {
                let iconTag = document.createElement("h6");
                carouselItemCardBodyRow2Icon.setAttribute("class", "fas fa-arrows-alt-v fa-2x");
                iconTag.appendChild(carouselItemCardBodyRow2Icon);
                iconTag.appendChild(document.createTextNode("Similar Output"));
                //?????????????????????????????????Body???
                carouselItemCardBodyRow2.appendChild(iconTag);
                carouselItemCardBody.appendChild(carouselItemCardBodyRow2);
            } else if (mashupData[x].category == "Output Match") {
                carouselItemCardBodyRow2Icon.setAttribute("class", "fas fa-long-arrow-alt-down fa-2x");
                //?????????????????????????????????Body???
                carouselItemCardBodyRow2.appendChild(carouselItemCardBodyRow2Icon);
                carouselItemCardBody.appendChild(carouselItemCardBodyRow2);
            } else if (mashupData[x].category == "Input Match") {
                carouselItemCardBodyRow2Icon.setAttribute("class", "fas fa-long-arrow-alt-up fa-2x");
                //?????????????????????????????????Body???
                carouselItemCardBodyRow2.appendChild(carouselItemCardBodyRow2Icon);
                carouselItemCardBody.appendChild(carouselItemCardBodyRow2);
            }

            //????????????????????????
            let carouselItemCardBodyRow3 = document.createElement("div");
            carouselItemCardBodyRow3.setAttribute("class", "row-md-12 d-flex justify-content-center my-2");

            let carouselItemCardBodyRow3Card = document.createElement("div");
            carouselItemCardBodyRow3Card.setAttribute("class", "card");

            let carouselItemCardBodyRow3CardHeader = document.createElement("div");
            carouselItemCardBodyRow3CardHeader.setAttribute("class", "card-header");
            carouselItemCardBodyRow3CardHeader.appendChild(document.createTextNode(mashupData[x].compareOASId + "-" + mashupData[x].compareOASName));
            carouselItemCardBodyRow3Card.appendChild(carouselItemCardBodyRow3CardHeader);

            let carouselItemCardBodyRow3CardBody = document.createElement("div");
            carouselItemCardBodyRow3CardBody.setAttribute("class", "card-body");

            let carouselItemCardBodyRow3_3 = document.createElement("div");
            carouselItemCardBodyRow3_3.setAttribute("class", "row-md-12 d-flex justify-content-center my-2");

            let carouselItemCardBodyRow3_3A = document.createElement("a");
            carouselItemCardBodyRow3_3A.setAttribute("href", "/"+mashupData[x].compareOASId+"/OAS#"+mashupData[x].compareEndpoint);
            carouselItemCardBodyRow3_3A.setAttribute("class", "btn btn-secondary text-truncate active");
            carouselItemCardBodyRow3_3A.setAttribute("role", "button");
            carouselItemCardBodyRow3_3A.setAttribute("aria-pressed", "true");

            let carouselItemCardBodyRow3_3ASpan = document.createElement("span");
            carouselItemCardBodyRow3_3ASpan.setAttribute("class", "badge badge-light mx-2");
            carouselItemCardBodyRow3_3ASpan.appendChild(document.createTextNode(mashupData[x].compareOperation));
            carouselItemCardBodyRow3_3A.appendChild(carouselItemCardBodyRow3_3ASpan);
            carouselItemCardBodyRow3_3A.appendChild(document.createTextNode(mashupData[x].compareEndpoint));
            carouselItemCardBodyRow3_3.appendChild(carouselItemCardBodyRow3_3A);
            carouselItemCardBodyRow3CardBody.appendChild(carouselItemCardBodyRow3_3);
            carouselItemCardBodyRow3Card.appendChild(carouselItemCardBodyRow3CardBody);

            //?????????????????????????????????Body???
            carouselItemCardBodyRow3.appendChild(carouselItemCardBodyRow3Card);
            carouselItemCardBody.appendChild(carouselItemCardBodyRow3);

            // ???????????????????????????
            carouselItemCard.appendChild(carouselItemCardHeader);
            carouselItemCard.appendChild(carouselItemCardBody);
            carouselItemCol.appendChild(carouselItemCard);
            carouselItemRow.appendChild(carouselItemCol);

            console.log("mashupData.length:" + mashupData.length);
            console.log("count:" + count);
            console.log("x:" + x);
            if (count == 2 && x != (mashupData.length - 1)) {
                carouselItem.appendChild(carouselItemRow);
                carouselInner.appendChild(carouselItem);
                carouselItem = document.createElement("div");
                carouselItem.setAttribute("class", "carousel-item");
                carouselItemRow = document.createElement("div");
                carouselItemRow.setAttribute("class", "row");
                count = 0;
                continue;
            }
            count += 1;
        }

        if (x == mashupData.length - 1 && carouselItemRow.hasChildNodes()) {
            carouselItem.appendChild(carouselItemRow);
            carouselInner.appendChild(carouselItem);
        }

    }

    // ????????????
    let carouselControlPrev = document.createElement("a");
    carouselControlPrev.setAttribute("class", "carousel-control-prev");
    carouselControlPrev.setAttribute("href", "#carouselIndicatorsMashup");
    carouselControlPrev.setAttribute("role", "button");
    carouselControlPrev.setAttribute("data-slide", "prev");

    let carouselControlPrevSpan = document.createElement("span");
    carouselControlPrevSpan.setAttribute("class", "sr-only");
    carouselControlPrevSpan.appendChild(document.createTextNode("Previous"));
    carouselControlPrev.appendChild(carouselControlPrevSpan);

    // ????????????
    let carouselControlNext = document.createElement("a");
    carouselControlNext.setAttribute("class", "carousel-control-next");
    carouselControlNext.setAttribute("href", "#carouselIndicatorsMashup");
    carouselControlNext.setAttribute("role", "button");
    carouselControlNext.setAttribute("data-slide", "next");

    let carouselControlNextSpan = document.createElement("span");
    carouselControlNextSpan.setAttribute("class", "sr-only");
    carouselControlNextSpan.appendChild(document.createTextNode("Next"));
    carouselControlNext.appendChild(carouselControlNextSpan);

    //????????????
    carouselIndicatorsBody.appendChild(carouselInner);
    carouselIndicatorsBody.appendChild(carouselControlPrev);
    carouselIndicatorsBody.appendChild(carouselControlNext);
    mashupBody.appendChild(carouselIndicatorsBody);

}