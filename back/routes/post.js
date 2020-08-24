var express = require('express')
var passport = require('passport')
var router = express.Router()
var db = require('../models')


router.get('/', async function (req, res, next) {
    const posts = await db.POST.findAll({
        include: [{
            model: db.User,
            attributes: ['id', 'nickname']
        }]
    })
    res.json(posts)
})

router.post('/add', async function (req, res, next) {
    await db.POST.create({
        UserId: req.body.userid,
        star: req.body.star,
        classification: req.body.classification,
        professor: req.body.professor,
        class: req.body.class,
        title: req.body.title,
        like: 0,
        dislike: 0
    })
    res.redirect('../../Review')
})

router.delete('/:id', async function (req, res, next) {
    await db.POST.destroy({
        where: {
            id: req.body.id
        }
    })
    res.redirect('../../Review')
})


router.post('/search', async function (req, res, next) {
    const posts = await db.POST.findAll({
        where: {
            title: req.body.title
        },
        include: [{
            model: db.User,
            attributes: ['id', 'nickname']
        }]
    })
    console.log(posts)
    res.json(posts)
})

router.put('/:id', async function (req, res, next) {
    const post = await db.POST.update({
        star: req.body.star,
        classification: req.body.classification,
        professor: req.body.professor,
        class: req.body.class,
        title: req.body.title,
    },
        {
            where: { id: req.params.id }
        }
    )
    res.json(post)
})
module.exports = router