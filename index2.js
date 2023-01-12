import _ from "lodash";

const list = [
  {
    //   rating_1: 0,
    //   bypass_screen_test: false,
    //   company_ids: [],
    //   bypass_pincode_scanning: true,
    //   bypass_imei: false,
    //   company_id: "f12a2b9e-0793-4f31-9522-825e0a80318a",
    //   product_company_id: "b75ff0a6-4909-4641-bcbd-d6b978abec90",
    //   responsible_claim_payer: "InstaProtek",
    //   average_rating: 4.5,
    //   company_names: [],
    //   bypass_device_screen_photo: true,
    shares: [
      {
        //   metadata: {
        //     initiated_by: "0f1abe46-9005-427b-9cfb-ff641a9d6691",
        //     os: "Linux 64",
        //     browser: "Chrome",
        //     source:
        //       "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        //     version: "106.0.0.0",
        //     platform: "Linux",
        //   },
        product_url: "https://www.bestbuy.com/site/reviews/submission_2/5985617",
        //   affiliate_id: "bc2cb1c4-d56c-48c9-b2f5-61fe587f650c",
        //   button_done_title: "BUTTON",
        //   review_done_url: "https://www.bestbuy.com/site/reviews/thankyou",
        //   mobile_script:
        //     '{"https://www.bestbuy.com/identity/signin": "function replaceValue(selector, value) {const el = document.querySelector(selector);if (el) {el.focus();el.select();document.execCommand(\'insertText\', false, value)}return el;};document.getElementById(\'fld-e\').parentNode.classList.add(\'tb-input-has-content\');replaceValue(\\"input[id=\'fld-e\']\\", \\"email_value\\");","https://www.bestbuy.com/identity/newAccount": "function replaceValue(selector, value) {const el = document.querySelector(selector);if (el) {el.focus();el.select();document.execCommand(\'insertText\', false, value)}return el;};document.getElementById(\'lastName\').parentNode.classList.add(\'tb-input-has-content\');replaceValue(\\"input[id=\'lastName\']\\", \\"last_name_value\\");document.getElementById(\'email\').parentNode.classList.add(\'tb-input-has-content\');replaceValue(\\"input[id=\'email\']\\", \\"email_value\\");document.getElementById(\'phone\').parentNode.classList.add(\'tb-input-has-content\');replaceValue(\\"input[id=\'phone\']\\", \\"mobile_phone_value\\");document.getElementById(\'firstName\').parentNode.classList.add(\'tb-input-has-content\');replaceValue(\\"input[id=\'firstName\']\\", \\"first_name_value\\");","https://www.bestbuy.com/site/reviews/submission_2": "function replaceValue(selector, value) {const el = document.querySelector(selector);if (el) {el.focus();el.select();document.execCommand(\'insertText\', false, value)}return el;};replaceValue(\\"textarea[id=\'reviewText\']\\", \\"review_description_value\\");replaceValue(\\"input[id=\'reviewSummary\']\\", \\"review_title_value\\");replaceValue(\\"input[id=\'display-name\']\\", \\"first_name_value\\");document.getElementById(\'isRecommendedtrue\').click();Array.prototype.slice.call(document.getElementsByClassName(\\"c-button-unstyled v-p-right-ss\\")).filter((e) => e.dataset.track === \\"Star rating\\")[rating_value].click();Array.prototype.slice.call(document.getElementsByClassName(\\"c-button-unstyled v-p-right-ss\\")).filter((e) => e.dataset.track === \\"Help break down: Quality\\")[rating_value].click();Array.prototype.slice.call(document.getElementsByClassName(\\"c-button-unstyled v-p-right-ss\\")).filter((e) => e.dataset.track === \\"Help break down: Value\\")[rating_value].click();Array.prototype.slice.call(document.getElementsByClassName(\\"c-button-unstyled v-p-right-ss\\")).filter((e) => e.dataset.track === \\"Help break down: Ease of use\\")[rating_value].click();"}',
        //   bypass_product_review: false,
        name: "besT Buy",
        //   is_show_done_button: true,
        //   num_website_share: 3,
        //   created_date: "2022-11-03T00:32:31.306Z",
        //   id: "7c11452b-cce8-4491-9972-6cefbac64c40",
        //   updated_date: "2022-11-03T00:32:31.306Z",
      },
      {
        //   sync_date: "2022-06-09T06:08:14.283Z",
        //   file_path: "/images/share/2022-06-06T06:38:19.319Z.png",
        //   metadata: {
        //     initiated_by: "0f1abe46-9005-427b-9cfb-ff641a9d6691",
        //     os: "Linux 64",
        //     browser: "Chrome",
        //     source:
        //       "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        //     version: "106.0.0.0",
        //     platform: "Linux",
        //   },
        product_url: "https://www.walmart.com/reviews/write-review?productId=458083664",
        //   affiliate_id: "bc2cb1c4-d56c-48c9-b2f5-61fe587f650c",
        //   file_name: "walmart-spark-logo-57DC35C86C-seeklogo.com.png",
        //   company_file_path: "/images/share/2022-06-09T06:08:13.834Z.png",
        //   button_done_title: "Next",
        //   company_file_name: "Walmart_logo.png",
        //   review_done_url: "https://www.walmart.com/site/reviews/thankyou",
        //   mobile_script:
        //     '{\n  "https://www.walmart.com/account": "function replaceValue(selector, value) {const el = document.querySelector(selector);if (el) {el.focus();el.select();document.execCommand(\'insertText\', false, value)}return el;};replaceValue(\\"input[name=\'email\']\\", \'email_value\');document.getElementById(\'first-name-su\').value = \'first_name_value\';document.getElementById(\'last-name-su\').value = \'last_name_value\';",\n  "https://www.walmart.com/reviews/write-review": "var shouldEvaluateJS = false;function replaceValue(selector, value) {const el = document.querySelector(selector);if (el) {el.focus();el.select();document.execCommand(\\"insertText\\", false, value);}return el;}if (document.getElementById(\\"intent-banner-section\\").classList.contains(\\"justify-center\\", \\"justify-start-m\\")) {document.getElementById(\\"intent-banner-section\\").children[0].click();}Array.prototype.slice.call(document.getElementsByClassName(\\"pointer dib rating-star-label\\"))[rating_value].click();replaceValue(\\"textarea[id=\'react-aria-1\']\\", \\"full_name_value\\");replaceValue(\\"textarea[id=\'react-aria-2\']\\", \\"review_description_value\\");replaceValue(\\"textarea[id=\'react-aria-3\']\\", \\"review_title_value\\");const time = setInterval(() => {if (document.getElementsByClassName(\\"mt4 f1\\")[0] != undefined) {clearInterval(time);window.webkit.messageHandlers[\\"scriptHandler\\"].postMessage(\\"done_review\\");}}, 1000);"\n}',
        //   node: "share",
        //   thumbnail_path: "/thumbnail/2022-06-09T06:08:13.834Z.png",
        //   bypass_product_review: true,
        name: "Walmart",
        //   is_show_done_button: true,
        //   num_website_share: 2,
        //   created_date: "2022-06-06T06:36:38.734Z",
        //   id: "ae49ca7f-d9ad-4f54-afe7-1a8d0cbd4fd4",
        //   updated_date: "2022-10-26T22:50:48.306Z",
      },
    ],
    //   is_product_review_allowed: true,
    //   company_name: "TEST PLAN",
    name: "TEST PRODUCT SHARE",
    //   categories: [
    //     "c158dab1-5191-4066-ba71-3a1df925a4f8",
    //     "d8ef397d-8fe4-4c38-a789-42e80bf9e943",
    //     "10ac5daa-5c05-4b3e-9488-c15825260082",
    //   ],
    //   id: "9315af08-afc2-40ed-8d81-96633433e161",
    //   rating_5: 0,
    barcode: "10001",
    //   remaining_pin: 91,
    //   rating_4: 1,
    //   rating_3: 0,
    //   status: "Active",
    //   rating_2: 0,
  },
];

const formatList = (list = []) => {
  const res = list.map(({ shares = [], barcode }) => {
    return shares.map(({ name: product_name, product_url }) => {
      return {
        barcode,
        product_name,
        product_url,
      };
    });
  });

  return _.flattenDeep(res);
};

console.log(formatList(list));
