import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import * as cheerio from "cheerio";

// export const runtime = "edge";

export async function GET(request: NextRequest) {
  let customers: any[] = []
  let count = ""
  await axios
    .get("https://www.trustindex.io/reviews/www.benu.at")
    .then((response) => {
      const $ = cheerio.load(response.data);
      count = $(".review-count").find("strong").text()
      const reviewList = $(".reviews-body .row");
      for (let i = 0; i < reviewList.length; i++) {
        let from = "";
        if ($(reviewList[i]).hasClass("source-Ekomi")) {
          from = "ekomi";
        } else if ($(reviewList[i]).hasClass("source-Google")) {
          from = "google";
        } else if ($(reviewList[i]).hasClass("source-Facebook")) {
          from = "facebook";
        } else if ($(reviewList[i]).hasClass("source-Trustindex")) {
          from = "trustindex";
        }
        var link = $(reviewList[i]).find(".report .btn").attr("href");
        let reviewUsername = $(reviewList[i]).find(".ti-name")[0],
          name = $(reviewUsername).text();

        let reviewDate = $(reviewList[i]).find(".ti-date")[0],
          date = $(reviewDate).text();

        let reviewContent = $(reviewList[i]).find(".ti-review-content")[0],
          content = $(reviewContent).text();
        if(link){
          let linkSplit = link.split("/")
          link = linkSplit[linkSplit.length -1]
        }
        let image =  $(reviewList[i]).find("img").attr("src");
        let stars = $(reviewList[i]).find(".ti-stars .ti-star");
        
        customers.push({
          id: link,
          source: from,
          image: image,
          stars: stars.length,
          date: date.trim(),
          review: content.trim(),
          name: name.trim()
        })
      }
      console.log("TOTAL", reviewList.length);
    })
    .catch((err) => console.log("Fetch error " + err));
  return NextResponse.json({ count: count, customers: customers});
}
