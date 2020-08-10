import { Request, Response } from 'express';
import db from '../database/connection';
import ScheduleItem from '../utils/schedule_item_interface';
import ConvertHourToMin from '../utils/convert_hour_to_min';

export default class LessonController {
  async listLessons(req: Request, res: Response) {
    return res.json('Futura lista de aulas');
  }

  async createLesson(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = req.body;

    // transaction(trx) é fazer todas as operações no db juntas
    // para que se der erro, ele cancela tudo
    const trx = await db.transaction();

    try {
      const insertedUsersId = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const user_id: number = insertedUsersId[0];

      const insertedLessonsIds = await trx('lessons').insert({
        subject,
        cost,
        user_id,
      });

      const lesson_id: number = insertedLessonsIds[0];

      const lessonSchedule: object = schedule.map(
        (item: ScheduleItem) => {
          return {
            lesson_id,
            week_day: item.week_day,
            from: ConvertHourToMin(item.from),
            to: ConvertHourToMin(item.to),
          };
        }
      );

      await trx('lesson_schedule').insert(lessonSchedule);

      // é apenas nesse momento que ele faz todas as alterações
      // se não teve nenhum erro durante as operações (insere tudo ao mesmo tempo)
      await trx.commit();

      return res.status(201).send();
    } catch (e) {
      // desfazer todas as alterações no db em caso de erro
      await trx.rollback();

      return res.status(400).json({
        error: 'Unexpected error while creating new lesson',
        message: e.message,
      });
    }
  }
}
