var express = require('express')
var router = express.Router()
var db = require('../models')

//done
router.get('/:postid', async function (req, res, next) {
  const comments = await db.comment.findAll({
      where:{
          PostId : req.params.postid
      },
    include: [{
      model: db.POST,
      attributes: ['id']
    }]
  })
  res.json(comments)
})


//done
router.post('/', async function (req, res, next) {
  await db.comment.create({
    PostId: req.body.postid,
    UserId: req.body.userid,
    content: req.body.content,
    like: 0,
    dislike: 0
  })
  res.redirect('../../Review')
})

//working
router.delete('/:id', async function (req, res, next) {
  await db.comment.destroy({
    where: {
      id: req.params.id
    }
  })
  res.redirect('../../Review')
})

router.put('/:id', async function (req, res, next) {
  const comment = await db.comment.update({
    content: req.body.content
  },
    {
      where: { id : req.params.id }
    }
  )
  res.json(comment)
})
module.exports = router