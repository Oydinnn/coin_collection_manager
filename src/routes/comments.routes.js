import { Router } from 'express'
import commentController from '../controllers/comments.controller.js'
const router = Router()

router
.post('/api/comments', commentController.addComment)


export default router