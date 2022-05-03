const { Test } = require("../models/index");

class Index_Controller {
  count;

  constructor() {
    this.count = 0;
  }

  async addTest() {
    let result;
    try {
      result = await Test.create({
        test_id: "1",
        test_pw: "2",
        // test_email: "1",
        test_email: "tmdqjaha12@naver.com",
        test_name: "4",
        test_memo: "5",
        // test_flag: false,
        // test_deletion: false,
        // test_cre_datetime: new Date(),
      });
    } catch (error) {
      console.log(error);
      // console.log("@@@@@@@@@@@@@@@@@@@@@@ => ", error.errors[0].validatorKey);
    }

    return result;
  }
}

module.exports = new Index_Controller();

// async addTest() {
//   let result = [];
//   result["state"] = true;
//   try {
//     result["data"] = await Test.create({
//       test_id: "1",
//       test_pw: "2",
//       // test_email: "1",
//       test_email: "tmdqjaha12@naver.com",
//       test_name: "4",
//       test_memo: "5",
//       // test_flag: false,
//       // test_deletion: false,
//       // test_cre_datetime: new Date(),
//     });
//   } catch (error) {
//     console.log("@@@@@@@@@@@@@@@@@@@@@@ => ", error.errors[0].validatorKey);
//     result["state"] = false;
//     result["msg"] = error.errors[0].validatorKey;
//   }

//   return result;
// }
