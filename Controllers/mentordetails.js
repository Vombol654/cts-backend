const MentorDetails=require('../Models/mentordetails')
exports.getmentordetailsByLangId=(req,res)=>{
    const {langId}=req.params
   MentorDetails.find({language_id:langId}).then(response=>{
        res.status(200).json({
            message:"mentor details fetched successfully",
            mentor:response
        })
    }).catch(err=>console.log(err))
}

exports.filteredmentordetails=(req,res)=>{
    let {coursetype,language,feature,sort,lcost,hcost,page,itemsPerPage}=req.body;
    sort=sort?sort:1;
    page = page ? page : 1;
    itemsPerPage = itemsPerPage ? itemsPerPage : 2;

    let startIndex = page * itemsPerPage - itemsPerPage;
    let endIndex = page * itemsPerPage;
    let filterObj={};
    coursetype && (filterObj["course_id"] = coursetype);
    language && (filterObj["language_id"] = language);
    feature && (filterObj["features_id"] = { $in: feature });
    lcost && hcost && (filterObj["cost"] = { $gte: lcost, $lte: hcost })
   MentorDetails.find(filterObj).sort({cost:sort})
   .then(response=>{
    const filteredResponse = response.slice(startIndex, endIndex);
    const data=Math.ceil(response.length/itemsPerPage);
     res.status(200).json({
        message:"mentor details fetched successfully",
        mentor:filteredResponse,
        Data:data
    })
    // else{
    //     res.status(404).json({
    //         message:"The requested resource was not found ",
    //         mentor:filteredResponse,
    //         Data:data
    //     })
    // }
       
    }).catch(err=>console.log(err))
}

exports.getmentordetailsByMentorId=(req,res)=>{
    const {mentorId}=req.params
    MentorDetails.findById(mentorId).then(response=>{
         res.status(200).json({
             message:"mentor details fetched successfully",
             mentor:response
         })
     }).catch(err=>console.log(err))
}