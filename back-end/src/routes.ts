import { Router } from 'express';
import LessonController from './controllers/lesson_controller';

const router = Router();
const lessonController = new LessonController();

router.get('/', (req, res) => {
  return res.json('hello Nlw');
});

router.post('/lessons', lessonController.createLesson);
router.get('/lessons', lessonController.listLessons);

export default router;
