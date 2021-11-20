import Faker from 'faker';
import { Users } from '../../entities/Users';
import { define, factory } from 'typeorm-seeding';
import { DonghangArticle } from 'src/entities/DonghangArticle';

define(DonghangArticle, (faker: typeof Faker) => {
  const title = faker.lorem.sentence();
  const content = faker.lorem.paragraph();
  const writer_id = 3;
  const view_count = faker.random.number();
  const isDeleted = false;
  const participate_status = 1;
  const expecting_user_count = 4;
  const createdAt = faker.date.recent();
  const updatedAt = faker.date.recent();
  const article_id = faker.random.number();
  const kklol_date = faker.date.recent();
  const deletedAt = faker.date.recent();

  const donghangArticle = {
    title,
    content,
    writer_id,
    view_count,
    isDeleted,
    participate_status,
    expecting_user_count,
    createdAt,
    updatedAt,
    article_id,
    kklol_date,
    deletedAt,
  };

  return donghangArticle;
});
