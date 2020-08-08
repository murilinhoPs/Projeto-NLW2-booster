import { Router } from 'express';
import db from './database/connection';
import ScheduleItem from './utils/schedule_item_interface';

const router = Router();

router.get('/', (req, res) => {
  return res.json('hello Nlw');
});

router.post('/lessons', async (req, res) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  } = req.body;

  const insertedUsersId = await db(
    'users'
  ).insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  const user_id: number = insertedUsersId[0];

  const insertedLessonsIds = await db(
    'lessons'
  ).insert({
    subject,
    cost,
    user_id,
  });

  const class_id: number = insertedLessonsIds[0];

  const lessonSchedule = schedule.map(
    (item: ScheduleItem) => {
      return {
        week_day: item.week_day,
      };
    }
  );

  return res.send();
});

export default router;
