const MentorShipDetails = require("../Models/mentorshipdetail");
exports.getmentordetailsByLangId = (req, res) => {
  const { langId } = req.params;
  console.log(langId);
  MentorShipDetails.find({ "mentor.language_id": langId })
    .then((response) => {
      console.log(response);
      res.status(200).json({
        message: "mentor details fetched successfully",
        mentor: response,
      });
    })
    .catch((err) => console.log(err));
};

exports.filteredmentordetails = (req, res) => {
  let {
    coursetype,
    language,
    services,
    sort,
    lcost,
    hcost,
    page,
    itemsPerPage,
  } = req.body;

  sort = sort ? sort : 1;
  page = page ? page : 1;
  itemsPerPage = itemsPerPage ? itemsPerPage : 2;

  let startIndex = page * itemsPerPage - itemsPerPage;
  let endIndex = page * itemsPerPage;
  let filterObj = { status: "proposed" };
  // { status: "accepted" }
  coursetype && (filterObj["course_id"] = coursetype);
  language && (filterObj["mentor.language_id"] = parseInt(language));
  services && (filterObj["services_id"] = { $in: services });
  lcost && hcost && (filterObj["cost"] = { $gte: lcost, $lte: hcost });
  console.log(filterObj);
  MentorShipDetails.find(filterObj)
    .sort({ cost: sort })
    .then((response) => {
      const filteredResponse = response.slice(startIndex, endIndex);
      const data = Math.ceil(response.length / itemsPerPage);
      console.log(filteredResponse, data);
      res.status(200).json({
        message: "mentor details fetched successfully",
        mentor: filteredResponse,
        Data: data,
      });
      // else{
      //     res.status(404).json({
      //         message:"The requested resource was not found ",
      //         mentor:filteredResponse,
      //         Data:data
      //     })
      // }
    })
    .catch((err) => console.log(err));
};

// exports.getmentordetailsByMentorId = (req, res) => {
//   const { mentorId } = req.params;
//   console.log(mentorId);
//   MentorShipDetails.findById(mentorId)
//     // MentorDetails.findOne({ mentor: { _id: mentorId } })
//     .then((response) => {
//       res.status(200).json({
//         message: "mentor details fetched successfully",
//         mentor: response,
//       });
//     })
//     .catch((err) => console.log(err));
// };

exports.getmentordetailsByMentorId = async (req, res) => {
  const { mentorId } = req.params;

  MentorShipDetails.find({ "mentor._id": mentorId })
    .then((response) => {
      res.status(200).json({
        message: "mentorship details fetched successfully",
        mentorship: response,
      });
    })
    .catch((err) => console.log(err));
};

// POST MENTORSHIP

exports.postMentorShipDetails = async (req, res) => {
  console.log(req.body);

  const mentorship = new MentorShipDetails({
    ...req.body,
    spotsLeft: req.body.totalIntake,
    status: "proposed",
  });

  mentorship
    .save()
    .then((data) => {
      res
        .status(200)
        .json({ mentorship: data, message: "Proposed successfully" });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ error: err, message: "Mentorship Failed to Propose" });
    });
};

exports.getMentorShipDetails = async (req, res) => {
  const mentorship = await MentorShipDetails.find();
  res.json(mentorship);
};

exports.deleteMentorShipDetailById = async (req, res) => {
  const { _id } = req.params;
  const response = await MentorShipDetails.findOneAndDelete({ _id });
  res.json(response);
};
