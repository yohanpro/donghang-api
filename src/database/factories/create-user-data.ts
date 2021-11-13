import Faker from 'faker';
import { DonghangArticle } from 'src/entities/DonghangArticle';
import { Users } from '../../entities/Users';
import { define, factory } from 'typeorm-seeding';

define(Users, (faker: typeof Faker) => {
  const id = faker.random.number();
  const nickname = faker.name.firstName();
  const email = faker.internet.email();
  const phone = faker.phone.phoneNumber();
  const activeStatus = 1;
  const verifiedUser = true;
  const userPicture = faker.image.avatar();

  const user = new Users();
  user.id = id;
  user.nickname = nickname;
  user.email = email;
  user.phone = phone;
  user.activeStatus = activeStatus;
  user.verifiedUser = verifiedUser;
  user.userPicture = userPicture;

  // const user = {
  //   id,
  //   nickname,
  //   email,
  //   phone,
  //   activeStatus,
  //   verifiedUser,
  //   userPicture,
  // };
  return user;
});

// define(DonghangArticle, (faker: typeof Faker) => {
//   const title = faker.lorem.sentence();
//   const content = faker.lorem.paragraph();
//   const writer_id = faker.random.number();
//   const view_count = faker.random.number();
//   const isDeleted = false;
//   const participate_status = 1;
//   const expecting_user_count = 4;
//   const createdAt = faker.date.recent();
//   const updatedAt = faker.date.recent();
//   const article_id = faker.random.number();
//   const kklol_date = faker.date.recent();
//   const deletedAt = faker.date.recent();

//   const donghangArticle = {
//     title,
//     content,
//     writer_id,
//     view_count,
//     isDeleted,
//     participate_status,
//     expecting_user_count,
//     createdAt,
//     updatedAt,
//     article_id,
//     kklol_date,
//     deletedAt
//   };

//   return donghangArticle;
// });
