const userSchema = require('../models/User')

const getUser = (req, res) => {
  userSchema
    .find({ id: req.query })
    .then((users) => {
      res.status(200).json({
        message: 'User',
        data: users,
      })
    })
    .catch((error) => {
      res.status(400).json({
        message: error,
      })
    })
}

const getUserList = (req, res) => {
  userSchema
    .find()
    .then((users) => {
      res.status(200).json({
        message: 'List of Users',
        data: users,
      })
    })
    .catch((error) => {
      res.status(400).json({
        ea: "no andaaaa",
        message: error,
      })
    })
}

const addUser = async (req, res) => {
  try {
    const user = new userSchema({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })

    const userSaved = await user.save()

    return res.status(201).json({
      message: 'User created',
      data: userSaved,
    })
  } catch (error) {
    return res.status(400).json({
      message: error.toString(),
    })
  }
}

const deleteUser = (req, res) => {
  userSchema.findByIdAndUpdate(req.params.id, (error, user) => {
    if (error) {
      return res.status(400).json({
        message: error,
      })
    }
    if (!user) {
      return res.status(404).json({
        message: 'Postulant Id does not exist',
      })
    }
    return res.status(204).send()
  })
}

// const updatePostulants = (req, res) => {
//   const bodyReq = req.body
//   Postulants.findByIdAndUpdate(
//     req.params.id,
//     {
//       firstName: bodyReq.firstName,
//       lastName: bodyReq.lastName,
//       email: bodyReq.email,
//       password: bodyReq.password,
//       contactRange: bodyReq.contactRange,
//       address: bodyReq.address,
//       birthday: bodyReq.birthday,
//       available: bodyReq.available,
//       phone: bodyReq.phone,
//       profiles: bodyReq.profiles,
//       'studies.primaryStudies': bodyReq.studies.primaryStudies,
//       'studies.secondaryStudies': bodyReq.studies.secondaryStudies,
//       'studies.tertiaryStudies': bodyReq.studies.tertiaryStudies,
//       'studies.universityStudies': bodyReq.studies.universityStudies,
//       'studies.informalStudies': bodyReq.studies.informalStudies,
//       workExperience: bodyReq.workExperience,
//     },
//     { new: true },
//     (error, newPostulant) => {
//       if (error) {
//         return res.status(400).json({
//           message: error,
//         })
//       }
//       if (!newPostulant) {
//         return res.status(404).json({
//           message: 'Postulant Id does not exist',
//         })
//       }
//       return res.status(200).json({
//         message: 'Postulant updated',
//         data: newPostulant,
//       })
//     }
//   )
// }

module.exports = {
  getUser,
  getUserList,
  addUser,
  deleteUser,
  // createPostulant,
  // deletePostulant,
  // updatePostulants,
  // setProfilePostulants,
}
